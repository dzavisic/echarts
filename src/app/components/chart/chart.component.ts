import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import {EChartsOption, SeriesOption} from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  types: any = [
    'funnel',
    'pie',
    'gauge',
    'bar',
    'pictorialBar',
    'effectScatter',
    'line',
    'scatter',
    'tree',
  ];

  constructor() {
  }

  ngOnInit(): void {
    const chartDom = document.getElementById('line') as HTMLElement;

    const chart = echarts.init(chartDom);

    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series:
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          universalTransition: {
            enabled: true,
            delay: function (idx, count) {
              return Math.random() * 1000;
            }
          },
          type: 'line'
        },
    };


    chart.setOption(option);

    let i = 0;

    setInterval(() => {
      const series = option.series as SeriesOption;
      i = (i === this.types.length - 1) ? 0 : i + 1;
      series.type = this.types[i];

      chart.setOption(option);
    }, 2000);

    window.onresize = function () {
      chart.resize();
    };
  }

}
