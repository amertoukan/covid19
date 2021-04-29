import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
const formatter = new Intl.NumberFormat('en')


class Vaccinations extends Component {
render(){ 
const data = this.props.data
return (
    
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
)
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

  export default Vaccinations; 