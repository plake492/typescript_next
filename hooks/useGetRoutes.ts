// import { useState, useEffect } from 'react'
// import { Routes } from '../utils/types'

// export const useGetRoutes = (): {
//   routes: Routes[]
// } => {
//   const [routes, setRoutes] = useState(undefined)

//   useEffect(() => {
//     const getPages = async (): Promise<void> => {
//       try {
//         const data = <Response>await fetch('/api/getPageRoutes')
//         const pages: string[] = await data.json()

//         const formatPages: Routes[] = pages.map((page: string) => ({
//           path: `/${page}`,
//           title: page
//         }))

//         setRoutes(formatPages)
//       } catch (err) {
//         console.error(err)
//       }
//     }
//     getPages()
//   }, [])

//   return { routes }
// }
