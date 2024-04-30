function post (){
  //リクエストを送信する処理
  // console.log("イベント発火");
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    // console.log("イベント発火");
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
  
 };
 
 window.addEventListener('turbo:load', post);
//  ページが読み込まれたときに実行