"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectInfoSchema = void 0;
const sketch_1 = require("./sketch");
const mongoose_1 = require("mongoose");
exports.ObjectInfoSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    roomCnt: {
        type: Number,
        required: true,
    },
    sqMeters: {
        type: Number,
        required: true,
    },
    sketch: {
        type: sketch_1.SketchSchema,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=objectinfo.js.map