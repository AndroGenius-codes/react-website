import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Got any complaint? need information?
        </p>
        <p className='footer-subscription-text'>
          Email us
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items about-us'>
            <h2>About Us</h2>
            <Link to='/Reservation'>make a reservation</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items contact-item' >
            <h2>Contact Us</h2>
            <Link to='/'>Email@email.com</Link>
            <Link to='/'>000 0000 0000</Link>
            <Link to='/'>No.1 no name street</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items social-media'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <Link 
            to="/"
            class='website-rights'>ANDROGENIUS-codes © 2020</Link>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;