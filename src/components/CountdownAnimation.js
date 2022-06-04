import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'
import { useContext} from 'react'

const CountdownAnimation = ({key = 1, timer = 20, animate = true, children}) => {

    const {stopTimer} = useContext(SettingsContext)

    return(
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={[['#fe6f6b', 0.33]]}
            strokeWidth={6}
            size={220}
            trailcolor= "#151932"
            onComplete={ () => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation

//1:01:44 