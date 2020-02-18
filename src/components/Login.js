import React, {Component} from 'react';
import './Login.css'

class Login extends Component{
    // constructor(props){
    //     super(props)
    // }
   
    render(){
        return(
            <div>
                <div className='login_box'>
                <h1>Login</h1>
                <div className='textbox'>
                    <input type='text' placeholder='Username' name='' value=''></input>
                </div>

                <div className='textbox'>
                    <input type='password' placeholder='Password' name='' value=''></input>
                </div>

                <input className='btn' type='button' name='' value='Sign in'></input>
            </div>
            </div>
        )
    }
}

export default Login