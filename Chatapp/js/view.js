const view = {}
view.setActiveScreen = (screenName)=>{
    switch(screenName){
        case 'welcomeScreen':
        document.getElementById('app').innerHTML= components.welcomePage
        break;

        case 'registerScreen':
        document.getElementById('app').innerHTML = components.registerPage
        document.getElementById('redirect-login').addEventListener('click',()=>{view.setActiveScreen('loginScreen')})
        break;

        case 'loginScreen':
        document.getElementById('app').innerHTML = components.loginPage
        document.getElementById('redirect-register').addEventListener('click',()=>{view.setActiveScreen('registerScreen')})
        break;
    }
}