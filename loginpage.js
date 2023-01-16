async function login() {
  let mail = document.getElementById("emaildata").value;
  let pass = document.getElementById("passworddata").value;

  const userData = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: mail,
      password: pass,
      // expiresInMins: 60, // optional
    }),
  });

  const data = await userData.json();
  if (
    (await data?.token?.length) == 0 ||
    (await data?.token?.length) == undefined
  ) {
    alert("enter the correct password and email");
  } else {
    // store data in local storage
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload = true;
    window.location.replace("./post.html");
  }
}
