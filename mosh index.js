/*
console.log('mama');
console.log('Hello world');
document.write("hello java");

let name="war",village="kala";
console.log(name+village);

let interestRate=0.3;
interestRate=1;
console.log(interestRate);

const interestRates=0.5;
console.log(interestRates);

let meme="jaga";
let age=30;
let isOk=false;
let firstName=undefined;
let lastName=null;

typeof meme*/




/*let person={
    name:"abishek",
    age:30
};
console.log(person);

console.log(name);
person.name="kumar";
console.log(person.name);

let selectedColors= ['red','blue'];
selectedColors[2]=7;
console.log(selectedColors);
console.log(selectedColors.length);

let heroes=['mama','kumar','jeya'];


heroes.forEach(function(value){
    console.log(`${value}`);
})

//------------
let todo=['go to gym','record a video','buy headphone'];

todo.push('go to hospital');
todo.unshift('first ah varum');

todo.forEach(function(name,position){
    console.log(`${position+1}.${name}`);
})


for(i=0; i<todo.length; i++){
    console.log(`${i+1}.${todo[i]}`);
}
//---------------

let myObject={
    title: 'Js padippom',
    author: 'Naan thaan',
    Date: '14.12.21',
    price: '9000rs',
    changePrice: function(newPrice){
       this.price=newPrice;
       console.log(this.newPrice);
    }
}

myObject.changePrice('5000');
console.log(changePrice);
myObject.price('2000');

let email ="ABbi@gmail.com";
let password="123456";

function userCheck(email){
    
    if(email.includes('@)')){
        return true;
    }
    else{
        return false;
    }
}

console.log(userCheck(user));

const circle={
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('davis');
    }
};
function createCircle(radius){
    return{
        radius,
    draw: function(){
        console.log("draw");
    }
};
}
const circle= createCircle(1);
circle.draw();
let war ={}
let war2=war
console.log(war===war2);

let sayhello = (name)=>`hello ${name}`
console.log(sayhello('mama'));

let myTodos=[{
    title: 'go to gym',
    isDone: true
},{
    title: 'go to colloge',
    isDone: false
},{
    title: 'go to police station',
    isDone: false
}];
console.log(myTodos[1].title);

let printTrue=myTodos.filter((todo)=>{
    return todo.isDone==true;
});
console.log(printTrue);
*/



let phone={
    title: 'samsung',
    price: '20000rs',
    Desp: function(){
        return `tgis phone is ${this.price}`;
    }
}

console.log(phone.Desp());


let covertRupees=(dollar)=>{
    if (typeof dollar==='number'){
        return dollar*100;
    }
    else{
        throw Error('type valid amount');
    }
}
try{
    console.log(covertRupees('kumar'));
}catch(error){
    console.log(error);

}

console.log('double');