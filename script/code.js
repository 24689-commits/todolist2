let ListInput = document.querySelector('#ListInput');
let sortData = document.querySelector('#sortData');
let addList = document.querySelector('#addList');
let output = document.querySelector('#list');
let Arr = [];
addList.addEventListener("click", (event) => {
  event.preventDefault();
  if (ListInput.value) {
    Arr.push(ListInput.value);
    ListInput.value = "";
  } else {
    alert('Please write something.');
  }
  localStorage.setItem("names", JSON.stringify(Arr));
  renderList();
});
sortData.addEventListener("click", (e) => {
  e.preventDefault();
  Arr.sort();
  renderList();
});
function renderList() {
  output.innerHTML = "";
  Arr.forEach((name) => {
    output.innerHTML += `<ul>${name}</ul>`;
  });
}
// Load names from localStorage
Arr = JSON.parse(localStorage.getItem("names")) || [];
renderList();



function renderList() {
    output.innerHTML = "";
    Arr.forEach((name, index) => {
      output.innerHTML += `
        <ul>
          ${name}
          <button onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </ul>`;
    });
  }

//edit


  function editItem(index) {
    const newName = prompt("Enter the new name:");
    if (newName) {
      Arr[index] = newName;
      localStorage.setItem("names", JSON.stringify(Arr));
      renderList();
    }
  }
  function deleteItem(index) {
    Arr.splice(index, 1);
    localStorage.setItem("names", JSON.stringify(Arr));
    renderList();
  }



  //checkbox

  function renderList() {
    output.innerHTML = "";
    Arr.forEach((name, index) => {
      output.innerHTML += `
        <ul>
          <input type="checkbox" id="checkbox${index}" onchange="toggleCheckbox(${index})">
          <label for="checkbox${index}">${name}</label>
          <button onclick="editItem(${index})">Edit</button>
          <button onclick="deleteItem(${index})">Delete</button>
        </ul>`;
    });
  }
  
  
  
  
  

  function toggleCheckbox(index) {
    const checkbox = document.querySelector(`#checkbox${index}`);
    Arr[index].checked = checkbox.checked;
    localStorage.setItem("names", JSON.stringify(Arr));
  }