
console.log("**********************************************************")
console.log("Call, bind and apply methods")
console.log("**********************************************************")
//how to call getname() without parameter using alias2 object:
let alias1 = {
     naam: 'Selva',
     getName: function(){
        console.log("Username:", this.naam)
     }
    }
let alias2 = {
    naam: 'Sillots' 
}
alias1.getName() //normal way to call function

//bind returns function, so we have to get it in a variable and call it 
var printnaam = alias1.getName.bind(alias2) 
printnaam() 

//call
alias1.getName.call(alias2) 

//apply
alias1.getName.apply(alias2)

//how to call getname() with parameter using alias2 object:
let alias3 = {
    naam: 'Mithra',
    getName: function(nickname){
       console.log("Username:", this.naam + nickname)
    }
   }
let alias4 = {
   naam: 'Ramu' 
}
alias3.getName('kutty') //normal way to call function

//bind
var printnickname = alias3.getName.bind(alias4) 
printnickname('kutty') 

//call
alias3.getName.call(alias4, 'kutty') 

//apply
alias3.getName.apply(alias4, ['kutty'])


console.log("**********************************************************")
console.log("Inheritance")
console.log("**********************************************************")

//Class inheritance:
class Mall{
    constructor(shopname){
        this.shopname = shopname
    }
    shopAvailable(){
        return this.shopname
    }
}

class Shop extends Mall{
    constructor(name, mallname){
        super(name)
        this.mallname = mallname
    }
    displayShop(){
        return this.shopAvailable() + ' is present in ' + this.mallname
    }
}
const newShop = new Shop('Zudio', 'Brooksfield Mall')
const display = newShop.displayShop()
console.log(display)

//Function inheritance:
function car(brand, color){
    this.brand = brand
    this.color = color
}

function model(brand, color, carModel){
    car.call(this, brand, color)
    this.carModel = carModel
}

const carmodel1 = new model('Ford', 'Black', 'Mustang')
console.log(carmodel1)

model.prototype.speed = '180 mph'

//DOM
//----
//Finding HTML Elements:
document.getElementById('getId')
document.getElementsByTagName('span')
document.getElementsByClassName('getClass')

//Changing content of HTML Elements:
document.getElementById('innerHTML').innerHTML = 'Change content of an element'

//Set attribute:
document.getElementById('setAttr').setAttribute('class', 'textcolor')

//Get attribute:
const getAncId = document.getElementById('anchor')
let targetAnc = getAncId.getAttribute('target')
document.getElementById('getAttr').innerHTML = 'Get target attribute:' + targetAnc

//Remove attribute:
document.getElementById("removeAttr").removeAttribute("href"); 

//Has attribute:
const hasAttr = document.getElementById('anchor')
let targetAttr = hasAttr.hasAttribute('target')
document.getElementById('hasAttr').innerHTML = 'a tag has "target" attribute or not: ' + targetAttr

//Has attributes:
let hasAttrs = document.body.hasAttributes();
document.getElementById("hasAttrs").innerHTML = 'Body has attribute or not: ' + hasAttrs;

//Get attribute node:
const element = document.getElementsByTagName("a")[0];
const attrName = element.getAttributeNode("id");
document.getElementById("getAttrName").innerHTML = attrName.value;

//Set attribute node:
const anchorAttr = document.createAttribute("class");
anchorAttr.value = "textcolor";
const anchorTag = document.getElementsByTagName("a")[1];
anchorTag.setAttributeNode(anchorAttr);

//Remove attribute node:
const anchTag = document.getElementsByTagName("a")[1];
const attributeName = anchTag.getAttributeNode("class");
anchTag.removeAttributeNode(attributeName);

//Set style:
document.getElementById("setStyle").style.color = "green";

//Create element and append to body:
const para = document.createElement("p");
para.innerText = "Created paragraph element and appended to body.";
document.body.appendChild(para);

//Create element and append as child:
const para1 = document.createElement("p");
para1.innerText = "Appended child.";
document.getElementById("appendChild").appendChild(para1);

//Remove child:
const list = document.getElementById("list");
list.removeChild(list.firstElementChild);

//Remove child based on index:
if (list.hasChildNodes()) {
    list.removeChild(list.children[1]);
}

//Remove HTML element:
const divHTag = document.getElementById("firstChild").remove();

//Get First child:
let firstKid = document.getElementById("list").firstElementChild.innerHTML;
document.getElementById("firstKid").innerHTML = 'First child from the list: ' + firstKid;

//Get Last child:
let lastKid = document.getElementById("list").lastElementChild.innerHTML;
document.getElementById("lastKid").innerHTML = 'Last child from the list: ' + lastKid;

