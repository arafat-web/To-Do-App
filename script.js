
'use strict';
window.addEventListener('load', (event) => {
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCpQW3dkjGxqTPGhXcvRCQ__4UViQBDq28",
    authDomain: "to-do-app-5b1c1.firebaseapp.com",
    databaseURL: "https://to-do-app-5b1c1.firebaseio.com",
    projectId: "to-do-app-5b1c1",
    storageBucket: "to-do-app-5b1c1.appspot.com",
    messagingSenderId: "756757679800",
    appId: "1:756757679800:web:0e2789899a508626fa2e4d",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const fs = firebase.firestore();
    //DOM ELEMENTS//
    ///////////////////////////////////
    const formHeader = document.getElementById("form-header");
    const userName = document.getElementById("username");
    const emailId = document.getElementById("email");
    const usrnm = document.getElementById("usrnm");
    const mail = document.getElementById("mail");
    const psw = document.getElementById("psw");
    const createBtn = document.getElementById("create-btn");
    const loginBtn = document.getElementById("login-btn");
    const signIn = document.getElementById("signin");
    const signUp = document.getElementById("signup");
    const toLogin = document.getElementById("login-link");
    const toCreate = document.getElementById("create-link");
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const weekday = document.getElementById("weekday");
    const profile = document.getElementById("profile");
    const form = document.getElementById("form");
    const logname = document.getElementById("logname");
    const todo = document.getElementById("todos");
    const todoAdd = document.getElementById("todoadd-btn");
    const todoContainer = document.getElementById("todo-container");
    const Logout = document.getElementById("logout-btn");
    const Load = document.getElementById("loader");
    const main = document.getElementById("main");
    const toast = document.getElementById("toast");
    /////////////////////////////////

    //Basic DOM elements//
    const hide = "none";
    const show = "block";
    const flex = "flex";
    //Loader//
    function showPage() {
        Load.style.display = hide;
        main.style.display = show;
    }
    //Show loader
    setTimeout(showPage, 3000);
    //Basic create account section
    function noneItem() {
        formHeader.innerHTML = "Hello There!<br>Before using this you need to create an account.";
        loginBtn.style.display = hide;
        signUp.style.display = hide;
        userName.style.display = flex;
        createBtn.style.display = show;
        emailId.style.display = flex;
        signIn.style.display = show;

    }
    //Get time and date
    function timeDate() {
        const dates = new Date();

        const myDate = dates.getDate();
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        const getMonth = months[dates.getMonth()];
        const getYear = dates.getFullYear();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const getWeekday = days[dates.getDay()];
        date.innerText = myDate;
        month.innerText = getMonth;
        year.innerText = getYear;
        weekday.innerText = getWeekday;



    }
    //Basic AC Creation fom
    toCreate.addEventListener("click", (e) => {
        noneItem();
    });
    //Basic AC login form
    toLogin.addEventListener("click", (e) => {

        formHeader.innerHTML = "Hello There!<br>Please login using to see your contents.";
        createBtn.style.display = hide;
        emailId.style.display = flex;
        userName.style.display = hide;
        signIn.style.display = hide;

        loginBtn.style.display = show;
        signUp.style.display = show;
    });
    //Account creation
    createBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = usrnm.value;
        const email = mail.value;
        const password = psw.value;
        load = 2;
        if (name === '' || email === '' || password === '') {
            toast.innerText = "Please fill out fields";
            toast.className = "show";
            setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
        }
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return fs.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                profile.style.display = show;
                form.style.display = hide;
                usrnm.value = "";
                mail.value = "";
                psw.value = "";
            }).catch(err => {
                toast.innerText = err.message;
                toast.className = "show";
                setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
            })

        }).catch(err => {
            // toast.innerText = err.message;
            // toast.className = "show";
            // setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        })

    })
    //Loagin to Account
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const logmail = mail.value;
        const logpass = psw.value;

        auth.signInWithEmailAndPassword(logmail, logpass).then(() => {

            profile.style.display = show;
            form.style.display = hide;
            mail.value = "";
            psw.value = "";
        }).catch(err => {
            toast.innerText = err.message;
            toast.className = "show";
            setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
        })


    });


    //what will be happend after logged in

    auth.onAuthStateChanged(user => {
        if (user) {
            fs.collection('users').doc(user.uid).get().then(snapshot => {
                logname.innerText = snapshot.data().Name;
            })

        } else {

        }
    });

    //adding todos
    const datess = new Date();
    const time = datess.getTime();
    let counter = time;
    todoAdd.addEventListener("click", (e) => {
        const todos = todo.value;
        if( todos === ''){
            toast.innerText = "Empty Field";
            toast.className = "show";
            setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
        }else{
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection(user.uid).doc('_' + id).set({
                    id: '_' + id,
                    todos
                }).then(() => {
                    toast.innerText = "Added Successfully";
                    toast.className = "show";
                    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
                }).catch(err => {
                    toast.innerText = err.message;
                    toast.className = "show";
                    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
                })
            }
        })
        todo.value = "";
    }
    });
    //Create todos in section
    function renderData(individualDoc) {

        let parentDiv = document.createElement("div");

        parentDiv.className = "container todo-box ";
        parentDiv.setAttribute("data-id", individualDoc.id);
        parentDiv.textContent = individualDoc.data().todos;

        let trash = document.createElement("button");

        let i = document.createElement("i");
        i.className = "fa fa-trash";
        i.setAttribute('aria-hidden', 'true');

        trash.appendChild(i);

        parentDiv.appendChild(trash);

        todoContainer.appendChild(parentDiv);

        trash.addEventListener('click', e => {
            let id = parentDiv.getAttribute("data-id");

            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection(user.uid).doc(id).delete();
                }
            })
            toast.innerText = "Content Deleted";
            toast.className = "show";
            setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);

        })
    }
    //is user logged in or out?
    auth.onAuthStateChanged(user => {
        if (user) {

        } else {
            if (logValue === 1) {
                al();
            }
            else {

            }
            function al() {
                alert("Please Login or Create Account to continue");
            }
            profile.style.display = hide;
            main.style.display = show;
        }
    })
    //Real time database
    auth.onAuthStateChanged(user => {
        if (user) {
            fs.collection(user.uid).onSnapshot(snapshot => {
                let changes = snapshot.docChanges();
                changes.forEach(change => {
                    if (change.type === 'added') {
                        renderData(change.doc)
                    } else if (change.type === 'removed') {
                        let li = todoContainer.querySelector('[data-id=' + change.doc.id + ']');
                        todoContainer.removeChild(li);
                    }
                })
            })
        }
    })
    //logged out
    let logValue;
    Logout.onclick = () => {
        logValue = 1;
        auth.signOut();
    };
    //function calling
    timeDate();
    noneItem();
});