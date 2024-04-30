const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.onload = () => {

      // 通信に失敗した場合の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      // console.log(formText.value);
      // console.log(XHR.response);

      list.insertAdjacentHTML("afterend", buildHTML(XHR));


      formText.value = "";
    };
  });
  
 };
 
 window.addEventListener('turbo:load', post);
//  ページが読み込まれたときに実行