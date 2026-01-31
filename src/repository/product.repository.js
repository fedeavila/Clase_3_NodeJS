import Product from "../models/product.model.js";

async function buscarProductoPorID(id) {
    try {
        const producto = await Product.findById(id);
        console.log("PRODUCTO ENCONTRADO: ", producto);
        return producto;
    } catch (error) {
        console.error("ERROR BUSCANDO PRODUCTO: ", error);
    }
}

async function listarProductos() {
    try {
        const productos = await Product.find();
        console.log("LISTA DE PRODUCTOS: ", productos);
        return productos;
    } catch (error) {
        console.error("ERROR LISTANDO PRODUCTOS: ", error);
        throw error;
    }
}

async function eliminarProductoPorID(id) {
    try {
        const deleted = await Product.findByIdAndDelete(id);
        console.log(`PRODUCTO CON ID ${id} ELIMINADO EXITOSAMENTE!!!`);
        return deleted;
    } catch (error) {
        console.error("ERROR ELIMINANDO PRODUCTO: ", error);
        throw error;
    }
}

async function actualizarProductoPorID(id, nuevosDatos) {
    try {
        const updated = await Product.findByIdAndUpdate(id, nuevosDatos, { new: true });
        console.log(`PRODUCTO CON ID ${id} ACTUALIZADO EXITOSAMENTE!!!`);
        return updated;
    } catch (error) {
        console.error("ERROR ACTUALIZANDO PRODUCTO: ", error);
        throw error;
    }
}

async function crearProducto(datosProducto) {
    try {
        const nuevoProducto = await Product.create(datosProducto);
        console.log("PRODUCTO CREADO EXITOSAMENTE: ", nuevoProducto);
        return nuevoProducto;
    } catch (error) {
        console.error("ERROR CREANDO PRODUCTO: ", error);
    }
}

export {
    buscarProductoPorID,
    listarProductos,
    eliminarProductoPorID,
    actualizarProductoPorID,
    crearProducto
};