let categories = [];
let products = [];
        
function generateRandomNumber(length) {
    return Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0');
}
        
function addCategory() {
    let id = generateRandomNumber(12);
    let name = document.getElementById('categoryName').value;
    let description = document.getElementById('categoryDescription').value;
    categories.push({ id, name, description });
    updateCategoryList();
    updateCategoryDropdown();
}

function updateCategoryList() {
    let table = document.getElementById('categoriesTable');
    table.innerHTML = '<tr><th>ID</th><th>Tên</th><th>Mô tả</th></tr>';
    categories.forEach(cat => {
        let row = `<tr><td>${cat.id}</td><td>${cat.name}</td><td>${cat.description}</td></tr>`;
        table.innerHTML += row;
    });
}
        
function updateCategoryDropdown() {
    let dropdown = document.getElementById('productCategory');
    dropdown.innerHTML = '';
    categories.forEach(cat => {
        let option = `<option value="${cat.id}">${cat.name}</option>`;
        dropdown.innerHTML += option;
    });
}

function addProduct() {
    let id = generateRandomNumber(9);
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;
    let oldPrice = document.getElementById('productOldPrice').value;
    let categoryId = document.getElementById('productCategory').value;
    let description = document.getElementById('productDescription').value;
    let image = document.getElementById('productImage').value;
    let category = categories.find(cat => cat.id === categoryId)?.name || 'Không xác định';
    products.push({ id, name, price, oldPrice, category, description, image });
    updateProductList();
}

function updateProductList() {
    let productList = document.getElementById('productsList');
    productList.innerHTML = '';
    products.forEach(prod => {
        let productBox = `<div class="product-box" onclick="viewProduct('${prod.id}')">
            <img src="${prod.image}" alt="Hình ảnh">
            <h3>${prod.name}</h3>
            <p>Giá: ${prod.price} VND</p>
            <p>Danh mục: ${prod.category}</p>
        </div>`;
        productList.innerHTML += productBox;
    });
}
        
function viewProduct(id) {
    let product = products.find(p => p.id === id);
    if (product) {
        let url = `product_detail.html?id=${product.id}`;
        window.location.href = url;
        }
}
