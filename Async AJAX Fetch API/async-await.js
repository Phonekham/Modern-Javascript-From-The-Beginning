//  async function myFunc(){
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('hello'),1000);
//   });
//   const error = false;
//   if (!error) {
//     const res = await promise; //Wait untill promise is resoved
//     return res;
//   }else{
//     await Promise.reject(new Error('Something went wrong'));
//   }
  
// }
// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

async function getUsers(){
  // awit response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // Only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise is resoved

  return data;
}
getUsers().then(users => console.log(users));
