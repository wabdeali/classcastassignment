import React from 'react'
import UpgradePNG from '../../assets/upgrade.png'
import './styles/UpgradeAd.scss'

function UpgradeAd() {
    return (
        <div className="upgrade-card">
            <img src={UpgradePNG} alt="helping illustration" className="upgrade-img" />
            <div className="upgrade-body">
                <p>Sign up for a personal trainer to improve your results!</p>
                <button className="signup-button">Sign Up</button>
            </div>
        </div>
    )
}

export default UpgradeAd

