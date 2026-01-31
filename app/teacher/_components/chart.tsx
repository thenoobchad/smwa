"use client"

import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


interface DonutState {
    series: number[];
    options: ApexOptions;
}

export const ChartView = () => {
  
    const [chartData] = useState<DonutState>({
        series: [44, 55, 41],
        options: {
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
        },
    });

    return (
        <div className="donut">
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="380"
            />
        </div>
    );
};

