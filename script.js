
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully.');

    // Close offcanvas when any non-dropdown nav-link is clicked
    document.querySelectorAll('.offcanvas-body .nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function () {
            const offcanvasElement = document.querySelector('#offcanvasDarkNavbar');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            offcanvas.hide();
        });
    });

    // Handle "Order Now" button click to show modal
    document.getElementById('orderNowBtn').addEventListener('click', () => {
        const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
        orderModal.show();
    });

    // Close the order modal when an option is selected
    document.querySelectorAll('#orderModal .order-option').forEach(option => {
        option.addEventListener('click', () => {
            const orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
            orderModal.hide();
        });
    });

    // Manage dropdown behavior inside the offcanvas
    const dropdownLink = document.querySelector('.nav-item.dropdown > .nav-link');
    const dropdownMenu = dropdownLink.nextElementSibling;

    let isDropdownOpen = false;

    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        if (isDropdownOpen) {
            // Close the dropdown
            dropdownMenu.classList.remove('show');
        } else {
            // Open the dropdown
            dropdownMenu.classList.add('show');
        }

        isDropdownOpen = !isDropdownOpen;
    });

    // Close dropdown when clicking outside, but keep the offcanvas open
    document.addEventListener('click', (e) => {
        if (!dropdownLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            isDropdownOpen = false;
        }
    });
});

  
  