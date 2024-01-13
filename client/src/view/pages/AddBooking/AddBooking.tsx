import {Component} from "react";
import book from '../../../image/book2.jpg'

export class AddBooking extends Component {
    render() {
        return (
            <div className="h-lvh pt-20 text-center">
                <h1 className="text-3xl mt-10">Add Booking</h1>
                <div className="flex justify-evenly text-start">
                    <form className="w-4/12 border-2 h-96 mt-16 rounded shadow-lg shadow-gray-500">
                        <div className="w-10/12 mt-7 ml-10">
                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                            leading-tight focus:outline-none"
                                    type="text" placeholder="Your Full Name" aria-label="Full name"/>
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                            leading-tight focus:outline-none"
                                    type="text" placeholder="Email Address" aria-label="Full name"/>
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                            leading-tight focus:outline-none"
                                    type="text" placeholder="Phone Number" aria-label="Full name"/>
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                            leading-tight focus:outline-none"
                                    type="text" placeholder="City" aria-label="Full name"/>
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-6">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                            leading-tight focus:outline-none"
                                    type="text" placeholder="Message" aria-label="Full name"/>
                            </div>

                            <button
                                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700
                        text-sm border-4 text-white py-1 px-2 rounded"
                                type="button">
                                Confirm Booking
                            </button>
                        </div>
                    </form>

                    <div className="mt-16">
                        <img className="h-96" src={book} alt="this is an image.!"/>
                    </div>
                </div>
            </div>
        );
    }
}