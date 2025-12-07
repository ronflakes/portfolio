window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script202 = function()
{
  function addCssToHead(cssRules) {
    var styleElement = document.createElement('style');
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
}
var css = `#light-box-close { display: none !important;} `;
addCssToHead(css);
}

window.Script203 = function()
{
  let player = GetPlayer()
let name1 = player.GetVar('name')
let count1 = name1.length
player.SetVar('count', count1)
}

window.Script204 = function()
{
  let player = GetPlayer()
let name2 = player.GetVar('vername')
let count1 = name2.length
player.SetVar('count', count1)
}

window.Script205 = function()
{
  var randomnumber = Math.floor((Math.random()*5)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

window.Script206 = function()
{
  var randomnumber = Math.floor((Math.random()*5)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

window.Script207 = function()
{
  var randomnumber = Math.floor((Math.random()*5)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

window.Script208 = function()
{
  var randomnumber = Math.floor((Math.random()*5)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

window.Script209 = function()
{
  var randomnumber = Math.floor((Math.random()*5)+1);
var player = GetPlayer();
player.SetVar("randnum",randomnumber);
}

};
