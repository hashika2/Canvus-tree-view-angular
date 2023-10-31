import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';
import { D3_TREE } from './tree-option';

//import { TREE_OPTION, TREE_DATA_1, TREE_DATA_2 } from './tree-option';

declare const require: any;
 var custOrient:any='LR';

const TREE_OPTION: any = {
  tooltip: {
    show: true,
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [
    {
      name: 'tree1',
      icon: 'rectangle'
    }],
    //borderColor: '#c23531'
  },
  
  series: [
    {
     
      orient:custOrient,
      type: 'tree',
      name: 'tree1',
      data: [],
      top: '5%',
      left: '7%',
      bottom: '2%',
      right: '60%',

      symbolSize: 10,
      symbol:'emptyCircle',
      lineStyle: {
          color: '#ffcd00',
          opacity:1,
      },
      label: {
        normal: {  

           
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',

              
          fontSize: 16, 
          fontFamily: 'Roboto',      
          color:'#ffffff',

          opacity:1,
          borderRadius:1,
          borderWidth: 15,
          gapWidth: 5,
          borderColor: '#ffcd00',          
          backgroundColor: '#ffcd00',
          
          
        }   
        
      },
      emphasis: {
          label: {
              show: true
          }
      },
       

      leaves: {
        label: {
          normal: {
            
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',

            fontSize: 16, 
            fontFamily: 'Roboto',
            color:'#ffffff',

            borderWidth: 15,
            gapWidth: 3,
            opacity:1,
            
            // backgroundColor: '#1dade2',
            // borderRadius:1,
            // borderColor: '#1dade2',
            
          }
        },
        lineStyle: {
          color: '#95cb03',
          opacity:1
      }
      },

      expandAndCollapse: true,

      animationDuration: 550,
      animationDurationUpdate: 750

    }
  ]
};

export const TREE_DATA_2 = {
  itemStyle:{color:'#ffcd00',borderColor:'#ffcd00'},
  'name': 'Tranformer',
  tooltip: {
    show: true,
    trigger: 'item', // Show tooltip when the pointer is over an item
    formatter: function (params:any) {
      const node = params.data;
      return `Name: ${node.name}\n\nDetails: tranformer`;
    }
  },
  icon: "https://img.icons8.com/material/24/000000/new-job--v1.png",
  adminRoles: ["Admin Role 01", "Admin Role 02"],
  applications: ["Application 02"],
  'children': [
    {
      'name': 'Isolater box 1',lineStyle: {color: '#95cb03',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#95cb03',borderColor:'#95cb03',},itemStyle:{color:'#95cb03',borderColor:'#95cb03',},
      'children': [
        { 'name': 'AC Combiner box 1',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},
         'children': [
          { 'name': 'AC Combiner box 4',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833,
          'children': [
            { 'name': 'Inverter 1',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833,
            'children': [
              { 'name': 'String 1',lineStyle: {color: '#024a9a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833,}
            ]
          }
          ]
        },
        ] },
        { 'name': 'AC Combiner box 2',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},  
        'children': [
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 },
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 },
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 }
        ] },
        { 'name': 'AC Combiner box 3',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},
        'children': [
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 },
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 },
          { 'name': 'Data Lake Mart',lineStyle: {color: '#024a7a',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#024a7a',borderColor:'#024a7a'},itemStyle:{color:'#024a7a',borderColor:'#024a7a'}, 'value': 8833 }
        ] },
        
      ]
    },
    {
      'name': 'Isolater box 2',lineStyle: {color: '#95cb03',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'right',backgroundColor: '#95cb03',borderColor:'#95cb03'},itemStyle:{color:'#95cb03',borderColor:'#95cb03'},
      'children': [
        { 'name': 'Business Functions',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},  'value': 2105 },
        { 'name': 'Business Functions',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},  'value': 3770 },
        { 'name': 'Business Functions',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'},  'value': 2435 },
      ]
    },
    {
      'name': 'Isolater box 3',lineStyle: {color: '#95cb03',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#95cb03',borderColor:'#95cb03'},itemStyle:{color:'#95cb03',borderColor:'#95cb03'},
      'children': [
        { 'name': 'Business Functions',lineStyle: {color: '#1dade2',opacity:1},label: {position: 'right',verticalAlign: 'middle',align: 'left',backgroundColor: '#1dade2',borderColor:'#1dade2'},itemStyle:{color:'#1dade2',borderColor:'#1dade2'}, 'value': 8833 }
      ]
    }
  ]
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

   options = TREE_OPTION;
   mergeData: any = null;
   orgData = {
    name: 'CEO',
    children: [
      {
        name: 'Manager 1',
        children: [
          { name: 'Employee 1.1' ,
          children: [
            { name: 'Employee 1.1' },
            { name: 'Employee 1.2' },
          ],
        },
          { name: 'Employee 1.2' ,
          children: [
            { name: 'Employee 1.1' },
            { name: 'Employee 1.2' },
          ],
        },
        ],
      },
      {
        name: 'Manager 2',
        children: [
          { name: 'Employee 2.1' },
          { name: 'Employee 2.2' },
        ],
      },
    ],
  };
  constructor() { }
  data: any;
  chart: any;

  ngOnInit() {
    //TREE_OPTION.series[0].data = [TREE_DATA_1];
    
    TREE_OPTION.series[0].data = [TREE_DATA_2];

     console.log('custOrient: '+TREE_OPTION.series[0].label.normal.position);
    this.mergeData = {
      series: TREE_OPTION.series
    };

    // d3.json(
    //   'https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json'
    // ).then((data: any) => {
    //   console.log(data[0]);
    //   this.data = data;
    // });

    d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/data-oracle.csv').then((data) => {
      console.log(data, '^^^^')
       this.chart = new OrgChart()
        .container('.chart-container')
        .data(D3_TREE) // change the data what you need
        .linkUpdate(function (d: any, i, arr) {
          d3.select(this)
            .attr('stroke', (d: any) =>
              d.data._upToTheRootHighlighted ? '#152785' : 'lightgray'
            )
            .attr('stroke-width', (d: any) =>
              d.data._upToTheRootHighlighted ? 5 : 1.5
            )
            .attr('stroke-dasharray', '4,4');

          if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
          }
        })
        .nodeContent(function (d: any, i, arr, state) {
          const colors = [
            '#6E6B6F',
            '#18A8B6',
            '#F45754',
            '#96C62C',
            '#BD7E16',
            '#802F74',
          ];
          const color = colors[d.depth % colors.length];
          const imageDim = 80;
          const lightCircleDim = 95;
          const outsideCircleDim = 110;

          return `
              <div style="background-color:white; position:absolute;width:${
                d.width
              }px;height:${d.height}px;">
                 <div style="background-color:${color};position:absolute;margin-top:-${outsideCircleDim / 2}px;margin-left:${d.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
                 <div style="background-color:#ffffff;position:absolute;margin-top:-${
                   lightCircleDim / 2
                 }px;margin-left:${d.width / 2 - lightCircleDim / 2}px;border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
                 <img src=" ${
                   d.data.image
                 }" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${d.width / 2 - imageDim / 2}px;border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
                 <div class="card" style="top:${
                   outsideCircleDim / 2 + 10
                 }px;position:absolute;height:30px;width:${d.width}px;background-color:#3AB6E3;">
                    <div style="background-color:${color};height:28px;text-align:center;padding-top:10px;color:#ffffff;font-weight:bold;font-size:16px">
                        ${d.data.name} 
                    </div>
                    <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:10px;color:#424142;font-size:16px">
                        ${d.data.position} 
                    </div>
                 </div>
             </div>
`;
        })
        .render();
    console.log(this.chart)

    });
  }
  changeOrientation(){
    
    if(custOrient=='RL'){
      custOrient ='LR';
      TREE_OPTION.series[0].orient='LR';
        
      TREE_OPTION.series[0].label.normal.position= 'left';
      TREE_OPTION.series[0].label.normal.verticalAlign= 'middle';
      TREE_OPTION.series[0].label.normal.align= 'right';
    }else{
      custOrient='RL';
      TREE_OPTION.series[0].orient='RL';
      TREE_OPTION.series[0].label.normal.position= 'right';
      TREE_OPTION.series[0].label.normal.verticalAlign= 'middle';
      TREE_OPTION.series[0].label.normal.align= 'left';
    }
   
   // this.options = TREE_OPTION;
    this.mergeData = null;
    this.ngOnInit();
  } 
  changeVerticalorientation(){

    if(custOrient=='TB'){
      custOrient ='BT';
       TREE_OPTION.series[0].orient='BT';
       
    }else{
      custOrient='TB';
      TREE_OPTION.series[0].orient='TB';
    }
    this. mergeData = null;
    this.ngOnInit();
  } 
  
  //
} 
