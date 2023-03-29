/*
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
//
// Scripts
*/ 

window.onload

//funcionalidad de la barra de navegacion lateral    

    document.addEventListener('DOMContentLoaded', event => {
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

    var typed = new Typed('.typed', {
        strings: [
            '<i>Full Stack</i>',
            '<i>Back End</i>',
            '<i>Front End</i>',
        ],
        stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });

 //funconalidad del formulario   
    const form = document.getElementById("form-user");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let addUser = new FormData(form);
        console.log(addUser);
        let addObj = convertFormToObj(addUser);
        setUser(addObj);
        insertUser(addObj);
        form.reset();
        alert("Mensaje enviado. Muchas gracias");
    })

   
    document.addEventListener("DOMContentLoaded", function(event){
        let addObjArr = JSON.parse(localStorage.getItem("userInfo")) || [];
        addObjArr.forEach(
            function(arrayElement){
                insertUser(arrayElement);
            }
        )
    })

//inserta los datos del objeto en la tabla html
    function insertUser(addObj){

        let idUser = addObj["id"];
        let nameUser = addObj["name"];
        let emailUser = addObj["email"];
        let messUser = addObj["message"];

        const userTableRef = document.querySelector("#table-user").insertAdjacentHTML('beforeend', 
        `<tr> <th>${idUser}</th>
        <th>${nameUser}</th> 
        <th>${emailUser}</th> 
        <th>${messUser}</th> </tr>`);
    }
//PARA VER LA LISTA DE CONTACTOS SE DEBE HACER CLICK EN LA FOTO DEL CV
    function showAdmin(){
        document.getElementById('admin').style.display = 'block';
    }
//se agrega un id a cada fila(simil base de datos relacional)
    function setId(){
        let count = localStorage.getItem("lastId") || "-1";
        let newCount = JSON.parse(count) + 1;
        localStorage.setItem("lastId", JSON.stringify(newCount))
        return newCount;
    }
//convierte los datos del form a objeto
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
// persistencia en localstorage
    function setUser(addObj){
        let userArray = JSON.parse(localStorage.getItem("userInfo")) || [];
        userArray.push(addObj);
        let userArrayJSON = JSON.stringify(userArray);
        localStorage.setItem("userInfo", userArrayJSON);
    }
