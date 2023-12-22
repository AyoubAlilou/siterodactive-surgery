import React, { Fragment } from 'react'
import Menu from './Menu'

function Contact() {
  return (
    <Fragment>
      {/* header section start */}
      <div className='container-fluid'>
        <Menu/>
      </div>
      {/* header section end */}
      {/* layout main section start */}
      <div className='container-fluid'>
        <div className='layout_main'>
          {/* layout main section start */}
          <div className='container-fluid'>
            <div className='layout_main'>
              {/* banner section start */}
              <div className='banner_section'>
                <div className='container'>
                  <div className='menu_main'>
                    <div className='custome_menu'>
                      <ul>
                        <li>
                          <a href='index.html'>Home</a>
                        </li>
                        <li>
                          <a href='service.html'>Services</a>
                        </li>
                        <li>
                          <a href='about.html'>About</a>
                        </li>
                        <li>
                          <a href='blog.html'>Blog</a>
                        </li>
                        <li>
                          <a href='shop.html'>Shop</a>
                        </li>
                        <li className='active'>
                          <a href='contact.html'>Contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div className='login_menu'>
                      <ul>
                        <li>
                          <a href='#'>Login</a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-search' aria-hidden='true' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* banner section end */}
              {/* contact section start */}
              <div className='contact_section'>
                <div className='container'>
                  <div className='contact_section_2'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h1 className='contact_taital'>Get In Touch</h1>
                        <form action=''>
                          <div className='mail_section_1'>
                            <input
                              type='text'
                              className='mail_text'
                              placeholder='Name'
                              name='Name'
                            />
                            <input
                              type='text'
                              className='mail_text'
                              placeholder='Phone Number'
                              name='Phone Number'
                            />
                            <input
                              type='text'
                              className='mail_text'
                              placeholder='Email'
                              name='Email'
                            />
                            <textarea
                              className='massage-bt'
                              placeholder='Massage'
                              rows={5}
                              id='comment'
                              name='Massage'
                              defaultValue={''}
                            />
                            <div className='send_bt'>
                              <a href='#'>SEND</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* order section start */}
                    <div className='order_section'>
                      <div className='order_taital_main'>
                        <h1 className='order_taital'>
                          Order Best food at time
                        </h1>
                        <div className='order_bt'>
                          <a href='#'>Order Now</a>
                        </div>
                      </div>
                    </div>
                    {/* order section end */}
                  </div>
                </div>
              </div>
              {/* contact section end */}
              {/* footer section start */}
              <div className='footer_section'>
                <div className='container'>
                  <div className='footer_sectio_2'>
                    <div className='row'>
                      <div className='col-lg-3 col-md-6'>
                        <h2 className='footer_logo'>Foodfinda</h2>
                        <p className='footer_text'>
                          t is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of{' '}
                        </p>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <h2 className='useful_text'>Navigation</h2>
                        <div className='footer_menu'>
                          <ul>
                            <li className='active'>
                              <a href='index.html'>Home</a>
                            </li>
                            <li>
                              <a href='about.html'>About</a>
                            </li>
                            <li>
                              <a href='location.html'>Location</a>
                            </li>
                            <li>
                              <a href='service.html'>Services</a>
                            </li>
                            <li>
                              <a href='features.html'>Features</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <h2 className='useful_text'>Contact Info</h2>
                        <p className='address_text'>Office Address</p>
                        <div className='map_icon'>
                          <a href='#'>
                            <i
                              className='fa fa-map-marker'
                              aria-hidden='true'
                            />
                            <span className='padding_left15'>
                              Loram ipusm New York, NY 36524
                            </span>
                          </a>
                        </div>
                        <p className='address_text'>Customer Service:</p>
                        <div className='map_icon'>
                          <a href='#'>
                            <i className='fa fa-phone' aria-hidden='true' />
                            <span className='padding_left15'>
                              ( +01 1234567890 )
                            </span>
                          </a>
                        </div>
                        <div className='map_icon'>
                          <a href='#'>
                            <i className='fa fa-envelope' aria-hidden='true' />
                            <span className='padding_left15'>
                              demo@gmail.com
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6'>
                        <h2 className='useful_text'>Discover</h2>
                        <div className='subscribe_menu'>
                          <ul>
                            <li>
                              <a href='#'>Help</a>
                            </li>
                            <li>
                              <a href='#'>How It Works</a>
                            </li>
                            <li>
                              <a href='#'>subscribe</a>
                            </li>
                            <li>
                              <a href='contact.html'>Contact Us</a>
                            </li>
                          </ul>
                        </div>
                        <div className='social_icon'>
                          <ul>
                            <li>
                              <a href='#'>
                                <i
                                  className='fa fa-facebook'
                                  aria-hidden='true'
                                />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i
                                  className='fa fa-twitter'
                                  aria-hidden='true'
                                />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i
                                  className='fa fa-linkedin'
                                  aria-hidden='true'
                                />
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i
                                  className='fa fa-instagram'
                                  aria-hidden='true'
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer section end */}
            </div>
          </div>
          {/* layout main section end */}
          {/* copyright section start */}
          <div className='copyright_section'>
            <div className='container'>
              <p className='copyright_text'>
                2020 All Rights Reserved. Design by{' '}
                <a href='https://html.design'>Free html Templates</a>
              </p>
            </div>
          </div>
          {/* copyright section end */}
          {/* Javascript files*/}
          {/* sidebar */}
          {/* javascript */}
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
