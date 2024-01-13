import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="h-lvh pt-20 flex justify-evenly">

                <div className="h-vh w-1/3">
                    <h1 className="text-5xl font-serif ml-8 mt-52 text-gray-800">Contact us</h1>
                    <p className="font-[13px] text-gray-800 ml-8 mt-10 font-serif">Need to get in touch with us? Either
                        fill out the form with your inquiry or
                        find the <a className="text-blue-800 underline" href="">document email </a>you'd like to
                        contact below.</p>
                </div>

                <form className="ml-3 border-2 h-96 mt-32 rounded shadow-lg shadow-gray-500">
                    <div className="w-11/12 ml-7">
                        <div className="flex mt-5 mb-3">

                            <div className="">
                                <label className="text-xs">First Name</label>
                                <input
                                    className="bg-gray-200 appearance-none rounded w-11/12
                                            focus:outline-gray-400 text-[12px] p-2"
                                    id="inline-full-name" type="text"/>
                            </div>


                            <div className="">
                                <label className="text-xs">Last Name</label>
                                <input
                                    className="bg-gray-200 appearance-none rounded w-11/12
                                            focus:outline-gray-400 text-[12px] p-2"
                                    id="inline-password" type="text"/>
                            </div>

                        </div>

                        <div className="mb-3">
                            <label className="text-xs mr-5">Email</label>
                            <input
                                className="bg-gray-200 appearance-none rounded w-11/12
                                           focus:outline-gray-400 text-[12px] p-2"
                                id="inline-full-name" type="email"/>
                        </div>

                        <div className="mb-5">
                            <label className="text-xs">Message</label>
                            <input
                                className="bg-gray-200 appearance-none rounded w-11/12
                                           focus:outline-gray-400 text-[12px] pb-12"
                                id="inline-full-name" type="text"/>
                        </div>

                        <div className="md:flex md:items-center">

                            <button
                                className="shadow bg-blue-500 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[14px]"
                                type="button">
                                Send Message
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}