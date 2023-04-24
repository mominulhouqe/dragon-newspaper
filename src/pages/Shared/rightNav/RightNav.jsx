import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With </h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instragram </ListGroup.Item>
                    
                </ListGroup>
            </div>
            <QZone />
            <div>
                <img className='img-fluid w-100' src={bg} alt="" />
            </div>
            
        </div>
    );
};

export default RightNav;