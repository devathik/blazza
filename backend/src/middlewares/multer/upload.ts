import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
import cloudinary from '@/config/cloudinary';

// Configure multer memory storage
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Helper to upload buffer to Cloudinary
const uploadBufferToCloudinary = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'dokan-lagbe/shops',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) return reject(error);
        if (!result) return reject(new Error('Cloudinary upload result is undefined'));
        resolve(result.secure_url);
      }
    );
    uploadStream.end(fileBuffer);
  });
};

// Middleware to upload array of images in request and append to body
export const uploadShopImages = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const files = req.files as Express.Multer.File[] | undefined;
    if (!files || files.length === 0) {
      req.body.images = [];
      return next();
    }

    // Upload all files concurrently
    const uploadPromises = files.map((file) => uploadBufferToCloudinary(file.buffer));
    const imageUrls = await Promise.all(uploadPromises);

    req.body.images = imageUrls;
    next();
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to upload images to Cloudinary',
    });
  }
};