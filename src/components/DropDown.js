import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class DropDown extends Component {
    constructor(props){ 
        super(props); 
        this.state={ 
            country: "Change Country",
            overall: null,
            active: null,
            recovered: null,
            deaths: null,

        }
    }
  
  
  
    render() {
        return (
            <Dropdown style={styles.dropdown}
            drop="right">
                <Dropdown.Toggle>
                    {this.state.country}
                </Dropdown.Toggle>
                <Dropdown.Menu> {//style={styles.ddMenu}>
    }
               {this.props.countries.map((country, index) => 
                <Dropdown.Item key={country.iso3 ? country.iso3 : index} onClick={this.props.dropdownSelect}>{country.name}</Dropdown.Item>
                )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    }
const styles = {
    dropdown: {
        minHeight:200,
        maxHeight: 500,
        overflowY: 'auto',
        overflowX: 'hidden'
       
    },
    ddToggle: {
        width: "100%"
    },
    ddMenu: {
        width: '100%'
    },
}
