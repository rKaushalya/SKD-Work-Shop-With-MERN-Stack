import {Component} from "react";
import {Link} from "react-router-dom";
import image1 from "../../../image/image1.jpg";
import image2 from "../../../image/image2.jpg";

export class Service extends Component {
    render() {
        return (
            <div className="pt-20">
                <div className="flex justify-evenly">
                    <div>
                        <h1 className="text-4xl font-bold text-red-600 mt-5 border-b-2 pb-2 mb-2">Book Car Repairs</h1>
                        <p className="font-serif mb-3">Discover the ideal haven for your creative pursuits at our
                            workshop-centric garage
                            space.<br/>
                            Our meticulously organized garage provides the perfect setting for hands-on projects,<br/>
                            whether you're a hobbyist, DIY enthusiast, or a professional seeking a dedicated
                            workspace.<br/>
                            Equipped with essential tools, ample room for your projects, and a welcoming
                            environment,<br/>
                            our garage invites you to explore your passions and bring your ideas to life.<br/>
                            Join us in a space designed to fuel innovation and craftsmanship."
                        </p>

                        <button className="bg-gradient-to-l from-red-400 to-blue-200 p-2 rounded-2xl m-5 font-serif
                                           hover:scale-110 hover:shadow-lg">
                            Click for more
                        </button>
                        <button className="bg-gradient-to-l from-red-400 to-blue-200 p-2 rounded-2xl m-5 font-serif
                                           hover:scale-110 hover:shadow-lg">
                            <Link to="/about">About Us</Link></button>
                    </div>

                    <div>
                        <img className="h-72 mt-5 rounded-2xl" src={image1} alt="This is an image"/>
                    </div>
                </div>

                <div className="max-w-full flex justify-center">
                    <img className="w-10/12 rounded-2xl mb-3" src={image2} alt="This is an image"/>
                </div>

            </div>
        );
    }
}