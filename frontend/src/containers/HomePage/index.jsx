import React from 'react'
import { Navbar } from '../../components/navbar'
import {
    PageContainer,
} from '../../components/pageContainer'
import {TopSection} from './topSection'
import { Footer } from '../../components/footer'
import TheBestSpecialistsImg from '../../images/Work only with the best.png'

export function HomePage() {
    return (
        <main className="bg-white font-mono">
            <Navbar/>
            <div className="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 flex flex-col -mt-6 items-center lg:items-start">
                    <h1 className="font-black text-3xl sm:text-4xl block mb-4">Welcome to CustomeroCity </h1>
                    <p className="text-center lg:text-left sm:text-lg text-black lg:pr-40 leading-relaxed mb-4">Online Address Book for great customer relationships</p>
                    <h2 className="font-black text-3xl sm:text-4xl block mb-4">Join Us Today! </h2>
                    <a href="/Signup" className="bg-purple-500 hover:bg-blue-500 mt-8 py-1 px-8 text-lg rounded-xl font-bold text-white tracking-widest">Get Started</a>
                    
                </div>
                <div className="w-full sm:w-3/5 lg:absolute top-36 right-0 bottom-0 lg:ml-8">
                    <img className="inline-block md:mt-0 p-8 md:p-0"  src={TheBestSpecialistsImg}/>
                </div>
            </div>
        </main>
    )
}

