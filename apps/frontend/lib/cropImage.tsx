import Resizer from 'react-image-file-resizer'

export const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

export function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: any, height: any, rotation: any) {
  const rotRad = getRadianAngle(rotation)
  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: any,
  rotation = 0,
  flip = { horizontal: false, vertical: false },
) {
  const image: any = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return null
  }
  const rotRad = getRadianAngle(rotation)
  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation,
  )
  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight
  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)
  // draw rotated image
  ctx.drawImage(image, 0, 0)
  const croppedCanvas = document.createElement('canvas')
  const croppedCtx = croppedCanvas.getContext('2d')
  if (!croppedCtx) {
    return null
  }
  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height
  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  )
  // As Base64 string
  return croppedCanvas.toDataURL('image/jpeg')
  // As a blob
  //   return new Promise((resolve, reject) => {
  //     croppedCanvas.toBlob((file) => {
  //       resolve(URL.createObjectURL(file))
  //     }, 'image/jpeg')
  //   })
}

export const resizeFile = (file: any) =>
  new Promise((resolve) => {
    let pictureWidth = 800
    let pictureHeight = 800
    let pictureCompress = 80
    if (file.size <= 20000) pictureCompress = 50
    Resizer.imageFileResizer(
      file,
      pictureWidth,
      pictureHeight,
      'webp',
      pictureCompress,
      0,
      (uri) => {
        resolve(uri)
      },
      'file',
    )
  })

export const transformAndResizeBody = async (data: any) => {
  const formData = new FormData()
  const newArray = []
  /// Transform pictures base64 to file before upload ///
  if (data.imageArray) {
    
    
    for await (const image of data.imageArray) {
      const path = image.path
      if (path.startsWith('http://localhost:4000')) {
        newArray.push(image)
        continue
      }
      const UrlToFile = await fetch(image.path)
        .then((res) => res.blob())
        .then((blob) => {
          const extention = image.name.split('.')[1]          
          const imageName = image.name.split(`.${extention}`).join('_')
          const file = new File([blob], `${imageName + Date.now() + `.${extention}`}`, {
            type: `image/jpeg`,
          })
          return file
        })
        console.log('resizedImage :', UrlToFile);
      /// Resize and convert to webp ///
      const resizedImage: any = await resizeFile(UrlToFile)
      formData.append(`images`, resizedImage)
      newArray.push({name: resizedImage.name, path: '', main: image.main})
    }
  }
  data.imageArray = newArray
  return formData
}
