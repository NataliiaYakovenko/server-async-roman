// Приклад GET запит
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
//==========================================

//Приклад POST запит

const product = {
  id: 0,
  title: "string",
  price: 0.1,
  description: "string",
  category: "string",
  image: "http://example.com",
};

fetch("https://fakestoreapi.com/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(product),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
//===============================================

//async,await
async function getProduct() {
  try {
    const promiseResult = await fetch("https://fakestoreapi.com/products");
    const data = await promiseResult.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getProduct();
