import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: '5u9e3aoe', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-03-25',
  useCdn: false
}

export const sanityClient = createClient(config)

export const urlFor = source => createImageUrlBuilder(config).image(source)
