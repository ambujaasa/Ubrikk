import React, { useState } from 'react';
import { HomeFilled, HistoryOutlined, FolderFilled, QuestionCircleFilled, SettingFilled } from '@ant-design/icons'
import './sidebar.css'
import {Link, NavLink} from 'react-router-dom'

function Sidebar(props) {
	return (
		<div className="menu-bar" >
			<div className="menu-logo">		
				<p>Menu</p>
			</div>
		<div className="menu-items">

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/profile'  >
				  <HomeFilled style={{ fontSize: "25px" }} />&nbsp;
				 <Link to='/home'> <span>Home</span></Link>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/order' >
				  <HistoryOutlined style={{ fontSize: "25px" }} />&nbsp;
				 <Link to='/orders'><span>Orders</span></Link> 
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/drafts' >
				  <FolderFilled style={{ fontSize: "25px" }} />&nbsp;
				 <Link to='/drafts'><span>Drafts</span></Link> 
			 </NavLink></div>
			 <hr style={{ width: "85%" }} />
			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/help'  >
				  <QuestionCircleFilled style={{ fontSize: "25px" }} />&nbsp;
			<Link to='/help'>	  <span>Help</span></Link>
			 </NavLink></div>

			 <div className='item-names'><NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to='/settings' >
				  <SettingFilled style={{ fontSize: "25px" }} />&nbsp;
				  <Link to='/settings'><span>Settings</span></Link>
			 </NavLink></div>

			

			
			 </div>
			 </div>

	)
}

export default Sidebar
