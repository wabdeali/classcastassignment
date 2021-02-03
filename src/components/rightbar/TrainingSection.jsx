import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles/TrainingSection.scss'

const data = [
    {
        activity: 'Box',
        place: 'Sports Club',
        time: '10:00',
        trainings: [
            {
                name: 'Warm up',
                time: '40 min'
            },
            {
                name: 'Stretches',
                time: '20 min'
            }
        ]
    },
    {
        activity: 'Crossfit',
        place: 'Sports Club',
        time: '12:00',
        trainings: [
            {
                name: 'Warm up',
                time: '20 min'
            },
            {
                name: 'Pull-ups',
                time: '20 min'
            }
        ]
    },
    {
        activity: 'Volleyball',
        place: 'School Gymansium',
        time: '2:00',
        trainings: [
            {
                name: 'Warm up',
                time: '10 min'
            },
            {
                name: 'Practice',
                time: '50 min'
            }
        ]
    },
]

function TrainingSection() {
    return (
        <div className="trainingSection-container">
            <h2>Todays trainings</h2>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={75}
                totalSlides={data.length}
                infinite={true}
                className="training-cards-container"
            >
                <ButtonBack className="carousel-button"><i class="fa fa-chevron-left" aria-hidden="true"></i></ButtonBack>
                <Slider>
                    {
                        data.map((activity, index) => (
                            <Slide index={0}>
                                <TrainingCard activity={activity} color={index % 2 === 0 ? 'blue' : 'red'} />
                            </Slide>
                        ))
                    }
                </Slider>
                <ButtonNext className="carousel-button"><i class="fa fa-chevron-right" aria-hidden="true"></i></ButtonNext>
            </CarouselProvider>
        </div>
    )
}

function TrainingCard({ activity, color }) {

    return (
        <div className={`training-card ${color}-card`}>
            <i class="fa fa-ellipsis-v training-menu-icon" aria-hidden="true"></i>
            <div className="training-details">
                <h1>{activity.activity}</h1>
                <p>{activity.place}</p>
                <span style={{ color: color === 'blue' ? '#3848ff' : '#FF7368' }}>{activity.time}</span>
            </div>
            <div className="training-content-container">
                {activity.trainings.map(training => (
                    <div className="training-content">
                        <h2>{training.name}</h2>
                        <p>{training.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrainingSection
