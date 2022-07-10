import type { NextApiRequest, NextApiResponse } from 'next'
import { getDir, getImgSizes } from './utils'
import { ImageWithData } from '../../utils/types'

const excluded: string[] = ['.DS_Store']

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageWithData[]>
) {
  const dir = './public/images/' + req.body
  const files: string[] = await getDir(dir)

  const imagesFiltered = files.filter(file => !excluded.includes(file))

  const imagesWithData: ImageWithData[] = imagesFiltered.map(
    (file: string): ImageWithData => {
      const { width, height }: { width: number; height: number } = getImgSizes(
        `${dir}/${file}`
      )

      const isLandscape = width > height
      return { src: file, width, height, isLandscape }
    }
  )

  res.status(200).json(imagesWithData)
}
