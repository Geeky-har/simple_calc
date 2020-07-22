// for(items of b){
//     items.addEventListener('click', () =>{
//         console.log(items.value);
//     })
// }
// let b = document.querySelectorAll('.btn');

//all numeric buttons variables:
let txt = document.getElementById("text");
let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");
let b3 = document.getElementById("bt3");
let b4 = document.getElementById("bt4");
let b5 = document.getElementById("bt5");
let b6 = document.getElementById("bt6");
let b7 = document.getElementById("bt7");
let b8 = document.getElementById("bt8");
let b9 = document.getElementById("bt9");
let b0 = document.getElementById("bt0");
let b00 = document.getElementById("bt00");

//all operator buttons variables:
let bplus = document.getElementById("bt+");
let bmin = document.getElementById("bt-");
let bpro = document.getElementById("bt*");
let bdiv = document.getElementById("btdiv");
let beq = document.getElementById("bteq");
let bmod = document.getElementById("btmod");
let bdot = document.getElementById("bt.");

//all special function buttons variables:
let bclear = document.getElementById("btc");
let bksp = document.getElementById("bksp");

// console.log(bplus.value);
// console.log(typeof(txt.value));
// console.log(txt.value.slice(0, - 1));

b1.addEventListener("click", () =>{
    txt.value = txt.value + b1.value;
});

b2.addEventListener("click", () =>{
    txt.value = txt.value + b2.value;
});

b3.addEventListener("click", () =>{
    txt.value = txt.value + b3.value;
});

b4.addEventListener("click", () =>{
    txt.value = txt.value + b4.value;
});

b5.addEventListener("click", () =>{
    txt.value = txt.value + b5.value;
});

b6.addEventListener("click", () =>{
    txt.value = txt.value + b6.value;
});

b7.addEventListener("click", () =>{
    txt.value = txt.value + b7.value;
});

b8.addEventListener("click", () =>{
    txt.value = txt.value + b8.value;
});

b9.addEventListener("click", () =>{
    txt.value = txt.value + b9.value;
});

b0.addEventListener("click", () =>{
    txt.value = txt.value + b0.value;
});

b00.addEventListener("click", () =>{
    txt.value = txt.value + b00.value;
});

bdot.addEventListener("click", () =>{
    txt.value = txt.value + bdot.value;
});

// all operations:

bplus.addEventListener("click", () =>{
    txt.value = txt.value + bplus.value;
});

bmin.addEventListener("click", () =>{
    txt.value = txt.value + bmin.value;
});

bpro.addEventListener("click", () =>{
    txt.value = txt.value + bpro.value;
});

bdiv.addEventListener("click", () =>{
    txt.value = txt.value + bdiv.value;
});

bmod.addEventListener("click", () =>{
    txt.value = txt.value + bmod.value;
});

beq.addEventListener("click", () =>{
    txt.value = eval(txt.value);
});

bksp.addEventListener("click", () =>{
    txt.value = txt.value.slice(0, - 1);
});

bclear.addEventListener("click", () =>{
    txt.value = "";
});
