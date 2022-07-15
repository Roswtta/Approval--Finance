import React from 'react';
import './Modal.css'
import Close from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const Modal = () => {

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
        <div class="modal">
            <div class="modal__half modal__about">
              <p class="modal__title modal__title--about">Residential Loans</p>
              <p class="modal__desc">
              If you are buying your first home, refinancing or investing, Approval Finance is here to help you with expert advice throughout the whole process.
              <p class="modal__titlee modal__title--about">Residential Loans we provide:</p>
                <div className='modal__loans'>
                    <div className='modal__loans--loan'>
                        Basic Home Loan
                    </div>
                    <div className='modal__loans--loan'>
                        Refinance
                    </div>
                    <div className='modal__loans--loan'>
                        Investment
                    </div>
                    <div className='modal__loans--loan'>
                        Construction Loan
                    </div>
                    <div className='modal__loans--loan'>
                        Bridging Loan
                    </div>
                    <div className='modal__loans--loan'>
                        Lo Doc Loan
                    </div>
                    <div className='modal__loans--loan'>
                        Cross-Collaterialised Loan
                    </div>
                </div>
              </p>
            </div>
            <div class="modal__half modal__contact">
            <Button className='modal__half--button' onClick={toggleModal}>
                Close
            </Button>
              <p class="modal__title modal__title--contact">
                Commercial Loans
              </p>
                <p class="modal__desc modal__sub-title__contact">
                Whether you are looking to purchase a commercial property as an investor or you are buying a commercial property for your business premises, Approval Finance is here to assist you through the whole process.
                    <br /><br />
                    There are many benefits of using a broker: <br />
                    • We do all the legwork <br />
                    • You’ll receive a choice of lenders <br />
                    • We consider a range of options for you <br />
                    • Being industry experts, we narrow down the options to suit your specific needs <br />
                    • We help complete all the necessary paperwork and manage your application process from start to finish.<br /> 
                    <br /><br />
                    Whatever your commercial lending requirements are, Approval Finance and experienced industry experts with access to a wide range of lending solutions to suit your needs. <br />

                    To discuss which home loan option is best for you, contact Approval Finance today!
                </p>
            </div>
          </div>
    );
}

export default Modal;
