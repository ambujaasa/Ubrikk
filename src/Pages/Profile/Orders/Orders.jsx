import React from 'react'
import Profileheader from '../ProfileHeader/Profileheader';
import Sidebar from '../Sidebar/Sidebar';
import OrderLayout from './OrderLayout'
import Drafts from '../Drafts/Drafts';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const navigate=useNavigate()
	function Clicklogout(){
		navigate('/')
	}
  return (
    <>
     <div>
      <button className='button' onClick={Clicklogout}>Logout</button></div>
      <Profileheader />
      <div style={{ position: "absolute", top: "60px", display: "flex",width:"95%" }}>
        <div style={{ margin: "40px" }}>
          <Sidebar />
        </div>
        <OrderLayout />

      </div>
    </>
  )
}

export default Orders