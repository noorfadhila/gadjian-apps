import React from 'react';
import classes from './Navigation.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';

const sidebar = (props) => (
    <React.Fragment>
        <div className={[classes.MainHeader, ""].join(" ")} id="sidebar-wrapper">
            <div className={classes.Logo}>
                <a href="/">
                    <Logo/>
                </a>
            </div>
            <div className={[classes.Navbar, "list-group list-group-flush"].join(" ")}>
                <NavigationItems />
            </div>
        </div>

    </React.Fragment>       
);

export default sidebar;