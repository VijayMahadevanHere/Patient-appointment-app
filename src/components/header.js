import React from "react";
import './header.css'

const Header=(props)=>{
 const{
   onMenuSelect
 }=props


   return ( <div className='app-header'>
    <span className='header-title'>Code malayalam</span>
    <span onClick={()=>{
      onMenuSelect('usage')
    }}>Usage</span>
    <span onClick={()=>{
      onMenuSelect('home')
    }}>Home</span>
    <span onClick={()=>{
      onMenuSelect('settings')
    }}>Settings</span>
    <span onClick={()=>{
      onMenuSelect('logout')
    }}>Logout</span>
    </div>
   )
}

export default Header;