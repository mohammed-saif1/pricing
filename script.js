/ Get the currency select element
const currencySelect = document.getElementById('currency');

// Get all pricing elements
const prices = document.querySelectorAll('.price');

// Get all currency symbol elements
const currencySymbols = document.querySelectorAll('.currency-symbol');

// Object to map currency codes to symbols
const currencySymbolsMap = {
    'USD': '$',
    'INR': '₹',
    'AED': 'د.إ',
    'EUR': '€',
    'ZAR': 'R'
};

// Object to map currency conversion rates to USD
const currencyConversionRates = {
    'USD': 1,
    'INR': 83, // 1 USD = 83 INR
    'AED': 3.6, // 1 USD = 3.6 AED
    'EUR': 0.93, // 1 USD = 0.93 EUR
    'ZAR': 19.5 // 1 USD = 19.5 ZAR
};

// Function to update pricing with selected currency
function updatePricing(currency) {
    const symbol = currencySymbolsMap[currency];
    const conversionRate = currencyConversionRates[currency];

    // Update currency symbols
    currencySymbols.forEach(currencySymbol => {
        currencySymbol.textContent = symbol;
    });

    // Update prices with selected currency
    prices.forEach(price => {
        const amountUSD = parseFloat(price.dataset.amount);
        if (!isNaN(amountUSD) && symbol && conversionRate) {
            const amount = amountUSD * conversionRate;
            price.textContent = symbol + amount.toFixed(2);
        }
    });
}

// Add event listener for currency selection change
currencySelect.addEventListener('change', function() {
    updatePricing(this.value);
});

// Initial update with default currency
updatePricing(currencySelect.value);