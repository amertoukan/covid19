import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
const formatter = new Intl.NumberFormat('en')


class Basics extends Component{
    render(){
        const data = this.props.data
        return (
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

  export default Basics; 