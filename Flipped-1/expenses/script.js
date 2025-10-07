const body = document.querySelector('body');
const container = document.createElement('div');
const expensesListContainer = document.createElement('div');
const addExpenseBtn = document.createElement('button');
const expensesList = document.createElement('ul');

const inputDescription = document.createElement('input');
const inputAmount = document.createElement('input');
const inputCategory = document.createElement('input');
const inputDate = document.createElement('input');

const listByCategoryBtn = document.createElement('button');
const listByCategoryInput = document.createElement('input');
const showAllBtn = document.createElement('button');

const categorySummaryContainer = document.createElement('div');
const categorySummaryHeading = document.createElement('p');
const categorySummaryInput = document.createElement('input');
const categorySummaryBtn = document.createElement('button');
const categorySummaryResult = document.createElement('div');

const categoryMonthContainer = document.createElement('div');
const categoryMonthHeading = document.createElement('p');
const categoryMonthInput = document.createElement('input');
const categoryMonthBtn = document.createElement('button');
const categoryMonthResult = document.createElement('div');



body.appendChild(container);
container.appendChild(expensesListContainer);
expensesListContainer.appendChild(listByCategoryBtn);
expensesListContainer.appendChild(showAllBtn);
expensesListContainer.appendChild(listByCategoryInput);
expensesListContainer.appendChild(expensesList);
expensesListContainer.appendChild(addExpenseBtn);
expensesListContainer.appendChild(inputDescription);
expensesListContainer.appendChild(inputAmount);
expensesListContainer.appendChild(inputCategory);
expensesListContainer.appendChild(inputDate);
container.appendChild(categorySummaryContainer);
categorySummaryContainer.appendChild(categorySummaryHeading);
categorySummaryContainer.appendChild(categorySummaryInput);
categorySummaryContainer.appendChild(categorySummaryBtn);
categorySummaryContainer.appendChild(categorySummaryResult);
container.appendChild(categoryMonthContainer);
categoryMonthContainer.appendChild(categoryMonthHeading);
categoryMonthContainer.appendChild(categoryMonthInput);
categoryMonthContainer.appendChild(categoryMonthBtn);
categoryMonthContainer.appendChild(categoryMonthResult);


addExpenseBtn.textContent = 'Add Expense';
inputDescription.placeholder = 'Description';
inputAmount.placeholder = 'Amount';
inputCategory.placeholder = 'Category';
inputDate.placeholder = 'YYYY-MM-DD';
listByCategoryBtn.textContent = 'List by category';
listByCategoryInput.placeholder = 'Add category';
showAllBtn.textContent = 'Show All';
categorySummaryHeading.textContent = 'Category Summary';
categorySummaryBtn.textContent = 'Show Summary';
categorySummaryInput.placeholder = 'Add category';
categoryMonthHeading.textContent = 'Monthly Summary';
categoryMonthBtn.textContent = 'Show Summary';
categoryMonthInput.placeholder = 'Add month YYYY-MM';

let icon = '🧾';

body.style.cssText = `
display: flex;
flex-direction: column;`;

container.style.cssText = `
background-color: #f0f0f0;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;`;

let expenses = [
    { id: 1, description: 'Milk', amount: 150.00, date: '2024-06-01', category: 'Groceries' },
    { id: 2, description: 'Electricity Bill', amount: 75.50, date: '2024-06-03', category: 'Utilities' },
    { id: 3, description: 'Internet Subscription', amount: 50.00, date: '2024-06-05', category: 'Utilities' },
    { id: 4, description: 'Dining Out', amount: 60.00, date: '2024-06-07', category: 'Entertainment' },
    { id: 5, description: 'Fruits', amount: 50.00, date: '2024-08-01', category: 'Groceries' },
];

function renderExpenses(list) {
    expensesList.innerHTML = '';

    list.forEach(expense => {
        const expenseItem = document.createElement('li');
        const expenseId = expense.id;
        const expenseDate = expense.date;
        const expenseDescription = expense.description;
        const expenseAmount = Number(expense.amount.toFixed(2));
        const expenseCategory = expense.category;

        expenseItem.textContent = `${icon} (${expenseId}) ${expenseDate} — ${expenseCategory} — $${expenseAmount.toFixed(2)} - ${expenseDescription}`;
        expensesList.appendChild(expenseItem);
    });
}


function listExpenses() {
    renderExpenses(expenses);
}

listExpenses();

function addExpense(description, amount, category, date) {
    description = String(inputDescription.value.trim());
    amount = Number(inputAmount.value.trim());
    category = inputCategory.value.trim();
    date = inputDate.value.trim();

    if (!description || !category || !date || !amount || amount <= 0) {
        return alert('please add missing info or type correct info')
    }

    // Validation(YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
        return alert('Date format must be YYYY-MM-DD');
    }

    const parsedDate = new Date(date); //создаёт объект даты
    const [year, month, day] = date.split('-').map(Number);
    //Метод .split('-') разбивает строку date по символу дефиса - и создаёт массив из трёх частей: [год, месяц, день].
    //Метод .map(Number) проходит по каждому элементу массива и превращает его из строки в число.
    //const [year, month, day] Деструктуризация массива: year получит первое значение — 2025, month — второе значение — 10, day — третье значение — 7

    if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() + 1 !== month ||
        parsedDate.getDate() !== day
    ) {
        return alert('Invalid date — this day does not exist!');
    }

    const newExpense = {
        id: expenses.length ? expenses[expenses.length - 1].id + 1 : 1,
        description: description,
        category: category,
        amount: amount,
        date: date
    }

    expenses.push(newExpense);
    listExpenses();

};

addExpenseBtn.addEventListener('click', addExpense);


function listByCategory(category) {
    category = listByCategoryInput.value.trim().toLowerCase();

    const filteredExpensesList = expenses.filter(expense =>
        expense.category.toLowerCase() === category
    );

    renderExpenses(filteredExpensesList);
}

listByCategoryBtn.addEventListener('click', listByCategory);
showAllBtn.addEventListener('click', listExpenses);


function totalByCategory(category) {
    category = categorySummaryInput.value.trim().toLowerCase();
    categorySummaryResult.innerHTML = '';
    const summary = document.createElement('p');

    if (!category) {
        categorySummaryResult.textContent = 'Please enter a category name.';
        return;
    }

    let count = 0;
    let total = 0;

    expenses.forEach(expense => {
        if (expense.category.toLowerCase() === category) {
            count++;
            total += expense.amount;
        }
    });

    if (count > 0) {
        summary.textContent = `Category: ${category} | Count: ${count} | Total: $${total.toFixed(2)}`;
    } else {
        summary.textContent = `No expenses found for category: ${category}`;
    }

    categorySummaryResult.appendChild(summary);
}

categorySummaryBtn.addEventListener('click', totalByCategory);


function monthlySummary(month) {
    month = categoryMonthInput.value.trim();
    categoryMonthResult.innerHTML = '';

    let count = 0;
    let total = 0;
    let largest = 0;

    expenses.forEach(expense => {
        if (expense.date.startsWith(month)) { // startsWith проверяет, начинается ли строка expense.date с подстроки month
            count++;
            total += expense.amount;
            if (expense.amount > largest) {
                largest = expense.amount;
            }
        }
    });

    const summary = document.createElement('p');
    if (count > 0) {
        summary.textContent = `Month: ${month} | Count: ${count} | Total: $${total.toFixed(2)} | Largest: $${largest.toFixed(2)}`;
    } else {
        summary.textContent = `No expenses found for month: ${month}`;
    }

    categoryMonthResult.appendChild(summary);
}

categoryMonthBtn.addEventListener('click', monthlySummary);