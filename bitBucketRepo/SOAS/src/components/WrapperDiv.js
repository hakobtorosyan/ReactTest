import React, { Component } from 'react';
import LeftBarList from './LeftBarList';
import "../images/favicon.ico";
import "../styles/TreeView.css";
import "../styles/buttons.css";
import "../styles/font-awesome.min.css";
import "../styles/ionicons.min.css";
import "../styles/admin-lte.min.css";
import "../styles/_all-skins.min.css";
import "../styles/clock.css";
import userLogo from '../img/user.svg';
import dashboardImage from '../images/nkar.png';
class WrapperDiv extends Component {
    render() {
           let styleForImg = {
                margin: 30,
                bottom: 100
        }
        return ( <div>
                    <header className="main-header">
                        <a href="#" className="logo">
                            <span className="logo-lg specialClass">FinTech</span>
                        </a>
                        <nav className="navbar navbar-static-top" role="navigation">
                            <a href="#" id="navBarToggleId" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">

                                    <li className="dropdown messages-menu" id="clockli">
                                        <div >
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div className="city">Tokyo</div>
                                                        <div className="time">15:46:26</div>
                                                    </td>
                                                    <td>
                                                        <div className="city">Yerevan</div>
                                                        <div className="time">10:46:26</div>
                                                    </td>
                                                    <td>
                                                        <div className="city">London</div>
                                                        <div className="time">06:46:26</div>
                                                    </td>
                                                    <td>
                                                        <div className="city">New York</div>
                                                        <div className="time">01:46:26</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </li>

                                    <li className="dropdown messages-menu">
                                        <a href="~/Calendar/Calendar" id="calendarLinkId">
                                            <i className="fa fa-calendar"/>
                                        </a>
                                    </li>

                                    <li className="dropdown messages-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o"/>
                                            <span className="label label-success">4</span>
                                        </a>
                                    </li>
                                    <li className="dropdown notifications-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o"/>
                                            <span className="label label-warning">10</span>
                                        </a>

                                    </li>
                                    <li className="dropdown tasks-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-flag-o"/>
                                            <span className="label label-danger">9</span>
                                        </a>
                                    </li>

                                    <li className="dropdown user user-menu " >
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src={userLogo} className="user-image" alt=""/>
                                                <span className="hidden-xs"> John Smith</span>
                                                <i className="fa fa-circle text-success"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <aside className="main-sidebar">
                        <section className="sidebar">
                            <div className="user-panel">
                                <div className="pull-left image">
                                </div>
                            </div>

                            <LeftBarList/>

                        </section>
                    </aside>

                    <div className="content-wrapper">
                        <section className="content">
                            <img src={dashboardImage} className="user-image" alt="" style={styleForImg}/>
                        </section>
                    </div>

                    <div className="control-sidebar-bg"></div>
                </div>
        );
    }
}

export default WrapperDiv;