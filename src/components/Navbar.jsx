import { Logo } from '../assets'
import { Button } from './Button'

export const Navbar = () => {
  return (
    <>
    <header className=' sticky top-0 bg-transparent text-white h-[80px] z-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-black via-custom-blue to-black opacity-1' style={{marginRight: '-40%'}}></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center h-full' >
            <div className='flex items-center'>
                <img src={Logo} alt='Logo' className='h-[54px] '/>
            </div>
                <nav className='ml-10 flex-1 flex justify-center space-x-8'>
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#process" className="hover:underline">Process</a>
                    <a href="#work" className="hover:underline">Work</a>
                    <a href="#pricing" className="hover:underline">Pricing</a>
                    <a href="#faqs" className="hover:underline">FAQs</a>
                </nav>

                <Button variant='outline'>
                    Book a call
                </Button>
        </div>
    </header>
    </>
  )
}
