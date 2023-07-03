"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DoorSchema = new mongoose_1.Schema({
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
});
//# sourceMappingURL=door.js.map