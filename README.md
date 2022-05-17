The following implementations are done in this project.

1)Firebase authentication with google signin for login

2)react-router used for navigation

3)react-persist used to prevent redux state loss when refreshing browser window.

Make sure in Login.js file add your firebase project credentials before proceeding with npm start

Change this part in Login.js👇👇

const firebaseConfig = {
    apiKey: "**********",
    authDomain: "**********",
    projectId: "**********",
    storageBucket: "**********",
    messagingSenderId: "**********",
    appId: "**********"
  };