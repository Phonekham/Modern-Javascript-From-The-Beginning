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

// 
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function(){
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>ID: ${customer.name}</li>
        <li>ID: ${customer.company}</li>
         <li>ID: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function(customer){
         output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>ID: ${customer.name}</li>
        <li>ID: ${customer.company}</li>
         <li>ID: ${customer.phone}</li>
      </ul>
      `;
      });
      
      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}