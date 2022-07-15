import React from 'react';
import './Loans.css'
import { Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3'
import {Link} from 'react-scroll'

const Loans = () => {

    let isModal3Open = false;

    function toggleModal3() {
        if (isModal3Open) {
            isModal3Open = false;
            return document.body.classList.remove("modal3--open");
        }
            isModal3Open = true;
            document.body.classList += " modal3--open";
    }

    let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
        isModalOpen = true;
        document.body.classList += " modal--open";
}



    return (
        <div className='loans'>
            <div className='loanss'>
            <div className='loansss'>
                <div className='loan__box'>
                    <div className='loan__box--icon'>
                        <HouseIcon />
                    </div>
                    <div className='loan__box--desc'>
                        <div className='loan__box--desc-title'>
                        Residential Home Loans
                        </div>
                        <div className='loan__box--desc-body k'>
                        If you are buying your first home, refinancing or investing, Approval Finance is here to help you with expert advice throughout the whole process.
                        </div>
                            <Button className='loan__box--button a' onClick={toggleModal}>
                                Read More
                            </Button>
                    </div>
                </div>
                <div className='loan__box loan__box2'>
                    <div className='loan__box--icon'>
                        <WarehouseIcon />
                    </div>
                    <div className='loan__box--desc'>
                        <div className='loan__box--desc-title'>
                        Commercial Mortgage Loans
                        </div>
                        <div className='loan__box--desc-body'>
                        Whether you are looking to purchase a commercial property as an investor or you are buying a commercial property for your business premises, Approval Finance is here to assist you through the whole process.
                        </div>
                            <Button className='loan__box--button b' onClick={toggleModal}>
                                Read More
                            </Button>
                    </div>
                </div>
            </div>
            </div>
            <Modal />
            <Modal2 />
            <Modal3 />
        </div>
    );
}

export default Loans;
