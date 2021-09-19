const { GoogleSpreadsheet } = require('google-spreadsheet')
const client_email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const private_key = process.env.GOOGLE_SHEETS_CLIENT_KEY;
const sheet_id = process.env.GOOGLE_SHEETS_ID

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(sheet_id)

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