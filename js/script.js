var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;
var unArray = ["wangohan", "username2", "username3", "username4"]; 
var pwArray = ["12345", "password2", "password3", "password4"];  
for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}
if (valid) {
alert ("Авторизация прошла успешно.  Вы будете перенаправлены на страницу пользователей.");
window.location = "http://www.google.com";
return false;
}
var t = " tries";
if (count == 1) {t = " try"}
if (count >= 1) {
alert ("Неправильный логин или пароль.  У вас осталось " + count + t + " попытки.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}
else {
alert ("Неправильный логин или пароль! У вас не осталось попыток!");
document.myform.username.value = "Больше не осталось попыток!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}
}



























