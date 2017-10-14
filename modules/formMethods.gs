function formMethods(obj) {
  var actions = {
    addData: addDataToForm
  };

  function addDataToForm(data, query) {
    var form = FormApp.getActiveForm();
    var formItems = form.getItems();
    var formElements = formItems.filter(function(item) {
      return item.getTitle() == obj.formItemTitle;
    })
    var formElement = formElements[0].asListItem();
    formElement.setChoiceValues(data);
  }

  function addOptionsToFormElement(options) {
    optionsArr = [];
    for (i in options) {
     optionsArr.push(options[i]);
    }
  }
  actions[obj.action](obj.data, obj.formItemTitle);
}
