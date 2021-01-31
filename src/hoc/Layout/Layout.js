import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Toolbar from '../../components/Navigation/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from "../../components/Footer/Footer";
import routes from '../../Config/routes';
import { getUsers, useUserDispatch } from '../Context';

function Layout (){
    const dispatch = useUserDispatch();

    const getUser = async () => {
                
        try {
            let response = await getUsers(dispatch)
            
            if (!response) return
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = (prevState) => {
        setShowSideDrawer(!prevState.showSideDrawer)
    }

    return(
        <div className="d-flex" id="wrapper">

            <SideDrawer
                open={showSideDrawer}
                closed={sideDrawerCloseHandler}
            />
            
            <Sidebar />

            <div id="page-content-wrapper">

                <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>

                <div className="container-fluid container-content bg-light">
                    <Switch>
                        {routes.map((route) => (
                        <Route
                            exact
                            key={route.path}
                            path={route.path}
                            component={route.container}
                        />
                        ))}
                    </Switch>
                </div>
                <Footer />
            </div>
            

        </div>
    );
}

export default Layout;