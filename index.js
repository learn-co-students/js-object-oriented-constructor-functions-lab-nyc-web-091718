function Scooter(year, color, model){
  this.year = year ;
  this.color = color;
  this.model = model;
}
function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience;

}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}



// second lab
// 
// function BoardMember(name, homestate, training){
//   this.name = name;
//   this.homestate = homestate;
//   this.training = training;
//   this.veto = function(){
//     return "No, I must disagree"
//   };
//   this.approve = function(){
//     return "You can do that!"
//   };
//   this.doCharity = function(){
//     return "I like to help people."
//   };
//   this.releasePressStatement = function(){
//     return "You will see great things from Scuber."
//   };
//   this.sayHi = function(){
//     return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
//   };
// }
