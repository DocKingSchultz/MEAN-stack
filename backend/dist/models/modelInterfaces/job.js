"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = void 0;
const objectinfo_1 = require("./objectinfo");
const mongoose_1 = require("mongoose");
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
        type: Number
    },
    agencyUsername: {
        type: String
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
});
//# sourceMappingURL=job.js.map