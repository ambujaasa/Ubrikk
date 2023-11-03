import React from 'react'

import team1 from '../../../assets/img/profile/team-1.jpg'
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './profile-header.css'
function Profileheader() {
  return (
    <div className="navbar-div">
      <div className="logo"><h3>Ubrikk</h3></div>

      <div className="nav">
        <a href="#">About Us</a>
        <a href="/">Services</a>
        <a href="#">Vendors</a>
      </div>

      <div className="order-user-detail">
        <a href="/order">
          <ShoppingCartOutlined style={{ fontSize: '25px', margin: "0px 40px" }} /></a>
        <p>John Kumar</p>
        <img src={team1} alt="error" />
        <DownOutlined />
      </div>
    </div>
  )
}

export default Profileheader