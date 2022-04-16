import { Divider } from "@theme-ui/components"
import { Grid, Box } from 'theme-ui'

import * as React from "react"
import Layout from "../components/layout"
import downloadFile from '../files/Bb-en-hotels-Rennepont-april-2021.pdf'
import route_1 from '../images/route_1.png';
import route_2 from '../images/route_2.png';


/** @jsx jsx */
import { jsx } from "theme-ui"


// markup
const Countdown = () => {



  return (
    <Layout >
      <h2>Praktische info</h2>
      <p>Hieronder kan je alvast wat praktische info vinden omtrent ons trouwweekend.</p>

      <span style={{ padding: "25px" }}></span>
      <h4 id="shuttleHotels">Waar kan ik overnachten?</h4>
      <p>
        In onderstaand bestand kan je een lijst van accomodaties in buurt vinden. Daarenboven wordt een gratis shuttle service voorzien voor deze adressen.
        <a href={downloadFile}
          sx={{
            color: "primary",
            textDecoration: "none",
            '&: hover': {
              color: "secondary"
            }
          }} download>
          Download lijst
        </a>
      </p>
      <Divider />
      <h4>Hoe geraak ik in Rennepont?</h4>
      <p>
        De gemakkelijkste manier om naar onze trouwlocatie te komen is met de wagen. Er zijn 2 mogelijke routes via Rijsel of via Brussel/Charleroi. Tip: via deze laatste route is de tol merkelijk lager in vergelijking met de route via Rijsel.
      </p>
      <Grid gap={2} columns={[1, 1, 2]}>
        <Box><img style={{ width: "100%", height: "auto" }} src={route_1} /></Box>
        <Box><img style={{ width: "100%", height: "auto" }} src={route_2} /></Box>
      </Grid>
      <p>
        Adres Domaine Rennepont: 31 Rue Principale, FR-52370 Rennepont
      </p>
      <Divider />
      <h4>Is er een dresscode?</h4>
      <p>Zaterdag: Men suit up, women cocktail! <br />Tip voor de dames: draag geen fijne hakjes, de receptie vindt plaats op kiezeltjes en op een grasplein
      </p>
      <Divider />
      <h4>Hoe ziet het programma er uit?</h4>
      <p>Vrijdagavond verwelkomen we jullie vanaf 18h00 in Domaine Rennepont voor een welkomstborrel met een hapje in franse stijl. <br />
        <br />Zaterdagvoormiddag kan ieder invullen naar eigen wens in of rond zijn/haar accommodatie: een rustige brunch, de eerste kater verwerken, een wandelingetje of een bezoekje aan een champagneboer. It's up to you! <br/>Tussen 14h00 en 14h30 verzamelt iedereen op Domaine Rennepont. De ceremonie start om 15h00, gevolgd door de ceremonie, receptie, diner en dansfeest.
        <br /> Op zondag verwelkomen we jullie opnieuw op het Domaine om 10h00 voor een ontbijtje.
      </p>
      <Divider />
      <h4>Hoe werkt de shuttledienst op zaterdag?</h4>
      <p>
        Enkel de personen die een hotel geboekt hebben dat op de lijst stond en hebben aangeduid van de shuttle gebruik te maken via het inschrijvingsformulier, zullen op zaterdag worden opgepikt. Deze personen zullen tijdig een individueel uur ontvangen waarop hij/zij dient klaar te staan aan de ingang van het verblijf.
        <br />Het dansfeest is afgelopen rond 2h00 à 2h30. De shuttles staan dan klaar om diegene die 's middags opgepikt werden, veilig terug naar hun verblijf te brengen.
      </p>
      <Divider />
    </Layout>
  )
}

export default Countdown
