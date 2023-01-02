import React, { Fragment, useState } from 'react'
import "./Header.css"
import {SpeedDial,SpeedDialAction} from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ListAltIcon from "@mui/icons-material/List"
import PersonIcon from "@mui/icons-material/Person"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import {useHistory} from "react-router-dom";
import {logout} from "../../../actions/userActoin"
import {useDispatch} from "react-redux"




const UserOptions = ({user}) => {

const [open,setOpen]= useState(false)
const history=useHistory();
const dispatch=useDispatch();

  const options=[
    {icon:<DashboardIcon/>,name:"Dashboard",func:dashboard},
    {icon:<ListAltIcon/>, name:"Orders", func:orders},
    {icon:<PersonIcon/>, name:"Profile", func:account},
    {icon:<ExitToAppIcon/> ,name:"Logout", func:logoutUser},
  ]

  function dashboard(){
    history.push("/dashboard")
  }

  function orders(){
    history.push("/orders")
  }

  function account(){
    history.push("/account")
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
