# getData.gs
A google apps script for placing get requests and using data to manipulate documents.

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
if (typeof root !== 'undefined') {
  var url = root;
} else {
  var url = //your url + route
}
```

You can forego basic authentication by removing the above lines and the headers key from the `options` object:

```javascript
'headers' : {
  "Authorization" : " Basic " + Utilities.base64Encode( //remove me
    userName + ":" + password // remove me
  ) // remove me
}
```

### Built in Methods

`getData(route, root)` - takes a route and returns a response. takes an optional `root` parameter if you want override the configured default.

`inspectData(route)` - takes a route  and logs the parsed JSON data response

`getDataByKey(key, route)` - take a string key and a route and returns the data value for the passed in key

## Extending the Google Drive API with getData modules

getData makes use of G Suite APIs to perform some basic functions with your data. Modules have been broken out into separate files in the modules folder for ease of access, but can just be copied and pasted into your saved getData.gs file on google drive.

All getData modules take in an `object` as a parameter which includes two basic keys in addition to any module specific parameters.

```javascript
 var obj = {
   data: // data in most cases will be data acquired with getData but can be an array object, see docs for specific use-cases
   action: // function to access within the module
 }
```

### `formMethods`
Use this module to interact with a linked form. To install, be sure to include your getData library in your form's linked script.

#### Methods
`addDataToForm(data, formItemTitle)` accepts two parameters:
* `data` an `array` object. If you wish to pass in data from a url GET request, prepare your data appropriately. An array of hardcoded elements can be passed in as well.
* `formItemTitle` a `string`. the text label for the form element.

example:

```javascript
//populates a form dropdown's options with data from server when the form is opened.

/*JSON data: {
  petNames: ['Rocky', 'Peaches', 'Doggo'],
  otherData: 'blah',
  otherDataAgain: 'blah'
}*/

function onOpen() {
  var obj = {
    data: GetData.getDataByKey("petNames", "/pets"),
    action: "addData",
    formItemTitle: "Batch Number"
  };
  GetData.formMethods(obj);
}
```
