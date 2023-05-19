import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import css from "./Layout.module.css";
import { Loader } from "../Loader";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: #471CA9;
  }`;

const Layout = () => {   
  
  return (
    <div>
        <header className={css.header}>
            <nav className={css.nav}>
                <StyledLink to="/"  className={css.link}> Home</StyledLink>
                <StyledLink to="/tweets"  className={css.link}>Tweets</StyledLink>        
            </nav>            
        </header>
          <Suspense fallback={<><Loader/></>}>
            <Outlet />
          </Suspense>
        
    </div>
  );
};

export default Layout;