/*
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
//
// Scripts
*/ 

window.addEventListener('DOMContentLoaded', event => {

  

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    
}); 
window.onload

    const form = document.getElementById("form-user");
    const table = document.getElementById("table-user");
    let addUser;

    form.addEventListener("submit", function(event){
        event.preventDefault();
        addUser = new FormData(form);
        form.reset();
        alert("Mensaje enviado. Muchas gracias");
    })

    table.addEventListener("click", function(event) {
        event.preventDefault();
        let addObj = convertFormToObj(addUser);
        setUser(addObj);
        insertUser(addObj);
    })

    document.addEventListener( "DOMContentLoaded", function(event){
        let addObjArr = JSON.parse(localStorage.getItem("userInfo"))
        addObjArr.forEach(
            function(arrayElement){
                insertUser(arrayElement);
            }
        )
    })
    
    function showAdmin(){
        document.getElementById('admin').style.display = 'block';
    }

    function setId(){
        let count = localStorage.getItem("lastId") || "-1";
        let newCount = JSON.parse(count) + 1;
        localStorage.setItem("lastId", JSON.stringify(newCount))
        return newCount;
    }

    function convertFormToObj (addUser){
        let id = setId();
        let userName = addUser.get("name");
        let userMail = addUser.get("email");
        let userMess = addUser.get("message");
        return{
            "id": id,
            "name": userName,
            "email":userMail,
            "message":userMess
        }
    }

    function insertUser(addObj){
        let userTableRef = document.getElementById("table-user");

        let newUserRef = userTableRef.insertRow(-1);

        let newName = newUserRef.insertCell(0);
        newName.textContent = addObj["name"];
        let newEmail = newUserRef.insertCell(1);
        newEmail.textContent = addObj["email"];
        let newMess = newUserRef.insertCell(2);
        newMess.textContent = addObj["message"];

    }

    function setUser(addObj){
        let userArray = JSON.parse(localStorage.getItem("userInfo")) || [];
        userArray.push(addObj);
        let userArrayJSON = JSON.stringify(userArray);
        localStorage.setItem("userInfo", userArrayJSON);
    }

    /*function showAdmin(){
        document.getElementById('admin').style.display = 'block';
    }

    const addTable = document.getElementById('add-user');
    const viewUsers = document.getElementById('get-table');
    //const boton_limpiar = document.querySelector('.boton-limpiar');

    addTable.addEventListener('click', () => {
    addUser("")
    })

    /*boton_limpiar.addEventListener('click', () => {
    limpiarTodo()
    })

    viewUsers.addEventListener('click', (event) => {
    if(event.path[0].type == 'submit') {
        delUser(event.path[1].id);
    }
    })

    viewUsers.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        editUser(event.path[1].id, event.path[0].value);
    }
    })

    // Local Storage

    var tableUsers = [];
    var i = 0;

    const getI = () => {
        const cont = localStorage.getItem("i");
        return cont;
    }

    const setI = () => {
        localStorage.setItem("i",i);
    }

    const inicI = () => {
        if (getI() != null) {
           i = getI();
        }
    }

    const getTableUsers = () => {
        setI();
        const aux = JSON.parse(localStorage.getItem("tableUsers"));
        return aux;
    }

    const setTableUsers = () => {
        localStorage.setItem("tableUsers",JSON.stringify(tableUsers));
        viewTable();
    }

    const addUser = (name, email, message) => {
        i++;
        let user = {
            id: i,
            name: name,
            email: email,
            message: message

        }
        if (getTableUsers() != null) {
            tableUsers = getTableUsers();
        }
        tableUsers.push(user);
        setTableUsers();
    }

    const viewTable = () => {
    viewUsers.innerHTML = ''
    let data = getTableUsers()
    if (data != null) {
        for (const aux of data.reverse()) {
        viewUsers.innerHTML += `
            <tr id="${aux.id}">
                <th type="text" value="${aux.name}"></th>
                <th type="text" value="${aux.email}"></th>
                <th type="text" value="${aux.message}"></th>
            </tr>
            
        `/*<li >
                <input type="text" class="input-tarea" value="${tarea.descripcion}">  
                <button class="boton-eliminar">X</button>
            </li>
        }
    }
    }

    const editUser = (id, name, email, message) => {
        let newUser = {
            id: id,
            name: name,
            email: email,
            message: message
        }
        let dates = getTableUsers();
        let newAux = [];
        if (dates != null) {
            for (const user of dates) {
            if (user.id == id) {
                newAux.push(newUser);
            }else{
                newAux.push(user);
            }
            }
        }
        tableUsers = newAux;
        setTableUsers();
    }

    const delUser = (id) => {
        let dates = getTableUsers();
        let newAux = [];
        if (dates != null) {
            for (const user of dates) {
            if (user.id != id) {
                newAux.push(user)
            }
            }
        }
        tableUsers = newAux;
        setTableUsers();
    }

    /*const limpiarTodo = () => {
        arregloTareas = []
        contador = 0
        setArregloTareas()
        setContador()
    }

    // inicia
    inicI();
    tableUsers();
    


/*window.onload 
    
    let table =[
        {name:"Juan", email:"juan@mail.com", message:"Hola"}];        
    
    let saveUser = document.getElementById("form").addEventListener('submit', newData());
       
    let loadUser = document.getElementById("get-table").addEventListener("click", getTable());
   

    function newData(e){
        e.preventDefault();

        let userName = document.getElementById("name").value;
        let userMail = document.getElementById("email").value;
        let userMess = document.getElementById("message").value;

        table = {name: userName, email: userMail, message: userMess};
        
        localStorage.setItem("form", JSON.stringify(table));
    }


    function getTable(){
        
        let bodyTable = document.getElementById("user-table");
        let allTable = "";
        table = JSON.parse(localStorage.getItem(table))

       for (let i=0; i < table.length; i++){
        allTable += "<tr><td>" + table.name + "</td><td>" + table.email + "</td><td>" + table.message + "</td></tr>";   
       }

       bodyTable.innerHTML = allTable;
       //"<tr><td>Juan</td><td>juan@mail.com</td><td>hola</td></tr>"
    }

    function showAdmin(){
        document.getElementById('admin').style.display = 'block';
    }*/
  


