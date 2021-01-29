import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <a href="/">
                        <Logo/>
                    </a>
                </div>
                <nav>
                    <NavigationItems clicked={props.closed} />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;