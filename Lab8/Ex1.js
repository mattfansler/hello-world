var age = 21;

for(var number = 50; number >= age; number--){ 
    console.log(`Are you ${number} years old`);
}
console.log(`You must be ${number} years old?`); 

a = [1,2,3];
*/

product1 = { 'name': 'small gumball', 'price': 0.02 };
product2 = { 'name': 'medium gumball', 'price': 0.05 };
product3 = { 'name': 'large gumball', 'price': 0.07 };

// array of all products
products = [product1, product2, product3];
cart_quantities = [2,0,4]; // corresponds to products array
for(i-0; i<products.length; i++) {
    console.log(`extended price for product1 ${product[i].price * cart_quantities[i]}`);
}