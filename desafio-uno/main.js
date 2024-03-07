class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, img, code, stock){
        if (!title || !description || !price || !img || !code || !stock) {
            console.log('amigo, tienes que colocar todos los campos')
            return
        }
        if (this.products.some(prod => prod.code === code)) {
            console.log('el codigo debe ser unico, loco')
            return
    }
            const newProduct = {
                id: ++ProductManager.ultId,
                title,
                description,
                price, 
                img,
                code,
                stock
    } 
        this.products.push(newProduct)
    }

    getProducts(){
        return this.products
    }

    getProductsById(id){
        const product = this.products.find(item=>item.id===id)

        if (!product) {
            console.log('producto no encontrado')
        } else {
            console.log('lo encontramos!!', product)
        }
    }
}

//testing

const manager = new ProductManager()
console.log(manager.getProducts());
manager.addProduct("iphone 15", "256gb sim virtual", 2000, "sin imagen", "xxx100", 25);
manager.addProduct("iphone 14", "128gb sim virtual", 1500, "sin imagen", "xxx101", 26);
manager.addProduct("iphone 13", "512gb sim virtual", 1000, "sin imagen", "xxx101", 27);

console.log(manager.getProducts());

manager.getProductsById(2);
manager.getProductsById(5);