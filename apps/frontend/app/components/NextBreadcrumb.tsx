// /components/NextBreadcrumb.tsx
'use client'

import React, { ReactNode } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'

type TBreadCrumbProps = {
  separator: ReactNode
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const NextBreadcrumb = ({
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname()
  const params = useSearchParams()

  const pathNames = paths.split('/').filter((path) => path)
  if (params.size > 0 && params.get('category') !== 'all') {
    pathNames.push(`${params.get('category')}`)
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-7xl  ml-6">
        <ul className="flex items-center py-5 ">
          <li className={listClasses}>
            <Link href={'/'} className="flex items-center gap-2">
              <AiOutlineHome />
              Accueil
            </Link>
          </li>
          {pathNames.length > 0 && separator}
          {pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`
            let itemClasses =
              paths === href ? `${listClasses} ${activeClasses}` : listClasses
            let itemLink = capitalizeLinks
              ? link[0].toUpperCase() + link.slice(1, link.length).replaceAll('_', ' ')
              : link.replace('_', '^')
            return (
              <React.Fragment key={index}>
                <li className={itemClasses}>
                  <Link href={href}>{itemLink}</Link>
                </li>
                {pathNames.length !== index + 1 && separator}
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NextBreadcrumb

// import React from 'react'

// const Breadcrumb = () => {
//   return (
//     <div>
//       <nav aria-label="Breadcrumb">
//         <ol className="flex items-center gap-1 text-sm text-gray-600">
//           <li>
//             <a href="#" className="block transition hover:text-gray-700">
//               <span className="sr-only"> Home </span>

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 />
//               </svg>
//             </a>
//           </li>

//           <li className="rtl:rotate-180">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </li>

//           <li>
//             <a href="#" className="block transition hover:text-gray-700">
//               {' '}
//               Shirts{' '}
//             </a>
//           </li>

//           <li className="rtl:rotate-180">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </li>

//           <li>
//             <a href="#" className="block transition hover:text-gray-700">
//               {' '}
//               Plain Tee{' '}
//             </a>
//           </li>
//         </ol>
//       </nav>
//     </div>
//   )
// }

// export default Breadcrumb
