const reqUrl = "http://localhost:3000/item";

//function to handle event values
async function handleSubmit(event) {
  event.preventDefault();
  const items = {
    name: event.target.Itemname.value,
    desc: event.target.desc.value,
    price: event.target.price.value,
    qty: event.target.quantity.value,
  };
  try {
    // using axios.post to store data in database
    const itemData = await axios.post(`${reqUrl}`, items);
    //function call to display inputs in browser/client side
    displayItemDetails(itemData.data.data);
  } catch (err) {
    console.log(err);
  }
  //display input values empty
  document.getElementById("Itemname").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
// event handler for When page reload the user will able to see all the data present in the database
window.addEventListener("DOMContentLoaded", async function () {
  try {
    let itemData = await axios.get(`${reqUrl}`);
    itemData.data.forEach((data) => displayItemDetails(data));
  } catch (err) {
    console.log(err);
  }
});

//function to create a button
function createButton(tr, name, content) {
  const td = document.createElement("td");
  const button = document.createElement("button");
  button.setAttribute("id", name);
  button.textContent = content;
  td.appendChild(button);
  tr.appendChild(td);
  return button;
}
//function to display data  in browser
function displayItemDetails(itemData) {
  const tablebody = document.querySelector("#tableData");
  const tr = document.createElement("tr");
  for (ele in itemData) {
    if (ele !== "createdAt" && ele !== "updatedAt") {
      const td = document.createElement("td");
      td.innerText = itemData[ele];
      tr.appendChild(td);
    }
  }
  //creating a button
  const buyOne = createButton(tr, "one", "BuyOne");
  // creating a button
  const buyTwo = createButton(tr, "two", "BuyTwo");
  const buyThree = createButton(tr, "two", "BuyThree");

  tablebody.appendChild(tr);
 //funvtion to buy one qty
  buyOne.addEventListener("click", function(){
    if(itemData.Quantity<=0){ 
      alert("Selected product not available")
      handleQuantity(itemData.id, { Quantity: 0})
    }
    else{
      handleQuantity(itemData.id, { Quantity: itemData.Quantity - 1 })
    }
    window.location.reload();
  }  
  );
  //function to buy two quantities
  buyTwo.addEventListener("click", function(){
    if(itemData.Quantity<=1){
      alert("Product not  available");
      handleQuantity(itemData.id, { Quantity: itemData.Quantity })
    }
    else{
      handleQuantity(itemData.id, { Quantity: itemData.Quantity - 2 })
    }
    window.location.reload();
  }    
  );
  buyThree.addEventListener("click", function(){
    if(itemData.Quantity<=2){
      alert("Product not  available");
      handleQuantity(itemData.id, { Quantity: itemData.Quantity })
    }
    else{
      handleQuantity(itemData.id, { Quantity: itemData.Quantity - 3})
    }
    window.location.reload();
  }    
  );
}
//function to update the quantity decrease in database
 async function handleQuantity(itemId, qty) {
  const minus = await axios.patch(`${reqUrl}/${itemId}`, qty);
}
