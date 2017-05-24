import React, { Component } from 'react';
import "../styles/style.css";
import "../styles/TreeView.css";
import "../styles/buttons.css";
import "../styles/select2.min.css";
import "../styles/font-awesome.min.css";
import "../styles/bootstrap.min.css";
import "../styles/ionicons.min.css";
import "../styles/admin-lte.min.css";
import "../styles/_all-skins.min.css";
import "../styles/clock.css";

class LeftBarList extends Component {
    render() {
        return (
            <div >
                <ul className="sidebar-menu">
                    <li className="treeview">
                        <hr className="line"></hr>
                    </li>
                    <li id="dashboardmenuitem" className="active">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li id="portfoliomenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Portfolio</span>
                        </a>
                    </li>
                    <li id="riskmanagementmenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Risk Management</span>
                        </a>
                    </li>
                    <li id="marketscannermenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Market Scanner</span>
                        </a>
                    </li>
                    <li id="articalsmenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Articals</span>
                        </a>
                    </li>
                    <li id="tradeledgermenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Trade Ledger</span>
                        </a>
                    </li>
                    <li className="treeview">
                        <hr className="line"></hr>
                    </li>
                    <li id="wikimenuitem">
                        <a className="menuajaxrender" href="#">
                            <i className="fa fa-table"/>
                            <span>Wiki</span>
                        </a>
                    </li>
                    <li className="treeview">
                        <hr className="line"></hr>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LeftBarList;