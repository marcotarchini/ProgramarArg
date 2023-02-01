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

window.onload 
    
    let table =[
        {name:"Juan", email:"juan@mail.com", message:"Hola"}]; 
    
    let newUser = [];        
    
    let saveUser = document.getElementById("form").addEventListener('submit', newData());
       
    let loadUser = document.getElementById("get-table").addEventListener("click", getTable());
   

    function newData(e){
        e.preventDefault();

        let userName = document.getElementById("name").value;
        let userMail = document.getElementById("email").value;
        let userMess = document.getElementById("message").value;

        newUser = {name: userName, email: userMail, message: userMess};
        
        localStorage.setItem("form", JSON.stringify(newUser));
    }


    function getTable(){
        
        let bodyTable = document.getElementById("user-table");
        let allTable = "";
        let table = JSON.parse(localStorage.getItem(newUser))

       for (let i=0; i < table.length; i++){
        allTable += "<tr><td>" + table.name + "</td><td>" + table.email + "</td><td>" + table.message + "</td></tr>";   
       }

       bodyTable.innerHTML = allTable;
       //"<tr><td>Juan</td><td>juan@mail.com</td><td>hola</td></tr>"
    }

    function showAdmin(){
        document.getElementById('admin').style.display = 'block';
    }
  


