import React, {useState, useEffect} from "react"
import { fetchDailyData } from "../../components/api"
import { Line, Bar } from "react-chartjs-2"

import styles from "./Charts.module.css"

const Charts = () => {
    const [dailyData, setDailyData] = useEffect({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();
    }, [])

    const lineChart = (
        dailyData[0] 
        ? (
        <Line
            data={{
                labels: '',
                datasets: [{}, {}],
            }}
        />) : null
    );

    return (
        <h1>
            Charts
        </h1>
    )
}

export default Charts