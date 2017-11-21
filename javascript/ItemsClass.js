class packages {
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

    setPackageOption(opt){
    	this.userPackageOpt = opt;
    }

    getOptionsPrice(opt) {
        if(opt){
    		return this.packageOptions[opt].p;
    	}
    	else if(this.userPackageOpt){
	        return this.packageOptions[this.userPackageOpt].p;
	    }
    }

    getOptionsName(opt) {
    	if(opt){
    		return this.packageOptions[opt].name;
    	}
    	else if(this.userPackageOpt){
	        return this.packageOptions[this.userPackageOpt].name;
	    }
    }

    getOptions() {
        return this.packageOptions;
    }
}


class cartItems extends packages {
    constructor(oldCart) {
    	super();
        this.items = oldCart || [];
    }

    add(item) {
        this.items.push(item);
    }

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

    getItems() {
        return this.items;
    }
}

var cart = new cartItems();

cart.add({ p: 1.28, q: 2 });
cart.add({ p: 3.99, q: 17 });
cart.add({ p: 4.99, q: 2 });

console.log('Sum:' + cart.getSum());

cart.setPackageOption('gift');

console.log('Package ' + cart.getOptionsName() + ' was chosen! for $'+ cart.getOptionsPrice());

console.log('New Sum:' + cart.getSum());