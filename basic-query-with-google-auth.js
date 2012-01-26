var GoogleSpreadsheets = require("./lib/node-google-spreadsheets/lib/spreadsheets.js");
var GoogleClientLogin = require('googleclientlogin').GoogleClientLogin;

var googleAuth = new GoogleClientLogin({
  email: 'co@zzeroo.com',
  password: '#asrael666#',
  service: 'spreadsheets',
  accountType: GoogleClientLogin.accountTypes.google
});

googleAuth.on(GoogleClientLogin.events.login, function(){
    GoogleSpreadsheets({
        key: '0ApRmqiPgVsXFdDVpdTVxNGJwR0M5NVI5ZHFEQk1ockE',
        auth: googleAuth.getAuthId()
    }, function(err, spreadsheet) {
        spreadsheet.worksheets[0].cells({
            range: "R2C1:R4C6"
        }, function(err, cells) {
            // bleh!
            console.log(cells);
        });
    });
});

googleAuth.login();
