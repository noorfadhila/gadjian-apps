import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
    border: solid 1px #aaa;
`

function Dashboard (){
    return(
        <div className="card-header-personnel">
            <div className="row">
                <div className="col-sm-7">
                    <h3 className="text-tosca font-weight-bold">NOOR FADHILA KAMAL</h3>
                    <h5 className="text-grey font-weight-normal font-italic">Front End Developer</h5>
                    <br/><br/>
                    <p>
                        <FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/noor-fadhila-kamal-9b5154147/" target="_blank">
                            Noor Fadhila Kamal
                        </a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;
                        <a href="https://github.com/noorfadhila/gadjian-app" target="_blank">
                            noorfadhila
                        </a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                            noor.fadhila05@gmail.com
                    </p>
                </div>
                <div className="col-sm-5 d-flex align-items-center justify-content-end">
                    <div className="row">
                        <ProfileImg src="https://media-exp1.licdn.com/dms/image/C5603AQE6vKOKvV-qeA/profile-displayphoto-shrink_200_200/0/1604424958090?e=1617235200&v=beta&t=p7wSZV37lELOZGOcrlzI9oM7yRbIldCOS9_A3eas_Lk" alt="noor fadhila kamal" />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Dashboard;