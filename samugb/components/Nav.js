import { Roboto_Serif, Montserrat } from "next/font/google";
import Image from 'next/image'

const montserrat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto_Serif({ subsets: ['latin'] })

export default function Nav () {
    return (
        <nav className="flex flex-col items-center w-56 h-screen text-center py-10 fixed">
            <Image
                src="/letra-s.png"
                width={500}
                height={500}
                alt="logo"
                className="w-32"
            />
            <h2 className={`${montserrat.className} font-bold text-2xl`}>Samuel</h2>
            <p className="opacity-80">Desarrollador Web</p>
            <ul className="mt-24 pb-12 border-b">
                <li className={`${roboto.className} p-5 h-14 font-bold text-2xl text-base font-medium opacity-80 hover:opacity-100 cursor-pointer`}>
                    Sobre mí
                </li>
                <li className={`${roboto.className} p-5 h-14 font-bold text-2xl text-base font-medium opacity-80 hover:opacity-100 cursor-pointer`}>
                    Habilidades
                </li>
                <li className={`${roboto.className} p-5 h-14 font-bold text-2xl text-base font-medium opacity-80 hover:opacity-100 cursor-pointer`}>
                    Trabajo
                </li>
                <li className={`${roboto.className} p-5 h-14 font-bold text-2xl text-base font-medium opacity-80 hover:opacity-100 cursor-pointer`}>
                    Estudios
                </li>
                <li className={`${roboto.className} p-5 h-14 font-bold text-2xl text-base font-medium opacity-80 hover:opacity-100 cursor-pointer`}>
                    Contacto
                </li>
            </ul>
            <ul>
                <li className="bg-white opacity-80 rounded-full w-6 h-6"><Image
                src="/linkedin.png"
                width={20}
                height={20}
                alt="linkedin"
            /></li>
                <li><Image
                src="/github.png"
                width={500}
                height={500}
                alt="logo"
            /></li>
                <li><Image
                src="/instagram.png"
                width={500}
                height={500}
                alt="logo"
            /></li>
            </ul>
        </nav>
    );
}