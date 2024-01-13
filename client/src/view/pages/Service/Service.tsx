import {Component} from "react";
import service from '../../../image/fullServive.jpg';
import interior from '../../../image/intirior.jpeg';
import accident from '../../../image/accident.jpg';

export class Service extends Component {
    render() {
        return (
            <div className="pt-20">
                <div className="flex justify-evenly text-center mt-10 border-b-2 pb-10">
                    <div className="">
                        <h1 className="font-bold text-2xl font-serif text-blue-800">Full Service</h1>
                        <img className="h-52 rounded mt-5" src={service} alt="this is an image.!"/>
                    </div>

                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-blue-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <p className="text-[12px] font-serif">A full-service for a vehicle is a comprehensive check
                                that includes
                                up to 50 or more components, systems checks, and adjustments. It involves an engine oil
                                change and/or filter replacement, checking lights, tires, exhaust, brakes, steering,
                                hydraulic
                                fluid, coolant levels, cooling system, suspension, steering alignment, and battery
                                condition.
                            </p>
                            <button
                                className="p-2 w-1/4 border-2 border-blue-300 text-[12px] text-secondary rounded-lg mt-3">
                                More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly text-center mt-10 border-b-2 pb-10">
                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-red-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <p className="text-[12px] font-serif">Vehicle interior design refers to the process of developing
                                the appearance and ergonomics of a vehicle's interior, including the instrument panel, seats,
                                door trim panels, headliner, pillar trims, and more
                                1
                                . The goal is to create a comfortable, functional, and aesthetically pleasing environment for the passengers.
                            </p>
                            <button
                                className="p-2 w-1/4 border-2 border-red-300 text-[12px] text-red-400 rounded-lg mt-3">
                                More
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-2xl font-serif text-red-800">Interior Design</h1>
                        <img className="h-52 rounded mt-5" src={interior} alt="this is an image.!"/>
                    </div>
                </div>

                <div className="flex justify-evenly text-center mt-10 border-b-2 pb-10">
                    <div className="">
                        <h1 className="font-bold text-2xl font-serif text-blue-800">Accident Recovery</h1>
                        <img className="h-52 rounded mt-5" src={accident} alt="this is an image.!"/>
                    </div>

                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-blue-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <p className="text-[12px] font-serif">Vehicle accident recovery is a personalized process that may take weeks to months, involving medical treatment, rest, and gradual rehabilitation
                                . It's important to seek medical attention, follow a prescribed treatment plan, and attend follow-up appointments for effective recovery
                                . Additionally, addressing both physical and mental health aspects,
                            </p>
                            <button
                                className="p-2 w-1/4 border-2 border-blue-300 text-[12px] text-secondary rounded-lg mt-3">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}