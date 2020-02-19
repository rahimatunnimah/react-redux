import React, {Component} from 'react';
import './Register.css'

class Register extends Component{
    // constructor(props){
    //     super(props)
    // }
   
    render(){
        return(
            <header>
            <div>
                <div className='register_box'>
                <h1>Register</h1>
                <div className='textbox'>
                    <input type='text' placeholder='Name' name='' value=''></input>
                </div>
                <div className='textbox'>
                    <input type='text' placeholder='Username' name='' value=''></input>
                </div>
                <div className='textbox'>
                    <input type='password' placeholder='Password' name='' value=''></input>
                </div>
                <input className='btn' type='button' name='' value='Sign up'></input> 
                </div>                          
            </div>
            </header>
        )
    }
}

export default Register