/*
testing integration with Google Sheers and Discord bot to implement server credit
currency system. Trying to use Google Sheets as credit ledger.
*/
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

function printBalance(user) {
  //console.log(`Name: ${user.name}`);
}

async function updateSpreadsheet(action, name, ammount) {
  const doc = new GoogleSpreadsheet(sheet_id); //replace with google sheets id
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  const rows = await promisify(sheet.getRows)({
    query: `name = ${name}`
  });

  rows.forEach(row => {
    if (action == "deduct") {
      row.balance -= ammount;
      row.save();
      return(`${row.name} has been deducted ${ammount} credits! Current balance: ${row.balance}`);
    }
    if (action == "award") {
      row.balance = eval(ammount) + eval(row.balance);
      row.save();
      return(`${row.name} has been awarded ${ammount} credits! Current balance: ${row.balance}`);
    }

})



}

export { updateSpreadsheet };
//updateSpreadsheet("deduct", "Kyle", 1000);
