
const totalBalance = document.querySelector('.total__balance');
const totalMoneyIncome = document.querySelector('.total__money-income');
const toatalMoneyExpenses = document.querySelector('.total__money-expenses');
const historyList = document.querySelector('.history__list');
const form = document.querySelector('#form');
const operationName = document.querySelector('.operation__name');
const operationAmount = document.querySelector('.operation__amount');

let dbOperation = [
    {
        id: '1',
        description: 'Получил зарплату',
        amount: 19000,
    },
    {
        id: '2',
        description: 'Квартплата',
        amount: -8000,
    },
    {
        id: '3',
        description: 'Купил обувь',
        amount: -2500,
    },
    {
        id: '4',
        description: 'Заказ на фрилансе',
        amount: 7000,
    },
    {
        id: '5',
        description: 'Купил книги',
        amount: -2500,
    },
];

const renderOperation = () => {
    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.innerHTML = `
        <span class="history__money">+30000 грн</span>
        <button class="history_delete">x</button>
    `;

    historyList.append(listItem);
};

renderOperation();