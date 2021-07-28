import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../utils/AuthUtils'
import ApexCharts from "apexcharts";

const Visualization = () => {

    const [ingredients, setIngredients] = useState("")
    const user = getUserInfo()

    // const data = {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [{
    //         label: '# of Votes',
    //         data: [1,2],
    //         borderWidth: 1
    //     }]
    // }

    const getChart = (data, category, type) => {
        var options = {
            chart: {
                type: "bar",

                height: "500px",
            },
            fill: {
                colors: "#F44336",
            },
            series: [
                {
                    name: "Order",
                    data: data,
                },
            ],
            title: {
                text: type,
                align: "center",
                margin: 20,
                style: {
                    fontSize: "24px",
                    fontWeight: "bold",

                    color: "#263238",
                },
            },
            xaxis: {
                categories: category

            },
        };
        const element = document.getElementById("chartbar");

        if (!element) {
            return;
        }

        var chart = new ApexCharts(element, options);

        chart.render();
    };
    const getChart2 = (data, category, type) => {
        var options = {
            chart: {
                type: "bar",

                height: "500px",
            },
            fill: {
                colors: "rgba(0, 227, 150, 0.85)",
            },
            series: [
                {
                    name: "Order",
                    data: data,
                },
            ],
            title: {
                text: type,
                align: "center",
                margin: 20,
                style: {
                    fontSize: "24px",
                    fontWeight: "bold",

                    color: "#263238",
                },
            },
            xaxis: {
                categories: category

            },
        };
        const element = document.getElementById("chartbar2");

        if (!element) {
            return;
        }

        var chart = new ApexCharts(element, options);

        chart.render();
    };
    const getChart3 = (data, category, type) => {
        var options = {
            chart: {
                type: "bar",

                height: "500px",
            },
            fill: {
                colors: "rgba(0, 143, 251, 0.85)",
            },
            series: [
                {
                    name: "Order",
                    data: data,
                },
            ],
            title: {
                text: type,
                align: "center",
                margin: 20,
                style: {
                    fontSize: "24px",
                    fontWeight: "bold",

                    color: "#263238",
                },
            },
            xaxis: {
                categories: category

            },
        };
        const element = document.getElementById("chartbar3");

        if (!element) {
            return;
        }

        var chart = new ApexCharts(element, options);

        chart.render();
    };


    useEffect(() => {
        getChart([5, 6, 1, 10, 2], ["9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"], "Total number of Orders by Time")
        getChart2([2, 3, 1], ["Mac D", "Dominoz", "Lapinoz", "Tim Horton"], "Total number of Orders by Restaurants")
        getChart3([1, 2, 1], ["Frappucino", "Pizza", "Pasta"], "Total number of Orders by Item")
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>

            <div className="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                    Visualization
                </h1>

                <div className="flex">

                    <div className="w-1/3">
                        <div id="chartbar" >
                            {/* <Bar
                            data={data}
                            width={100}
                            height={50}
                            options={{ maintainAspectRatio: false }}
                        /> */}
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div id="chartbar2" >
                            {/* <Bar
                            data={data}
                            width={100}
                            height={50}
                            options={{ maintainAspectRatio: false }}
                        /> */}
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div id="chartbar3" >
                            {/* <Bar
                            data={data}
                            width={100}
                            height={50}
                            options={{ maintainAspectRatio: false }}
                        /> */}
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Visualization