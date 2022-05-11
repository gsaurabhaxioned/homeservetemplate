// import $ from 'jquery';
// $(document).ready(function(){
//     console.log("dhjh");
// })
let validzip = /^[0-9]{5,5}$/;
let zipform = document.querySelector(".zipform");
let instanterror = document.querySelector(".instanterror");
let repairerror = document.querySelector(".repairerror");
let instantform = document.querySelector(".instant-form");
zipform.addEventListener("submit",(e)=>{
    e.preventDefault();
    repairerror.innerText = " ";
let zip_repair_plans = document.querySelector(".zip-repair-plans").value;
console.log(zip_repair_plans);
if(!(zip_repair_plans.match(validzip))) {
    repairerror.innerText = "zip code is not valid";
}
})
instantform.addEventListener("submit",(e)=>{
    e.preventDefault();
    instanterror.innerText = "";
let zip_instant_quote = document.querySelector(".zip-instant-quote").value;
if(!(zip_instant_quote.match(validzip))) {
    instanterror.innerText = "zip code is not valid";
}
})