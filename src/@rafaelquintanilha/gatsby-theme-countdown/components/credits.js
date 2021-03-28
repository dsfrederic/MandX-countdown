/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import LOGO from './logo.png';


const Credits = () => (
  <div >
    <div style={{ "text-align": "center" }}>
      <h2>SAVE THE DATES</h2>
      <p>Meer info volgt!</p>
      <hr />
      <div>
        <h3>18 juni 2022</h3>
        <p>
          Trouw voor de wet <br />
          Gemeentehuis Berlare

        </p>
      </div>
      <hr />
      <div>

        <h3>15-17 juli 2022</h3>
        <p>Trouwweekend in de Champagne streek</p>
        
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
);

export default Credits;