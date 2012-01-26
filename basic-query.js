var GoogleSpreadsheets = require("./lib/node-google-spreadsheets/lib/spreadsheets.js");
var spreadsheet_key = '0ApRmqiPgVsXFdDVpdTVxNGJwR0M5NVI5ZHFEQk1ockE';


GoogleSpreadsheets({
    key: spreadsheet_key
}, function(err, spreadsheet) {
    spreadsheet.worksheets[0].cells({
        //range: 'R1C1:R1C19'
    }, function(err, cells) {
        // Cells will contain a 2 dimensional array, named cells with all cell data in the
        // range requested.
        // console.log(JSON.stringify(cells));
        //console.log(cells.cells[1])
        
        // return the headings
        for(var i in cells.cells[1]) {
          console.log(cells.cells[1][i].value);
        }
    });
});
