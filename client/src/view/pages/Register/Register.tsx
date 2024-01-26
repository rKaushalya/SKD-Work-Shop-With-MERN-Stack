import {Component} from "react";
import logo from "../../../image/logo.png";
import {Link} from "react-router-dom";
import axios from "axios";

interface RegisterProps {
    data: any;
}

interface RegisterState {
    email: string;
    username: string;
    password: string;
}

export class Register extends Component<RegisterProps, RegisterState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            email: '',
            username: '',
            password: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }
    render() {
        return (
            <div>
                <div className="w-full p-5 bg-[#444544] flex justify-evenly h-20 z-10">

                    <div className="flex">
                        <h1 className="text-2xl text-secondary">
                            SKD Work Shop</h1>
                        <img className="h-12 ml-1" src={logo}
                             alt=""/>
                    </div>

                    <ul className="list-none flex mt-1">
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/">Home</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/viewBooking">My
                            Booking</Link></li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link
                            to="/contact">Contact</Link></li>
                        <li className="mr-20 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link
                            to="/about">About</Link>
                        </li>
                    </ul>

                    <button className="text-[14px] text-[#e6f0e6]
                                   bg-blue-500 pl-3 pr-3 rounded-2xl
                                   hover:bg-amber-50 hover:text-tertiary">
                        <Link to="/login">Sign In</Link>
                    </button>
                </div>

                <div className="flex justify-center">
                    <div
                        className="bg-gray-100 w-[25em] h-[35em] mt-14 rounded-lg text-center shadow-lg shadow-gray-500">
                        <h1 className="text-4xl font-bold text-gray-200 bg-blue-400 pt-4 pb-4 rounded-t-lg">Sign Up</h1>

                        <img className="h-36 ml-[8em]" src={logo} alt="this is an logo.!"/>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Email</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="email" type="email"
                                            name={"email"}
                                            value={this.state.email}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Username</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="username" type="text"
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
                                            id="password" type="password"
                                            name={"password"}
                                            value={this.state.password}
                                            onChange={this.handleMessageInputOnChange}
                                        />
                                    </div>
                                </div>

                                <button
                                    className="shadow bg-blue-400 w-11/12 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" onClick={this.onRegisterBtnClick}>
                                    Register
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

    private onRegisterBtnClick = () => {
        try {
            this.api.post('/register/add', {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                console.log(jsonData);
                alert("Register Success.!");
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}