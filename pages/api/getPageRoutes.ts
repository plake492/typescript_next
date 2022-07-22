import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDir } from './utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const dir = path.resolve('./pages')

  const files: string[] = await getDir(dir)

  const pages: string[] = files
    .filter(
      (file: string) =>
        !file.startsWith('_') &&
        file.charAt(0) === file.charAt(0).toUpperCase() &&
        file.endsWith('.tsx')
    )
    .map(file => file.replace('.tsx', ''))

  res.status(200).json(pages)
}
