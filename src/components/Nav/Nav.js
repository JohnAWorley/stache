import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import FinalDrawer from '../DrawerComponent/Drawer';
const logo = require('../../images/j-logo-v1.svg')




const mapStateToProps = state => ({
  user: state.user,
});


class Nav extends Component {


  render() {
    return (

      <div className="nav">
        <div>
        <FinalDrawer/>
        </div>
    
        <div className="nav-right">
         
          <h2 className="nav-title">Stash</h2>
        </div>
        <img className="logo" src={logo}></img>
        

      </div>
    )
  }
}



export default connect(mapStateToProps)(Nav);
