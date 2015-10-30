var cart = {
	'box1': 0,
	'box2': 0,
	'clothes1': 0,
	'clothes2': 0,
	'jeans': 0,
	'keyboard': 0,
	'keyboardCombo': 0,
	'mice': 0,
	'pc1': 0,
	'pc2': 0,
	'pc3': 0,
	'tent': 0
};

var product = {
	'box1' : {
		'price': 10,
		'quantity': 10
	},
	'box2': {
		'price': 5,
		'quantity': 10
	},
	'clothes1': {
		'price': 20,
		'quantity': 10
	},
	'clothes2': {
		'price': 30,
		'quantity': 10
	},
	'jeans': {
		'price': 50,
		'quantity': 10
	},
	'keyboard': {
		'price': 20,
		'quantity': 10
	},
	'keyboardCombo': {
		'price': 40,
		'quantity': 10
	},
	'mice': {
		'price': 20,
		'quantity': 10
	},
	'pc1': {
		'price': 350,
		'quantity': 10
	},
	'pc2': {
		'price': 400,
		'quantity': 10
	},
	'ps3': {
		'price': 300,
		'quantity': 10
	},
	'tent': {
		'price': 100,
		'quantity': 10
	}
};

var inactiveTime = 300

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
	}
}

function removeFromCart(productName) {
	resetInactiveTimeout();
	
	if (cart[productName] === 0) {
		window.alert("There are no " + productName + " in your cart.");
	} else {
		cart[productName]--;
		p.quantity++;
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
		if (inactiveTime <= 0) {
			window.alert("Hey there!  Are you still planning to buy something?");
			inactiveTime = 300;
		}
	}, 1000);
}