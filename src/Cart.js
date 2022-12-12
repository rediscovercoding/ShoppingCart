export default function Cart() {
  const click = document.querySelector("#root");
  let cartArray = [];

  click.addEventListener("click", (event) => {
    const place1Div = document.querySelector(".place1");
    const place1QuantityDiv = document.querySelector(".place1Quantity");
    const place2Div = document.querySelector(".place2");
    const place2QuantityDiv = document.querySelector(".place2Quantity");
    const place3Div = document.querySelector(".place3");
    const place3QuantityDiv = document.querySelector(".place3Quantity");
    const totalDiv = document.querySelector(".totalDiv");
    const totalNumber = document.querySelector(".totalNumber");
    const checkOut = document.querySelector(".checkOut");
    const checkOutTotal = document.querySelector(".checkOutTotal");
    const createButton = document.createElement("button");
    if (
      cartArray.some((element) => element.itemName === event.target.className)
    ) {
      let value = cartArray.find(
        (element) => element.itemName === event.target.className
      );
      value.quantity += 1;
      if (event.target.className === "Shirt1") {
        place1QuantityDiv.innerHTML = `${value.quantity}`;
      } else if (event.target.className === "Shirt2") {
        place2QuantityDiv.innerHTML = `${value.quantity}`;
      } else if (event.target.className === "Shirt3") {
        place3QuantityDiv.innerHTML = `${value.quantity}`;
      }
      totalNumber.innerHTML = `${sumQuantity()}`;
      checkOutTotal.innerHTML = `$ ${sumQuantity() * 20}`;
    } else {
      if (event.path[0].className == "Shirt1") {
        cartArray.push({ itemName: "Shirt1", quantity: 1 });
        place1Div.innerHTML = "Shirt 1";
        place1QuantityDiv.innerHTML = 1;
        renderCart();
      } else if (event.path[0].className == "Shirt2") {
        cartArray.push({ itemName: "Shirt2", quantity: 1 });
        place2Div.innerHTML = "Shirt 2";
        place2QuantityDiv.innerHTML = 1;
        renderCart();
      } else if (event.path[0].className == "Shirt3") {
        cartArray.push({ itemName: "Shirt3", quantity: 1 });
        place3Div.innerHTML = "Shirt 3";
        place3QuantityDiv.innerHTML = 1;
        renderCart();
      }
      function renderCart() {
        totalDiv.innerHTML = "Total";
        totalNumber.innerHTML = `${sumQuantity()}`;
        createButton.value = "Checkout";
        createButton.innerHTML = "Checkout";
        createButton.classList.add("checkoutButton");
        if (!checkOut.innerHTML) {
          console.log(checkOut.innerHTML);
          checkOut.appendChild(createButton);
        }
        checkOutTotal.innerHTML = `$ ${sumQuantity() * 20}`;
      }
    }

    function sumQuantity() {
      let sum = 0;
      cartArray.forEach((element) => {
        sum += element.quantity;
      });
      return sum;
    }
  });

  return (
    <>
      <div className="cartContainer">
        <h3 className="shoppingList">Shopping List</h3>
        <div className="ShirtNo">Shirt No</div>
        <div className="ShirtQty">Qty</div>
        <div className="place1"></div>
        <div className="place1Quantity"></div>
        <div className="place2"></div>
        <div className="place2Quantity"></div>
        <div className="place3"></div>
        <div className="place3Quantity"></div>
        <div className="totalDiv"></div>
        <div className="totalNumber"></div>
        <div className="checkOut"></div>
        <div className="checkOutTotal"></div>
      </div>
    </>
  );
}
