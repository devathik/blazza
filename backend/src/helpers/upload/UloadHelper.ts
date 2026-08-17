// export const deleteFile = (filePath: string): Promise<void> => {
//     console.log(filePath);
//     const fs = require("fs");
//     return new Promise((resolve, reject) => {
//         fs.unlink(filePath, (err: any) => {
//             if (err) {
//                 console.error("Error deleting file:", err);
//                 reject(err);
//             } else {
//                 console.log("File deleted successfully:", filePath);
//                 resolve();
//             }
//         });
//     });
// };