import {Component} from "react";
import logo from "../../../image/logo.png";
import {Link, Route} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginProps {
    data: any;
}
interface LoginState {
    email: string;
}

export class LoginPage extends Component<LoginProps,LoginState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            email: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div>

                <div className="flex justify-center pt-20 pb-20">
                    <div
                        className="bg-gray-100 w-[25em] h-[35em] mt-14 rounded-lg text-center shadow-lg shadow-gray-500">
                        <h1 className="text-4xl font-bold text-gray-200 bg-blue-400 pt-4 pb-4 rounded-t-lg">Login</h1>

                        <img className="h-36 ml-[8em]" src={logo} alt="this is an logo.!"/>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Email</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"email"}
                                            value={this.state.email}
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
                                    type="button" onClick={this.checkUser}>
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="font-serif mt-2">or</p>
                        <button className="mt-2 underline"><Link to="/register">Sign up</Link></button>
                    </div>
                </div>
                <ToastContainer />
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

    private checkUser = () => {
        const notify = () => toast.info("Login Success.!", {
            position: "bottom-right"
        });

        try {
            this.api.get('/register/check/'+this.state.email)
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    if (jsonData[0].email === this.state.email){
                        notify();
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