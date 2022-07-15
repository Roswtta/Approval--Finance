import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__img'>
                <a href='/'>
                    <img src='https://approvalfinance.com.au/wp-content/uploads/2020/07/af-512px-logo-300x300.png' className='footer__img--img' />
                </a>
            </div>
            <div className='footer__offices'>
                <div className='footer__office'>
                    <div className='footer__office--title'>
                        <p>
                            Sydney Office
                        </p>
                    </div>
                    <div className='footer__office--address'>
                        <p>
                        LEVEL 13,  447 KENT ST. <br />
                        SYDNEY NSW 2000
                        </p>
                    </div>
                    <div className='footer__office--contacts'>
                        <p>
                        M: 0411 106 088 <br/>
                        P: 02 9726 4099
                        </p>
                    </div>
                </div>
                <div className='footer__office'>
                    <div className='footer__office--title'>
                        <p>
                            Canley Heights Office
                        </p>
                    </div>
                    <div className='footer__office--address x'>
                        <p>
                        228 CANLEY VALE ROAD <br/>
                        CANLEY HEIGHTS NSW 2166 
                        </p>
                    </div>
                    <div className='footer__office--contacts'>
                        <p>
                        M: 0411 106 088 <br/>
                        P: 02 9726 4099
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='footer__motto'><span className='emphasise'>You </span>Come First</h1>
        </div>
    );
}

export default Footer;
