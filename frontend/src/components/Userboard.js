import React, { Component } from 'react';
import { Goals } from './Goals.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Sidebar } from './Sidebar.js';
import '../styles/UserBoard.css';

export class Userboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: ['Cardano','Power Ledger','Tron'],
        datasets: [
          {
            label: 'Price',
            data:[],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(25,99,132,0.6)',
              'rgba(255,99,12,0.6)'
            ]
          }
        ]
      }

    };
  }
      // using the current time stamp as an index fopr the object which contains the json object from the request as a value
      // let now = new Date(); 
      // let now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      // let testObj = {};

  // this is grabbing the dat for ada from the cryptocompare rest API
  componentDidMount(){
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[0] = d.USD;
      this.setState({ChartData})
    })
    fetch('https://min-api.cryptocompare.com/data/price?fsym=POWR&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[1] = d.USD;
      this.setState({ChartData})
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD')
    .then(d => d.json())
    .then(d => {
      let ChartData = Object.assign({}, this.state.ChartData);
      ChartData.datasets[0].data[2] = d.USD;
      this.setState({ChartData})
    })
  }
  
  
  render() {
    return (
      <div className="dashboard">
        <h1> Your Dashboard </h1>
         <div>
        
           <Goals/>
           <Bar
             data={this.state.ChartData}
             width={100}
             height={50}
             options={{
               maintainAspectRatio: true,
               title: {
                display: true,
               }

             }} />

        </div>
      </div>
    );
  }
}
