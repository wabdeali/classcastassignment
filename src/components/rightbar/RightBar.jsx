import React from 'react'
import StatusSection from './StatusSection'
import HealthSection from './HealthSection'
import TrainingSection from './TrainingSection'
import TrainerSection from './TrainerSection'
import UpgradeAd from './UpgradeAd'

function RightBar() {
    return (
        <div className="rightbar-container">
            <StatusSection />
            <div
                style={{
                    overflowY: 'scroll'
                }}>
                <HealthSection />
                <UpgradeAd />
                <TrainingSection />
            </div>
            <TrainerSection />
        </div>
    )
}

export default RightBar
