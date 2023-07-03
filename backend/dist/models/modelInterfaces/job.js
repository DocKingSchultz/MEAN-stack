"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = void 0;
const objectinfo_1 = require("./objectinfo");
const mongoose_1 = require("mongoose");
const worker_1 = require("./worker");
exports.JobSchema = new mongoose_1.Schema({
    object: {
        type: objectinfo_1.ObjectInfoSchema,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['requested', 'active', 'finished', 'rejected'],
        required: true,
        default: 'requested',
    },
    cost: {
        type: Number,
        required: true,
    },
    workers: {
        type: [worker_1.WorkerSchema],
        default: [],
    },
});
//# sourceMappingURL=job.js.map