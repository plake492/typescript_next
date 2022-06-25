// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler({ body }, res) {
  console.log(body)
  res.status(200).json({ name: body })
}
