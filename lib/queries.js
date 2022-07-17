export const tagsQuery = `*[_type == "tags"] {
    name,
  }`

export const imagesQuery = `*[_type == "abstractImages"] | order(order asc) {
    _id,
    picture,
    tags[]->{
        name
    }
  }`
