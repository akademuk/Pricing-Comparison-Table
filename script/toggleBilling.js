
// Перемикач плану
const toggleBilling = () => {
    const toggle = document.getElementById("toggle");
    const monthPrices = document.querySelectorAll('.month');
    const yearPrices = document.querySelectorAll('.year');

    toggle.addEventListener('click', () => {
        if (toggle.checked) {
            monthPrices.forEach(price => price.style.display = 'none');
            yearPrices.forEach(price => price.style.display = 'block');
        } else {
            yearPrices.forEach(price => price.style.display = 'none');
            monthPrices.forEach(price => price.style.display = 'block');
        }
    });
};

toggleBilling();


// Отримати всі кнопки «Зареєструватися» для кожного плану
const basicSignUpBtn = document.querySelector('.basic-btn');
const standardSignUpBtn = document.querySelector('.standard-btn');
const premiumSignUpBtn = document.querySelector('.premium-btn');

basicSignUpBtn.addEventListener('click', () => {
    const selectedPlan = "Basic"; 
    displayModal(selectedPlan);
});

standardSignUpBtn.addEventListener('click', () => {
    const selectedPlan = "Standard"; 
    displayModal(selectedPlan);
});

premiumSignUpBtn.addEventListener('click', () => {
    const selectedPlan = "Premium";
    displayModal(selectedPlan); 
});

function displayModal(plan) {
    alert(`You have selected the ${plan} plan.`);
}
