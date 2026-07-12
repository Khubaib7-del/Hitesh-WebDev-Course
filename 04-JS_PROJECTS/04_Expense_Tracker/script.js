document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = [];
    let totalAmount = calculateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if (name && !isNaN(amount) && amount > 0) {
            expenses.push({ name, amount });
            SaveExpensesToLocalStorage();
            totalAmount = calculateTotal();
            updateExpenseList();
            updateTotal();
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        }
    });

    function calculateTotal() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function SaveExpensesToLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
    function updateExpenseList() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${expense.name}</span>
                <span>$${expense.amount.toFixed(2)}</span>
                <button onclick="deleteExpense(${index})">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    function updateTotal() {
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    window.deleteExpense = function (index) {
        expenses.splice(index, 1);
        totalAmount = calculateTotal();
        updateExpenseList();
        updateTotal();
    };
});