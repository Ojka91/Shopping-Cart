

//creating the class products

class Product {

    constructor(name, price, num, stock) {
        this.name = name;
        this.price = price;
        this.num = num;
        this.stock = stock;
    }

    toString() {
        return this.name + " " + this.price + "€";
    }
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100, 0, 10);
let p1replaced = new Product("tv", 120, 0, 10);
let p2 = new Product("pencil", 3, 0, 10);
let p2replaced = new Product("superPen", 3, 0, 10);
let p3 = new Product("bike", 300, 0, 10);
let p3replaced = new Product("Snowboard", 280, 0, 10);
let p4 = new Product("charger", 20, 0, 10);
let p4replaced = new Product("battery", 25, 0, 10);





//class to create different carts

class ShoppingCart {

    constructor() {
        this.products = [];
        this.total = 0;
        this.products_off = [];
        this.items = [];

    }
//action will be executed when purchase somthing
    action(product) {
        if (product.stock > 0) {
            product.stock -= 1;
            product.num++;
            pricePen.innerHTML = "";
            priceChar.innerHTML = "";
            priceBike.innerHTML = "";
            priceVacuu.innerHTML = "";
            pricePen.append(p2.price + "€" + " " + p2.stock + " left");
            priceChar.append(p4.price + "€" + " " + p4.stock + " left");
            priceBike.append(p3.price + "€" + " " + p3.stock + " left");
            priceVacuu.append(p1.price + "€" + " " + p1.stock + " left");
            cart.addProduct(product);
            cart.totlPrice();
            mycart.innerHTML = "";
            mycart.append(cart.total + "€");


            var cartMessage = "";
            //create array items with one example of each items
            for (var x = 0; x < this.products.length; x++) {

                if (!this.items.includes(this.products[x])) {
                    this.items.push(this.products[x]);
                }
            }
            for (var u = 0; u < this.items.length; u++) {
                if (this.items[u].num > 0) {
                    cartMessage = cartMessage + this.items[u].num + " " + this.items[u].name + " ";
                }

            }
            mycart.append(" You are buying " + cartMessage);
        }
    };

    addProduct(product) {
        this.products.push(product);
        this.products.sort();
    }

    toString() {
        return "cart with: " + this.products;
    }
    totlPrice() {

        var price = 0;
        var off = 0;
        this.total = 0;



        for (var q = 0; q < this.products.length; q++) {
            this.total = this.total + this.products[q].price;
        }
        this.products_off = [];
        for (var t = 0; t < this.items.length; t++) {
            off = off + this.items[t].price * (Math.trunc(this.items[t].num / 4));
            if (Math.trunc(this.items[t].num / 4) >= 1) {
                this.products_off.push("you have " + Math.trunc(this.items[t].num / 4) + " " + this.items[t].name + " for free");
            }
        }
        
        this.total = this.total - off;
        if (this.products.length > 4) {
            this.total = this.total - (this.total / 10);
          
            document.getElementById("discount").innerHTML = "";
            document.getElementById("discount").append("You have 10% discount!!!! " + "and " + this.products_off);
       
        } else {
            return this.total + " euros";
        }

    }
    replace(productName, replacementProduct) {
        var replace = this.products;

        replace.forEach(function (product, i) {
            if (product.name == productName) {
                replace.splice(i, 1, replacementProduct);
            }
        })

    }

    addStock(name) {
        for (var x = 0; x < this.items.length; x++) {
            if (name === this.items[x].name) {
                this.items[x].stock = this.items[x].stock + 10;
            }
        }
    }

    checkStock() {
        for (var x = 0; x < this.items.length; x++) {
            if (this.items[x].stock <= 2) {
                this.addStock(this.items[x].name);
            }
        }
    }
    
    //this will be execured when reset the stats
    reset() {
        this.items.forEach(function (element) {
            element.num = 0;
            element.stock = 10;


        });
        this.items = [];
        this.products = [];
        this.total = 0;
        this.products_off= "";
        document.getElementById("discount").innerHTML = "";
        mycart.innerHTML = "";
         mycart.append(cart.total + "€");
        priceBike.innerHTML = "";
        priceChar.innerHTML = "";
        priceVacuu.innerHTML = "";
        pricePen.innerHTML = "";
        pricePen.append(p2.price + "€" + " " + p2.stock + " left");
        priceChar.append(p4.price + "€" + " " + p4.stock + " left");
        priceBike.append(p3.price + "€" + " " + p3.stock + " left");
        priceVacuu.append(p1.price + "€" + " " + p1.stock + " left");
    }
}




let cart = new ShoppingCart();





var pricePen = document.getElementById("pricepen");
var priceChar = document.getElementById("pricecharger");
var priceBike = document.getElementById("pricebike");
var priceVacuu = document.getElementById("pricevacuum");
var mycart = document.getElementById("cart");

var buttonPen = document.getElementById("buttonpen");
var buttonBike = document.getElementById("buttonbike");
var buttonCharger = document.getElementById("buttoncharger");
var buttonVacuum = document.getElementById("buttonvacuum");


document.getElementById("reset").addEventListener("click", () => cart.reset());

document.getElementById("buttonpen").addEventListener("click", () => cart.action(p2));

document.getElementById("buttonbike").addEventListener("click", () => cart.action(p3));
document.getElementById("buttoncharger").addEventListener("click", () => cart.action(p4));
document.getElementById("buttonvacuum").addEventListener("click", () => cart.action(p1));

pricePen.append(p2.price + "€" + " " + p2.stock + " left");
priceChar.append(p4.price + "€" + " " + p4.stock + " left");
priceBike.append(p3.price + "€" + " " + p3.stock + " left");
priceVacuu.append(p1.price + "€" + " " + p1.stock + " left");
    








