document.addEventListener('DOMContentLoaded', () => {

    // --- Cost Calculator ---
    const areaInput = document.getElementById('area');
    const walkwayInput = document.getElementById('walkway');
    const boardingInput = document.getElementById('boarding');
    const totalPriceEl = document.getElementById('total-price');
    const hiddenPriceInput = document.getElementById('hidden-price');

    // Prices
    const PRICE_INSULATION = 350; // Kč/m2
    const PRICE_WALKWAY = 380;   // Kč/bm
    const PRICE_BOARDING = 580;  // Kč/m2

    function calculateTotal() {
        const area = parseFloat(areaInput.value) || 0;
        const walkway = parseFloat(walkwayInput.value) || 0;
        const boarding = parseFloat(boardingInput.value) || 0;

        const total = (area * PRICE_INSULATION) + (walkway * PRICE_WALKWAY) + (boarding * PRICE_BOARDING);

        // Format Result
        const formattedPrice = total.toLocaleString('cs-CZ') + ' Kč';

        totalPriceEl.textContent = formattedPrice;
        hiddenPriceInput.value = formattedPrice;
    }

    // Add listeners
    if (areaInput) {
        areaInput.addEventListener('input', calculateTotal);
        walkwayInput.addEventListener('input', calculateTotal);
        boardingInput.addEventListener('input', calculateTotal);
    }

    // --- Savings Estimator ---
    const heatingInput = document.getElementById('heating-cost');
    const heatingValueEl = document.getElementById('heating-value');
    const savingsAmountEl = document.getElementById('savings-amount');

    function calculateSavings() {
        const annualCost = parseInt(heatingInput.value);

        // Update display of current cost
        heatingValueEl.textContent = annualCost.toLocaleString('cs-CZ').replace(/\s/g, ' ');

        // Calculate Savings (using 30% as the upper optimistic bound for "Až")
        const savings = annualCost * 0.30;

        // Format Result
        savingsAmountEl.textContent = Math.round(savings).toLocaleString('cs-CZ') + ' Kč';
    }

    if (heatingInput) {
        heatingInput.addEventListener('input', calculateSavings);
        // Init
        calculateSavings();
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
