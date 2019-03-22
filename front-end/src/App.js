import React, { Component } from 'react';
import './App.css';
class App extends Component {
  
  render() {

    return (
      <div className="cont_principal">

  <div className="cont_centrar">
  <div className="cont_login">
    <form action="">
    <div className="cont_tabs_login">
      <ul className='ul_tabs'>
        <li className="active"><a href="#" >SIGN IN</a>
        <span className="linea_bajo_nom"></span>
        </li>
        <li><a href="#up">SIGN UP</a><span className="linea_bajo_nom"></span>
        </li>
      </ul>
      </div>
  <div className="cont_text_inputs">
      <input type="text" className="input_form_sign " placeholder="NAME" name="name_us" />
    
    <input type="text" className="input_form_sign d_block active_inp" placeholder="EMAIL" name="emauil_us" />

    <input type="password" className="input_form_sign d_block  active_inp" placeholder="PASSWORD" name="pass_us" />  
   <input type="password" className="input_form_sign" placeholder="CONFIRM PASSWORD" name="conf_pass_us" />
    
    <a href="#" className="link_forgot_pass d_block" >Forgot Password ?</a>    
<div className="terms_and_cons d_none">
    <p><input type="checkbox" name="terms_and_cons" /> <label for="terms_and_cons">Accept  Terms and Conditions.</label></p>
  
    </div>
      </div>
<div className="cont_btn">
     <button className="btn_sign">SIGN IN</button>
      
      </div>
      
    </form>
    </div>
    
  </div>
  

</div>  
    )
  }
}

export default App;
