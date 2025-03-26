import Comment from '../models/userModel.js';

export const createComment = async (req, res) => {
    const { postId, userId, content } = req.body;

    try {
        const newComment = await Comment.create({ postId, userId, content });
        res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error });
    }
};

export const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;

    try {
        const comments = await Comment.findAll({ where: { postId } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
};