import React from 'react';
// import styled, { css } from 'styled-components/macro';
// import { FaRockrms } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import styles from 'Navbar.css';
// import { menuData } from '../../data/MenuData';
// import { Button } from './Button';
 import { BiDownArrow } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {



  return (
    <nav className="navbar">
      <div className="container">
        <input type="checkbox" name="" id="check" />

        <div className="logo-container">
          <h3 className="logo">
            SAW-IT<span>watch</span>
          </h3>
        </div>

        <div className="nav-btn">
          <div className="nav-links">
            <ul>
              <li className="nav-link" style={{ '--i': '.6s' }}>
                <Link className="sublink" to="/movie-app">
                  Home
                </Link>
              </li>
              <li className="nav-link" style={{ '--i': '.85s' }}>
                <Link className="sublink" to="/movies">
                  Movies
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 1
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 2
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 3<BiDownArrow />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 1
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 2
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 3
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              More
                              <BiDownArrow />
                            </Link>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 1
                                  </Link>
                                </li>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 2
                                  </Link>
                                </li>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 3
                                  </Link>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 4
                      </Link>
                    </li>

                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ '--i': '1.1s' }}>
                <Link className="sublink" to="/tv">
                  TV Series
                </Link>
                <div className="dropdown">
                  <ul>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 1
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 2
                      </Link>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 3<BiDownArrow />
                      </Link>
                      <div className="dropdown second">
                        <ul>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 1
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 2
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              Link 3
                            </Link>
                          </li>
                          <li className="dropdown-link">
                            <Link className="sublink" to="#">
                              More
                              <BiDownArrow />
                            </Link>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 1
                                  </Link>
                                </li>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 2
                                  </Link>
                                </li>
                                <li className="dropdown-link">
                                  <Link className="sublink" to="#">
                                    Link 3
                                  </Link>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown-link">
                      <Link className="sublink" to="#">
                        Link 4
                      </Link>
                    </li>
                    <div className="arrow"></div>
                  </ul>
                </div>
              </li>
              <li className="nav-link" style={{ '--i': '1.35s' }}>
                <Link className="sublink" to="#">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="log-sign" style={{ '--i': '1.8s' }}>
            <Link className="sublink btn transparent" to="/login">
              Log in
            </Link>
            <Link className="sublink btn solid " to="/signup">
              Sign up
            </Link>
          </div>
        </div>

        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
