// // Q9; The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

let itemsArr = []
let priceArr = []

async function placeOrder(item, price) {

    itemsArr.push(item)

    priceArr.push(price)
}

async function bill() {

    let totalAmount = 0;

    for (let i = 0; i < priceArr.length; i++) {
        totalAmount += priceArr[i];
    }

    return new Promise((resolve, reject) => {

        let delay = Math.floor(Math.random() * 1000);

        setTimeout(() => {
            resolve(totalAmount);
        }, delay)
    })
}

async function generateBill() {
    try {
        let billAmount = await bill()
        alert("Your Bill Is " + billAmount);
    }catch (error) {
        alert("Error")
    }
}


