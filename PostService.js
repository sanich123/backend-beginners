import Post from "./post.js";

class PostService {
    async create(publication) {
        return await Post.create(publication);
    }

    async getAll() {
        return await Post.find();
    }

    async getOne(id) {
            if (!id) {
                throw new Error('Не указан ID');
            }
            return await Post.findById(id);
    }

    async update(publication) {
            if (!publication._id) {
                throw new Error('Не указан ID');
            }
            return await Post.findByIdAndUpdate(publication._id, publication, {new: true});
    }

    async delete(id) {
            if (!id) {
                throw new Error('Не указан ID');
            }
            return await Post.findByIdAndDelete(id);
    }
}

export default new PostService();