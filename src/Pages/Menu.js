import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <Fragment>
      <div className='header_section'>
        <div className='container'>
          <nav className='navbar navbar-light bg-light justify-content-between'>
            <div id='mySidenav' className='sidenav'>
              <a href='index.html'>Home</a>
              <a href='service.html'>Services</a>
              <a href='about.html'>About</a>
              <a href='blog.html'>Blog</a>
              <a href='shop.html'>Shop</a>
              <a href='contacts.html'>Contacts</a>
            </div>
            <form className='form-inline '>
              <div className='login_text'>
                <a href='#'>
                  <i className='fa fa-phone' aria-hidden='true' />
                  <span className='padding_left10'>Call : +01 1234567890</span>
                </a>
              </div>
            </form>
            <a className='logo' href='index.html'>
              <img src='assets/images/logo.png' />
            </a>
            <span className='toggle' onclick='openNav()'>
              <i className='fa fa-bars' />
            </span>
            <div className='login_text'>
              <a href='#'>
                <i className='fa fa-envelope' aria-hidden='true' />
                <span className='padding_left10'>Email : Demo@gmail.com</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  )
}

export default Menu
