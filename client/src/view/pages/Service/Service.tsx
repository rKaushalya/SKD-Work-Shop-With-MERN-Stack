import {Component} from "react";
import service from '../../../image/fullServive.jpg';

export class Service extends Component {
    render() {
        return (
            <div className="pt-20 h-lvh">
                <div className="flex justify-evenly text-center mt-10 border-b-2 pb-10">
                    <div className="">
                        <h1 className="font-bold text-2xl font-serif">Full Service</h1>
                        <img className="h-52 rounded mt-5" src={service} alt="this is an image.!"/>
                    </div>

                    <div className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-blue-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <p className="text-[12px] ">A full-service for a vehicle is a comprehensive check that includes
                                up to 50 or more components, systems checks, and adjustments. It involves an engine oil
                                change and/or filter replacement, checking lights, tires, exhaust, brakes, steering, hydraulic
                                fluid, coolant levels, cooling system, suspension, steering alignment, and battery condition.
                                </p>
                            <button className="p-2 w-1/4 border-2 border-blue-300 text-[12px] text-secondary rounded-lg mt-3">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}