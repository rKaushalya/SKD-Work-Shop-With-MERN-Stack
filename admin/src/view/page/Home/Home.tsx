import {Component} from "react";
import {NavBar} from "../../common/NavBar/NavBar";
import {DashBoard} from "../DashBoard/DashBoard";

export class Home extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <DashBoard/>
            </>
        );
    }
}