/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */
const fs = require("fs/promises");

const command = process.argv[2];
const orderIndex = process.argv[3];

async function pizzaOrderPrinter() {
  const data = await fs.readFile("data.json", "utf-8");
  const orders = JSON.parse(data);

  if (command === "getAllOrders") {
    orders.forEach((order) => {
      console.log(order);
    });
  } else if (command === "getOneOrder") {
    const order = orders[orderIndex];

    if (order) {
      console.log(order);
    } else {
      console.log("Order not found. Please enter a valid order number.");
    }
  }
}

pizzaOrderPrinter();
