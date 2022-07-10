import type { NextApiRequest, NextApiResponse } from 'next'
import { getDir } from './utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const files: string[] = await getDir('./public/images/')
  res.status(200).json(files)
}
