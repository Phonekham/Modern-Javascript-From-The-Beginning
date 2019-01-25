const http = new EasyHTTP;

// Get USers
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data
const data = {
  name: "Phone",
  username:"phonekham",
  email:"phone@gmail.com"
}
// // Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

 // update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

 // delete user
 http.delete('https://jsonplaceholder.typicode.com/users/2')
   .then(data => console.log(data))
   .catch(err => console.log(err));
