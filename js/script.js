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
    id: 'labu-jipang-muria',
    name: 'Labu Jipang Muria',
    img: 'img/labu-jipang-muria.png',
    basePrice: 20000,
    description: 'packing plastik isi 6pcs<br>1 karton isi 36pcs<br>Cemilan sehat khas Muria yang terbuat dari sayur labu siem muria dan gula jagung.<br>Komposisi yang digunakan: <br>-labu jipang<br>-biji selasih<br>-citrid asid<br>-kayu manis<br>-cengkeh<br>-gula jagung<br>-air',
    variants: [
      { id: 4, name: 'Original 36pcs', price: 70000 },
      { id: 5, name: 'Kayu Manis 36pcs', price: 70000 },
      { id: 6, name: 'Melon 36pcs', price: 70000 },
      { id: 7, name: 'Leci 36pcs', price: 70000 },
      { id: 8, name: 'Originial 6pcs', price: 20000 },
      { id: 9, name: 'Kayu Manis 6pcs', price: 20000 },
      { id: 10, name: 'Melon 6pcs', price: 20000 },
      { id: 11, name: 'Leci 6pcs', price: 20000 }
    ]
  },
  {
    id: 'labu-jipang-betawi',
    name: 'Labu Jipang Betawi',
    img: 'img/labu-jipang-betawi.png',
    basePrice: 15000,
    description: '1 karton isi 36 pcs<br>Cemilan sehat yang terbuat dari sayur labu siem betawi dan gula pasir.<br>Komposisi yang digunakan: <br>-labu jipang<br>-biji selasih<br>-citrid asid<br>-kayu manis<br>-cengkeh<br>-gula pasir<br>-air',
    variants: [
      { id: 12, name: 'Original 36pcs', price: 58000 },
      { id: 12, name: 'Kayu Manis 36pcs', price: 58000 },
      { id: 14, name: 'Melon 36pcs', price: 58000 },
      { id: 15, name: 'Leci 36pcs', price: 58000 },
      { id: 16, name: 'Originial 6pcs', price: 15000 },
      { id: 17, name: 'Kayu Manis 6pcs', price: 15000 },
      { id: 18, name: 'Melon 6pcs', price: 15000 },
      { id: 19, name: 'Leci 6pcs', price: 15000 }
    ]
  },
  {
    id: 'tekun',
    name: 'Tekun (Teh Kulit Nanas)',
    img: 'img/tekun.png',
    basePrice: 45000,
    description: '1 karton isi 40pcs 120ml<br>Teh dari kulit nanas pilihan yang menyegarkan.<br>Komposisi yang digunakan: <br>-Kulit nanas<br>-Gula pasir<br>-Air',
    variants: [
      { id: 1, name: 'Kayu Manis', price: 45000 },
      { id: 2, name: 'Original', price: 45000 },
      { id: 3, name: 'Sereh', price: 45000 }
    ]
  },
  {
    id: 'tekun-celup',
    name: 'Tekun Celup',
    img: 'img/tekun-celup.png',
    basePrice: 45000,
    description: 'per pcs 12gram isi 12pcs<br>Komposisi yang digunakan: <br>-Kulit nanas kering<br>-Kayu manis<br>-sereh',
    variants: [
      { id: 20, name: 'Kayu Manis', price: 45000 },
      { id: 21, name: 'Original', price: 45000 },
      { id: 22, name: 'Sereh', price: 45000 }
    ]
  },
  {
    id: 'jarelang',
    name: 'Jarelang',
    img: 'img/jarelang.png',
    basePrice: 55000,
    description: '1 karton isi 36pcs 120ml<br>Teh dari kulit nanas pilihan yang menyegarkan.<br>Komposisi yang digunakan: <br>-Jahe<br>-Jeruk nipis<br>-Sere alang alang<br>-gula batu',
    variants: [
      { id: 23, name: 'Original', price: 55000 },
    ]
  },
  {
    id: 'kunir-asem',
    name: 'Kunir Asem',
    img: 'img/kunir-asem.png',
    basePrice: 4500,
    description: 'Komposisi yang digunakan: <br>-empu kunyit<br>-asam jawa<br>-gula aren<br>-kayu manis<br>',
    variants: [
      { id: 24, name: '120ml 6pcs', price: 15000 },
      { id: 25, name: '120ml 36pcs', price: 65000 },
      { id: 26, name: '240ml 40pcs', price: 127000 },
      { id: 27, name: '350ml', price: 4500 },
      { id: 28, name: '500ml', price: 12000 },
    ]
  },
  {
    id: 'pisang-sarjana',
    name: 'Pisang Sarjana',
    img: 'img/pisang-sarjana.png',
    basePrice: 12000,
    description: 'Komposisi yang digunakan: <br>-Pisang kepok<br>-Minyak goreng<br>-Bawang Putih<br>-Ketumbar<br>-Bubuk cabai rasa',
    variants: [
      { id: 29, name: 'Spesial Ketumbar', price: 12000 },
      { id: 30, name: 'Keju Manis', price: 12000 },
      { id: 31, name: 'Balado', price: 12000 },
      { id: 33, name: 'Pedas', price: 12000 }
    ]
  },
  {
    id: 'kpk-sarjana',
    name: 'Kpk Sarjana',
    img: 'img/kpk-sarjana.png',
    basePrice: 12000,
    description: 'Komposisi yang digunakan: <br>-Pisang kepok<br>-Minyak goreng',
    variants: [
      { id: 34, name: 'Jagung', price: 12000 },
      { id: 35, name: 'Original', price: 12000 },
      { id: 36, name: 'Jagung', price: 12000 },
      { id: 37, name: 'Barbeque', price: 12000 },
      { id: 38, name: 'Pedas', price: 12000 },
      { id: 39, name: 'Keju', price: 12000 }
    ]
  },
];



// Show Detail Logic
function showDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <div class="product-info-wrapper">
      <h3>${product.name}</h3>
      <div class="content-flex-container">
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <div class="product-controls">
          <div class="variant-selection">
            <label for="v-select">Pilih Rasa/Varian:</label>
            <select id="v-select">
              ${product.variants.map(v => `<option value="${v.id}">${v.name} - ${rupiah(v.price)}</option>`).join('')}
            </select>
          </div>
          <a href="#" class="cta" onclick="addToCartFromModal('${product.id}'); return false;">
            <i data-feather="shopping-cart"></i> <span>Keranjang</span>
          </a>
        </div>
      </div>
    </div>`;

  itemDetailModal.style.display = 'flex';
  feather.replace();
}

//Logika Tambah Ke Keranjang
function addToCartFromModal(groupId) {
  const product = products.find(p => p.id === groupId);
  const selectedVariantId = parseInt(document.getElementById('v-select').value);
  const variant = product.variants.find(v => v.id === selectedVariantId);

  // Buat objek item untuk cart
  const cartItem = {
    id: variant.id,
    name: `${product.name} (${variant.name})`,
    price: variant.price,
    img: product.img,
    quantity: 1
  };

  const existingItem = cart.find(item => item.id === cartItem.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  renderCart();
  itemDetailModal.style.display = 'none'; // Tutup modal
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
function renderProducts(query = '') {
  if (!productListElement) return;
  productListElement.innerHTML = '';

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  filtered.forEach((product) => {
    productListElement.innerHTML += `
      <div class="product-card">
        <div class="product-icons">
          <a href="#" onclick="showDetail('${product.id}'); return false;"><i data-feather="eye"></i></a>
        </div>
        <div class="product-image">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-content">
          <h3>${product.name}</h3>
          <div class="product-price">Mulai dari ${rupiah(product.basePrice)}</div>
        </div>
      </div>`;
  });
  feather.replace();
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
  cartElement.innerHTML = '';

  if (cart.length === 0) {
    cartElement.innerHTML = '<p style="text-align:center; margin-top:2rem; color:#333;">Keranjang kosong</p>';
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity; // Menggunakan item.price (harga varian)
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

  const phone = '6285326827010'; // Nomor WA Admin
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
window.changeQuantity = function(id, change, e) {
  if (e) e.stopPropagation();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      cart = cart.filter(i => i.id !== id);
    }
    renderCart();
  }
};
window.removeFromCart = function(id, e) {
  if (e) e.stopPropagation();
  cart = cart.filter((item) => item.id !== id);
  renderCart();
};
window.addToCart = addToCart;

// Start
renderProducts();
renderCart();
