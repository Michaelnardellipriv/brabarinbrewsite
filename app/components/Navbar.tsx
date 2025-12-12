'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar-container fixed top-0 w-full backdrop-blur-md px-8 py-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-3xl font-black tracking-wider whitespace-nowrap flex items-center">
                    <Link href="/" className="navbar-logo text-3xl font-black hover:opacity-80 transition">
                        BARBARIAN BREW
                    </Link>
                </div>
               <ul>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/museo" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Il Museo</Link>
                    </li>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/shop" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Prodotti</Link>
                    </li>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/galleria" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Galleria</Link>
                    </li>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/eventi" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Eventi</Link>
                    </li>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/distillerie" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Distillerie</Link>
                    </li>
                    <li aria-hidden="true" className="mx-2">
                        <span className="inline-block h-6 w-px navbar-separator opacity-40"></span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/contatti" className="navbar-link px-4 py-2 text-sm font-medium rounded transition hover:opacity-80">Contatti</Link>
                    </li>
                </ul> 
                </div>
            
        </nav>  
    );
}
