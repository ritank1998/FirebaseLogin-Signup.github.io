 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
 import { getDatabase , set , ref , update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // Import the functions you need from the SDKs you need

 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBYlaPIxLVk3fnAe_kNTZ29i8qiLF_C28o",
   authDomain: "es6-login-signup.firebaseapp.com",
   projectId: "es6-login-signup",
   storageBucket: "es6-login-signup.appspot.com",
   messagingSenderId: "670617061632",
   appId: "1:670617061632:web:e0da1392103d37fed60be5",
   measurementId: "G-E2H7P9KXVQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase();

okcool.addEventListener('click' , (e)=>{
const Email = document.getElementById("email").value;
const Password = document.getElementById("password").value;
const Name = document.getElementById("name").value;
const Location = document.getElementById("location").value;
const Address = document.getElementById("adress").value;
const Number = document.getElementById("number").value;

const auth = getAuth();
createUserWithEmailAndPassword(auth , Email , Password).then((userCredintial)=>{
    const user = userCredintial.user;
    set(ref(database , 'users/' + user.uid),{
        Name : Name,
        Email : Email,
        Password : Password,
        Location : Location , 
        Address : Address,
        Number : Number
    })
    alert("User Created !!");
})
.catch((error)=>{
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
})
});


