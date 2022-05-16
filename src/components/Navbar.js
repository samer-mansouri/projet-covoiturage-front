/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  LogoutIcon,
  MapIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token.service'
import AddDeclarationModal from './AddDeclarationModal'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const [showModal, setShowModal] = useState(false)
  const toggleShowModal = () => setShowModal(!showModal)
  

  return (
    <Popover className="sticky top-0 z-50 w-full bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <AddDeclarationModal
        openModal={showModal}
        toggleOpenModal={toggleShowModal}
      />
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              <h1 className="text-[#ffc65e] font-bold text-2xl">RIDE</h1>
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            
            <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
             Accueil
            </NavLink>
           

            
            {
           TokenService.getLocalAccessToken() && TokenService.getLocalRefreshToken() && TokenService.getUser() && TokenService.getUser().role === 'user' 
           ? 
           <>
            <NavLink to="/trajets" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Trajets
            </NavLink>
            <NavLink to="/covoiturages" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Covoiturages
            </NavLink>
           <NavLink to={'/usertrajets'} className="text-base font-medium text-gray-500 hover:text-gray-900">
             Vos Trajets
            </NavLink>
            <a 
              onClick={() => setShowModal(true)}
            className="text-base font-medium text-gray-500 hover:text-black hover:cursor-pointer" >Déclarer</a>
            <NavLink to={'/profile/' + TokenService.getCurrentUserId()} className="text-base font-medium text-gray-500 hover:text-gray-900">
            <UserIcon className="h-6 w-6 inline mb-1" aria-hidden="true" /> Profile
            </NavLink>
            <NavLink to="/logout" className="text-base font-medium text-gray-500 hover:text-gray-900">
            <LogoutIcon className="h-6 w-6 inline mb-1" aria-hidden="true" /> Se déconnecter
            </NavLink>
            </>
  
           : 
          ''
         }

        {
           TokenService.getLocalAccessToken() && TokenService.getLocalRefreshToken() && TokenService.getUser() && TokenService.getUser().role === 'admin' 
           ? 
           <>
           <NavLink to={'/admin-users'} className="text-base font-medium text-gray-500 hover:text-gray-900">
             Utilisateurs
            </NavLink>
            <NavLink to="/admin-trajets" className="text-base font-medium text-gray-500 hover:text-gray-900">
             Trajets
            </NavLink>
            <NavLink to="/admin-cars" className="text-base font-medium text-gray-500 hover:text-gray-900">
             Vehicules
            </NavLink>
            <NavLink to="/logout" className="text-base font-medium text-gray-500 hover:text-gray-900">
            <LogoutIcon className="h-6 w-6 inline mb-1" aria-hidden="true" /> Se déconnecter
            </NavLink>
            </>
  
           : 
          ''
         }

          </Popover.Group>
        

          {
           TokenService.getLocalAccessToken() && TokenService.getLocalRefreshToken() && TokenService.getUser()
           ? 
          ''
           : 
           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
           <NavLink to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
             Se connecter
           </NavLink>
           <NavLink
             to="/signup"
             className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ffc65e] hover:bg-[#e0ae51]"
           >
             S'inscrire
           </NavLink>
         </div>
         }
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <h1 className="text-[#ffc65e] font-bold text-2xl">RIDRE</h1>

                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ffc65e] hover:bg-[#e0ae51]"
                >
                  S'inscrire
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Vous avez déja un compte?{' '}
                  <a href="#" className="text-[#ffc65e] hover:text-indigo-500">
                    Se connecter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
