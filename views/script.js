const reqUrl = "http://localhost:3000/item";
async function handleSubmit(event) {
  event.preventDefault();
  const items = {
    name: event.target.Itemname.value,
    desc: event.target.desc.value,
    price: event.target.price.value,
    qty: event.target.quantity.value,
  };
  console.log(items);
  const itemData = await axios.post(`${reqUrl}`, items);
  displayItemDetails(itemData.data.data);
}
window.addEventListener("DOMContentLoaded", async function () {
  try {
    let itemData = await axios.get(`${reqUrl}`);
    itemData.data.forEach((data) => displayItemDetails(data));
  } catch (err) {
    console.log(err);
  }
});

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
  const buyOne = document.createElement("button");
  buyOne.setAttribute("id", "one");
  buyOne.innerText = "BuyOne";
  tr.appendChild(buyOne);
  tablebody.appendChild(tr);
  const minusOne = tr.querySelector("#one");
  minusOne.addEventListener("click",async function(){
    const quantityMinus=document.querySelector("td")
    console.log(quantityMinus)
    console.log(itemData.id)
    const minus=await axios.put(`${reqUrl}/${itemData.id}`)
    
    
  })

}

