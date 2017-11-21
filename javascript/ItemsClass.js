//main package class
class packages {

    //set up our options for the packages
    constructor() {
        this.packageOptions = {
            whiteLabel: {
                name: 'White Label',
                p: 1
            },
            gift: {
            	name: 'Gift',
            	p: 2
            }
        };
    }

    //set the option user wants
    setPackageOption(opt){
    	this.userPackageOpt = opt;
    }

    //get the option price (opt: ask for price for certain item) or the user set option
    getOptionsPrice(opt) {
        if(opt){
    		return this.packageOptions[opt].p;
    	}
    	else if(this.userPackageOpt){
	        return this.packageOptions[this.userPackageOpt].p;
	    }
    }

    //get the option name (opt: ask for name for certain item) or the user set option
    getOptionsName(opt) {
    	if(opt){
    		return this.packageOptions[opt].name;
    	}
    	else if(this.userPackageOpt){
	        return this.packageOptions[this.userPackageOpt].name;
	    }
    }

    //get options list for view
    getOptions() {
        return this.packageOptions;
    }
}


class cartItems extends packages {
    //create cartItems with old items call super class
    constructor(oldCart) {
    	super();
        this.items = oldCart || [];
    }

    //add item to cart
    add(item) {
        this.items.push(item);
    }

    //get the sum and if user picks special package add to sum
    getSum() {
        var sum = 0;
        this.items.forEach(function(item) {
            sum = sum + (item.p * item.q);
        });
        if(this.userPackageOpt){
        	sum = sum + super.getOptionsPrice(this.userPackageOpt);
        }
        return sum;
    }

    //get items in cart
    getItems() {
        return this.items;
    }
}

//create cart
var cart = new cartItems();

//add items to cart
cart.add({ p: 1.28, q: 2 });
cart.add({ p: 3.99, q: 17 });
cart.add({ p: 4.99, q: 2 });

//Get sum of just the cart
console.log('Sum:' + cart.getSum());

//select package (gift or whitelabel)
cart.setPackageOption('gift');

//get the option and price
console.log('Package ' + cart.getOptionsName() + ' was chosen! for $'+ cart.getOptionsPrice());

// get new sum of the cart after selection
console.log('New Sum:' + cart.getSum());