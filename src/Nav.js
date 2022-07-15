import React from 'react';
import './Nav.css'
import { Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import {Link} from 'react-scroll'

const Nav = () => {

    let ismodal2Open = false;

    function togglemodal2() {
        if (ismodal2Open) {
            ismodal2Open = false;
            return document.body.classList.remove("modal2--open");
        }
            ismodal2Open = true;
            document.body.classList += " modal2--open";
    }


    return (
        <div className='nav'>
            <div className='nav__logo'>
                <a href='/' className='nav__logoA'>
                    <img src='https://approvalfinance.com.au/wp-content/uploads/2020/07/af-2480px-x-520px-copy-3.png' className='nav__logo--AP'/>
                </a>
            </div>
            <div className='nav__links'>
                <div className='
                nav__link 
                link__hover-effect
                link__hover-effect--black'>
                    <Link activeClass="active" to="about" spy={true} smooth={true}>HOME</Link>
                </div>
                <div className='
                nav__link
                link__hover-effect
                link__hover-effect--black'>
                    <Link activeClass="active" to="whyUs" spy={true} smooth={true}>ABOUT</Link>
                </div>
                <div className='
                nav__link
                link__hover-effect
                link__hover-effect--black'>
                    <Link activeClass="active" to="help" spy={true} smooth={true}>LOANS</Link>
                </div>
                <div className='
                nav__link 
                nav__linkContact'>
                    <Button className='nav__linkButton' onClick={togglemodal2}>
                        Contact
                    </Button>
                </div>
                <a href='tel:0411 106 088' className='nav__icons'>
                    <Phone /> <h4>0411 106 088</h4>
                </a>
                <a href='mailto:kim.vo@approvalfinance.com.au' className='nav__icons nav__icons2'>
                    <Email /> <h4>Email</h4>
                </a>
            </div>
        </div>
    );
}

export default Nav;
