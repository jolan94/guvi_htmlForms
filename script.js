// const tableDiv = document.createElement('div');

let subClick = document.getElementById('submit');
subClick.addEventListener('click', formSubmitted);

var table = document.createElement('table');
table.classList.add('table', 'table-bordered', 'table-striped', 'table-dark');
table.setAttribute('id', 'tablebox');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
tbody.classList.add('tablebody');
var theadrow = document.createElement('tr');
theadrow.classList.add('thead-dark');

var arrheader = [
  'First Name',
  'Last Name',
  'Address',
  'Gender',
  'State',
  'Country',
  'Pincode',
  'Favorite Food',
];

for (let i = 0; i < arrheader.length; i++) {
  const newEle = document.createElement('th');
  newEle.setAttribute('scope', 'col');
  newEle.innerText = arrheader[i];
  theadrow.append(newEle);
}

thead.append(theadrow);
table.append(thead);
table.append(tbody);
document.body.append(table);

function formSubmitted(event) {
  event.preventDefault();

  var tRow = document.createElement('tr');

  let fName = document.getElementById('fname').value;
  let lName = document.getElementById('lname').value;
  let address = document.getElementById('address').value;
  let state = document.getElementById('state').value;
  let country = document.getElementById('country').value;
  let pincode = document.getElementById('pincode').value;
  var gender = document.querySelector('input[name=gender]:checked').value;
  let favfoods = document.querySelectorAll('input[name="favFood"]:checked');
  let favSelected = [];
  favfoods.forEach((favFood) => {
    favSelected.push(favFood.value);
    console.log(favFood.value);
    console.log(favSelected);
  });

  var arrItems = [fName, lName, address, gender, state, country, pincode];

  for (let i = 0; i <= arrItems.length; i++) {
    if (i < arrItems.length) {
      const newEle = document.createElement('td');
      newEle.innerText = arrItems[i];
      tRow.append(newEle);
    } else {
      const newEle = document.createElement('td');
      newEle.innerText = favSelected.toString();
      tRow.append(newEle);
    }
  }
  tbody.append(tRow);

  validation();

  function validation() {
    if (
      required(fName) &&
      required(lname) &&
      required(address) &&
      required(state) &&
      required(country) &&
      required(pincode) &&
      required(gender)
    ) {
      console.log('Form is filled no problem');
      table.append(tRow);
      document.getElementById('formdata').reset();
    } else {
      console.log('Form has a error');
      alert('Fill the form completely');
      return;
    }

    function required(inputtx) {
      if (inputtx.length == 0) {
        return false;
      }
      return true;
    }
  }

  // document.body.append(tableDiv);
}
