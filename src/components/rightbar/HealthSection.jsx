import React from 'react'
import './styles/HealthSection.scss'

function HealthSection() {
    return (
        <div className="healthSection-container">
            <h2>Health</h2>
            <div className="health-cards-container">
                <HealthSectionCard icon="fa-bed" value="6:25" unit="hours" color="#4292FE" progress={80} />
                <HealthSectionCard icon="fa-heartbeat" value="120" unit="bpm" color="#FF7368" progress={100} />
                <HealthSectionCard icon="fa-leaf" value="1:84" unit="Kcal" color="#6FCE63" progress={60} />
            </div>
        </div>
    )
}

function HealthSectionCard({ icon, value, unit, color, progress }) {
    return (
        <div className="health-card">
            <i className={`fa health-icon ${icon}`} style={{ color: color }}></i>
            <h1>{value}</h1>
            <p>{unit}</p>
            <span className="health-progress"></span>
            <div className="progress-container">
                <span className="progress" style={{ width: `${progress}%`, background: color }}></span>
            </div>
        </div>
    )
}

export default HealthSection
