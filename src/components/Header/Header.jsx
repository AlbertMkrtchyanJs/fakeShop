import React from "react";

import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FiLogIn,FiUserPlus } from "react-icons/fi";
import { IoLogoPlaystation } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import style from "./Header.module.css";

const Header = (props) => {

  let {pathname} = useLocation()

  return (
    <div className={style.header}>
      <NavLink to="/" style={{ color: "blue" }}>
        <h1 style={{ fontSize: "40px" }}>
          <IoLogoPlaystation />
        </h1>
      </NavLink>
      <div style={{ fontSize: "25px" }}>
        {
          pathname === '/registration' ||
          <NavLink to='/registration'  style={{textDecoration: 'none'}}>
          Register Now <FiUserPlus style={{paddingRight: '50px'}}/>
        </NavLink>
        }
        {
          pathname === '/profile' ||
          <NavLink to='/profile'  style={{textDecoration: 'none'}}>
          My Profile <CgProfile style={{paddingRight: '50px'}}/>
        </NavLink>
        }
        {
          pathname === '/login' ||
           <NavLink to='/login' style={{textDecoration: 'none'}}>
          Log in <FiLogIn style={{paddingRight: '50px'}}/>
        </NavLink>
        }
     { pathname === '/cart' ||
        <NavLink to="/cart">
          <MdOutlineShoppingCartCheckout />
          <sub>{props.cards.length}</sub>
        </NavLink>}
      </div>
    </div>
  );
};

export default Header;
