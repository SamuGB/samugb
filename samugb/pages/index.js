import Image from 'next/image'
import { Roboto_Serif, Montserrat} from 'next/font/google'

import Nav from '@/components/Nav'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nav />
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ml-56 bg-[#1f1f23]`}>
      
      </main>
    </div>
  )
}
