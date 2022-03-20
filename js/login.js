function login(form) {
  var username = document.getElementById("username")
  var password = document.getElementById("password")
  console.log(username, password)

  if(username.value == "") {
    alert("请输入用户名");
    return false
  } 
  else if(password.value == ""){
    alert("请输入密码");
    return false
  }
  else if(username.value == "admin" && password.value == "admin") {
    window.location.href = "../adminPage/index.html"
    return true
  }
  else {
    window.location.href = "../customerPage/index.html"
    return false
  }

}