let imgbox=document.getElementById('imgbox');

imgbox.addEventListener('dragstart',(e)=>{
    console.log('dragstart');
    e.target.className+=' hold';
    setTimeout(() => {
        e.target.className='hide';
        
    }, 0);

});
imgbox.addEventListener('dragend',(e)=>
{
    console.log('dragend');
    e.target.className='imgbox';

});


let whiteboxes=document.querySelectorAll('.whitebox');

for (whitebox of whiteboxes) {

    whitebox.addEventListener('dragover',(e)=>{
            console.log('dragover');
            e.preventDefault();
        });
        
        whitebox.addEventListener('dragenter',(e)=>{
            console.log('dragenter');
            e.target.className+=" dashed"
            
            
        });
        
        whitebox.addEventListener('dragleave',(e)=>{
            console.log('dragleave');
            e.target.className='whitebox';
            

    });
    
    whitebox.addEventListener('drop',(e)=>{
            console.log('drop');
            e.target.append(imgbox);



    });
    
}


const mymap=new Map();
const key1='mystr',key2={name:"amar"},key3=function(){
    console.log('hello');
};
mymap.set(key1,"this is a string");
mymap.set(key2,"this is a object");
mymap.set(key3,"this is a function");
// console.log(mymap)



let myarr=Array.from(mymap);
// console.log(myarr);

const students=[
    ["1","harry"],
    ["2","joe"],
    ["3","peter"],
    ["4",{name:"amar"}],
    ["5",function(){
        console.log('this is a function');
    }]
];

// let mymap1=new Map(students);
// console.log(mymap1.clear());
// console.log(mymap1);

// let myset=new Set(["this","is","better","than","5",{name:"amar"}]);
// myset.add("this");
// myset.add("is");
// myset.add("very");
// myset.add("good");
// console.log(myset);

// let setarray=Array.from(myset);
// console.log(setarray[1]);
// for (const iterator of myset) {
//     console.log(iterator);
    
// // }

// let myset1=new Set();

// let x={name:"x"};
// let y={name:"x"};
// let z={name:"z"};
// let a={class:"z"};
// let b={section:"z"};
// myset1.add(x);
// myset1.add(y);
// myset1.add(z);
// myset1.add(a);
// myset1.add(b);

// for (const iterator of myset1) {
    
//     console.log(iterator.name);
// }
// console.log(myset1(name).size);

// const SECRET_KEY = Symbol('secret');
// console.log(SECRET_KEY);

// const user = {
//   name: 'John',
//   age: 30,
//   [SECRET_KEY]: 's3cr3tP@ssw0rd'
// };

const myMethod = Symbol('myMethod');
Array.prototype[myMethod] = function () {
  // Custom method implementation
};

const arr = [1, 2, 3];
console.log(arr[myMethod]()); // Custom method invocation