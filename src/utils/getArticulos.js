import { articulos } from "../data/articulos.js";

export const getArticulos = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(articulos), 1000);
    });
};