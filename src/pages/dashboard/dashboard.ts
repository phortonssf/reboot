import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';


/**
 * Generated class for the DashboardPage page. 
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild('canvas') canvas;
  chart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: ["Career", "Finance", "Personal \n Growth", "Health", "Family", "Relationships", "Social life", "Attitude"],
        datasets: [
          {
            backgroundColor: ["rgba(0,0,255, .6)", "rgba(255,0,0, .6)", "rgba(128,0,128, .6)", "rgba(0,128,0, .6)", "rgba(255,165,0, .6)", "rgba(0,128,128, .6)", "rgba(255,0,255, .6)", "rgba(0,255,0, .6)"],
            borderColor: "black",
            data: [10, 0, 5, 2, 2, 5, 8, 1]
          }
        ]
      },

      options: {
        scales: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10
          },
        },
        layout: {
          padding: {
            top: 55,
            bottom: 55
          }
        },
        legend: {
          display: false
        },
        plugins: {
          datalabels: {
            textAlign: 'center',
            anchor: 'start',
            align: 'end',
            offset: function (context) {
              let chart = context.chart.width;
              return chart / 3.6 - 55;
            },
            backgroundColor: function (context) {
              return ["rgba(0,0,255, .2)", "rgba(255,0,0, .2)", "rgba(128,0,128, .2)", "rgba(0,128,0, .2)", "rgba(255,165,0, .2)", "rgba(0,128,128, .2)", "rgba(255,0,255, .2)", "rgba(0,255,0, .2)"];
            },
            borderColor: 'black',
            rotation: function (context) { if (context.dataIndex === 0 || context.dataIndex === 1 || context.dataIndex === 6 || context.dataIndex === 7) { return 45 / 2 + (45 * context.dataIndex) } else { return 45 / 2 + (45 * context.dataIndex) + 180 } },
            borderRadius: 5,
            borderWidth: 0,
            color: 'black',
            font: function (context) {
              var width = context.chart.width;
              var size = Math.round(width / 60);
              return {
                size: size,
                weight: 600,
                font: 'Lato'
              };
            },
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex] + ' ' + context.chart.data.datasets[0].data[context.dataIndex];
            }
          }
        }
      }
    });
  //This code down below is to fix a bug where I could not modify the scale in the options
    //key in the above code (It threw a typescript error even though it worked)
    this.chart.config.options.scale.ticks.beginAtZero = true;
    this.chart.config.options.scale.ticks.min = 0;
    this.chart.config.options.scale.ticks.max = 10;
    this.chart.config.options.scale.ticks.stepSize = 1;
    this.chart.update();
  }

}
