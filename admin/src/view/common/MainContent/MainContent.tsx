import {Component} from "react";
import axios from "axios";

export class MainContent extends Component {

    private api: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            this.api.get('/booking/all')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    this.setState({data: jsonData});
                }).catch((error: any) => {
                console.error('Axios Error:', error)
            });
        } catch (e) {
            console.log("Error fetching Data.!");
        }
    }
    render() {

        //@ts-ignore
        const {data} = this.state;

        return (
            <div className="pt-20">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Vehicle Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Message
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Booking Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit Booking Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            data.map((booking: any) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {booking.vehicleName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {booking.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.city}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.message}
                                    </td>
                                    <td className="px-6 py-4">
                                        {this.formatTimestamp(booking.date)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.status}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="mr-3 border-2 p-2 bg-green-900 rounded-lg"
                                                onClick={() => this.handleButtonClick('Accept', booking.email)}>Accept</button>
                                        <button className="border-2 p-2 bg-red-900 rounded-lg"
                                                onClick={() => this.handleButtonClick('Decline', booking.email)}>Decline</button>
                                    </td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    handleButtonClick = async (action: string, email: string) => {
        try {
            this.api.get('/booking/find/'+email)
                .then((res: { data: any }) => {
                    const jsonData = res.data;

                    const clickedAction = action; // 'Accept' or 'Decline'
                    console.log(`${clickedAction} button clicked for email:`, email);

                    if (clickedAction === "Accept"){
                        jsonData[0].status = "Accept";
                    }else {
                        jsonData[0].status = "Decline";
                    }

                    console.log(jsonData[0].status);

                    this.api.put('booking/put/'+email,{
                        name: jsonData[0].name,
                        email: email,
                        number: jsonData[0].number,
                        city: jsonData[0].city,
                        message: jsonData[0].message,
                        date: jsonData[0].date,
                        status: jsonData[0].status,
                        vehicleName: jsonData[0].vehicleName
                    }).then((res: { data: any }) => {
                        const update = res.data;
                        console.log(update);
                        this.fetchData();
                    });

                }).catch((error: any) => {
                console.error('Axios Error:', error)
            });
        } catch (e) {
            console.log("Error fetching Data.!");
        }
    };

    formatTimestamp(inputTimestamp: string): string {
        // Create a Date object from the input timestamp
        const date = new Date(inputTimestamp);

        // Extract the date components
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = date.getUTCDate().toString().padStart(2, '0');

        // Create the formatted date string
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }
}