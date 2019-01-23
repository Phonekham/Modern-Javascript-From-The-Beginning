document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  // Create an  XHR Object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET','data.txt',true);
  xhr.onload = function(){
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }
  xhr.send();

  //readyState value
  //0: request not initialized
  //1: server connection established
  //2: request recieved
  //3: processing request
  //4: request finished and response is ready

  // http status
  //200: "ok"
  //403 Forbidden
  //404 not found
}