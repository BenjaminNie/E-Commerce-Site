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
		'quantity': 10
	},
	'Box2': {
		'price': 5,
		'quantity': 10
	},
	'Clothes1': {
		'price': 20,
		'quantity': 10
	},
	'Clothes2': {
		'price': 30,
		'quantity': 10
	},
	'Jeans': {
		'price': 50,
		'quantity': 10
	},
	'Keyboard': {
		'price': 20,
		'quantity': 10
	},
	'KeyboardCombo': {
		'price': 40,
		'quantity': 10
	},
	'Mice': {
		'price': 20,
		'quantity': 10
	},
	'Pc1': {
		'price': 350,
		'quantity': 10
	},
	'Pc2': {
		'price': 400,
		'quantity': 10
	},
	'Ps3': {
		'price': 300,
		'quantity': 10
	},
	'Tent': {
		'price': 100,
		'quantity': 10
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
			
			add.setAttribute("type", "button");
			add.setAttribute("value", "+");
			sub.setAttribute("type", "button");
			sub.setAttribute("value", "-");
	
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