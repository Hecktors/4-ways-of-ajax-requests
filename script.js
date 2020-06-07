var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrBtn = document.getElementById("btn-xhr");
var fetchBtn = document.getElementById("btn-fetch");
var axiosBtn = document.getElementById("btn-axios");
var quote = document.getElementById("quote");
var showChodeBtn = document.getElementById("btn-show-code");
var codeBlock = document.querySelector(".code-block");

xhrBtn.addEventListener("click", function () {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      quote.textContent = data;
    }
  };
  XHR.open("GET", url, true);
  XHR.send();
});

fetchBtn.addEventListener("click", function () {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      quote.textContent = data;
    })
    .catch(function () {
      console.log("Oh Oh... Erroor");
    });
});

$("#btn-jquery").click(function () {
  $.get(url)
    .done(function (res) {
      $("#quote").text(res);
    })
    .fail(function () {
      console.log("oh nee... error!");
    });
});

axiosBtn.addEventListener("click", function () {
  axios
    .get(url)
    .then(function (res) {
      quote.textContent = res.data;
    })
    .catch(function (res) {
      console.log("Error... :(");
    });
});

showChodeBtn.addEventListener("click", function () {
  codeBlock.classList.toggle("hide");
});

