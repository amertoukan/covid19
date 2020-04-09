import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class Cards extends Component {

render() {
return (
    <Card body 
        bg={this.props.bg} 
        text="white"
        style={styles.container}
        >
            <Card.Title style={styles.title}>
                {this.props.title}
            </Card.Title>
            
            {this.props.subtitle ? <Card.Subtitle style={styles.substitle}>
                {this.props.subtitle}%
            </Card.Subtitle> : null}
                        
            <Card.Body style={styles.body}> 
                {this.props.body}
            </Card.Body>
    </Card>
)
}
}

const styles = {
    container:{
        margin: 50
    },
    title: {
        fontSize: 60,
        textAlign: 'center',
        color: '#ffffff',
        opacity: 1
    },
    subtitle: { 

    },
    body: {
        fontSize:'35px',
        textAlign: 'center',
        color: '#D5D5D5'
    },
}