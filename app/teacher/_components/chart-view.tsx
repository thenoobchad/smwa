"use client"


import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';



const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const ChartView = () => {
  

    const series = [44, 55, 41]
    const options: ApexOptions = {
            chart: {
                type: 'donut',
            },
            labels: ['Students', 'Teachers', 'Admin',],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
    }

    return (
        <div className="donut">
            <Chart
                options={options}
                series={series}
                type="donut"
                width="380"
            />
        </div>
    );
};

