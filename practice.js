function myF(age) {
  const dishes = [
    {name: "italianPasta", price: 9.55},
    {name: "riceWithVeggies", price: 8.65},
    {name: "chickenWithPotatoes", price: 15.55},
    {name: "vegetarianPizza", price: 6.45}
  ];
  const taxes = 0.2;

  if (age < 18) {
    dishes.forEach(product => {
      console.log(`${product.name}: $${product.price}`);
    });
  } else {
    dishes.forEach(product => {
      console.log(`${product.name}: $${product.price * taxes + product.price}`);
    });
  }
}
myF(20);