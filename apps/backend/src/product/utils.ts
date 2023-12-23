import * as fs from 'fs';
import { diskStorage } from 'multer';
import { ImageDto } from './dto/create-product.dto';
import { NotFoundException } from '@nestjs/common';

// Configure Multer storage
export const storage = diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = `./public/temp`; // Define your upload directory
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    cb(null, name);
  },
});

export const fileManagement = async (
  files: any,
  productId: string,
  imageArray: ImageDto[],
) => {
  files.forEach((file) => {
    console.log('file :', file);
    const sourcePath = `./${file.path}`;
    const destinationPath = `./public/${productId}/${file.filename}`;

    // Vérifie si le fichier source existe avant de le déplacer
    if (fs.existsSync(sourcePath)) {
      if (fs.existsSync(`./public/${productId}`)) {
        fs.renameSync(sourcePath, destinationPath);
      } else {
        fs.mkdirSync(`./public/${productId}`);
        fs.renameSync(sourcePath, destinationPath);
      }
    } else {
      throw new NotFoundException("Le fichier source n'existe pas.");
    }
    for (const image of imageArray) {
      if (image.name === file.originalname) {
        image.path = `${process.env.BACKEND_URL}/public/${productId}/${file.filename}`;
      }
    }
  });
  return imageArray;
};
