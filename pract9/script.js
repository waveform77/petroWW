let user = {
  name: "Джон",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!
let vip = {
  name: "Золоторевский Александр",
  address: "ул. Даблр, дом Майса",
  phone: "+7 (952) 812-52-52",
  email: "vipeRR.doubleR@gmail.com",
  orderHistory: [] 
 };
 
 console.log(vip.name); 
 console.log(vip.address); 
 console.log(vip.phone); 
 let children = {
  name: "Иван",
  isAdmin: false
 };
 let fff = {
userID: 1,
ZAKAZ: 2,
items: ["Balenca","Vetements"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "Viperrsauce",
  address:"LA"
 };
 if (fff.status === "Ожидание") {
  console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Андрей");
 const member2 = new GroupMember("Алексей");
 const member3 = new GroupMember("Петр");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
  };
 }
 
 const vasya = new Student("Александр", "ИСП-309", ["Веб-программирование"]);
 
 vasya.sayHi(); 
 vasya.showCourses();