import * as React from "react"
import CountdownContainer from "../components/countdown-container"


// markup
const Countdown = () => {
  return (
    <div>
      <CountdownContainer 
            targetDate="2022-04-28 00:00:00"
            daysLabel="dagen"
            hoursLabel="uren"
            minutesLabel="minuten"
            secondsLabel="seconden"
          />
    </div>
  )
}

export default Countdown
