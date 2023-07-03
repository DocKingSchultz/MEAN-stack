"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    usernameOfUser: {
        type: String,
        required: true,
    },
    nameOfUser: {
        type: String,
        required: true,
    },
    lastnameOfUser: String,
    mark: {
        type: Number,
        required: true,
    },
});
//# sourceMappingURL=comment.js.map