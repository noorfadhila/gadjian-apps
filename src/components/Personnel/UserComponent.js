import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const CardLabel = styled.span`
    font-size: 14px;
    font-weight: 600;
`
const CardValue = styled.span`
    font-size: 16px;
`

const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
    border: solid 1px #aaa;
    @media (max-width: 499px) {
        width: 100px;
        height: 100px;
    }
`

const userComponent = props => {
    return(
        <div className="col-sm-3 col-12 px-0 px-sm-3" >
            <div className="card mb-3 text-grey" style={{border: "none", borderRadius: "20px", maxHeight:"550px"}}>
                <div className="card-header bg-transparent">
                    Personnel ID: <span className="text-tosca">{props.userDetail.id.value.replace(/-/gi, "")}</span>
                    <span className="pull-right">
                        <FontAwesomeIcon icon={faEllipsisH} className="float-right"/>
                    </span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6 col-sm-12 d-flex align-items-center justify-content-center">
                            <ProfileImage src={props.userDetail.picture.large} alt={props.userDetail.picture.large} />
                        </div>
                        <div className="col-6 col-sm-12">
                            <p className="card-text d-block">
                                <CardLabel>Name</CardLabel><br/>
                                <CardValue>{props.userDetail.name.first} {props.userDetail.name.last}</CardValue>
                            </p>
                            <p className="card-text d-block">
                                <CardLabel>Telephone</CardLabel><br/>
                                <CardValue>{props.userDetail.phone}</CardValue>
                            </p>
                            <p className="card-text d-sm-block d-none">
                                <CardLabel>Birthday</CardLabel><br/>
                                <CardValue>{moment(props.userDetail.dob.date).format("DD-MM")}</CardValue>
                            </p>
                            <p className="card-text d-sm-block d-none">
                                <CardLabel>Email</CardLabel><br/>
                                <CardValue>{props.userDetail.email}</CardValue>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default userComponent;