import { readdir } from 'fs'
import { promisify } from 'util'

import sizeOf from 'image-size'

const readdirAsync = promisify(readdir)

export const getDir = async (dir: string): Promise<string[]> =>
  await readdirAsync(dir).catch(err => {
    console.error(err)
    throw err.message
  })

export const getImgSizes = (file: string) => sizeOf(file)
