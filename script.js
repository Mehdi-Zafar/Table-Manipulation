// const table = document.querySelectorAll("table tr td");
// Array.from(table);
// table.forEach(e => {
//     if(e.textContent === 'Ali'){
//         document.querySelector("h2").innerHTML = 'Ali Spotted';
//     } 
// });

// table.style.backgroundColor = "burlywood"; 

const tableBody = document.querySelector("table");
const button = document.querySelector("button.addNew");
button.addEventListener("click", func2)

function func2(){
  let name = prompt("Enter name of person");
  if(name){
  //   const template = `
  // <th>Name</th>
  // <td>${name}</td>
  // <td><button onclick="func">Remove</button></td>`;
const templateHTML = document.createElement("tr");
const a = document.createElement("th");
a.innerText = 'Name';
const b = document.createElement("td");
b.innerHTML = `${name}`;
const c = document.createElement("td");
const d = document.createElement("button");
d.addEventListener("click",
function(){
  if(d.classList.contains('remove')){
    const row = d.parentElement.parentElement;
    document.querySelector("h2").innerHTML = `${name} removed!`;
    row.remove();
  }
  
// console.log(e.classList.contains('remove'));
})
d.innerText = 'Remove';
d.classList.add('remove');
c.append(d);
templateHTML.append(a);
templateHTML.append(b);
templateHTML.append(c);

// templateHTML.innerHTML = template;
  tableBody.appendChild(templateHTML);
  document.querySelector("h2").innerHTML = `${name} added!`;
  }
  
}

const removeButton = document.querySelectorAll("td button.remove");
removeButton.forEach((e) => e.addEventListener("click", func
// function(){
//       if(e.classList.contains('remove')){
//         const row = e.parentElement.parentElement;
//         const name = e.parentElement.previousElementSibling.textContent;
//         console.log(name);
//         document.querySelector("h2").innerHTML = `${name} removed!`;
//         row.remove();
//       }
//     }
))

function func(){
  if(this.classList.contains('remove')){
    const row = this.parentElement.parentElement;
    const name = this.parentElement.previousElementSibling.textContent;
    console.log(name);
    document.querySelector("h2").innerHTML = `${name} removed!`;
    row.remove();
  }
}
