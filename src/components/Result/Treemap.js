import { useEffect, useState } from "react";
import "../../styles/Treemap.css";
import ReactApexChart from "react-apexcharts";


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export const Treemap = ({data, title}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
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

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return(
        <div className="treemap-box">
            <h1 className="treemap-box-title">
                {title}
            </h1>
            <ReactApexChart series={series} options={options} type="treemap" height={windowSize.innerHeight * (7/10)} width={windowSize.innerWidth * (7/10)} />
        </div>
    )
};