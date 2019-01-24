document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function(){
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let ouput = '';
      if (response.type === 'success') {
        response.value.forEach(function(joke){
          ouput += `<li>${joke.joke}</li>`;
        });
      }else{
        ouput += '<li>Something went wrong</li>'
      }
      document.querySelector('.jokes').innerHTML = ouput;
    }
  }
  xhr.send();
  e.preventDefault();
}