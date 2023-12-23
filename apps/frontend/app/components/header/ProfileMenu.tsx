import Link from 'next/link'
import { AiOutlineLogout } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

const ProfileMenu = ({ setShowProfileMenu }: { setShowProfileMenu: any }) => {
  // const { reset } = useUserStore()
  return (
    <ul
      className="space-y-1 absolute top-12 right-0 drop-shadow-lg bg-white "
      onMouseLeave={() => setShowProfileMenu(false)}
    >
      <li className="px-0 py-2 mt-2">
        <Link
          href="/administration"
          className="flex items-center gap-2  hover:bg-gray-100 px-6 py-2 text-gray-700"
        >
          <FiSettings />
          <span className="text-sm font-medium"> Administration </span>
        </Link>
      </li>
      <li className="px-0 py-2">
        <Link
          href="/#"
          className="flex items-center gap-2 px-6 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <span className="text-sm font-medium"> Account </span>
        </Link>
      </li>
      <li className="border-t-2 px-0 py-2 my-1">
        <span
          className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:underline underline-offset-4 cursor-pointer"
          // onClick={reset}
        >
          <AiOutlineLogout color={'red'} />
          Déconnexion
        </span>
      </li>
    </ul>
  )
}

export default ProfileMenu
