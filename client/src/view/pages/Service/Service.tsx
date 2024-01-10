import {Component} from "react";
import service from "../../../image/service2.jpg";

export class Service extends Component {
    render() {
        return (
            <div className="pt-20 ">
                <div className="relative text-center">
                    <img className="blur-sm h-[40em] w-full" src={service} alt="Image"/>
                    <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                    text-white p-2 text-4xl font-bold rounded-2xl">
                        Looking for The right<br/> Vehicle repair service?</h1>
                    <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                    text-white pt-40">
                        We are here to help you for any kind of error in your vehicle.<br/>
                        we are providing valuable service for you.!</p>
                    <div className="flex absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button className="bg-red-800 p-3 m-1 font-bold text-white font-serif text-[14px] rounded-lg">Click for more</button>
                        <button className="bg-blue-800 p-3 m-1 font-bold text-white font-serif text-[14px] rounded-lg">About Us</button>
                    </div>
                </div>

            </div>
        );
    }
}