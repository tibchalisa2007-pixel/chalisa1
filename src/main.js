import './style.css'


// ข้อมูลสินค้า
let products = [
    {
        id: 1,
        name: "เสื้อยืด",
        price: 150,
        image: "https://placehold.co/300x200/pink/white?text=Shirt"
    },
    {
        id: 2,
        name: "กระเป๋า",
        price: 250,
        image: "https://placehold.co/300x200/pink/white?text=Bag"
    },
    {
        id: 3,
        name: "รองเท้า",
        price: 350,
        image: "https://placehold.co/300x200/pink/white?text=Shoes"
    }
];

let cart = [];

// แสดงสินค้า
function showProducts(data = products) {

    let html = "";

    data.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}">

                <h3 class="font-bold mt-2">
                    ${product.name}
                </h3>

                <p class="text-pink-600">
                    ราคา ${product.price} บาท
                </p>

                <button
                    onclick="addCart(${product.id})"
                    class="bg-pink-500 text-white px-4 py-2 rounded mt-2">
                    เพิ่มลงตะกร้า
                </button>
            </div>
        `;
    });

    document.getElementById("productList").innerHTML = html;
}

// เพิ่มสินค้าลงตะกร้า
function addCart(id) {

    let product = products.find(p => p.id === id);

    cart.push(product);

    showCart();
}

// แสดงตะกร้าสินค้า
function showCart() {

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {

        html += `
            <div class="flex justify-between border-b p-2">
                <span>${item.name} - ${item.price} บาท</span>

                <button onclick="removeCart(${index})"
                    class="text-red-500">
                    ลบ
                </button>
            </div>
        `;

        total += item.price;
    });

    document.getElementById("cartList").innerHTML =
        html || "ยังไม่มีสินค้า";

    document.getElementById("total").innerText = total;
}

// ลบสินค้า
function removeCart(index) {
    cart.splice(index, 1);
    showCart();
}

// ค้นหาสินค้า
document.getElementById("search").addEventListener("input", function() {

    let keyword = this.value.toLowerCase();

    let result = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    showProducts(result);
});

// สั่งซื้อสินค้า
function checkout() {

    if (cart.length === 0) {
        alert("กรุณาเลือกสินค้าก่อน");
        return;
    }

    alert("สั่งซื้อสินค้าสำเร็จ ขอบคุณที่ใช้บริการ!");

    cart = [];
    showCart();
}

// เริ่มต้นเว็บไซต์
showProducts();
