
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
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const weekday = document.getElementById("weekday");
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

timeDate();
noneItem();

toCreate.addEventListener("click", (e) => {
    noneItem();
});
toLogin.addEventListener("click", (e) => {

    formHeader.innerHTML = "Login" + "<hr>";
    createBtn.style.display = hide;
    emailId.style.display = hide;
    signIn.style.display = hide;

    loginBtn.style.display = show;
    signUp.style.display = show;
});