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

// Menu Data

const menuData = [
  {
    category: "🍔 Burgers",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Crispy Aloo", price: 79 },
        { name: "Aloo Tikki Cheese", price: 69 },
        { name: "Crumbly Paneer Cheese", price: 109 },
        { name: "Mexican Paneer", price: 109 },
        { name: "Cheese Paneer", price: 109 },
        { name: "Spicy Paneer", price: 89 },
        { name: "Aloo Tikki", price: 49 },
        { name: "Regular Burger", price: 29 }
      ],
      NonVeg: [
        { name: "Mexican Chicken", price: 119 },
        { name: "Cheese Chicken", price: 109 },
        { name: "Spicy Chicken", price: 89 },
        { name: "Junior Egg Burger", price: 49 },
        { name: "Crumbly Chicken Chicken", price: 119 }
      ]
    }
  },

  {
    category: "🍜 Noodles & Maggi",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Veg Noodles", price: 69 },
        { name: "Veg Hakka Noodles", price: 109 },
        { name: "Paneer Noodles", price: 109 },
        { name: "Veg Cheese Maggi", price: 99 },
        { name: "Veg Schezwan Noodles", price: 109 }
      ],
      NonVeg: [
        { name: "Chicken Noodles", price: 119 },
        { name: "Schezwan Chicken Noodles", price: 139 },
        { name: "Chicken Hakka Noodles", price: 149 },
        { name: "Egg Chicken Noodles", price: 129 },
        { name: "Egg Maggi", price: 69 }
      ]
    }
  },


  {
    category: "🏮 China-Town",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Chilli Paneer Full", price: 159 },
        { name: "Chilli Paneer Half", price: 79 },
        { name: "Chilli Potato", price: 89 },
        { name: "Veg Manchurian", price: 89 }
      ],
      NonVeg: [
        { name: "Chilli Chicken Full", price: 169 },
        { name: "Chilli Chicken Half", price: 89 },
        { name: "Chilli Lollipop Full", price: 209 },
        { name: "Chilli Lollipop Half", price: 109 },
        { name: "Schezwan Chicken", price: 139 },
        { name: "Chicken Manchurian", price: 149 }
      ]
    }
  },
  {
    category: "🌯 Wraps & Rolls",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Mexican Paneer", price: 109 },
        { name: "Cheese Paneer", price: 109 },
        { name: "Spicy Paneer", price: 89 },
        { name: "Aloo Tikki", price: 49 }
      ],
      NonVeg: [
        { name: "Mexican Chicken", price: 119 },
        { name: "Cheese Chicken", price: 109 },
        { name: "Spicy Chicken", price: 89 },
        { name: "Perfect Egg", price: 59 }
      ]
    }
  },
  {
    category: "🍚 Rice Specials",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Mix Veg Fried Rice", price: 139 },
        { name: "Veg Fried Rice", price: 99 }
      ],
      NonVeg: [
        { name: "Egg Fried Rice", price: 99 },
        { name: "Chicken Fried Rice", price: 139 },
        { name: "Chicken Egg Fried Rice", price: 149 }
      ]
    }
  },



  {
    category: "🥪 Sandwiches",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Potato Cheese Grilled", price: 99 },
        { name: "Mayo Grilled Sandwiche", price: 89 }
      ],
      NonVeg: [
        { name: "Chicken Grilled Sandwiche", price: 119 }
      ]
    }
  },

  {
    category: "🍲 Soups",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Veg Manchow Soup", price: 69 }
      ],
      NonVeg: [
        { name: "Chicken Manchow Soup", price: 99 }
      ]
    }
  },
  {
    category: "☕ Hot Beverage",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Chai", price: 10 },
        { name: "Coffee", price: 49 }
      ]
    }
  },
  {
    category: "🥟 Momos",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Steam Momo", price: 39 },
        { name: "Fried Momo", price: 49 },
        { name: "Peri Peri Momo", price: 59 },
        { name: "Chilli Momo", price: 69 }
      ],
      NonVeg: [
        { name: "Steam Momo", price: 59 },
        { name: "Fried Momo", price: 69 },
        { name: "Peri Peri Momo", price: 79 },
        { name: "Chilli Momo", price: 99 }
      ]
    }
  },
  {
    category: "🍟 Fried Attack",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Classic Fries", price: 89 },
        { name: "Peri Peri Fries", price: 99 }
      ],
      NonVeg: [
        { name: "Chicken Fries Half (8 PCS)", price: 99 },
        { name: "Chicken Fries Full (16 PCS)", price: 189 },
        { name: "Chicken Strips (2 PCS)", price: 89 },
        { name: "Chicken Strips (3 PCS)", price: 119 },
        { name: "Chicken Strips (4 PCS)", price: 149 }
      ]
    }
  },

  {
    category: "🔥 BBQ & Grill",
    colorClass: "text-warning",
    subcategories: {
      NonVeg: [
        { name: "Chicken Leg Thai Half", price: 109 },
        { name: "Chicken Leg Thai Full", price: 139 },
        { name: "Chicken Breast Half", price: 109 },
        { name: "Chicken Breast Full", price: 139 }
      ]
    }
  },
  {
    category: "🧑‍🤝‍🧑 Combo Offers",
    colorClass: "text-warning",
    subcategories: {
      Veg: [
        { name: "Budy Box Veg Deal (2 Spicy Paneer Burger + 1 Classic Fries + 2 Soft Drinks 250ml each)", price: 279 }
      ],
      NonVeg: [
        { name: "Budy Box Chicken Deal (2 Spicy Chicken Burger + 1 Classic Fries + 2 Soft Drinks 250ml each)", price: 279 }
      ]
    }
  }
  

  // If more menu comes then place here -------

];



// here menu is ended 


// Function to dynamically populate the menu
function populateMenu() {
  const menuGrid = document.getElementById("menu-grid");

  menuData.forEach((section) => {
    // Create main category container
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "col-md-4 mb-4";

    // Add main category title
    categoryDiv.innerHTML = `<h4 class="${section.colorClass}">${section.category}</h4>`;

    // Iterate through subcategories (Veg and Non-Veg)
    Object.keys(section.subcategories).forEach((subKey) => {
      const subItems = section.subcategories[subKey];

      // Create subcategory container
      const subCategoryDiv = document.createElement("div");
      subCategoryDiv.className = "mb-3";

      // Subcategory title
      subCategoryDiv.innerHTML = `<h5 class="${subKey === 'Veg' ? 'text-success' : 'text-danger'}">${subKey}</h5>`;

      const ul = document.createElement("ul");
      ul.className = "list-unstyled";

      // Populate items for subcategory on line 192:- ${item.name} - ₹${item.price}

      subItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - ₹${item.price}
          <span id="count-${item.name.replace(/\s+/g, "")}" class="badge bg-primary ms-2">0</span>
          <button class="btn btn-sm btn-success ms-2"
            onclick="addToCart('${item.name}', ${item.price}, 'count-${item.name.replace(/\s+/g, "")}')">
            <i class="bi bi-plus"></i>
          </button>
        `;
        ul.appendChild(li);
      });

      subCategoryDiv.appendChild(ul);
      categoryDiv.appendChild(subCategoryDiv);
    });

    // Append main category to the menu grid
    menuGrid.appendChild(categoryDiv);
  });
}

// Call the function to populate the menu on page load
document.addEventListener("DOMContentLoaded", populateMenu);



// Example Add to Cart Function
function addToCart(name, price, countId) {
  const countBadge = document.getElementById(countId);
  countBadge.textContent = parseInt(countBadge.textContent) + 1;
  console.log(`Added ${name} to cart for ₹${price}`);
}


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
   updateMenuCount(itemName, buttonId);

   updateCartUI(); // Update the cart view
   alert(`${itemName} has been added to your cart.`);
 }
 
 // Update Menu Count Function
 function updateMenuCount(itemName, buttonId) {
   const cartItem = cart.find((item) => item.name === itemName);
   const countBadge = document.getElementById(buttonId);
   countBadge.textContent = cartItem ? cartItem.count : 0;
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
  const item = cart[index];
  item.count++;
  updateMenuCount(item.name, `count-${item.name.replace(/\s/g, "")}`);
  updateCartUI();
}

// Decrement Item Count
function decrementItem(index) {
  const item = cart[index];
  if (item.count > 1) {
    item.count--;
    updateMenuCount(item.name, `count-${item.name.replace(/\s/g, "")}`);
  } else {
    removeFromCart(index);
  }
  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(index) {
  const item = cart[index];
  
  // Reset the menu count to 0 for the removed item
  const buttonId = `count-${item.name.replace(/\s/g, "")}`;
  const countBadge = document.getElementById(buttonId);
  if (countBadge) {
    countBadge.textContent = 0;
  }

  // Remove the item from the cart
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

  // Prepare the order details with numbering and line breaks
  const orderDetails = cart
    .map(
      (item, index) => `${index + 1}. ${item.name} (x${item.count}) - ₹${item.price * item.count}`
    )
    .join("\n");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // Add the custom message at the beginning
  const message = encodeURIComponent(`
        Here is my order details:-
        
        ${orderDetails}

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
