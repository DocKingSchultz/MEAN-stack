"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RoomSchema = new mongoose_1.Schema({
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    length: {
        type: Number
    },
    width: {
        type: Number
    },
    color: {
        type: String
    },
});
//# sourceMappingURL=room.js.map