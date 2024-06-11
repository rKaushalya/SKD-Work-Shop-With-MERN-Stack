import {Component} from "react";
import logo from "../../../image/logo.png";
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className="fixed w-full p-5 bg-[#444544] flex justify-evenly h-20 z-10">

                <div className="flex">
                    <h1 className="text-2xl text-secondary">
                        SKD Work Shop</h1>
                    <img className="h-12 ml-1" src={logo}
                         alt="This is logo."/>
                </div>

                <ul className="list-none flex mt-1">
                    <li className="mr-5 text-[16px] text-[#e6f0e6] hover:text-secondary"><Link to="/home">DashBoard</Link></li>
                    <li className="mr-5 text-[16px] text-[#e6f0e6] hover:text-secondary"><Link to="/allbooking">All Booking</Link></li>
                </ul>

            </div>
        );
    }
}