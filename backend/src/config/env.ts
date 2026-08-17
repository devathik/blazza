import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env"), override: true });

const fallbackCloudinaryName = "ddwkkpa5t";
const cloudinaryNameFromEnv = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const validCloudinaryName =
  cloudinaryNameFromEnv && /^[a-zA-Z0-9_-]+$/.test(cloudinaryNameFromEnv)
    ? cloudinaryNameFromEnv
    : fallbackCloudinaryName;

export default {
  port: process.env.PORT || 5000,
  connection_string: process.env.MONGO_URI,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || "1d",
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  cloudinary_name: validCloudinaryName,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};
