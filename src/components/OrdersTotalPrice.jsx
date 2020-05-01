import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux';


function OrdersTotalPrice(){

    const DaywiseOrders= useSelector(state=>state.DaywiseOrders)
    const PricePerDay= DaywiseOrders.map(e=>e[1][1])
    const DaysOfOrders= DaywiseOrders.map(e=>e[0])

    // line chart implementation
    const lineChart = {
        series: [{
            name: "High - 2013",
            data: PricePerDay
          }],
        options: {
          chart: {
            height: 150,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#f25042'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Total Order Prices per Day',
            align: 'Center'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            },
          },
          markers: {
            size: 5
          },
          xaxis: {
            categories: DaysOfOrders,
            title: {
              text: 'Days'
            }
          },
          yaxis: {
            title: {
              text: '₹ Rupees'
            }
          }
        },
      
      };

    return(
        <div>
            <ReactApexChart options={lineChart.options} series={lineChart.series} type="line" height={350} />
        </div>
    )
}

export default OrdersTotalPrice