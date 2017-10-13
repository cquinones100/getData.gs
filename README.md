# getData.gs
A google apps script for placing get requests and parsing the data that is returned.

## Installation
* Create a new google apps script in google drive.
* Copy and paste the code from getData.gs.
* Save your project and make note of your script ID.
* Go to file -> manage versions...
* Save a version for the app.


* Open a new project.
* Open resources -> libraries
* Paste your getData project script ID in the Add a Library field and click add
* Select your version and hit save
* You can now use all of the methods in this file!

## Usage

Configure your script by adding the following:

```javascript
var userName = // your userName
var password = // your password
var url = //your url + route
```

You can forego basic authentication by removing the following lines:

```javascript
var userName = // your userName
var password = // your password
var url = //your url + route
```

and the headers key from the `options` object

```javascript
'headers' : {
  "Authorization" : " Basic " + Utilities.base64Encode( //remove me
    userName + ":" + password // remove me
  ) // remove me
}
```

### Built in Functions

`getData(route)` - takes a route and returns a response

`inspectData(route)` - takes a route  and logs the parsed JSON data response

`getDataByKey(key, route)` - take a string key and a route and returns the data value for the passed in key
