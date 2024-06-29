import {Component} from "react";
import {PieChart} from "@mui/x-charts";
import axios from "axios";

export class DashBoard extends Component {
    private api: any;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            data: [],
            data2: []
        }
    }

    componentDidMount() {
        this.fetchData();
        this.fetchData2();
    }

    fetchData = async () => {
        try {
            this.api.get('/booking/findPendingBooking')
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

    fetchData2 = async () => {
        try {
            this.api.get('/booking/findAcceptedBooking')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    this.setState({data2: jsonData});
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
        //@ts-ignore
        const {data2} = this.state;
        let pending = 0;
        let accepted = 0;

        return (
            <>
                {
                    data.map((booking: any) => (
                        pending++
                    ))
                }
                {
                    data2.map((booking: any) => (
                        accepted++
                    ))
                }
                <div className="flex justify-evenly pt-24 text-center mt-0 border-b-2 pb-10">
                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-red-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <h3 className="mt-14 font-serif text-2xl">Accepted Booking</h3>
                            <h1 className="mt-5 font-serif text-4xl">{accepted}</h1>
                        </div>
                    </div>

                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-red-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <h3 className="mt-14 font-serif text-2xl">Pending Booking</h3>
                            <h1 className="mt-5 font-serif text-4xl">{pending}</h1>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly pt-10 mt-0 border-b-2 pb-10">
                    <PieChart
                    series={[
                    {
                        data: [
                            { id: 0, value: accepted, label: 'Accepted' },
                            { id: 1, value: pending, label: 'Pending' },
                        ],
                    },
                ]}
                    width={500}
                    height={300}
                    />
                </div>
            </>
        );
    }
}