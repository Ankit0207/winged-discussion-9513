let container1 = document.getElementById("list");
let container2 = document.getElementById("bill");
let favData = JSON.parse(localStorage.getItem("favourites")) || [];
let cartitem = document.getElementById("totalitem");
let totalAmount = 0;
let num=0;




displayProducts(favData);
printbill();

function displayProducts(data) {
  
  container1.innerHTML = null;

  data.forEach((element,index) => {

    totalAmount += element.price;
    cartitem.innerText=data.length;

    let innerlist = document.createElement("div");
    let item = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.avatar);
    let name = document.createElement("h3");
    name.innerText = element.name;

    let eachitem = document.createElement("div");
    let each_item = document.createElement("h3");
    each_item.innerText = "EACH ITEM";
    let price = document.createElement("h4");
    price.innerText = element.price;

    let totalprice = document.createElement("div");
    let total_price = document.createElement("h3");
    total_price.innerText = "TOTAL";
    let amount = document.createElement("h4");
    amount.innerText = element.price;
  
    let increment = document.createElement("button");
    increment.innerText = "+";
    increment.addEventListener("click", function add() {
      quantity.innerText++;
      totalAmount += element.price;
      printbill();
    })

    let quantity = document.createElement("span");
    quantity.innerText = 1;

    let decrement = document.createElement("button");
    decrement.innerText = "-";
    decrement.addEventListener("click", function minus() {
      if (quantity.innerText > 1) {
        quantity.innerText--;
        totalAmount -= element.price;
        printbill();
      }
  
    
    })

    let Delete = document.createElement("button");
    Delete.innerText = "Remove";
    Delete.addEventListener("click", () => {
      
    })
    
    totalprice.append(total_price, amount);
    eachitem.append(each_item, price);
    item.append(image, name, decrement, quantity, increment, Delete);
    innerlist.append(item, eachitem, totalprice);
    container1.append(innerlist);
  })
  
}
 function printbill(){
  container2.innerHTML=null;

  if(cartitem.innerText>=1){
    let order = document.createElement("h3");
    order.innerText = "ORDER DETAILS"
    let summary = document.createElement("p");
    summary.innerText = "Order Summary";
    let innerbill1 = document.createElement("div");
    let mrp = document.createElement("p");
    mrp.innerText = "Total Mrp";
    let total_bill = document.createElement("p");
    
      total_bill.innerText = totalAmount;
    
    let innerbill2 = document.createElement("div");
    let shipcharge = document.createElement("p");
    shipcharge.innerText = "Shipping charges";
    let shippingcharge = document.createElement("p");
    shippingcharge.innerText = 0;
    let innerbill3 = document.createElement("div");
    let overallamount = document.createElement("h2");
    overallamount.innerText = "TOTAL AMOUNT";
   
      let overall_amount = document.createElement("p");
      
        overall_amount.innerText = totalAmount;
      
     
    
    
    let checkout = document.createElement("button");
    checkout.innerText = "CONTINUE CHECKOUT";
    
  
  
    innerbill1.append(mrp,total_bill);
    container2.append(order, summary, innerbill1, innerbill2, innerbill3, checkout);
    innerbill3.append(overallamount,overall_amount);
    innerbill2.append(shipcharge, shippingcharge);
    
  }
 }
 


