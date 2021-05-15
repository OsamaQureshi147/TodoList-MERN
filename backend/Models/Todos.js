const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = Todos = mongoose.model('todos', TodoSchema);