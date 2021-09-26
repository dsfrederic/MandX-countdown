const { GoogleSpreadsheet } = require('google-spreadsheet')
const client_email = "development@rsvp-325009.iam.gserviceaccount.com";
const private_key = process.env.GOOGLE_PRIVATE_KEY;
const gSheetId = process.env.SHEET_ID

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