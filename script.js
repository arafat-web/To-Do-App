
const formHeader = document.getElementById("form-header");
const userName = document.getElementById("username");
const emailId = document.getElementById("email");
const passWord = document.getElementById("password");
const createBtn = document.getElementById("create-btn");
const loginBtn = document.getElementById("login-btn");
const signIn = document.getElementById("signin");
const signUp = document.getElementById("signup");
const toLogin = document.getElementById("login-link");
const toCreate = document.getElementById("create-link");
const hide = "none";
const show = "block"
const flex = "flex";
function noneItem() {
    formHeader.innerHTML = "Registration" + "<hr>";
    loginBtn.style.display = hide;
    signUp.style.display = hide;
    createBtn.style.display = show;
    emailId.style.display = flex;
    signIn.style.display = show;

}
noneItem();

toCreate.addEventListener("click", (e) =>{

 noneItem();
});
toLogin.addEventListener("click", (e) =>{

    formHeader.innerHTML = "Login" + "<hr>";
    createBtn.style.display = hide;
    emailId.style.display = hide;
    signIn.style.display = hide;

    loginBtn.style.display = show;
    signUp.style.display = show;
    


});