import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useUserState } from '../../hoc/Context';
import UserComponent from '../../components/Personnel/UserComponent';
import Search from '../../components/Personnel/Search';
import Spinner from '../../components/UI/Spinner/Spinner';

const BottomNav = styled.div`
    padding: 10px 20px;
    margin: 0;
    height: 56px;
    width: 100%;
    z-index: 90;
    box-sizing: border-box;
`

const DisabledPagination = styled.div`
    color: #ccc;
    font-size: 18px;
    display: flex;
    align-items: center;
    @media (max-width: 499px) {
        font-size: 14px;
    }
`

const ActivePagination = styled.div`
    color: #000;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    @media (max-width: 499px) {
        font-size: 15px;
    }
`

function Personnel (props){

    const userDetails = useUserState();
    const [ userListLimit, setUserListLimit] = useState(undefined);

    const search =  window.location.search;
    const params = new URLSearchParams(search);
    const pageSearch = Number(params.get('page'));
    const firstName = params.get('firstname') || "";

    const [ page, setPage] = useState(pageSearch || 1);
    const [ limit, setLimit ] = useState(page*4);
    const [ offset, setOffset ] = useState((page*4)-4);
    const [ totalPage, setTotalPage ] = useState(undefined);
    
    const getListUser = () => {
        if(userDetails.userList !== 0){
            const list = {...userDetails}
            const sliceUser = list.userList;
            let totalUser = 0;
            if(firstName !== ""){
                let filteredUsers = sliceUser.filter(u =>
                    u.name.first.toLowerCase().includes(firstName.toLowerCase())
                );
                totalUser = filteredUsers.length;
                setTotalPage(Math.ceil(totalUser/4));
                setUserListLimit(filteredUsers.slice(offset, limit));
                
            }else{
                setTotalPage(sliceUser.length/4);
                setUserListLimit(sliceUser.slice(offset, limit))
            }
        }
    }


    useEffect(getListUser, [userDetails, page, firstName]);

    const changedParams = () => {
        props.history.push( '?page=' + Number(page) + '&firstname=' + firstName );
    }

    useEffect(changedParams, [page, firstName]);

    const searchName = (changed) => {
        if(changed === true){
            setOffset(0)
            setLimit(4)
            setPage(1)
        }
    }

    const paginationNextHandler = () => {
        setOffset(offset+4);
        setLimit(limit+4);
        setPage(page+1);
    }

    const paginationPrevHandler = () => {
        setOffset(offset-4);
        setLimit(limit-4);
        setPage(page-1);        
    }

    let userList = 
        <div className="col-12 text-center">
            <Spinner />
        </div>;

    if(userListLimit !== undefined){
        userList = userListLimit.map((users, index) => (
            <UserComponent userDetail={users} key={users.id.value} />
        ));
    }
    
    return(
        <React.Fragment>
            <div className="card-header-personnel">
                <div className="row">
                    <div className="col-sm-7">
                        <h3 className="text-tosca font-weight-bold">PERSONNEL LIST</h3>
                        <h5 className="text-grey font-weight-normal">List of all personnels</h5>
                    </div>
                    <div className="col-sm-5 d-flex align-items-center justify-content-end">
                        <div className="row">
                            <div className="col-sm-6 mx-3 mx-sm-0">
                                <Search {...props} onSearchName={searchName} inputSearch={firstName}/>
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-2">
                                <button className="btn btn-block btn-tosca py-2">
                                    ADD PERSONEL&nbsp;
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row card-personnel-container">
                {userList}
            </div>
            {
                totalPage === 0 ? 
                <div className="row card-personnel-container">
                    <div className="col-12 text-center">
                        <p className="font-weight-bold">No User Found!</p>
                    </div>
                </div>
                :
                ""
            }
            <BottomNav className="row text-center">
                <div className="col-6 text-right">
                    {
                        page === 1 ? 
                            <DisabledPagination className="justify-content-end">
                                <FontAwesomeIcon icon={faAngleLeft} />&nbsp;
                                Previous Page
                            </DisabledPagination>
                            
                        :
                            <ActivePagination className="justify-content-end"
                                onClick={
                                    paginationPrevHandler
                                }
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />&nbsp;
                                Previous Page
                            </ActivePagination>
                            
                    }
                    
                </div>
                <div className="col-6 text-left">
                    {
                        totalPage <= page ?
                            <DisabledPagination>
                                Next Page&nbsp;
                                <FontAwesomeIcon icon={faAngleRight} />
                            </DisabledPagination>
                        : 
                        <ActivePagination
                            onClick={
                                paginationNextHandler
                            }
                        >
                            Next Page&nbsp;
                            <FontAwesomeIcon icon={faAngleRight} />
                        </ActivePagination>
                    }
                </div>
            </BottomNav>
        </React.Fragment>    
    );
}

export default Personnel;
