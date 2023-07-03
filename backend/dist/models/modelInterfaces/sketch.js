"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SketchSchema = void 0;
const door_1 = require("./door");
const room_1 = require("./room");
const mongoose_1 = require("mongoose");
exports.SketchSchema = new mongoose_1.Schema({
    rooms: {
        type: [room_1.RoomSchema],
        required: true,
    },
    doors: {
        type: [door_1.DoorSchema],
        required: true,
    },
});
//# sourceMappingURL=sketch.js.map