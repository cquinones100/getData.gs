function getData(route, root) {
  //user name and password to be used for basic http authentication
  var userName = // your userName
  var password = // your password
  if (typeof root !== 'undefined') {
    var url = root
  } else {
    var url = //your url + route
  }

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
