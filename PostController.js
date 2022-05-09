import post from "./post.js";

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body;
            const Post = await post.create({author, title, content, picture})
            res.json(Post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await post.find();
            return res.json(posts);
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const singlePost = await post.findById(id);
            return res.json(singlePost)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const publication = req.body;
            if (!publication._id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const updatedPost = await post.findByIdAndUpdate(publication._id, publication, {new: true});
            return res.json(updatedPost);

        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
                try {

        }
        catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();