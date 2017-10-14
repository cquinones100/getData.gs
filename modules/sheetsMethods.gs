function sheetsMethods(obj) {
  var actions = {
    getData: getDataFromRange
  };

  function getDataFromRange(range) {
    var range = range

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheets()[0];
    var data = sheet.getRange(range).getValues();
    var dataFromSheet = [];

    var dataRows = data.filter(function(ele) {
      return ele[0] != ""
    })

    var preparedData = {
      'form' : spreadsheet.getName(),
      'headerRow': dataRows[0].toString(),
      'lastRow': dataRows[dataRows.length -1].toString()
    }

    return preparedData;
  }
  actions[obj.action](obj.range);
}
