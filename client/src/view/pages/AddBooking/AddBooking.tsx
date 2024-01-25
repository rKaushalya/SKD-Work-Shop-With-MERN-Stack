import {Component} from "react";
import book from '../../../image/book2.jpg'
import axios from "axios";

interface BookingProps {
    data : any;
}

interface BookingState {
    name: string;
    email: string;
    number: string;
    city: string;
    message: string;
    date: string;
    status: string;
    vehicleName: string;
}

export class AddBooking extends Component<BookingProps, BookingState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            name: '',
            email: '',
            number: '',
            city: '',
            message: '',
            date: '',
            status: 'Pending',
            vehicleName: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div className="h-lvh pt-20 text-center">
                <h1 className="text-3xl mt-10">Add Booking</h1>
                <div className="flex justify-evenly text-start">
                    <form className="w-4/12 border-2 h-[32em] mt-10 rounded shadow-lg shadow-gray-500">
                        <div className="w-10/12 mt-7 ml-10">
                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="Your Full Name" aria-label="Full name"
                                    name={"name"}
                                    value={this.state.name}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="Email Address" aria-label="Full name"
                                    name={"email"}
                                    value={this.state.email}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="Vehicle Name" aria-label="Full name"
                                    name={"vehicleName"}
                                    value={this.state.vehicleName}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="Phone Number" aria-label="Full name"
                                    name={"number"}
                                    value={this.state.number}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-3">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="City" aria-label="Full name"
                                    name={"city"}
                                    value={this.state.city}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-6">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="text" placeholder="Message" aria-label="Full name"
                                    name={"message"}
                                    value={this.state.message}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <div className="flex items-center border-b border-blue-500 py-2 mb-6">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2
                                    leading-tight focus:outline-none"
                                    type="date" placeholder="Date" aria-label="Full name"
                                    name={"date"}
                                    value={this.state.date}
                                    onChange={this.handleMessageInputOnChange}
                                />
                            </div>

                            <button
                                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700
                                text-sm border-4 text-white py-1 px-2 rounded"
                                type="button"
                                onClick={this.onSendBtnClick}>
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

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('/addBooking/add', {
                name: this.state.name,
                email: this.state.email,
                number: this.state.number,
                city: this.state.city,
                message: this.state.message,
                date: this.state.date,
                status: this.state.status,
                vehicleName: this.state.vehicleName
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                console.log(jsonData);
                alert("Booking Added.!");
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}