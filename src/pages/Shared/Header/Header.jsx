import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {


    return (
        <Container>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="" />
                <p className='text-center'> <small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            {/* markeque section start here */}
            <div className='d-flex'>
                <Button variant="danger">News</Button>
                <Marquee className='text-danger' speed={50}> Braking news
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* markqueee section end here */}
            


        </Container>
    );
};

export default Header;