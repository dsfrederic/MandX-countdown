import { Container } from "@theme-ui/components"
import * as React from "react"
import CountdownContainer from "../components/countdown-container"
import Layout from "../components/layout"
import LOGO from '../images/rennepont.png';


// markup
const Countdown = () => {
  return (
    <Layout bgColor="primary" txtColor="#fff">
      <CountdownContainer
        targetDate="2022-07-16 15:00:00"
        daysLabel="dagen"
        hoursLabel="uren"
        minutesLabel="minuten"
        secondsLabel="seconden"
      />
      <div >
        <div style={{ "text-align": "center" }}>
          <h2>SAVE THE DATES</h2>
          <hr style={{ width: "25%" }} />
          <div>
            <h3>18 juni 2022</h3>
            <p>
              Trouw voor de wet <br />
              Gemeentehuis Berlare

            </p>
          </div>
          <hr style={{ width: "25%" }} />
          <div>

            <h3>15-17 juli 2022</h3>
            <p>Trouwweekend in de Champagne streek te Frankrijk</p>

            <h5>Vrijdag</h5>
            <p>Welkomstborrel</p>
            <h5>Zaterdag</h5>
            <p>Ceremonie & party</p>
            <h5>Zondag</h5>
            <p>Afscheidsbrunch</p>

            <img src={LOGO} />
          </div>


        </div>
      </div>
    </Layout>
  )
}

export default Countdown
