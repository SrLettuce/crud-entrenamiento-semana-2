// Array que almacena todos los productos
const listproduc = [];

// Genera un ID único basado en timestamp
const generateId = () => new Date().getTime();


// Crea un producto con nombre y precio, lo agrega a la lista y devuelve su ID
const createProduct = (name, price) => {
    const id = generateId();
    listproduc.push({ id, name, price });
    return id;
};
// Devuelve todos los productos almacenados
const getAllProduct = () => listproduc;
// Recupera producto(s) por su ID (en realidad devuelve un array con el producto)
const getProductById = (id) => listproduc.filter((item) => item.id === id);

const updateProduct = (id, name, price) => {
    const prod = listproduc.find((item) => item.id === id);
    if (prod) {
        prod.name = name;
        prod.price = price;
    }
};
// Elimina un producto por su ID
const removeProduct = (id) => {
    const idx = listproduc.findIndex((item) => item.id === id);
    if (idx > -1) listproduc.splice(idx, 1);
};

const form = document.getElementById("product-form");
const idField = document.getElementById("product-id");
const nameField = document.getElementById("name");
const priceField = document.getElementById("price");
const listEl = document.getElementById("product-list");
const btnSubmit = document.getElementById("btn-submit");
// Función que renderiza/agrega productos a la lista en el DOM
const render = () => {
    listEl.innerHTML = "";
    getAllProduct().forEach((p) => {
        const li = document.createElement("li");
        li.className = "product-item";
        li.innerHTML = `
        <div class="product-info">
            <strong>${p.name}</strong> — $${parseFloat(p.price).toFixed(2)}
        </div>
        <div class="product-actions">
            <button data-action="edit" data-id="${p.id}">Editar</button>
            <button data-action="delete" data-id="${p.id}">Eliminar</button>
        </div>`;
        listEl.appendChild(li);
    });
};
// Evento que se activa al enviar el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameField.value.trim();
    const price = priceField.value;
    const currentId = idField.value;

    if (currentId) {
        updateProduct(currentId, name, price);
    } else {
        createProduct(name, price);
    }

    // Resetea el formulario a estado inicial
    idField.value = "";
    nameField.value = "";
    priceField.value = "";
    btnSubmit.textContent = "Agregar producto";
    render();
});

listEl.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const { action, id } = e.target.dataset;
        if (action === "edit") {
            const [prod] = getProductById(id);
            if (prod) {
                idField.value = prod.id;
                nameField.value = prod.name;
                priceField.value = prod.price;
                btnSubmit.textContent = "Guardar cambios";
            }
        } else if (action === "delete") {
            removeProduct(id);
            render();
        }
    }
});

render();
