import React from 'react';
import './Help.css'
import Loans from './Loans';

const Help = () => {
    return (
        <div className='help'>
            <div className='help__Desc'>
                <div className='help__title'>
                    <h1>How We Can Help</h1>
                </div>
                <div className='help__descdesc'>
                    <p> Approval Finance will help you secure the right loan types for your needs </p>
                </div>
                <div className='help__div'></div>
            </div>
            <Loans />
        </div>
    );
}

export default Help;
