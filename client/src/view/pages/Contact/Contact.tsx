import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="h-lvh pt-20 flex justify-evenly">

                <div className="h-vh bg-secondary w-1/3">
                    <h1>Contact us</h1>
                </div>

                <form className="ml-3 border-2 h-96">
                    <div className="flex mt-5">

                        <div className="">
                            <label className="text-xs">First Name</label>
                            <input
                                className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1"
                                id="inline-full-name" type="text"/>
                        </div>


                        <div className="">
                            <label className="text-xs">Last Name</label>
                            <input
                                className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1"
                                id="inline-password" type="text"/>
                        </div>

                    </div>


                        <div className="">
                            <label className="text-xs">Email</label>
                            <input
                                className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] p-1"
                                id="inline-full-name" type="text"/>
                        </div>




                    <div className="mb-2">
                        <label className="text-xs">Message</label>
                        <input
                            className="bg-red-900 appearance-none border-2 border-gray-700 rounded w-full
                                            text-white focus:outline-blue-500 text-[12px] pb-6"
                            id="inline-full-name" type="text"/>
                    </div>


                    <div className="md:flex md:items-center">

                        <button
                            className="shadow bg-white hover:bg-purple-400 font-bold py-2 px-4 rounded text-[14px]
                                               w-full"
                            type="button">
                            Send Message
                        </button>

                    </div>
                </form>
            </div>
        );
    }
}