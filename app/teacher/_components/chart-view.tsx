"use client"


import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';



const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const ChartView = () => {
  

    const series = [
        {
            name: "Registrations",
            data: [30, 10, 5, 7, 7, 9, 5, 9, 6, 9, 10, 5 ]
        }
    ]

    const options: ApexOptions = {
            chart: {
                type: 'bar',
            },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
      
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
        <div className="w-full bg-white p-1 border border-zinc-200">
            <Chart
                options={options}
                series={series}
                type="bar"
                width="100%"
                height="250px"
            />
        </div>
    );
};

