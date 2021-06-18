auth.onAuthStateChanged(user =>{
    if(user){
        console.log('user logged in',user);
    }
    else{
        console.log('user logged out');
    }
})


//signup
var signupform = document.querySelector('#form-signup');
signupform= addEventListener('submit',(e) => {
    e.preventDefault();
    //get user info
    const email = document.getElementById('signup-email').value;
    const pass = document.getElementById('signup-password').value;
    //sign up the user
    auth.createUserWithEmailAndPassword(email,pass).then(cred =>{
        //const modal = document.querySelector('#signup');
        //M.Modal.getInstance(modal).close();
        //signupform.reset();
        window.location.href = window.location.protocol + "//" + window.location.host + "/chat.html";
    });
});

//logout
/*var logout =document.querySelector('#logout');
logout.addEventListener('click',(e) =>{
    e.preventDefault();
    auth.signOut();
});*/

//login

var loginform = document.querySelector('#form-login');
loginform.addEventListener('submit',(e) =>{
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass= document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email,pass).then(cred => {
        //close login module and reset the form
       // const mod = document.querySelector('#signin');
        //M.Modal.getInstance(mod).close();
        //loginform.reset();
        window.location.href = window.location.protocol + "//" + window.location.host + "/chat.html";
    });
});
const resetPasswordFunction = () => {
    const email = document.getElementById('login-email').value;

    auth.sendPasswordResetEmail(email).then(() =>{
        alert('password Reset Email Sent Successfully!');
        console.log('password Reset Email Sent Successfully!');
    })
    .catch( error =>{
        console.error(error);
    })

}
forgot.addEventListener('click',resetPasswordFunction);