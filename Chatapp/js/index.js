window.onload=()=>{
    var firebaseConfig = {
        apiKey: "AIzaSyBFoI_aHfRqwDQygOZINUacHqkxNUqmZ48",
        authDomain: "chat-app-9deb8.firebaseapp.com",
        databaseURL: "https://chat-app-9deb8.firebaseio.com",
        projectId: "chat-app-9deb8",
        storageBucket: "chat-app-9deb8.appspot.com",
        messagingSenderId: "441922901862",
        appId: "1:441922901862:web:8d08ca88da0bff59901aa7",
        measurementId: "G-SXJGWL57JP"
      };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log(firebase.app().name)
    view.setActiveScreen('registerScreen')
}
