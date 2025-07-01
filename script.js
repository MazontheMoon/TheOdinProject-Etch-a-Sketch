const container = document.getElementById('container');
let gridBoxCount = 16;

//create grid boxes
for(let i = 1; i <= gridBoxCount; i++){
  for(let j = 1; j <= gridBoxCount; j++){
    const div =  document.createElement('div');
    div.className = 'grid-item';
    div.style.border = "2px solid black";
    container.appendChild(div);
  }
}


//set hover affect on grid items