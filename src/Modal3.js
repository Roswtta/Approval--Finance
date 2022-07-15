import React from 'react';
import './Modal3.css'
import Close from '@mui/icons-material/Close';
import { Button } from '@mui/material';

const modal3 = () => {

    let isModal3Open = false;

    function toggleModal3() {
        if (isModal3Open) {
            isModal3Open = false;
            return document.body.classList.remove("modal3--open");
        }
            isModal3Open = true;
            document.body.classList += " modal3--open";
    }

    return (
        <div class="modal3">
            <div class="modal3__half modal3__about">
              <p class="modal3__title modal3__title--about">We’re Here For You</p>
              <p class="modal3__desc">
              Finding The Right Loan Solution For Our Clients
              </p>
            </div>
            <div class="modal3__half modal3__contact">
            <Button className='modal3__half--button' onClick={toggleModal3}>
                Close
            </Button>
            <div class="modal3__halfhalf modal3__contact">
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

export default modal3;
