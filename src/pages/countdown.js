import { Container } from "@theme-ui/components"
import * as React from "react"
import CountdownContainer from "../components/countdown-container"
import Layout  from "../components/layout"

// markup
const Countdown = () => {
  return (
    <Layout>
      <CountdownContainer 
            targetDate="2022-04-28 00:00:00"
            daysLabel="dagen"
            hoursLabel="uren"
            minutesLabel="minuten"
            secondsLabel="seconden"
          />
    </Layout>
  )
}

export default Countdown
