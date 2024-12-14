document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully.");

  // Close offcanvas when any non-dropdown nav-link is clicked
  document
    .querySelectorAll(".offcanvas-body .nav-link:not(.dropdown-toggle)")
    .forEach((link) => {
      link.addEventListener("click", function () {
        const offcanvasElement = document.querySelector("#offcanvasDarkNavbar");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
      });
    });

  // Handle "Order Now" button click to show modal
  document.getElementById("orderNowBtn").addEventListener("click", () => {
    const orderModal = new bootstrap.Modal(
      document.getElementById("orderModal")
    );
    orderModal.show();
  });

  // Close the order modal when an option is selected
  document.querySelectorAll("#orderModal .order-option").forEach((option) => {
    option.addEventListener("click", () => {
      const orderModal = bootstrap.Modal.getInstance(
        document.getElementById("orderModal")
      );
      orderModal.hide();
    });
  });

  // Manage dropdown behavior inside the offcanvas
  const dropdownLink = document.querySelector(".nav-item.dropdown > .nav-link");
  const dropdownMenu = dropdownLink.nextElementSibling;

  let isDropdownOpen = false;

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (isDropdownOpen) {
      // Close the dropdown
      dropdownMenu.classList.remove("show");
    } else {
      // Open the dropdown
      dropdownMenu.classList.add("show");
    }

    isDropdownOpen = !isDropdownOpen;
  });

  // Close dropdown when clicking outside, but keep the offcanvas open
  document.addEventListener("click", (e) => {
    if (!dropdownLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      isDropdownOpen = false;
    }
  });
});

//   footer and bitton for back to top

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const bottomMessage = document.getElementById("bottomMessage");
  let messageTimeout;

  // Event listener for scrolling
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if user reached the bottom
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      footer.style.opacity = 1; // Make footer fully visible
      bottomMessage.style.display = "block"; // Show bottom message

      // Clear any existing timeout to reset the timer
      clearTimeout(messageTimeout);

      // Hide the bottom message after 3 seconds
      messageTimeout = setTimeout(() => {
        bottomMessage.style.display = "none";
      }, 2000);
    } else {
      footer.style.opacity = 0.5; // Keep footer transparent
      bottomMessage.style.display = "none"; // Hide bottom message
      clearTimeout(messageTimeout); // Ensure timeout is cleared when not at bottom
    }

    // Show "Back to Top" button if user scrolls down
    if (scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Event listener for "Back to Top" button
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  });
});

// Menu

// Function to simulate the typing effect

// My Cart Array
// My Cart Array
let cart = [];

// Add to Cart Function
function addToCart(itemName, itemPrice, buttonId) {
  // Find the item in the cart or add a new entry
  const existingItem = cart.find((item) => item.name === itemName);

  if (existingItem) {
    existingItem.count++;
  } else {
    cart.push({ name: itemName, price: itemPrice, count: 1 });
  }

  // Update the count in the menu
  const countBadge = document.getElementById(buttonId);
  countBadge.textContent = parseInt(countBadge.textContent) + 1;

  updateCartUI(); // Update the cart view
  alert(`${itemName} has been added to your cart.`);
}

// Update Cart UI for Modal and Section
function updateCartUI() {
  const cartItemsSection = document.getElementById("cartItems");
  const totalAmountSection = document.getElementById("totalAmount");
  const cartItemsModal = document.getElementById("cartItemsModal");
  const totalAmountModal = document.getElementById("totalAmountModal");
  const cartCountSpan = document.getElementById("cartCount");

  cartItemsSection.innerHTML = "";
  cartItemsModal.innerHTML = "";
  let totalAmount = 0;
  let totalItems = 0;

  // Populate Cart Items
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.count;
    totalAmount += itemTotal;
    totalItems += item.count;

    const itemHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span>${item.name} (x${item.count}) - ₹${itemTotal}</span>
                <div>
                    <button class="btn btn-sm btn-success me-2" onclick="incrementItem(${index})">+</button>
                    <button class="btn btn-sm btn-warning me-2" onclick="decrementItem(${index})">-</button>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    cartItemsSection.innerHTML += itemHTML;
    cartItemsModal.innerHTML += itemHTML;
  });

  totalAmountSection.textContent = totalAmount;
  totalAmountModal.textContent = totalAmount;

  cartCountSpan.textContent = `(${totalItems})`;
}

// Increment Item Count
function incrementItem(index) {
  cart[index].count++;
  updateCartUI();
}

// Decrement Item Count
function decrementItem(index) {
  if (cart[index].count > 1) {
    cart[index].count--;
  } else {
    removeFromCart(index);
  }
  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Function to show the Delivery Details modal
function showDeliveryModal() {
  // Check if cart is empty
  if (cart.length === 0) {
    alert(
      "Your cart is empty. Please add items to the cart before placing an order."
    );
    return;
  }

  console.log("Opening the delivery details modal...");
  var myModal = new bootstrap.Modal(
    document.getElementById("deliveryDetailsModal")
  );
  myModal.show(); // Show the modal
}

// Form validation and order placement
function placeOrder() {
  // Get values from the form
  const receiverName = document.getElementById("receiverName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const deliveryAddress = document.getElementById("deliveryAddress").value;

  // Check if all fields are filled
  if (receiverName === "" || mobileNumber === "" || deliveryAddress === "") {
    alert("Please fill in all the details.");
    return;
  }

  // Validate Mobile Number (10 digits)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Prepare the order details
  const orderDetails = cart
    .map(
      (item) => `${item.name} (x${item.count}) - ₹${item.price * item.count}`
    )
    .join(", ");
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // Prepare the final message to send via WhatsApp
  const message = encodeURIComponent(`
        Order Details: ${orderDetails}
        Total: ₹${totalAmount}
        
        Receiver's Name: ${receiverName}
        Mobile Number: ${mobileNumber}
        Delivery Address: ${deliveryAddress}
    `);

  const whatsappURL = `https://wa.me/917250327478?text=${message}`;

  // Open WhatsApp with the order details
  window.open(whatsappURL, "_blank");
  alert("Order placed successfully! Check WhatsApp for confirmation.");

  // Clear the cart and update the UI
  cart = [];
  updateCartUI();

  // Close the delivery details modal
  const myModal = bootstrap.Modal.getInstance(
    document.getElementById("deliveryDetailsModal")
  );
  myModal.hide(); // Hide the modal after the order is placed
}

// Scroll to My Cart Section
document.getElementById("myCartBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("myCart").classList.remove("d-none");
  document.getElementById("myCart").scrollIntoView({ behavior: "smooth" });
});

// Function to reveal and scroll to the My Cart section
function showMyCart() {
  const myCart = document.getElementById("myCart");
  myCart.classList.remove("d-none"); // Show the My Cart section
  myCart.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
}

// Function to hide the My Cart section
function hideMyCart() {
  const myCart = document.getElementById("myCart");
  myCart.classList.add("d-none"); // Hide the My Cart section
}

// Event listener for My Cart navigation link
document.getElementById("myCartBtn").addEventListener("click", function (e) {
  e.preventDefault();
  showMyCart();
});

// Event listener for Visit Cart button
document.getElementById("visitCartBtn").addEventListener("click", function () {
  showMyCart();
});

// Event listener for Hide Cart button
document.getElementById("hideCartBtn").addEventListener("click", function () {
  hideMyCart();
});
