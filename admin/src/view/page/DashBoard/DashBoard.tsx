import {Component} from "react";
import {PieChart} from "@mui/x-charts";

export class DashBoard extends Component {
    render() {
        return (
            <>
                <div className="flex justify-evenly pt-24 text-center mt-0 border-b-2 pb-10">
                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-red-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <h3 className="mt-14 font-serif text-2xl">Accepted Booking</h3>
                            <h1 className="mt-5 font-serif text-4xl">1</h1>
                        </div>
                    </div>

                    <div
                        className="h-52 w-96 shadow-lg border-1 rounded-lg mt-10 cursor-pointer hover:shadow-2xl hover:shadow-red-300">
                        <div className="w-10/12 mt-8 ml-8">
                            <h3 className="mt-14 font-serif text-2xl">Pending Booking</h3>
                            <h1 className="mt-5 font-serif text-4xl">1</h1>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly pt-24 text-center mt-0 border-b-2 pb-10">
                    <PieChart
                    series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                    width={400}
                    height={200}
                    />
                </div>
            </>
        );
    }
}