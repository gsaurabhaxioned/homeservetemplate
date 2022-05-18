// import $ from 'jquery';
$(document).ready(function(){
    console.log("dhjh");
})
let validzip = /^[0-9]{5,5}$/;
$(".zipform").submit((e) => {
    e.preventDefault();
    $(".repairerror").text("");
    let zip_repair_plans = $(".zip-repair-plans").val();
    console.log(zip_repair_plans);
    if (!(zip_repair_plans.match(validzip))) {
        $(".repairerror").text("Please input a 5 digit ZIP Code");
    }
})
    $(".instant-form").submit((e) => {
    e.preventDefault();
    $(".instanterror").text("");
    let zip_instant_quote = $(".zip-instant-quote").val();
    if (!(zip_instant_quote.match(validzip))) {
        $(".instanterror").text("Please input a 5 digit ZIP Code");
    }
})