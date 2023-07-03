"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RoomSchema = new mongoose_1.Schema({
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=room.js.map