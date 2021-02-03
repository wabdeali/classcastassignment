import React from 'react'
import TrainerIcon from '../../assets/trainer_icon.png'
import './styles/TrainerSection.scss'

function TrainerSection() {
    return (
        <div className="trainerSection-container">
            <h2>Your trainers</h2>
            <div className="trainer-card">
                <img src={TrainerIcon} alt="profile" className="trainer-icon" />
                <div className="trainer-name">
                    <h1>John Kavanagh</h1>
                    <p>MMA Coach</p>
                </div>
                <span className="small-button">
                    <i className="fa fa-comments"></i>
                </span>
            </div>
            <div className="trainer-card">
                <img src={TrainerIcon} alt="profile" className="trainer-icon" />
                <div className="trainer-name">
                    <h1>Jacob Jones</h1>
                    <p>Boxing Coach</p>
                </div>
                <span className="small-button">
                    <i className="fa fa-comments"></i>
                </span>
            </div>
        </div>
    )
}

export default TrainerSection
