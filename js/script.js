var cart = new Object();
var products = new Object();
var inactiveTime = 30;
var timeoutTracker;

function initPage() {
	decreaseTimer();
	setInactiveTimeout();
}

function addToCart(productName) {
	resetInactiveTimeout();
	if (!cart.hasOwnProperty(productName)) {
		cart[productName] = 1;
	} else {
		cart[productName]++;
	}
	inactiveTime = 0;
}

function removeFromCart(productName) {
	resetInactiveTimeout();
	if (!cart.hasOwnProperty(productName)) {
		window.alert("Property does not exist!");
	} else if (cart[productName] === 1) {
		delete cart[productName];
	} else {
		cart[productName]--;
	}
	inactiveTime = 0;
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
		window.alert("Cart is empty");
	} else {
		for (var name in cart) {
			displayAfterTimeout(time, name + ": " + cart[name]);
			time += 30 * 1000;
		}
	}
	inactiveTime = 0;
}

function displayAfterTimeout(timeout, content) {
	setTimeout(function() {
		window.alert(content);
	}, timeout);
}

function setInactiveTimeout() {
	timeoutTracker = setInterval(function() {
		window.alert("Hey there!  Are you still planning to buy something?");
	}, 30000);
}

function resetInactiveTimeout() {
	clearInterval(timeoutTracker);
	setInactiveTimeout();
}

function decreaseTimer() {
	setInterval(function() {
		inactiveTime--;
	}, 1000);
}