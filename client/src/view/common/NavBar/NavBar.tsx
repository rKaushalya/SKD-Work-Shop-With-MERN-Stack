import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../image/logo.png";

export class NavBar extends Component {
    render() {
        return (
            <div className="p-5 bg-[#444544] flex justify-between h-20">

                <div className="flex">
                    <h1 className="text-2xl text-secondary">
                        SKD Work Shop</h1>
                    <img className="h-12 ml-1" src={logo}
                         alt=""/>
                </div>

                <ul className="list-none flex mt-1">
                    <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/">Home</Link></li>
                    <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/">My Booking</Link></li>
                    <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/contact">Contact</Link></li>
                    <li className="mr-20 text-[18px] text-[#e6f0e6] hover:text-secondary"><Link to="/about">About</Link></li>
                </ul>

                <button className="text-[14px] text-[#e6f0e6]
                                   bg-blue-500 pl-3 pr-3 rounded-2xl
                                   hover:bg-amber-50 hover:text-tertiary">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        );
    }
}