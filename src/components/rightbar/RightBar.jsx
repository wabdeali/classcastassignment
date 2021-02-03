import React from 'react'
import StatusSection from './StatusSection'
import HealthSection from './HealthSection'
import TrainingSection from './TrainingSection'
import TrainerSection from './TrainerSection'

function RightBar() {
    return (
        <div className="rightbar-container">
            <StatusSection />
            <HealthSection />
            <TrainingSection />
            <TrainerSection />
        </div>
    )
}

export default RightBar
