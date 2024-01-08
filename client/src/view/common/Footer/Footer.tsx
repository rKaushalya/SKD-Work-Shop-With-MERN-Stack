import {Component} from "react";
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div className="pt-5 bg-[#444544] text-center h-auto">

                <div className="flex justify-around">
                    <div className="text-start">
                        <h1 className="text-[#e6f0e6] text-2xl font-bold">SKD Work Shop</h1>
                        <p className="text-[#e6f0e6]">Discover the ideal haven for your creative pursuits at our workshop-centric garage
                            space.<br/>
                            Our meticulously organized garage provides the perfect setting for hands-on projects,<br/>
                            whether you're a hobbyist, DIY enthusiast, or a professional seeking a dedicated
                            workspace.<br/>
                            Equipped with essential tools, ample room for your projects, and a welcoming
                            environment,<br/>
                            our garage invites you to explore your passions and bring your ideas to life.<br/>
                            Join us in a space designed to fuel innovation and craftsmanship."


                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#e6f0e6] font-bold text-1xl">Quick Link</h1>
                        <ul className="mt-2">
                            <li className="text-[#e6f0e6]"><Link to="/">Home</Link></li>
                            <li className="text-[#e6f0e6]"><Link to="/viewBooking">My Booking</Link></li>
                            <li className="text-[#e6f0e6]"><Link to="/contact">Contact</Link></li>
                            <li className="text-[#e6f0e6]"><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[#e6f0e6] font-bold text-1xl">Address</h2>
                        <p className="text-[#e6f0e6] text-[14px]">No 24/A Galle Road, baddegama</p>
                        <h2 className="text-[#e6f0e6] font-bold text-1xl">Telephone</h2>
                        <p className="text-[#e6f0e6] text-[14px]">+94 765320187 / +94 788730420</p>
                        <h2 className="text-[#e6f0e6] font-bold text-1xl">Email</h2>
                        <p className="text-[#e6f0e6] text-[14px]">skdworkshop@gmail.com</p>
                    </div>
                </div>

                <p className="text[10px] mt-5 text-[#e6f0e6] hover:text-secondary cursor-pointer">
                    Copyright @ 2024 <span className="text-1xl text-secondary">SKD Work Shop</span></p>
            </div>
        );
    }
}