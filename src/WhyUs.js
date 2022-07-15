import React from 'react';
import './WhyUs.css'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const WhyUs = () => {
    return (
        <div className='whyUs'>
            <div className='whyUs__Desc'>
                <div className='whyUs__title'>
                    <h1>At Approval Finance, we are here for you</h1>
                </div>
                {/* <div className='whyUs__descdesc'>
                    <p> [Insert Text Here]</p>
                </div> */}
            </div>
            <div className='whyUs__skills'>
                <div className='whyUs__skillbox'>
                    <div className='whyUs__skillbox--icon'>
                        <MilitaryTechIcon />
                    </div>
                    <div className='whyUs__skillbox--desc'>
                        <h3 className='whyUs__skillbox--desc-title'>
                        100% Independent
                        </h3>
                        <p className='whyUs__skillbox--desc-body'>
                        We’re 100% independent meaning you’ll receive the most suitable solution
                        </p>
                    </div>
                </div>
                <div className='whyUs__skillbox'>
                    <div className='whyUs__skillbox--icon'>
                        <AccessTimeIcon />
                    </div>
                    <div className='whyUs__skillbox--desc'>
                        <h3 className='whyUs__skillbox--desc-title'>
                        Free Consultation
                        </h3>
                        <p className='whyUs__skillbox--desc-body'>
                        We offer a FREE, no obligation consultation so you can determine if we’re the right fit
                        </p>
                    </div>
                </div>
                <div className='whyUs__skillbox'>
                    <div className='whyUs__skillbox--icon'>
                        <EmojiEventsIcon />
                    </div>
                    <div className='whyUs__skillbox--desc'>
                        <h3 className='whyUs__skillbox--desc-title'>
                        Approve Tough Loans
                        </h3>
                        <p className='whyUs__skillbox--desc-body'>
                        We can get tough loans approved, even those that have been knocked back by a bank in the past
                        </p>
                    </div>
                </div>
                <div className='whyUs__skillbox'>
                    <div className='whyUs__skillbox--icon'>
                        <CurrencyExchangeIcon />
                    </div>
                    <div className='whyUs__skillbox--desc'>
                        <h3 className='whyUs__skillbox--desc-title'>
                        Lowest Rate  Possible
                        </h3>
                        <p className='whyUs__skillbox--desc-body'>
                        Our strong relationship with our lenders means we can negotiate the lowest rate possible
                        </p>
                    </div>
                </div>        
            </div>
            <div className='whyUs__s'>
            <h1 className='emphasise'>You</h1> <br /> 
            <h1 className='s'>come first</h1>
            </div>
        </div>
    );
}

export default WhyUs;
