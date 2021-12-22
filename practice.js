
var firebaseConfig = {
  apiKey: "AIzaSyBYB32-GwNbHBo-__1NeV8pLzwbF5PLbTU",
  authDomain: "practice-cb003.firebaseapp.com",
  databaseURL: "https://practice-cb003-default-rtdb.firebaseio.com",
  projectId: "practice-cb003",
  storageBucket: "practice-cb003.appspot.com",
  messagingSenderId: "868955972669",
  appId: "1:868955972669:web:e6e03c24c5b91e3fe03654"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);



function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


