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
var showCart = document.getElementById("showCart");
var closeCart = document.getElementById("closeCart");
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

function sumPrice() {
	var price = 0;
	
	for (var name in cart) {
		var p = product[name];
		totalPrice += cart[name] * p.price;	
	}
	
	totalPrice = price;
}
	
function populateCart() {
	for (var name in cart) {
		var p = product[name];
		
		if (cart[name] > 0) {
			var x = document.createElement("p");
			var t = document.createTextNode(name + ":      " + cart[name]  + " $" + p.price*cart[name]);
			x.appendChild(t);
			cartList.appendChild(x);
		}
	}
	
	var x = document.createElement("p");
	var total = sumPrice();
	var t = document.createTextNode("TOTAL PRICE: " + sumPrice());
	x.appendChild(t);
	cartList.appendChild(x);
}

function closeCart() {
	window.alert("in here");
	while (showCart.firstChild) {
		showCart.removeChild(showCart.firstChild);
	}
}
	
function displayAfterTimeout(timeout, content) {
	setTimeout(function() {
		window.alert(content);
	}, timeout);
}

function resetInactiveTimeout() {
	inactiveTime = 30;
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