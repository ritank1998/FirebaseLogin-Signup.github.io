 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
 import { getAuth , signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
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
 login.addEventListener('click' , (e)=>{
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth , Email , Password).then((userCredintial)=>{

      const user = userCredintial.user;
      const dt = new Date();
      update(ref(database , 'users/' + user.uid),{
         last_login : dt
      })
      alert("welcome !!");
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })

})

logout.addEventListener('click' , (e)=>{
  const auth = getAuth();
signOut(auth).then(() => {
  alert("You are logged out Successfully");
}).catch((error) => {
  alert("Error Logging out");
});
})