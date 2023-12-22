import React, { Fragment } from 'react'
import Menu from './Menu'
function Index() {
  return (
    <Fragment>
      {/* header section start */}
      <div className='container-fluid'>
        <Menu />
      </div>
      {/* header section end */}
      {/* layout main section start */}
      <div className='container-fluid'>
        <div className='layout_main'>
          {/* banner section start */}
          <div className='banner_section'>
            <div className='container'>
              <div className='menu_main'>
                <div className='custome_menu'>
                  <ul>
                    <li className='active'>
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
                    <li>
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
            <div
              id='main_slider'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h1 className='banner_taital'>
                          Find The Best Restaurants Cafes And Bars in{' '}
                        </h1>
                        <h1 className='banner_text'>YOUR CITY</h1>
                        <div className='banner_main'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-secondary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              All Category
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                          <div className='main'>
                            {/* Another variation with a button */}
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Search'
                              />
                              <div className='input-group-append'>
                                <button
                                  className='btn btn-secondary'
                                  type='button'
                                  style={{
                                    backgroundColor: '#ffffff',
                                    borderColor: '#ffffff',
                                  }}
                                >
                                  <i
                                    className='fa fa-search'
                                    style={{ color: '#191919' }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='ordernow_bt'>
                          <a href='#'>Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h1 className='banner_taital'>
                          Find The Best Restaurants Cafes And Bars in{' '}
                        </h1>
                        <h1 className='banner_text'>YOUR CITY</h1>
                        <div className='banner_main'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-secondary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              All Category
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                          <div className='main'>
                            {/* Another variation with a button */}
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Search this blog'
                              />
                              <div className='input-group-append'>
                                <button
                                  className='btn btn-secondary'
                                  type='button'
                                  style={{
                                    backgroundColor: '#ffffff',
                                    borderColor: '#ffffff',
                                  }}
                                >
                                  <i
                                    className='fa fa-search'
                                    style={{ color: '#191919' }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='ordernow_bt'>
                          <a href='#'>Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h1 className='banner_taital'>
                          Find The Best Restaurants Cafes And Bars in{' '}
                        </h1>
                        <h1 className='banner_text'>YOUR CITY</h1>
                        <div className='banner_main'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-secondary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              All Category
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <a className='dropdown-item' href='#'>
                                Action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Another action
                              </a>
                              <a className='dropdown-item' href='#'>
                                Something else here
                              </a>
                            </div>
                          </div>
                          <div className='main'>
                            {/* Another variation with a button */}
                            <div className='input-group'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Search this blog'
                              />
                              <div className='input-group-append'>
                                <button
                                  className='btn btn-secondary'
                                  type='button'
                                  style={{
                                    backgroundColor: '#ffffff',
                                    borderColor: '#ffffff',
                                  }}
                                >
                                  <i
                                    className='fa fa-search'
                                    style={{ color: '#191919' }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='ordernow_bt'>
                          <a href='#'>Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#main_slider'
                role='button'
                data-slide='prev'
              >
                <i className='fa fa-angle-left' />
              </a>
              <a
                className='carousel-control-next'
                href='#main_slider'
                role='button'
                data-slide='next'
              >
                <i className='fa fa-angle-right' />
              </a>
            </div>
          </div>
          {/* banner section end */}
          {/* service section start */}
          <div className='service_section layout_padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h1 className='service_taital'>Quick Searches</h1>
                </div>
              </div>
              <div className='service_section_2'>
                <div className='row'>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/breakfast-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Breakfast</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/delivery-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Delivery</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/dinner-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Dinner</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/coffee-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Coffee</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/alcohol-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Alcohol</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='service_box'>
                      <div className='breakfast_img'>
                        <img src='assets/images/diningtable-img.png' />
                      </div>
                    </div>
                    <h4 className='breakfast_text'>Diningtable</h4>
                    <div className='seemore_bt'>
                      <a href='#'>See More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* service section end */}
          {/* blog section start */}
          <div className='blog_section layout_padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h1 className='blog_taital'>Collections Food In city</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='blog_section_2 layout_padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='blog_img'>
                    <img src='assets/images/blog-img1.png' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='blog_taital_main'>
                    <h1 className='blog_text'>This Week going</h1>
                    <p className='lorem_text'>
                      Long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className='readmore_btn'>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='blog_img'>
                    <img src='assets/images/blog-img2.png' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='blog_taital_main'>
                    <h1 className='blog_text'>Just Delivery Food</h1>
                    <p className='lorem_text'>
                      Long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className='readmore_btn'>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='blog_img'>
                    <img src='assets/images/blog-img3.png' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='blog_taital_main'>
                    <h1 className='blog_text'>Newly Opened Cafe</h1>
                    <p className='lorem_text'>
                      Long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className='readmore_btn'>
                      <a href='#'>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* blog section end */}
          {/* shop section start */}
          <div className='shop_section layout_padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <h1 className='shop_taital'>
                    Get the <br />
                    <span style={{ color: '#18191a' }}>Food Finda App</span>
                  </h1>
                  <p className='shop_text'>
                    Long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as
                  </p>
                  <div className='app_icon_main'>
                    <div className='app_icon'>
                      <img src='assets/images/icon-1.png' />
                    </div>
                    <div className='app_icon'>
                      <img src='assets/images/icon-2.png' />
                    </div>
                  </div>
                  <div className='download_bt'>
                    <a href='#'>Download Now</a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mobile_img'>
                    <img src='assets/images/mobile-img.png' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop section end */}
          {/* testimonial section start */}
          <div className='testimonial_section layout_padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <h1 className='testimonial_taital'>Customers Says</h1>
                </div>
              </div>
              <div
                id='my_slider'
                className='carousel slide'
                data-ride='carousel'
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <div className='testimonial_section_2'>
                      <div className='row'>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Loliy Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Den Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Jonshon Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='testimonial_section_2'>
                      <div className='row'>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Loliy Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Den Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Jonshon Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='testimonial_section_2'>
                      <div className='row'>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Loliy Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Den Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                        <div className='col-md-4'>
                          <h4 className='customer_text'>Jonshon Mark</h4>
                          <p className='many_text'>
                            Now use Lorem Ipsum as their default model text, and
                            a search for 'loremnow use Lorem Ipsum as their
                            default model text, and a search for 'lorem
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#my_slider'
                  role='button'
                  data-slide='prev'
                >
                  <i className='fa fa-arrow-left' />
                </a>
                <a
                  className='carousel-control-next'
                  href='#my_slider'
                  role='button'
                  data-slide='next'
                >
                  <i className='fa fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
          {/* testimonial section end */}
          {/* contact section start */}
          <div className='contact_section layout_padding'>
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
                    <h1 className='order_taital'>Order Best food at time</h1>
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
                      distracted by the readable content of a page when looking
                      at its layout. The point of{' '}
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
                        <i className='fa fa-map-marker' aria-hidden='true' />
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
                        <span className='padding_left15'>demo@gmail.com</span>
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
                            <i className='fa fa-facebook' aria-hidden='true' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' aria-hidden='true' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-linkedin' aria-hidden='true' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' aria-hidden='true' />
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
    </Fragment>
  )
}

export default Index
