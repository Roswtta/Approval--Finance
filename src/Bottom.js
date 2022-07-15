import React from 'react';
import './Bottom.css'
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';

const Bottom = () => {
    return (
        <div className='bottom'>
            <div className='bottom__container'>
                <div className='bottom__contacts'>
                    <div className='bottom__contact'>
                        <a href='tel:0411 106 088' className='bottom__icons'>
                            <Phone /> 
                            <div className='p'>
                                <h4>0411 106 088</h4>
                            </div>
                        </a>
                    </div>
                    <div className='bottom__contact bottom__contact2'>
                        <a href='mailto:kim.vo@approvalfinance.com.au' className='bottom__icons bottom__icons2'>
                            <Email /> 
                            <div className='p'>
                                <h4>Email</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
