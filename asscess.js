const userData = JSON.parse(localStorage.getItem("data"));
//console.log(userData);
document.getElementById("userName").innerHTML = `${userData.firstName}`;

const handlelogout = () => {
  window.location.reload(true);
  window.location.replace("../index.html");
};
const profilePage = () => {
  window.location.reload(true);
  window.location.replace("../profile.html");
};
const home =()=>{
  window.location.reload(true);
  window.location.replace('../post.html');
}