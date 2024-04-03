import React, { useState } from 'react'
import logo from '../../assests/pic1.jpg'
import {useHistory, useLocation, useNavigate} from 'react-router-dom'
import { MobileIcon, Nav, NavIcon, NavItems, NavLinks, NavLogo, NavMenu, NavbarContainer } from './NabarStyles';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { NavData } from '../../data/NavbarData';

const Navbar = () => {
    const [show,setShow]=useState(false);

    let navigate=useNavigate()
    let location=useLocation();

    const handleClick=()=>{
        setShow(!show)
    }

    const scrollTo=(id)=>{
        const element=document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'})
 }

    const closeMobileMenu=(to,id)=>{
        if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
    }
  return (
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon src={logo} alt="logo"/>
                    Delta
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {show ? <FaTimes/>:<CgMenuRight/>}
                </MobileIcon>
                <NavMenu show={show}>
                    {NavData.map((el,index)=>(
                        <NavItems key={index}>
                            <NavLinks onClick={()=>closeMobileMenu(el.to,el.id)}>
                                {el.text}
                            </NavLinks>
                        </NavItems>
                    ))}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
  )
}

export default Navbar