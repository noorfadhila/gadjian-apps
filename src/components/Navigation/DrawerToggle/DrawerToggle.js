import React from 'react';
import classes from './DrawerToggle.module.css';
import Logo from '../../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const drawerToggle = (props) => (
    <div className="d-flex">
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <button className={classes.NavbarToggler} type="button">
                <FontAwesomeIcon icon={faBars} className="text-grey"/>
            </button>
        </div>
        <div className={[classes.Logo, "d-sm-none d-block"].join(" ")}>
            <a href="/">
                <Logo/>
            </a>
        </div>
    </div>
);

export default drawerToggle;