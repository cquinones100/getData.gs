function getData(route) {
  //user name and password to be used for basic http authentication
  var userName = // your userName
  var password = // your password
  var url = //your url + route

   var options = {
   'headers' : {
     "Authorization" : " Basic " + Utilities.base64Encode(
       userName + ":" + password
     )
   }
  }
  return UrlFetchApp.fetch(url, options);
}

function inspectData(route) {
  response = getData(route)
  Logger.log(JSON.parse(response))
}

function getDataByKey(key, route) {
  var response = getData(route)
  var data = JSON.parse(response)[key];
  return data
}

function addDataToForm(data, query) {
  var dataTypes = {
    "Batch Number": addOptionsToFormElement(data)
  }

  var form = FormApp.getActiveForm()
  var formItems = form.getItems()
  var formElements = formItems.filter(function(item){
    return item.getTitle() == query;
  })
  var formElement = formElements[0].asListItem();
}

function addOptionsToFormElement(options) {
  optionsArr = []
  for (i in options) {
   optionsArr.push(options[i])
  }
}
