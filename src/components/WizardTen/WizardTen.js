import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {updateFirstName, updateLastName, updateEmail} from '../../ducks/reducer'

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e)=>this.props.updateFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e)=>this.props.updateLastName(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e)=>this.props.updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {firstName, lastName, email} = state
    return {
        firstName,
        lastName,
        email
    }
}

let actionCreators = {
    updateFirstName,
    updateLastName,
    updateEmail
}

export default connect(mapStateToProps, actionCreators)(WizardTen);