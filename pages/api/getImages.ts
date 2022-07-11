import type { NextApiRequest, NextApiResponse } from 'next'
import { getDir, processImage } from './utils'
import { ImageWithData } from '../../utils/types'

const excluded: string[] = ['.DS_Store']

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageWithData[]>
) {
  const dir = './public/images/' + req.body
  const files: string[] = await getDir(dir)

  const imagesFiltered = files.filter(file => !excluded.includes(file))

  const imagesWithData: ImageWithData[] = await Promise.all(
    imagesFiltered.map(async (file: string): Promise<ImageWithData> => {
      const { imgBase64, width, height } = await processImage(`${dir}/${file}`)

      const isLandscape = width > height
      return { src: file, width, height, isLandscape, imgBase64 }
    })
  )

  res.status(200).json(imagesWithData)
}
