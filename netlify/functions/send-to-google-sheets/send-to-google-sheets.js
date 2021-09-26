const { GoogleSpreadsheet } = require('google-spreadsheet')
const client_email = "development@rsvp-325009.iam.gserviceaccount.com";
// const private_key = process.env.GOOGLE_PRIVATE_KEY;
// const gSheetId = process.env.SHEET_ID;

const gSheetId ="1ScXgMS7_C5XV8C6fXJAZhMR9ZD4CZbBYOLxbUhXuvRY";
const private_key= "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5BlQHAgPpk/CT\nZSsmlCehN/sHPwiytkijTJsmhy9dEGxuawj5euQd0Cx+Q97/+B0T73DKstbC82vx\ne+7qwKud205lZKEQESNHLx6n4mabYAvsR45ZPnK7r0deASHrCDTqmhUh5qMZoyWk\nr0RkyP9oDRZ+U7RdynrAb1ifVH+nGSv4tsnq72DHLnOgC64QhR7NrC3nqJFIeK0R\n2c3uR4XrqZcTw9dEw8fsnaEJqCdOgcGmzHanYc8uYInvl7BFzseXvo7waek4AA5M\nlhUQjKWYtB0RgetjyZ31OMJss74fKHTRLFP32YoWurFnshZkx3AK0nelx9rPvwYR\naybplspzAgMBAAECggEAHW6VRTwb1TcUSM4KDCv7Fdkq1F9BifQXH+rar0lHzn0D\nUpkyJ0VWLivkN/2h5oPYVEh9X7ENGpvQKuy096DIa+br1JMqT7z6KKOlM71+5u5j\nVyWWzjlx1MswBhMWCyYWDM+P1wGyJizemxDKR2H1xt52GohEI7tGxX+w0D+HwtOn\n/hzNgFrGbRgVQIV8voInjrTVoeinPK3whj7QM+Uvc3Jh5ispytQaHj1BufIW3imv\nDCyvaSwhXtfVfaRu5Z3KS2CK2qvkuXCzTFNvGwG9NdouQrur1FU1c8qCxE1Prd7x\nAR+YgnzYjZ8wlqsMt62uXVxzNOiLepmBY/KfBsoKKQKBgQDa1wBYb65NQlk+M6j+\nFC0A/XbpHSmxiu1+KbEB/DLD0jSQH0GJ+DxoGLusHhfLpJ56vy8q59LqlKjAFCwa\nIZvngUpDzo2kDr79KnMIWjDtHec0W0VFcvHSsbRtPsNHtAGgZVFO990mFNZ2Cu1d\nFW+jaV1z3ouL9Ab4mUdfpstvzQKBgQDYcWDl/1xQi20OguKxdY6OaFmBbUwWfi8X\nhlGMmO6W0MyJmx9Q9UIT3dGaYDxUrvUZhzAteUoGC/+Isokp5VFNiAHByIfV7+3g\nXSC7E4EdV7lu3YdcAGLcpk7cHwgcXa33aZsumKsoQBMUitIMalITn0BmrrW6zfF3\nMqUeCHJjPwKBgBIC9CJTPtNZDKNT+SrAWlvkgK77GX1lY9qob8ssCLmZSX47NFe4\nuLAQqRGngGngaLLNnYI4hmGMTr9QabjU31IUkBo4m+vO0uVfYwxi7/f0KB1lDbSD\nm2et/J2pNsVmCWQ8Mo7/U5JY0LXyfErXAtM+TtTEklO4iAJaC0fSIJhZAoGAJW6G\nOYCOMIfMVoQgPFx+SPaW9CE41XMBJepe1Bfmu0Jk/S9MnS2tPc5Q34fhJywSy1Vr\n6ZFeUellSfjGa+5yvxvUYfUSONeDphe0/2WCINb5BMlfDXQrpMlGPh9HwdAZs/4Z\njlds0ksygYz4gpkolKgn9Rol56aSKfEiSS1gyvUCgYAkVAP9k/j8kQxWtrMsrQQ/\nZC6JbvXYFO4iR8R/jD5wxECFf+qBpxiXEZLeOMq8vvuw6LhcxqFoA6wJF9w78YDK\ngPbB6JWnywt3pJ5rT17EJoQiffxJu51UxD79obYpRm/lTnbhJtbr0hbTQfsmzkRP\nRDeMoafOu4PVawGbxXk8lg==\n-----END PRIVATE KEY-----\n";


exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(gSheetId)

    await doc.useServiceAccountAuth({
      client_email: client_email,
      private_key: private_key,
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    console.log(doc.title);
    console.log(sheet.title);
    console.log(sheet.rowCount);

    const data = JSON.parse(event.body)
    const addedRow = await sheet.addRow(data)


    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`,
      }),
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: e.toString(),
    }
  }
}