import { useState, useEffect } from "react";
import { useElementOnSreen } from "../../hooks/elementOnScreen";
import "../../styles/Treemap.css";
import ReactApexChart from "react-apexcharts";

export const Treemap = ({data, title}) => {
    const [containerRef, visible] = useElementOnSreen();

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <ReactApexChart 
                series={series} 
                options={options} 
                type="treemap" 
                height={
                    (
                        width >= 1200 ? 
                        500 
                        : 
                        (
                            width >= 650 ? 
                            800
                            :
                            1000
                        )
                    )
                } 
                width={
                    (
                        width >= 1200 ?
                        1000
                        : 
                        (
                            width >= 650 ? 
                            500
                            :
                            300
                        )
                    )
                } />
        </div>
    )
};