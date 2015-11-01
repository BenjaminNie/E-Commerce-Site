var cart = {
	'Box1': 0,
	'Box2': 0,
	'Clothes1': 0,
	'Clothes2': 0,
	'Jeans': 0,
	'Keyboard': 0,
	'KeyboardCombo': 0,
	'Mice': 0,
	'Pc1': 0,
	'Pc2': 0,
	'Pc3': 0,
	'Tent': 0
};

var product = {
	'Box1' : {
		'price': 10,
		'quantity': 10,
		'name': 'Box1'
	},
	'Box2': {
		'price': 5,
		'quantity': 10,
		'name': 'Box2'
	},
	'Clothes1': {
		'price': 20,
		'quantity': 10,
		'name': 'Clothes1'
	},
	'Clothes2': {
		'price': 30,
		'quantity': 10,
		'name': 'Clothes2'
	},
	'Jeans': {
		'price': 50,
		'quantity': 10,
		'name': 'Jeans'
	},
	'Keyboard': {
		'price': 20,
		'quantity': 10,
		'name': 'Keyboard'
	},
	'KeyboardCombo': {
		'price': 40,
		'quantity': 10,
		'name': 'KeyboardCombo'
	},
	'Mice': {
		'price': 20,
		'quantity': 10,
		'name': 'Mice'
	},
	'Pc1': {
		'price': 350,
		'quantity': 10,
		'name': 'Pc1'
	},
	'Pc2': {
		'price': 400,
		'quantity': 10,
		'name': 'Pc2'
	},
	'Ps3': {
		'price': 300,
		'quantity': 10,
		'name': 'Ps3'
	},
	'Tent': {
		'price': 100,
		'quantity': 10,
		'name': 'Tent'
	}
};

var inactiveTime = 300

// grabbing DOM elements
var showCart  = document.getElementById("showCart");
var closeCart = document.getElementById("closeCart");
var pList = document.getElementById("productTable");
var pBody = document.getElementById("pBody");
var timeoutVal = document.getElementById("timeoutValue");
var cartList = document.getElementById("cartList");

function initPage() {
	runTimer();
}

function addToCart(productName) {

	resetInactiveTimeout();
	var p = product[productName];
	
	if (p.quantity === 0) {
		window.alert("There are no " + productName + " left in stock");
	} else {
		cart[productName]++;
		p.quantity--;
		updateCartPrice();
	}
}

function removeFromCart(productName) {
	resetInactiveTimeout();
	var p = product[productName];
	
	if (cart[productName] === 0) {
		window.alert("There are no " + productName + " in your cart.");
	} else {
		cart[productName]--;
		p.quantity++;
		updateCartPrice();
	}
}

function isEmpty(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}	
	return true;
}

function showCart() {
	var time = 0;
	
	if (isEmpty(cart)) {
		window.alert("Your Cart is Empty! To add an item to your cart, hover over any item and click 'add.' To remove an item from your cart, click 'remove.'");
	} else {
		for (var name in cart) {
			displayAfterTimeout(time, name + ": " + cart[name]);
			time += 5 * 1000;
		}
	}
}

function updateCartPrice() {
	var totalPrice = 0;
	
	for (var name in cart) {
		var p = product[name];
		totalPrice += cart[name] * p.price;	
		showCart.innerHTML = "Show cart ($" + totalPrice + ")";
	}
}


	
function populateCart() {
	var tp = 0;	
		
	for (var name in cart) {
		var p = product[name];
		
		if (cart[name] > 0) {
			
			var row = document.createElement("tr");
			var pq = document.createElement("td"); 			//product quantity
			var pp = document.createElement("td"); 			//product price
			var ab = document.createElement("td");			//
			var sb = document.createElement("td");			//
			var add = document.createElement("input"); 		//add button
			var sub = document.createElement("input"); 		//subtract button
			var pn = document.createTextNode(name);
			var qty = document.createTextNode(10 - p.quantity);
			var prc = document.createTextNode("$" + p.price);
			
			add.setAttribute("id", "addModal");
			add.setAttribute("type", "button");
			add.setAttribute("value", "+");
								
			sub.setAttribute("id", "subModal");
			sub.setAttribute("type", "button");
			sub.setAttribute("value", "-");			
			
			
			if(p.name == "Box1") {
				add.onclick = function (){
					addToCart('Box1');
				}
				sub.onclick = function (){
					removeFromCart('Box1');
				}
			}
			
			if(p.name == "Box2") {
				add.onclick = function (){
					addToCart('Box2');
				}
				sub.onclick = function (){
					removeFromCart('Box2');
				}
			}
			if(p.name == "Clothes1") {
				add.onclick = function (){
					addToCart('Clothes1');
				}
				sub.onclick = function (){
					removeFromCart('Clothes1');
				}
			}
			if(p.name == "Clothes2") {
				add.onclick = function (){
					addToCart('Clothes2');
				}
				sub.onclick = function (){
					removeFromCart('Clothes2');
				}
			}
			if(p.name == "Jeans") {
				add.onclick = function (){
					addToCart('Jeans');
				}
				sub.onclick = function (){
					removeFromCart('Jeans');
				}
			}
			if(p.name == "Keyboard") {
				add.onclick = function (){
					addToCart('Keyboard');
				}
				sub.onclick = function (){
					removeFromCart('Keyboard');
				}
			}
			if(p.name == "KeyboardCombo") {
				add.onclick = function (){
					addToCart('KeyboardCombo');
				}
				sub.onclick = function (){
					removeFromCart('KeyboardCombo');
				}
			}
			if(p.name == "Mice") {
				add.onclick = function (){
					addToCart('Mice');
				}
				sub.onclick = function (){
					removeFromCart('Mice');
				}
			}
			if(p.name == "PC1") {
				add.onclick = function (){
					addToCart('PC1');
				}
				sub.onclick = function (){
					removeFromCart('PC1');
				}
			}
			if(p.name == "PC2") {
				add.onclick = function (){
					addToCart('PC2');
				}
				sub.onclick = function (){
					removeFromCart('PC2');
				}
			}
			if(p.name == "PC3") {
				add.onclick = function (){
					addToCart('PC3');
				}
				sub.onclick = function (){
					removeFromCart('PC3');
				}
			}
			if(p.name == "Tent") {
				add.onclick = function (){
					addToCart('Tent');
				}
				sub.onclick = function (){
					removeFromCart('Tent');
				}
			}
			
	
			pq.appendChild(qty);
			pp.appendChild(prc);
			ab.appendChild(add);
			sb.appendChild(sub);
			
			row.appendChild(pn);
			row.appendChild(pq);
			row.appendChild(pp);
			row.appendChild(ab);
			row.appendChild(sb);
			
			pBody.appendChild(row);
			
			tp += cart[name] * p.price;			// add total cart items
			
		}
		
		
	}
	var x = document.createElement("tr");
	var y = document.createElement("td");
	var z = document.createElement("td");
	var w = document.createElement("td");
	
	var t = document.createTextNode("Total Price:");
	var s = document.createTextNode(" ");
	var pr = document.createTextNode("$" + tp);
	
	y.appendChild(t);
	z.appendChild(s);
	w.appendChild(pr);
	
	x.appendChild(y);
	x.appendChild(z);
	x.appendChild(w);
	pBody.appendChild(x);	
	
}




function clearCart() {

	while (pBody.firstChild) {
		pBody.removeChild(pBody.firstChild);
	}
}
	
function displayAfterTimeout(timeout, content) {
	setTimeout(function() {
		window.alert(content);
	}, timeout);
}

function resetInactiveTimeout() {
	inactiveTime = 300;
}

function runTimer() {
	setInterval(function() {
		inactiveTime--;
		timeoutVal.innerHTML = inactiveTime;
		if (inactiveTime <= 0) {
			window.alert("Hey there!  Are you still planning to buy something?");
			inactiveTime = 300;
		}
	}, 1000);
}

// attaching event listeners
showCart.addEventListener("click", populateCart, false);
closeCart.addEventListener("click", clearCart, false);