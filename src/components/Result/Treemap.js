import { useElementOnSreen } from "../../hooks/elementOnScreen";
import { useEffect, useState } from "react";
import "../../styles/Treemap.css";
import ReactApexChart from "react-apexcharts";

export const Treemap = ({data, title}) => {
    const [containerRef, visible] = useElementOnSreen();
    const series = [{data : data}];
    const options = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar : {
                show : false
            }
        },
        colors: [
            "#1DB954"
        ],
    };

    return(
        <div ref={containerRef} className={`treemap-box ${visible ? "treemap-reveal" : "treemap-hidden"}`}>
            <h1 className="treemap-box-title">
                {title}
            </h1>
            <ReactApexChart series={series} options={options} type="treemap" height={500} width={1000} />
        </div>
    )
};