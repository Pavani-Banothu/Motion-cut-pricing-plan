document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const yearlyPrices = document.querySelectorAll('.price.yearly');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'block');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'block');
            yearlyPrices.forEach(price => price.style.display = 'none');
        }
    });
});

function openModal(planName) {
    const modal = document.getElementById('modal');
    const modalPlanName = document.getElementById('modal-plan-name');
    modalPlanName.textContent = planName + ' Plan';
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function submitPlan() {
    const chosenPlanDiv = document.getElementById('chosen-plan');
    const planForm = document.getElementById('plan-form');
    const planName = document.getElementById('modal-plan-name').textContent;
    const additionalStorage = document.getElementById('storage').value;
    const additionalSupport = document.getElementById('support').value;

    let chosenPlanText = `You have chosen the ${planName} with ${additionalStorage} GB additional storage and ${additionalSupport} support.`;

    chosenPlanDiv.textContent = chosenPlanText;
    closeModal();

    showToast('Your plan has been successfully submitted!');
}

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500);
    }, 3000);
}
