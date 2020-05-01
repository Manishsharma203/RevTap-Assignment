import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux';

function OrdersCount() {

    const DaywiseOrders= useSelector(state=>state.DaywiseOrders)
    const NumberOfOrders= DaywiseOrders.map(e=>e[1][0])
    const DaysOfOrders= DaywiseOrders.map(e=>e[0])

    console.log('DaywiseOrders',DaywiseOrders)
    console.log('NumberOfOrders',NumberOfOrders)
    // Bar chart implementation
    const chart = {
        series: [{
          name: 'Orders',
          data: NumberOfOrders
        }],
        
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'flat'
            },
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Orders per Day',
            align: 'Center'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            },
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: DaysOfOrders,
            title: {
              text: 'Days'
            }
          },
          yaxis: {
            title: {
              text: 'Number Of Orders'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " orders"
              }
            }
          }
        },
      
      };

  return (
    <div>
        <ReactApexChart options={chart.options} series={chart.series} type="bar" height={350} />  
    </div>
  );
}

export default OrdersCount;
