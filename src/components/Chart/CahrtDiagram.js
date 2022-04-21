import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartDiagram({ chartData }) {


    const [data, setData] = useState([])

    useEffect(() => {
        if (Object.keys(chartData).length > 0) {
            let array = []
            let startOffset = 5
            let numberOfElements = parseInt(chartData.chart.length - startOffset)
            array = chartData.chart.splice(startOffset, numberOfElements).map(element => {
                return {
                    price: element.price,
                    time: new Date(element.created_at).toLocaleTimeString()
                }
            })

            setData(array)
        }
    }, [chartData])

    const render = (
        <>
            <div style={{
                display : "-ms-flexbox",
                textAlign : "center"
            }}>
                {/* <ResponsiveContainer  > */}
                <LineChart data={data}
                    width={620} height={270}
                    margin={{ top: 10, right: 0, left: 0, bottom: 5 }} >
                    <CartesianGrid strokeDasharray={"3 3"} />
                    <XAxis dataKey={"time"} />
                    <YAxis dataKey={"price"} />
                    <Tooltip />
                    <Legend />
                    <Line type={"monotone"} dataKey={"price"} stroke="#8884d8" />
                    <Line type={"monotone"} dataKey={"time"} stroke="#82ca9d" />
                </LineChart>
                {/* </ResponsiveContainer> */}
            </div>
        </>
    )

    if(Object.keys(chartData).length > 0){
        return render
    }
}