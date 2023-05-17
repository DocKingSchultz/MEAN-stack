"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onFileupload = void 0;
function onFileupload(req, res) {
    let file = req['files'].thumbnail;
    console.log("File uploaded: ", file.name);
}
exports.onFileupload = onFileupload;
//# sourceMappingURL=fileUploader.js.map