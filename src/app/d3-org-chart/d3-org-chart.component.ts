import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { OrgChart } from 'd3-org-chart';
import  {OrgChart} from "d3-org-chart";

@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.css']
})
export class D3OrgChartComponent {
  // @ViewChild('orgChartContainer') orgChartContainer: any;

  // ngOnInit(): void {
  //   // Sample data for the org chart
  //   const data = {
  //     name: 'CEO',
  //     children: [
  //       { name: 'Manager 1' },
  //       { name: 'Manager 2' },
  //       { name: 'Manager 3' },
  //     ],
  //   };

  //   // Create an instance of OrgChart and render the org chart
  //   const orgChart: any = new OrgChart(this.orgChartContainer.nativeElement, data);
  //   orgChart.draw();
  // }

  @ViewChild("chartContainer") chartContainer: any;
  @Input() data: any[]= [];
  @Input() chart1: any;
  chart: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return; 
    }
    if (!this.chart) {
      return; 
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(500)
      .initialZoom(0.4)
      .onNodeClick((d: any) => console.log(d + " node clicked"))
      .render();
  }

  handleButtonClick(posotion: any){
    this.chart1.layout(posotion).render().fit()
  }
}
