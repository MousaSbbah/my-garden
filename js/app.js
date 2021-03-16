'user strict';

let allFlowers =[];

let tableElement = document.getElementById('flower_table');



function Flower (name,img,season){
  this.name=name;
  this.img=`./img/${img}.jpeg`;
  this.season=season;
  allFlowers.push(this);

}
let formElement= document.getElementById('form');
formElement.addEventListener('submit',addNewFlower);



function addNewFlower (event){
  event.preventDefault();
  let flowerName = event.target.flower_name.value;
  let flowerImg = event.target.flower_img.value;
  let flowerSeason = event.target.season.value;
  console.log(flowerName,flowerImg,flowerSeason);
  new Flower(flowerName,flowerImg,flowerSeason);
  saveInLocal();
  renderTable();
}


function renderTable(){
  tableElement.innerHTML='';

  let headRow = document.createElement('tr');
  tableElement.appendChild(headRow);

  let th1 = document.createElement('th');
  headRow.appendChild(th1);
  th1.innerHTML='# Image';

  let th2 = document.createElement('th');
  headRow.appendChild(th2);
  th2.innerHTML='Name';

  let th3 = document.createElement('th');
  headRow.appendChild(th3);
  th3.innerHTML='Season';

  for (let i = 0; i < allFlowers.length; i++) {
    let rowElement = document.createElement('tr');
    tableElement.appendChild(rowElement);

    let td1 = document.createElement('td');
    rowElement.appendChild(td1);
    td1.innerHTML=`<span onclick="deletRow(${i})">X</span> <img src="${allFlowers[i].img}" >`;

    let td2 = document.createElement('td');
    rowElement.appendChild(td2);
    td2.innerHTML=allFlowers[i].name;

    let td3 = document.createElement('td');
    rowElement.appendChild(td3);
    td3.innerHTML=allFlowers[i].season;

  }
}



getFromLocal();
renderTable();

// localStorage Functions
function saveInLocal(){
  let data = JSON.stringify(allFlowers);
  localStorage.setItem('Flowers',data);
}

function getFromLocal(){
  let data = localStorage.getItem('Flowers');
  if (data) {
    allFlowers=JSON.parse(data);
  }
}


// Functions That I used it In HTML onClick


// eslint-disable-next-line no-unused-vars
function deletRow(num){
  allFlowers.splice(num,1);
  saveInLocal();
  renderTable();
}

// eslint-disable-next-line no-unused-vars
function clearTable(){
  tableElement.innerHTML='';
  allFlowers = [];
  saveInLocal();
  renderTable();
}
