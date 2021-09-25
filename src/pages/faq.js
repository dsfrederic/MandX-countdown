import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"


import {
  Label,
  Input,
  Textarea,
  Box,
  Button,
  Switch,
  Spinner
} from 'theme-ui'


export default class rsvp extends React.Component {
  state = {
    name: "",
    email: "",
    present: true,
    attendees: "",
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
        <div>
          Inleidende tekstje
        </div>
        <Box as="form" onSubmit={this.handleSubmit}>

          <Label htmlFor="name">Naam</Label>
          <Input required name="name" id="name" mb={3} value={this.state.name} onChange={this.handleInputChange} />

          <Label htmlFor="email">Email</Label>
          <Input type="email" required name="email" id="email" mb={3} value={this.state.email} onChange={this.handleInputChange} />

          <Switch required label="Zal je aanwezig zijn op de babyborrel?" checked={this.state.present} onChange={this.togglePresent} />


          {this.state.present && <>
            <Label htmlFor="attendees">Met hoeveel personen zal je aanwezig zijn?</Label>
            <Input type="number" min="1" required name="attendees" id="attendees" mb={3} value={this.state.attendees} onChange={this.handleInputChange} />

            <Label htmlFor="message">Heb je nog vragen/opmerkingen/...?</Label>
            <Textarea required name="message" id="message" rows={6} mb={3} value={this.state.message} onChange={this.handleInputChange} />

          </>
          }
          <Button disabled={this.state.disableSubmit}>Submit</Button>
          <br />
          {this.state.disableSubmit && <Spinner />}

        </Box>
      </Layout>
    )
  }
}