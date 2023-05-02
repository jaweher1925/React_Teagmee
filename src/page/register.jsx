import React from "react";
import '../Style.css';

const register =()=> {
    return(
        <div>
        <div className="formContainer"> 
            <div className="formWrapper">
                <span className="logo">TIGMA </span>
                <span className="title">register</span>
                <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file"/>
                <button>sign up</button>
                <button>sign up </button>
                </form>
                <p> you have an acount ? Login</p>  
            </div> 
        </div>
        <style>
        
                    
        </style>
        </div>
    )
}

export default register;