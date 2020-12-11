'use strict';

//grab a form
const form = document.querySelector('.main-form');

//grab an input
const inputEmail = form.querySelector('#inputEmail');
const name = form.querySelector('#name');
const subject = form.querySelector('#subject');
const message = form.querySelector('#message');



//config your firebase push
const config = {
    apiKey: "AIzaSyDPH0q9SnFSAO8vG6GCeDPOYfkfykSpjuM",
    authDomain: "design-cabal.firebaseapp.com",
    databaseURL: "https://design-cabal.firebaseio.com",
    projectId: "design-cabal",
    storageBucket: "design-cabal.appspot.com",
    messagingSenderId: "726472200802",
    appId: "1:726472200802:web:77bebaabfce16d1b05373b",
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail, name, subject, email);
            

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }