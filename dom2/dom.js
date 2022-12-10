//console.dir(document);
//console.log(document.title);
//document.title = 123;
//console.log(document.links);
//console.log(document.getElementById('header-title'));

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello 2';
// var input = document.querySelector('input');
// input.value = 'hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send'

/*var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}*/

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
//var button = document.getElementById('button').addEventListener('click', buttonClick);

/*function buttonClick() {

    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#1a66ff';
}*/


/*var button = document.getElementById('button').addEventListener('click', function () {
    console.log('button clicked');
});*/
/*function buttonClick(e) {

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.offsetX);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);

}*/
//console.log(document.all)
//console.log(e)
/*var button = document.getElementById('button').addEventListener('mousedown', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
}*/

/*var box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
}
box.addEventListener('mouseleave', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
}
box.addEventListener('mouseover', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
}
box.addEventListener('mouseout', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
}
box.addEventListener('mousemove', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
    // output.innerHTML = '<h3>MOUSE X' + e.offsetX + '</h3><h3> MOUSE Y' + e.offsetY + '</h3>';
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}*/
var itemInput = document.querySelector('input[type="text"]');
itemInput.addEventListener('keydown', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE:' + e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'
}