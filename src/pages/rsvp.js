import React from "react"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"


import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Box,
  Button,
  Grid,
  Switch,
  Spinner
} from 'theme-ui'

const password = "juli2022"

export default class rsvp extends React.Component {
  state = {
    passwordInput: "",
    name: "",
    email: "",
    present: false,
    attendees: 1,
    arrival: "", 
    accomodation: "", 
    departure: "",
    message: "",
    disableSubmit: false,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  togglePresent = event => {
    const value = !this.state.present

    this.setState({
      ['present']: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ ['disableSubmit']: true })

    const date = new Date()

    var formData = {
      name: this.state.name,
      email: this.state.email,
      present: this.state.present,
      attendees: this.state.attendees,
      arrival:  this.state.arrival ,
      accomodation: this.state.accomodation, 
      departure: this.state.departure,
      message: this.state.message,
      date: date.toString()
    }

    fetch('/.netlify/functions/send-to-google-sheets', {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Gelukt!")

        navigate("/")
        //TODO: Reinitialize form
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Er is iets fout gelopen, gelieve opnieuw te proberen.")
        navigate("/rsvp")
      }).finally(() => {
        this.setState({ ['disableSubmit']: false })
      });
  }

  render() {
    return (
      <Layout>
        <Box as="form" onSubmit={this.handleSubmit}>
          {(this.state.passwordInput != password) && <>
            <Label htmlFor="passwordInput">Paswoord</Label>
            <Input required name="passwordInput" id="passwordInput" mb={3} value={this.state.passwordInput} onChange={this.handleInputChange} />
          </>
          }

          {(this.state.passwordInput === password) && <>

            <Label htmlFor="name">Naam</Label>
            <Input required name="name" id="name" mb={3} value={this.state.name} onChange={this.handleInputChange} />

            <Label htmlFor="email">Email</Label>
            <Input type="email" required name="email" id="email" mb={3} value={this.state.email} onChange={this.handleInputChange} />
            <div style={{ marginBottom: "1em" }}>
              <Switch required label="Zal je aanwezig zijn op het trouwfeest?" checked={this.state.present} onChange={this.togglePresent} />
            </div>

            {this.state.present && <>
              <Label htmlFor="attendees">Met hoeveel personen zal je aanwezig zijn?</Label>
              <Input type="number" min="1" required name="attendees" id="attendees" mb={3} value={this.state.attendees} onChange={this.handleInputChange} />
              
              <div style={{marginBottom: "20px"}}>
                <Label htmlFor="arrival">Wanneer zou je arriveren?</Label>
                <Label>
                  <Radio
                    name='arrival'
                    value='friday'
                    onChange={this.handleInputChange}
                  />
                  Ik arriveer op vrijdag en kom naar de welkomstborrel
                </Label>
                <Label>
                  <Radio
                    name='arrival'
                    value='saturday'
                    onChange={this.handleInputChange}
                  />
                  Ik ben aanwezig voor de ceremonie en het feest op zaterdag
                </Label>
              </div>

              <div style={{marginBottom: "20px"}}>
                <Label htmlFor="accomodation">Waar zou je verblijven?</Label>
                <Label>
                  <Radio
                    name='accomodation'
                    value='shuttle'
                    onChange={this.handleInputChange}
                  />
                  Ik wens gebruik te maken van de gratis shuttle service op zaterdag aangezien ik een hotel heb geboekt van op
                  <Link to="/faq#shuttleHotels" style={{marginLeft: "0.25em"}}> deze lijst</Link>
                </Label>
                <Label>
                  <Radio
                    name='accomodation'
                    value='camping'
                    onChange={this.handleInputChange}
                  />
                  Ik zou graag op de camping verblijven
                </Label>
                <Label>
                  <Radio
                    name='accomodation'
                    value='own'
                    onChange={this.handleInputChange}
                  />
                  Ik voorzie eigen accomodatie
                </Label>
              </div>

              <div style={{marginBottom: "20px"}}>
                <Label htmlFor="departure">Wanneer zou je vertrekken?</Label>
                <Label>
                  <Radio
                    name='departure'
                    value='before breakfast'
                    onChange={this.handleInputChange}
                  />
                  Ik ben al ribbedebie voor het ontbijt
                </Label>
                <Label>
                  <Radio
                    name='departure'
                    value='shuttle'
                    onChange={this.handleInputChange}
                  />
                  Ik neem afscheid na het ontbijt
                </Label>
            
              </div>

              <Label htmlFor="message">Heb je nog vragen/opmerkingen/...?</Label>
              <Textarea required name="message" id="message" rows={6} mb={3} value={this.state.message} onChange={this.handleInputChange} />

            </>
            }
            <Button disabled={this.state.disableSubmit}>Submit</Button>
            <br />
            {this.state.disableSubmit && <Spinner />}
          </>}
        </Box>


        <p>{Object.values(this.state)}</p>

      </Layout>
    )
  }
}