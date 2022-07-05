import type { NextApiRequest, NextApiResponse } from 'next'
import { readdir } from 'fs'
import { promisify } from 'util'

const readdirAsync = promisify(readdir)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const files: string[] = await readdirAsync('./pages').catch(err => {
    console.error(err)
    throw err.message
  })

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
