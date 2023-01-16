const userInfo=JSON.parse(localStorage.getItem("data"));
const userImge= document.getElementById('userImg').src=userInfo.image;

const userName= document.getElementById('nameUser').innerHTML=`${userInfo.firstName} ${userInfo.lastName}`;
const userGmail=document.getElementById('userMail').innerHTML= userInfo.email;
const userGndr=document.getElementById('userGender').innerHTML=userInfo.gender;