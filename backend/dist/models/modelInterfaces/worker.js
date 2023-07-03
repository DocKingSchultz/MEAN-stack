"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.WorkerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=worker.js.map