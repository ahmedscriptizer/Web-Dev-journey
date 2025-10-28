document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  let expenseNameInput = document.getElementById("expense-name");
  let expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenseArray = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderEpenses();
  updateTotal();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    // Everything comes from the FORM is in string format
    //  to get amount in numbers we have to explicitly convert it into number
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const expenseObject = {
        id: Date.now(),
        name, // new syntax of JS meaning name: name
        amount, // amount: amount
      };

      expenseArray.push(expenseObject);
      saveExpensesToLocal();
      updateTotal();
      renderEpenses();

      // clearInput
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderEpenses() {
    expenseList.innerHTML = "";
    expenseArray.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${element.name} - $${element.amount}
      <button data-id="${element.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  function calculateTotal() {
    return expenseArray.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue.amount,
      0
    );
  }
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenseArray));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenseArray = expenseArray.filter((expense) => {
        return expense.id !== expenseId;
      });

      saveExpensesToLocal();
      renderEpenses();
      updateTotal();
    }
  });
});
