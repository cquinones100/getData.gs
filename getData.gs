function config(route, root) {
  if (typeof root !== 'undefined') {
    var url = root
  } else {
    var url = //your default url + route
  }

  var userName = // your userName
  var password = // your password

  var obj =  {
    'userName': userName,
    'password': password,
    'url': url,
    'route': route,
    'headers': { "Authorization" : " Basic " + Utilities.base64Encode(
       userName + ":" + password
    )}
  }
  return obj
}

function getData(route, root) {
  userName = config(route).userName;
  password = config(route).password;
  url = config(route).url;
  headers = config(route).headers;

  var options = {
   'headers' : headers
  }
  return UrlFetchApp.fetch(url, options);
}

function postData(route, root, data) {
  userName = config(route).userName
  password = config(route).password
  url = config(route).url

  var options = {
   'method' : 'post',
   'contentType': 'application/json',
   'payload' : JSON.stringify(data),
   'headers' : {
     "Authorization" : " Basic " + Utilities.base64Encode(
       userName + ":" + password
     )}
  }

  UrlFetchApp.fetch(url, options);
}

function getDataByKey(key, route) {
  var response = getData(route)
  var data = JSON.parse(response)[key];
  return data
}
