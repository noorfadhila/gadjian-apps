import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const navigationItem = (props) => (
    <ul className="list-unstyled components mt-5">
        <li className={classes.NavigationItem}>
            <NavLink 
                to="/"
                className="list-group-item"
                activeClassName={classes.active}
                onClick={props.clicked}
                exact>
                    <FontAwesomeIcon icon={faHome} />
                    &nbsp;Beranda
            </NavLink>
        </li>
        <li className={classes.NavigationItem}>
            <NavLink 
                to="/personnel"
                className="list-group-item"
                activeClassName={classes.active}
                onClick={props.clicked}
                exact>
                    <FontAwesomeIcon icon={faUsers} />
                    &nbsp;Personnel List
            </NavLink>
        </li>
        <li className={classes.NavigationItem}>
            <NavLink 
                to="/daily-attendance"
                className="list-group-item"
                activeClassName={classes.active}
                onClick={props.clicked}
                exact>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    &nbsp;Daily Attendance
            </NavLink>
        </li>
    </ul>
);

export default navigationItem;