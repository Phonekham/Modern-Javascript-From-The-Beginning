const user = {email:'phone@gmail.com'};
try {
  // myfunc();
  if (!user.name) {
    throw new SyntaxError ('User has no name');
  }
} catch (e) {
  // console.log(e);
  // console.log(e.message);
  // console.log(e instanceof TypeError);
  console.log(`User Error: ${e.message}`);
}finally{
  console.log("finally");
}
console.log("Well");