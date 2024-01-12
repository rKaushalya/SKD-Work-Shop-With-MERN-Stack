import {Component} from "react";
import service from "../../../image/service2.jpg";
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div className="pt-20 mb-52">
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
                        <button
                            className="bg-red-800 p-3 m-1 font-bold text-white font-serif text-[14px] rounded-lg hover:scale-110 hover:shadow-lg">
                            <Link to="/addbooking">Add Booking</Link></button>
                        <button
                            className="bg-blue-800 p-3 m-1 font-bold text-white font-serif text-[14px] rounded-lg hover:scale-110 hover:shadow-lg">
                            <Link to="/service">Our Services</Link></button>
                    </div>
                </div>

                <div className="text-center absolute flex justify-center w-full mt-[-60px]">
                    <div className="h-64 w-72 bg-blue-800">
                        <h1 className="font-bold text-amber-50 mt-5 text-[18px]">Contact Details</h1>
                    </div>

                    <div className="h-64 w-72 bg-red-800">
                        <h1 className="font-bold text-amber-50 mt-5 text-[18px]">Make an appointment</h1>

                        <form className="w-10/12 ml-3">
                            <div className="flex p-1 mt-5">

                                <div className="">
                                    <input
                                        className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1 ml-2"
                                        id="inline-full-name" type="text" placeholder="Your Full Name"/>
                                </div>


                                <div className="">
                                    <input
                                        className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1 ml-3"
                                        id="inline-password" type="text" placeholder="Email"/>
                                </div>

                            </div>

                            <div className="flex p-1">

                                <div className="">
                                    <input
                                        className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1 ml-2"
                                        id="inline-full-name" type="text" placeholder="Your Phone Number"/>
                                </div>


                                <div className="">
                                    <input
                                        className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1 ml-3"
                                        id="inline-password" type="text" placeholder="City"/>
                                </div>

                            </div>


                            <div className="mb-2">
                                <input
                                    className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] ml-3 pb-6"
                                    id="inline-full-name" type="text" placeholder="Message"/>
                            </div>


                            <div className="md:flex md:items-center">

                                <button
                                    className="shadow bg-white hover:bg-purple-400 font-bold py-2 px-4 rounded text-[14px]
                                               w-full ml-3"
                                    type="button">
                                    Send Message
                                </button>

                            </div>
                        </form>

                    </div>

                    <div className="h-64 w-72 bg-blue-800">
                        <h1 className="font-bold text-amber-50 mt-5 text-[18px]">Maintenance Service</h1>
                        <div className="text-start w-10/12 ml-6 mt-5">
                            <p className="text-[12px] text-amber-50 mb-3">
                                Regular car maintenance is crucial for ensuring the longevity and safety of your
                                vehicle.
                                Neglecting routine maintenance tasks such as oil changes, tire rotations, and brake
                                inspections
                            </p>
                            <button
                                className="shadow bg-white hover:bg-purple-400 font-bold py-2 px-4 rounded text-[12px]"
                                type="button">
                                More Service
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}