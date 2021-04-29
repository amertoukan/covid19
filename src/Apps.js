import React from 'react';

import './App.css';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react'
const formatter = new Intl.NumberFormat('en')

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
    }
 
  }

getPercentages(d, y){
console.log(d-1)

fetch(`https://api.covid19tracker.ca/reports/province/ON?date=${d}`)
  .then(res => res.json())
  .then (data => this.setState({
    data: data.data[0]
  }))
}

 getDate(){
    const d = new Date(); 
    const MM = String(d.getMonth() + 1).padStart(2, '0')
    const DD = String(d.getDate()).padStart(2, '0')
    const YYYY = d.getFullYear()
    const yest = `${YYYY}-${MM}-${DD - 1}`
    const date = `${YYYY}-${MM}-${DD}`
    this.getPercentages(date, yest)
 }

  componentDidMount(){
       this.getDate();
    }
  
  render(){
    const data = this.state.data
    const provinces = [
    {text:"Newfoundland and Labrador", key:"NL"},
    {text:"Quebec", key: "QC"}, 
    {text: "Nova Scotia", key: "NS"}, 
    {text: "Prince Edward Island", key: "PEI"}, 
    {text: "New Brunswick", key:"NB"}, 
    {text: "Ontario", key: "ON"}, 
    {text: "Manitoba", key: "MB"}, 
    {text: "Saskatchewan", key: "SK"}, 
    {text: "Alberta", key: "AB"}, 
    {text: "British Colombia", key: "BC"}, 
    {text: "Nunavut", key: "NU"}, 
    {text: "Northwest Territories", key: "NT"}, 
    {text: "Yukon", key: "YT"}
  ]

  return (
    <div className="App">
      {/*
      Page Header
      */}
      <h1 style={styles.header}>🇨🇦 COVID-19 Tracker 🇨🇦</h1>
      <h5>{formatter.format(data.total_tests)} tests were administered in the last 24 hours.</h5>
      <div style = {styles.container}>
      
      <hr/>
     <div style = {styles.row}> 
     <Col xs>
     <h2 style={styles.title}>The Basics</h2>
     </Col>
     
     <Col sm>
     <div style = {{...styles.card, ...styles.info}} className="card">
       <p style={styles.cardHeader}>Confirmed Cases</p>
       <h2>{formatter.format(data.total_cases)}</h2>
     </div>
     </Col>

     <Col sm>
     <div style = {{...styles.card, ...styles.active}} className="card">
       <p style={styles.cardHeader}>Active Cases</p>
       <h2>{formatter.format(data.total_cases - data.total_recoveries)}</h2>
       <p>{formatter.format(data.change_cases)}</p>
     </div>
     </Col>
   
 
     <Col sm>
     <div style = {{...styles.card, ...styles.recovered}} className="card">
       <p style={styles.cardHeader}>Recovered Cases</p>
       <h2>{formatter.format(data.total_recoveries)}</h2>
       <p>{formatter.format(data.change_recoveries)}</p>
     </div>
     </Col>
</div>
    </div>

<div style={styles.container}>

  <hr/>

  <div style={styles.row}>
  <Col sm>
  <h2 style={styles.title}>Severe cases</h2>
  </Col>
  
  <Col sm>
    <div style = {{...styles.card, ...styles.info}} className="card">
      <p style={styles.cardHeader}>Hospitalized</p>
      <h2>{formatter.format(data.total_hospitalizations)}</h2>
      <p>{formatter.format(data.change_hospitalizations)}</p>
    </div>
  </Col>


  <Col sm>
    <div style = {{...styles.card, ...styles.active}} className="card">
      <p style={styles.cardHeader}>ICU patients</p>
      <h2>{formatter.format(data.total_criticals)}</h2>
      <p>{formatter.format(data.change_criticals)}</p>
    </div>
  </Col>

  <Col sm>
    <div style = {{...styles.card, ...styles.fatality}} className="card">
      <p style={styles.cardHeader}>Fatalities</p>
      <h2>{formatter.format(data.total_fatalities)}</h2>
      <p>{formatter.format(data.change_fatalities)}</p>
    </div>
  </Col>
  </div>
</div>



<div style={styles.container}>
 
  <hr/>
  <div style={styles.row}>
  <Col sm>
  <h2 style={styles.title}>Vaccinations</h2>
  </Col>
  
  <Col sm>
    <div style = {{...styles.card, ...styles.info}} className="card">
      <p style={styles.cardHeader}>Available</p>
      <h2>{formatter.format(data.total_vaccines_distributed)}</h2>
      <p>{formatter.format(data.change_vaccines_distributed)}</p>
    </div>
  </Col>

  <Col sm>
    <div style = {{...styles.card, ...styles.active}} className="card">
      <p style={styles.cardHeader}>Administered</p>
      <h2>{formatter.format(data.total_vaccinations)}</h2>
      <p>{formatter.format(data.change_vaccinations)}</p>
    </div>
  </Col>


  

  <Col sm>
    <div style = {{...styles.card, ...styles.recovered}} className="card">
      <p style={styles.cardHeader}>Fully Vaccinated</p>
      <h2>{formatter.format(data.total_vaccinated)}</h2>
      <p>{formatter.format(data.change_vaccinated)}</p>
    </div>
  </Col>
  </div>

</div>
</div>
  );
}
}
const styles = {
  container:{
    padding: '10px', 
    margin: '10px'
  },
  header: {
    fontSize: 50,
    margin: '2%',
    fontFamily: 'Exo, sans-serif',
  },
  row: {
    display: 'flex',
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'flex-end'
  },

  card: {
    height: '200px',
    width: '300px',
    color:'white',
  },

  info:{
    backgroundColor: '#403f3e',
  },
  active:{
    backgroundColor: "#5797ff"
  },
  recovered:{
    backgroundColor: "#3fbf75"
  },
  fatality: {
    backgroundColor: "#c92843"
  },
  title: {
    float: 'left', 
    paddingBottom: '40px',
    paddingRight: '50px'
    
  },
  cardHeader:{
    marginTop: '30px',
    fontSize: '30px',
    fontFamily: 'Inconsolata, monospace'
  },
  ddCol:{
    width: '100%'
  }
}

export default App;