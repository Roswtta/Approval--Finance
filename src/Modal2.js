import React from 'react';
import './Modal2.css'
import Close from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const modal2 = () => {

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
        <div class="modal2">
            <div class="modal2__half modal2__about">
              <p class="modal2__title modal2__title--about">We’re Here For You</p>
              <p class="modal2__desc">
              Finding The Right Loan Solution For Our Clients For All Their Needs
              </p>
            </div>
            <div class="modal2__half modal2__contact">
            <Button className='modal2__half--button' onClick={togglemodal2}>
                Close
            </Button>
            <div class="modal2__halfhalf modal2__contact">
                <form className="contact__form" onsubmit="contact(event)">
                  <div class="form__item">
                    <input placeholder='Name' class="input" name="user_name" type="text" required></input>
                  </div>
                  <div class="form__item">
                    <input placeholder='Email' class="input" name="user_email" type="email" required></input>
                  </div>
                  <div class="form__item">
                    <input placeholder='Phone' class="input" name="user_email" type="email" required></input>
                  </div>
                  <div class="form__item">
                    <textarea placeholder='Your message' class="input" name="message" type="text" required></textarea>
                  </div>
                  <Button className='form__submit'>
                    Let's Chat
                  </Button>
                </form>
            </div>
            </div>
          </div>
    );
}

export default modal2;
