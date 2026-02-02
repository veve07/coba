// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// --- DATA PRODUK & LOGIC BARU ---

// Data Produk
const products = [
  {
    id: 1,
    name: 'Tekun varian Madu',
    img: 'img/tekun.png',
    price: 45000,
    description: 'Varian 1 karton madu isi 40pcs.<br>Tekun adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang digunakan:<br>-kulit nanas<br>-gula pasir<br>-air<br>-extra madu',
  },
  {
    id: 2,
    name: 'Tekun varian Original',
    img: 'img/tekun.png',
    price: 45000,
    description: 'Varian 1 karton Original isi 40pcs.<br>Tekun adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang digunakan:<br>-kulit nanas<br>-gula pasir<br>-air',
  },
  {
    id: 3,
    name: 'Tekun varian Sereh',
    img: 'img/tekun.png',
    price: 45000,
    description: 'Varian 1 karton Sereh isi 40pcs.<br>Tekun adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang digunakan:<br>-kulit nanas<br>-gula pasir<br>-air<br>-extra sereh',
  },
  {
    id: 4,
    name: 'Tekun Celup varian Kayu Manis',
    img: 'img/kunir-asem-120.jpeg',
    price: 30000,
    description: 'Varian Tekun Celup Kayu Manis isi 12 pcs/per pcs 12 gram.<br>Tekun celup adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang diguanakan: <br>-kulit nanas kering<br>-extra kayu manis',
  },
  {
    id: 5,
    name: 'Tekun Celup varian Original',
    img: 'img/tekun.png',
    price: 30000,
    description: 'Tekun Celup varian Original isi 12 pcs per pcs 12 gram.<br>Tekun celup adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang diguanakan: <br>-kulit nanas kering',
  },
  {
    id: 6,
    name: 'Tekun celup varian Sereh',
    img: 'img/labu-jipang-kayumanis.jpeg',
    price: 30000,
    description: 'Tekun Celup varian Sereh isi 12 pcs per pcs 12 gram.<br>Tekun celup adalah Teh yang terbuat dari kulit nanas.<br>Komposisi yang diguanakan: <br>-kulit nanas kering<br>-extra sereh',
  },
  {
    id: 7,
    name: 'Jarelang',
    img: 'img/jarelang.png',
    price: 55000,
    description: 'Jarelang 1 karton isi 36pcs 120ml.<br>Komposisi yang digunakan:<br>-jahe<br>-jeruk nipis<br>-sere alang alang<br>-gula batu',
  },
  {
    id: 8,
    name: 'Kunir Asem varian 120ml isi 6pcs',
    img: 'img/kunir-asem-120.jpeg',
    price: 15000,
    description: 'Kunir Asem varian 120ml dengan packing plastik dengan isi 6pcs.<br>Komposisi yang digunakan:<br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis',
  },
  {
    id: 9,
    name: 'Kunir Asem varian 120ml isi 36pcs',
    img: 'img/kunir-asem-120.jpeg',
    price: 65000,
    description: 'Kunir Asem varian gelas 120ml dengan packing karton dengan isi 36pcs.<br>Komposisi yang digunakan:<br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis',
  },
  {
    id: 10,
    name: 'Kunir Asem varian 240ml isi 40pcs',
    img: 'img/kunir-asem-240.png',
    price: 127000,
    description: 'Kunir Asem varian gelas 240ml dengan packing karton dengan isi 40pcs.<br>Komposisi yang digunakan:<br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis',
  },
  {
    id: 11,
    name: 'Kunir Asem varian 350ml',
    img: 'img/kunir-asem-120.jpeg',
    price: 4500,
    description: 'Kunir Asem varian gelas 350ml.<br>Komposisi yang digunakan:<br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis',
  },
  {
    id: 12,
    name: 'Kunir Asem varian 500ml',
    img: 'img/kunir-asem-500.jpeg',
    price: 12000,
    description: 'Kunir Asem varian botol 500ml.<br>Komposisi yang digunakan:<br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis',
  },
  {
    id: 13,
    name: 'Labu Jipang varian Original',
    img: 'img/labu-jipang-original.jpeg',
    price: 70000,
    description: 'Labu Jipang varian Original 120ml dengan packing karton dengan isi 36pcs.<br>Komposisi yang digunakan:<br>-sayur labu siem<br>-gula jagung',
  },
  {
    id: 14,
    name: 'Labu Jipang varian Kayu Manis',
    img: 'img/labu-jipang-kayumanis.jpeg',
    price: 70000,
    description: 'Labu Jipang varian Kayu Manis 120ml dengan packing karton dengan isi 36pcs.<br>Komposisi yang digunakan:<br>-sayur labu siem<br>-gula jagung<br>-kayu manis',
  },
  {
    id: 15,
    name: 'Labu Jipang varian Melon',
    img: 'img/labu-jipang-melon.jpeg',
    price: 70000,
    description: 'Labu Jipang varian Melon 120ml dengan packing karton dengan isi 36pcs.<br>Komposisi yang digunakan:<br>-sayur labu siem<br>-gula jagung<br>-sari buah melon',
  },
  {
    id: 16,
    name: 'Labu Jipang varian Leci',
    img: 'img/labu-jipang-leci.jpeg',
    price: 70000,
    description: 'Labu Jipang varian Leci 120ml dengan packing karton dengan isi 36pcs.<br>Komposisi yang digunakan:<br>-sayur labu siem<br>-gula jagung<br>-perasa leci',
  },
  {
    id: 17,
    name: 'Sirup Nanas',
    img: 'img/labu-jipang-original.jpeg',
    price: 25000,
    description: 'Sirup Nanas varian 500ml.<br>Komposisi yang digunakan:<br>-nanas<br>-gula pasir<br>-air',
  },
  {
    id: 18,
    name: 'Kpk Sarjana varian Original',
    img: 'img/labu-jipang-original.jpeg',
    price: 12000,
    description: 'Kpk Sarjana varian Original<br>Komposisi yang digunakan:<br>-pisang kepok<br>-minyak goreng',
  },
  {
    id: 19,
    name: 'Kpk Sarjana varian Jagung Bakar',
    img: 'img/labu-jipang-original.jpeg',
    price: 12000,
    description: 'Kpk Sarjana varian Jagung Bakar<br>Komposisi yang digunakan:<br>-pisang kepok<br>-minyak goreng',
  },
  {
    id: 20,
    name: 'Kpk Sarjana varian Barbeque',
    img: 'img/labu-jipang-original.jpeg',
    price: 12000,
    description: 'Kpk Sarjana varian Barbeque<br>Komposisi yang digunakan:<br>-pisang kepok<br>-minyak goreng',
  },
  {
    id: 21,
    name: 'Kpk Sarjana varian Pedas',
    img: 'img/labu-jipang-original.jpeg',
    price: 12000,
    description: 'Kpk Sarjana varian Pedas<br>Komposisi yang digunakan:<br>-pisang kepok<br>-minyak goreng',
  },
  {
    id: 22,
    name: 'Kpk Sarjana varian Keju',
    img: 'img/labu-jipang-original.jpeg',
    price: 12000,
    description: 'Kpk Sarjana varian Keju<br>Komposisi yang digunakan:<br>-pisang kepok<br>-minyak goreng',
  },
];



// Show Detail Logic
function showDetail(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-content">
        
          <p>${product.description}</p>
          <div class="product-price">${rupiah(product.price)}</div>
          <a href="#" onclick="addToCart(${product.id}); return false;"><i data-feather="shopping-cart"></i> <span>add to cart</span></a>
        </div>
    `;
    itemDetailModal.style.display = 'flex';
    feather.replace();
  }
}

// State Keranjang
let cart = [];

// Elemen DOM
const productListElement = document.querySelector('#product-list');
const cartElement = document.querySelector('.shopping-cart');

// Format Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};

// Render Produk dengan Filter Search
function renderProducts(keyword = '') {
  if (!productListElement) return;
  productListElement.innerHTML = '';

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  filteredProducts.forEach((item) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <div class="product-icons">
        <a href="#" class="add-to-cart-btn" data-id="${item.id}"><i data-feather="shopping-cart"></i></a>
        <a href="#" class="item-detail-button" data-id="${item.id}"><i data-feather="eye"></i></a>
      </div>
      <div class="product-image">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="product-content">
        <h3>${item.name}</h3>
        <div class="product-price">${rupiah(item.price)}</div>
      </div>
    `;
    productListElement.appendChild(productCard);
  });

  // Re-attach listeners for new elements
  feather.replace();
  attachProductListeners();
}

// Attach Listeners untuk Tombol di Produk (Cart & Detail)
function attachProductListeners() {
  document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    };
  });

  document.querySelectorAll('.item-detail-button').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      showDetail(id);
    };
  });
}

// Logic Search
if (searchBox) {
  searchBox.addEventListener('keyup', (e) => {
    renderProducts(e.target.value);

    if (e.target.value.length > 0) {
      const productsSection = document.querySelector('#products');
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Logic Cart
function addToCart(id) {
  const itemInCart = cart.find((item) => item.id === id);
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  // Buka cart otomatis saat tambah produk
  if (!shoppingCart.classList.contains('active')) {
    shoppingCart.classList.add('active');
  }
}

function removeFromCart(id, e = null) {
  if (e) e.stopPropagation();
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

function changeQuantity(id, change, e = null) {
  if (e) e.stopPropagation();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      removeFromCart(id);
    } else {
      renderCart();
    }
  }
}

function renderCart() {
  if (!cartElement) return;
  // Kosongkan isi cart kecuali elemen selain item (opsional, tapi di sini kita replace isinya)
  // Kita akan rebuild isinya agar rapi
  cartElement.innerHTML = '';

  if (cart.length === 0) {
    cartElement.innerHTML = '<p style="text-align:center; margin-top:2rem;">Keranjang kosong</p>';
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="item-detail">
        <h3>${item.name}</h3>
        <div class="item-price">${rupiah(item.price)}</div>
        <div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1, event)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1, event)">+</button>
        </div>
      </div>
      <i data-feather="trash-2" class="remove-item" onclick="removeFromCart(${item.id}, event)"></i>
    `;
    cartElement.appendChild(cartItem);
  });

  // Render Total & Checkout Button
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('cart-total');
  totalDiv.innerHTML = `Total: <strong>${rupiah(total)}</strong>`;
  cartElement.appendChild(totalDiv);

  const checkoutBtn = document.createElement('a');
  checkoutBtn.classList.add('checkout-btn');
  checkoutBtn.textContent = 'Checkout via WhatsApp';
  checkoutBtn.onclick = checkout;
  cartElement.appendChild(checkoutBtn);

  feather.replace();
}

// Checkout WhatsApp
function checkout(e) {
  e.preventDefault();
  if (cart.length === 0) return;

  const phone = '6281326911105'; // Nomor WA Admin
  let message = 'Halo, saya ingin memesan:\n';
  let total = 0;

  cart.forEach((item) => {
    message += `- ${item.name} x${item.quantity} (${rupiah(item.price * item.quantity)})\n`;
    total += item.price * item.quantity;
  });

  message += `\nTotal: ${rupiah(total)}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Show Detail Logic


// Expose functions to window for onclick (simple implementation)
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;

// Start
renderProducts();
renderCart();
