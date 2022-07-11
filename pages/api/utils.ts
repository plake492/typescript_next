import { readdir } from 'fs'
import { promisify } from 'util'
import sharp from 'sharp'

const readdirAsync = promisify(readdir)

export const getDir = async (dir: string): Promise<string[]> =>
  await readdirAsync(dir).catch(err => {
    console.error(err)
    throw err.message
  })

interface ProcessedImage {
  width: number
  height: number
  imgBase64: string
}

export const processImage = async (
  imagePath: string
): Promise<ProcessedImage> => {
  const sharpImg = sharp(imagePath)
  const { width, height, format } = await sharpImg.metadata()
  const placeholderImgWidth = 20
  const imgAspectRatio = width / height
  const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio)
  const imgBase64 = await sharpImg
    .resize(placeholderImgWidth, placeholderImgHeight)
    .toBuffer()
    .then(buffer => `data:image/${format};base64,${buffer.toString('base64')}`)

  return {
    width: width,
    height: height,
    imgBase64
  }
}
