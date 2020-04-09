import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import Cards from './components/Cards.js';
import DropDown from './components/DropDown'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      country: null, 
      confirmed: null, 
      active: null,
      recovered: null, 
      deaths: null,
      percentActive: null, 
      percentDead: null, 
      percentRecovered: null
    }
    this.dropdownSelect = this.dropdownSelect.bind(this);
  }
 
  dropdownSelect(country){
    this.setState({country: country.target.innerHTML}, () => {
    this.fetchByCountry(this.state)
    })
 }
 fetchByCountry(props){
  fetch(`https://covid19.mathdro.id/api/countries/${props.country}`)
  .then(res => res.json())
  .then (data => this.setState({
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
    active: data.confirmed.value - data.recovered.value - data.deaths.value
  }, () => {
    this.getPercentages(this.state)
  }))
}
 getPercentages(props){
   //Active percentage 
   const percentActive = Math.floor((props.active/props.confirmed) * 100)
  const percentRecovered = Math.floor((props.recovered/props.confirmed) * 100)
  const percentDead = Math.floor((props.deaths/props.confirmed) * 100)
  this.setState({
    percentActive: percentActive, 
    percentRecovered: percentRecovered,
    percentDead: percentDead
  })
 }
  componentDidMount(){
        fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then(data => this.setState({countries: [...data.countries]}));

        fetch('https://covid19.mathdro.id/api')
        .then (res => res.json())
        .then (data => this.setState({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
          active: data.confirmed.value - data.recovered.value - data.deaths.value
        }, ()=> {
          this.getPercentages(this.state)
        })) 
    }
  
  render(){
    console.log(this.state)
  return (
    <div className="App">
      {/*
      Page Header
      */}
      <h1 style={styles.header}>COVID-19 {this.state.country ? this.state.country : "Overall"}</h1>

      {/**
       * HEADER
       */}
       
       {/*
       *<Col style = {styles.ddCol}>
       *<Row>  
       */}
       <DropDown 
      countries = {this.state.countries}
      dropdownSelect = {this.dropdownSelect}
      />
      {/**
       *  </Row>
       * </Col>
       */}
      
      {/*
      * Row 1
      */}
     <Row style = {styles.row}> 
     <Col md={{ span: 4}}>
     <Cards 
      bg="dark"
      title={this.state.confirmed}
      body="Overall Confirmed Cases"
      />
     </Col>
     <Col md={{ span: 4, offset: 2}}>
     <Cards 
      bg="info"
      title={this.state.active}
      subtitle={this.state.percentActive}
      body="Active Confirmed Cases"
      />
     </Col>
     </Row>
     <Row style = {styles.row}> 
     <Col md={{span: 4}}>
     <Cards 
      bg="success"
      title={this.state.recovered}
      subtitle={this.state.percentRecovered}
      body="Recovered"
      />
     </Col>
     <Col md={{span:4, offset: 2}}>
     <Cards 
      bg="danger"
      title={this.state.deaths}
      subtitle={this.state.percentDead}
      body="Deaths"
      />
     </Col>
    </Row>
    </div>
  );
}
}
const styles = {
  header: {
    color: 'white',
    fontSize: 50,
    marginTop: '5%',
    marginBottom: 0,
    padding: 0,
    fontFamily: 'Roboto Mono',
    background: 'black'
  },
  ddCol:{
    width: '100%'
  }
}

export default App;