const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target[0].value;
    const quantity = e.target[1].value;
    const type = e.target[2].value;
    const spicy = e.target[3].checked ? "עם חריף" : "ללא חריף";


    const message = `היי, ויקטור. ${name} רוצה ${quantity} ${type} ${spicy}.`

    console.log(message);

    alert("ההזמנה שלך נשלחה לויקטור!");
});
