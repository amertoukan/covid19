import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
const formatter = new Intl.NumberFormat('en')


class Severe extends Component {

render(){ 
const data = this.props.data
return (
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
)}}


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

  export default Severe;