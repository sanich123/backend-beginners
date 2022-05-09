import { response } from "express";
import post from "./post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            const Post = await PostService.create(req.body)
            res.json(Post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const singlePost = await PostService.getOne(req.params.id);
            return res.json(singlePost)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostService.delete(req.params.id);
            return res.json(deletedPost);
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();