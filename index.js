class ProductManager {

constructor(){
    this.products = [];
    this.productIdCounter = 1;
}
addProduct(title, description, price, thumbnail, code, stock){

    const isCodeUnique = !this.products.some(product => product.code === code);

    if (!isCodeUnique) {
    console.error(`El código '${code}' ya existe en otro producto. No se puede agregar.`);
    }

const product = {
    id: this.productIdCounter ++,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
};
this.products.push(product);
return product;

}
getProducts() {
    return this.products;
}

getProductById(id) {
    const product = this.products.find(product => product.id === id);

    if (!product) {
    console.error(`No se encontró ningún producto con el ID '${id}'.`);
    }
    return product;
}

}

const productManager = new ProductManager();
productManager.addProduct("Pan", "Comestible", 350, "1.jpg", "codigo1", 3);
productManager.addProduct("Pollo", "Carnes", 2500, "2.jpg", "codigo2", 1);

console.log(productManager.getProducts());
console.log(productManager.getProductById(3));