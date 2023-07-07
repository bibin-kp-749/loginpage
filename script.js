var inputpassword = document.getElementById('exampleInputPassword1');
var checkedshowpassword = document.getElementById('showpassword');
checkedshowpassword.addEventListener("change", function () {
  if (checkedshowpassword.checked) {
    inputpassword.type = 'string';
  } else {
    inputpassword.type = 'password';
  }
});
