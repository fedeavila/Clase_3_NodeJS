import connectToDatabase from "./config/connectionDB.js";
import express from "express";
import ENVIRONMENT from "./config/environment.js";
import productRouter from "./router/product.router.js";

connectToDatabase();

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(ENVIRONMENT.PORT, () => {
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${ENVIRONMENT.PORT}`);
});

export default app;