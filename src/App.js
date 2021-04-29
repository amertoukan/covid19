import React, { Component } from 'react'
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/config'; 
import Basics from './components/Basics';
import Severe from './components/Severe';
import Vaccinations from './components/Vaccinations';

class App extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            data: {},
        }
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
    
    getPercentages(d, y){        
        fetch(`https://api.covid19tracker.ca/reports/province/ON?date=${d}`)
          .then(res => res.json())
          .then (data => this.setState({
            data: data.data[0]
          }))
    }

    componentDidMount(){
        this.getDate();
    }

    render(){
        return (
            <Provider store={store}> 
                <div className = "App">
                <Basics 
                    data = {this.state.data}
                />


                <Severe
                    data = {this.state.data}
                />


                <Vaccinations 
                    data = {this.state.data}
                /> 
                
                </div>
            </Provider>
        )
    }
}

export default App; 