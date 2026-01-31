import express from "express";
import {
    buscarProductoPorID,
    listarProductos,
    eliminarProductoPorID,
    actualizarProductoPorID,
    crearProducto
} from "../repository/product.repository.js";

const productRouter = express.Router();

productRouter.get(
    '/',
    async (req, res) => {
        const products = await listarProductos();
        res.json({
            ok: true,
            status: 200,
            message: "LISTA DE PRODUCTOS",
            data: products
        });
    }
)

productRouter.get(
    '/:id',
    async (req, res) => {
        const productId = req.params.id;
        const products = await listarProductos(productId);
        res.json({
            ok: true,
            status: 200,
            message: "PRODUCTO ENCONTRADO",
            data: products
        });
    }
)

productRouter.post('/', async (req, res) => {
    try {
        const { name, price, stock, description } = req.body;
        const newProduct = await crearProducto({ name, price, stock, description });
        res.status(201).json({
            ok: true,
            status: 201,
            message: "PRODUCTO CREADO",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: "ERROR CREANDO PRODUCTO",
            error: error.message
        });
    }
});

productRouter.put('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await actualizarProductoPorID(productId, req.body);
        res.json({
            ok: true,
            status: 200,
            message: "PRODUCTO ACTUALIZADO",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: "ERROR ACTUALIZANDO PRODUCTO",
            error: error.message
        });
    }
});

productRouter.delete('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await eliminarProductoPorID(productId);
        res.json({
            ok: true,
            status: 200,
            message: "PRODUCTO ELIMINADO",
            data: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            message: "ERROR ELIMINANDO PRODUCTO",
            error: error.message
        });
    }
});

export default productRouter;