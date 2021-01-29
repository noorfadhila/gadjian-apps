import React from 'react';
import classes from './Navigation.module.css';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    
    <React.Fragment>

        <nav className={[classes.Navbar, "navbar navbar-expand-lg navbar-light"].join(" ")}>
            <DrawerToggle clicked={props.drawerToggleClicked} />

            <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item d-sm-flex d-none align-items-center">
                        <span className="text-grey">Hallo,</span>&nbsp;<span className="text-tosca">Noor Fadhila</span>
                    </li>
                    <li className="nav-item">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQE6vKOKvV-qeA/profile-displayphoto-shrink_200_200/0/1604424958090?e=1617235200&v=beta&t=p7wSZV37lELOZGOcrlzI9oM7yRbIldCOS9_A3eas_Lk" alt="noor fadhila kamal" className={classes.UserImage} />
                    </li>
                </ul>
            </div>
        </nav>

    </React.Fragment>       
);

export default toolbar;