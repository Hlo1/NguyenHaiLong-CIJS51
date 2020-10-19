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
    console.log(firebase.app().name)
     firebase.auth().onAuthStateChanged((res) => {
       console.log(res)
       if (res) {
          if (res.emailVerified) {
           model.currentUser = {
             displayName: res.displayName,
             email: res.email
           }
           console.log(model.currentUser)
           view.setActiveScreen('chatPage')
         } else {
           view.setActiveScreen('loginScreen')
           alert('Please verify your email')
         }
       } else {
         view.setActiveScreen('registerPage')
       }
     })
    //firestoreQueries()
}

firestoreQueries = async()=>{
  //get one document
  // const response = await firebase.firestore().collection('users').doc('GmGc6YZIrYA6LqbZsuCE').get()
  // const user  = getDataFromDoc(response)
  // console.log(user)

  //get many documents
  const response = await firebase.firestore().collection('users').where('name', '==', 'L').get()
  const users = getDataFromDocs(response.docs)
  console.log(users)

  //add new documents
  // const dataToAdd = {
  //   name: 'Nguyen Thi B',
  //   age: 20
  // }

  // firebase.firestore().collection('users').add(dataToAdd)
  //update document
  // const dataToUpdate = {
  //   name: 'L',
  //   age: 9,
  //   phone: firebase.firestore.FieldValue.arrayUnion('789')
  // }
  //  const docID = "Diz4YF56LAG0aoAUNskX"
  //  firebase.firestore().collection('users').doc(docID).update(dataToUpdate)
   

  //delete document
  // const docId = 'GmGc6YZIrYA6LqbZsuCE'
  // firebase.firestore().collection('users').doc(docId).delete()
}

getDataFromDoc=(res)=>{
  const data = res.data()
  data.id = res.id
  return data
}

getDataFromDocs=(docs)=>{
  return docs.map(getDataFromDoc)
  // const arr = []  
  // console.log(docs)
  // for(const oneDoc of docs){
  //   arr.push(getDataFromDoc(oneDoc))
  // }
  // return arr
}
