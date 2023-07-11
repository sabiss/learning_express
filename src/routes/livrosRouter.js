import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get('/livros', livrosController.listarLivros)//se chamarem um get para o /livros faça o livros.Controller.listarLivros
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros?:id', livrosController.atualizarLivro)

export default router;