document.getElementById('purchaseOrderForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Your order has been received! Our sales team will contact you shortly.');
    // Here you can add further logic to actually submit the form via AJAX/Fetch API
};
