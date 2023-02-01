/*!
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

let table =[
    {name:"Juan", email:"juan@mail.com", message:"Hola"}
]; 

window.onload = pushEvents;

    function pushEvents(){
        document.getElementById("form").addEventListener("submit", newData, false);
        document.getElementById("get-table").addEventListener("click", getTable, false);
    }

    function newData(e){
        e.preventDefault();

        let userName = document.getElementById("name").value;
        let userMail = document.getElementById("email").value;
        let userMess = document.getElementById("message").value;

        let newUser = {name: userName, email: userMail, message: userMess};
        table.push(newUser);

        console.log(table);
    }


    function getTable(){
        
        let bodyTable = document.getElementById("user-table");
        let allTable = "";

       for (let i=0; i < table.length; i++){
        allTable += "<tr><td>" + table[i].name + "</td><td>" + table[i].email + "</td><td>" + table[i].message + "</td></tr>";   
       }

       bodyTable.innerHTML = allTable;
       //"<tr><td>Juan</td><td>juan@mail.com</td><td>hola</td></tr>"
    }

  


