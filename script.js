
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

  
//   footer and bitton for back to top 

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const bottomMessage = document.getElementById('bottomMessage');
    let messageTimeout;
  
    // Event listener for scrolling
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      // Check if user reached the bottom
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        footer.style.opacity = 1; // Make footer fully visible
        bottomMessage.style.display = 'block'; // Show bottom message
  
        // Clear any existing timeout to reset the timer
        clearTimeout(messageTimeout);
  
        // Hide the bottom message after 3 seconds
        messageTimeout = setTimeout(() => {
          bottomMessage.style.display = 'none';
        }, 2000);
      } else {
        footer.style.opacity = 0.5; // Keep footer transparent
        bottomMessage.style.display = 'none'; // Hide bottom message
        clearTimeout(messageTimeout); // Ensure timeout is cleared when not at bottom
      }
  
      // Show "Back to Top" button if user scrolls down
      if (scrollTop > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    // Event listener for "Back to Top" button
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    });
  });
  
  // Menu 

  // Function to simulate the typing effect
