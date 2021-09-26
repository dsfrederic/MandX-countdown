import { Divider } from "@theme-ui/components"
import * as React from "react"
import Layout  from "../components/layout"
import downloadFile from '../files/Bb-en-hotels-Rennepont-april-2021.pdf' 


// markup
const Countdown = () => {

    

  return (
    <Layout >
        <h2>Praktische info</h2>
        <p>Hieronder kan je alvast wat praktische info vinden omtrent ons trouwweekend.</p>

       <span style={{padding: "25px"}}></span>
        <h4 id="shuttleHotels">Waar kan ik overnachten?</h4>
        <p>
          In onderstaand bestand kan je een lijst van accomodaties in buurt vinden. Daarenboven wordt een gratis shuttle service voorzien voor deze adressen. 
        <a href={downloadFile} download>Download lijst</a>{` `}
        </p>
        <Divider />
        {/* <h4>Dit is een vraag?</h4>
        <p>Antwoord</p>
        <Divider />
        <h4>Dit is een vraag?</h4>
        <p>Antwoord</p>
        <Divider />
        <h4>Dit is een vraag?</h4>
        <p>Antwoord</p>
        <Divider /> */}
    </Layout>
  )
}

export default Countdown
