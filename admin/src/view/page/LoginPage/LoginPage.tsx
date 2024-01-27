import {Component} from "react";
import logo from "../../../image/logo.png";
import axios from "axios";

interface LoginProps {
    data: any;
}

interface LoginState {
    username: string;
}

export class LoginPage extends Component<LoginProps,LoginState> {

    private api : any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            username: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="flex justify-center pt-10 pb-20">
                    <div
                        className="bg-gray-100 w-[25em] h-[35em] mt-14 rounded-lg text-center border-2">
                        <h1 className="text-4xl font-bold text-gray-200 bg-blue-400 pt-4 pb-4 rounded-t-lg">Login</h1>

                        <img className="h-36 ml-[8em]" src={logo} alt="this is an logo.!"/>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Username</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>


                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Password</label>
                                        <input
                                            className="appearance-none rounded w-11/12
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-password" type="password"/>
                                    </div>
                                </div>

                                <button
                                    className="shadow bg-blue-400 w-11/12 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.checkAdmin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private checkAdmin = () => {

        try {
            this.api.get('/admin/check/'+this.state.username)
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    if (jsonData[0].username === this.state.username){
                        window.location.href = '/allbooking';
                    }else {
                        alert('Wrong Email or password.!');
                    }
                }).catch((error: any) => {
                alert('Wrong Email or password.!');
            });
        }catch (e) {
            console.log("Error fetching Data.!",e);
        }
    }
}