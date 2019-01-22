//person instructor
function Person(name,dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
const Phone = new Person('Phone','07/03/1981');
const jo = new Person('Jo');
console.log(Phone.calculateAge());