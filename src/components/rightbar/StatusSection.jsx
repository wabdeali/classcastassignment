import React from 'react'
import './styles/StatusSection.scss';

function StatusSection() {
    return (
        <div className="statusSection-container">
            <i className="fa fa-user-circle"></i>
            <div className="name-container">
                <p className="name">Abdeali W</p>
                <p className="account-status">Free Account</p>
            </div>
            <div className="button-container">
                <span className="small-button">
                    <span className="notification-number">1</span>
                    <i className="fa fa-bell"></i>
                </span>
                <span className="small-button">
                    <i className="fa fa-sliders"></i>
                </span>
            </div>
        </div>
    )
}

export default StatusSection
