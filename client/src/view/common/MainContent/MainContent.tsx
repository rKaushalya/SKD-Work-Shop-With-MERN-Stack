import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {Aboutus} from "../../pages/Aboutus/Aboutus";
import {Contact} from "../../pages/Contact/Contact";
import {ViewBooking} from "../../pages/ViewBooking/ViewBooking";
import {AddBooking} from "../../pages/AddBooking/AddBooking";
import {Service} from "../../pages/Service/Service";

export class MainContent extends Component {
    render() {
        return (
            <div className="h-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={Aboutus}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/viewBooking" Component={ViewBooking}></Route>
                    <Route path="/addBooking" Component={AddBooking}></Route>
                    <Route path="/service" Component={Service}></Route>
                </Routes>
            </div>
        );
    }
}