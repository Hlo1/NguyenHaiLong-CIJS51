const model = {}
model.currentUser = {}
model.conversation = {}
model.currentConversation = {}
model.register = async ({firstName, lastName, email, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    // update profile
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
    // gui email verify
    firebase.auth().currentUser.sendEmailVerification()
    alert('Register success! Please confirm your email')
    view.setActiveScreen('loginPage')
  } catch(err) {
    console.log(err)
    alert(err.message)
  }
}
 model.login = async ({email, password}) => {
   try {
//     let response = await firebase.auth().signInWithEmailAndPassword(email, password)
//     // console.log(response)
//     // if (response.user.emailVerified) {
//     //   view.setActiveScreen('welcomeScreen')
//     // } else {
//     //   alert('Please verify email')
//     // }
//     alert('login')
   } catch(err) {
//     alert(err.message)
//     console.log(err)
  }
 }

model.addMessage = (message)=>{
  const docId = 'Vu9Hxr7UGfwhU53dlXrz'
  const dataToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion(message)
  }
  firebase.firestore().collection('conversations').doc(docId).update(dataToUpdate)
}

model.getConversation = async ()=>{
  const res = await firebase.firestore().collection('conversations').where('users','array-contains',model.currentUser.email).get()
  model.conversation = getDataFromDocs(res.docs)
  if(model.conversation.length > 0){
    model.currentConversation = model.conversation[0]
    view.showCurrentConversation()
  }
}

model.listenConversationChange = ()=>{
  let isFirstRun = true
  firebase.firestore().collection('conversations').where('users','array-contains',model.currentUser.email)
  .onSnapshot((snapshot)=>{
    if(isFirstRun){
      isFirstRun=false
      return
    } 
    const docChanges = snapshot.docChanges()
    for(const oneChange of docChanges){
      if(oneChange.type === 'modified'){
        const dataChange = getDataFromDoc(oneChange.doc)
        for(let i=0; i<model.conversation.length;i++){
          if(model.conversation[i].id === dataChange.id){
            model.conversation[i] = dataChange
          }
        }
        if(dataChange.id === model.currentConversation.id){
          model.currentConversation = dataChange
          // view.showCurrentConversation()
          view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length-1])
        }
      } 
    }
  })
}
