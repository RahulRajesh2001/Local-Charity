import React, { Fragment, useState } from 'react'
import "./Header.css"
import {SpeedDial,SpeedDialAction} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from "@mui/icons-material/List"
import PersonIcon from "@mui/icons-material/Person"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import {useHistory} from "react-router-dom";
import {logout} from "../../../actions/userActoin"
import {useDispatch, useSelector} from "react-redux"




const UserOptions = ({user}) => {

  const {cartItems}=useSelector((state)=>state.cart)

const [open,setOpen]= useState(false)
const history=useHistory();
const dispatch=useDispatch();

  const options=[
    {icon:<AddIcon/>,name:"Create Donation",func:createProduct},
    {icon:<ListAltIcon/>, name:"Orders", func:orders},
    {icon:<PersonIcon/>, name:"Profile", func:account},
    {icon:<ShoppingCartIcon/>, name:`Cart(${cartItems.length})`, func:addToCart},
    {icon:<ExitToAppIcon/> ,name:"Logout", func:logoutUser},
  ]

  
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard(){
    history.push("/admin/dashboard")
  }

  function createProduct(){
    history.push("/createProduct")
  }

  function orders(){
    history.push("/orders")
  }

  function account(){
    history.push("/account")
  }
  function addToCart(){
    history.push("/cart")
  }

  function logoutUser(){
   
    dispatch(logout());

    alert.success("Logout Successfully")
  }



  return (
    <Fragment>
       <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>

    </Fragment>
  )
}

export default UserOptions
