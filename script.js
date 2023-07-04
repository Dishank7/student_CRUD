let students = [];

let table = document.getElementsByTagName("tbody")[0];

function pushData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gpa = document.getElementById("gpa").value;
    let age = document.getElementById("age").value;
    let deg = document.getElementById("degree").value;

    if(name.trim()===''||email.trim()===''||gpa.trim()===''|| age.trim()===''||deg.trim()===''){
    alert("please fill all inputs")
    return;
    }

    let obj = { name: name, email: email, gpa: gpa, age: age, degree: deg };
    students.push(obj);

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("gpa").value = '';
    document.getElementById("age").value = '';
    document.getElementById("degree").value = '';

    console.log(students)

     displayData(students);
}



function displayData(data) {
    table.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            <td>${data[i].age}</td>
            <td>${data[i].gpa}</td>
            <td style="display: flex;
                 flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;">${data[i].degree}<span class="material-symbols-outlined"
                            onclick="editRow(this)">edit_square</span>
            <span class="material-symbols-outlined"
                onclick="deleteRow(this)">delete<span></td>`
        table.append(row);
    }
}

document.getElementById("search").addEventListener('keyup', event =>{
  
    let search = document.getElementById('search').value.trim().toLowerCase();

    if(search == ''){
        displayData(students);
        return;
      }

      let filterData = students.filter(item =>{
        let itemName = item.name.toLowerCase();
        let itemEmail = item.email.toLowerCase();
        let itemDeg = item.degree.toLowerCase();

        return itemName.includes(search) || itemEmail.includes(search) || itemDeg.includes(search)
      })
      displayData(filterData);
    
})

function deleteRow(button){
  let row = button.parentNode.parentNode;

  let index = row.rowIndex;

  students.splice(index-1,1);

  row.remove();

  console.log(students);
}

function editRow(button){
   let editBtn = document.getElementById("btn");
   editBtn.innerText = "Edit Students";
   editBtn.style.background = "rgb(17, 17, 17)";
   editBtn.style.color = "white";
   editBtn.style.border = "none";
   editBtn.style.border = "1px solid gray";
   let row = button.parentNode.parentNode;
   let index = row.rowIndex;

  
//    let name = row.cells[1].textContent;
//   let email = row.cells[2].textContent;
//   let gpa = row.cells[3].textContent;
//   let age = row.cells[4].textContent;
 
  
     document.getElementById("name").value = students[index-1].name
     document.getElementById("email").value = students[index-1].email
     document.getElementById("gpa").value = students[index-1].gpa
     document.getElementById("age").value = students[index-1].age
     document.getElementById("degree").value = students[index-1].degree;

    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Gpa = document.getElementById("gpa").value;
    let Age = document.getElementById("age").value;
    let Deg = document.getElementById("degree").value;

   students[index-1].name = Name;
   students[index-1].email = Email;
   students[index-1].gpa = Gpa;
   students[index-1].age = Age;
   students[index-1].degree = Deg;
 
  // displayData(students);
   

   row.cells[1].textContent = Name
   row.cells[2].textContent = Email
   row.cells[3].textContent = Gpa
   row.cells[4].textContent = Age
   row.cells[5].textContent = Deg
  
}


