'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-amber-950/95 backdrop-blur-md px-8 py-4 z-1000 border-b-2 border-amber-400">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-3xl font-black text-amber-400 tracking-wider whitespace-nowrap">
                    <Link href="/" className="text-3xl font-black text-amber-400 hover:text-amber-300 transition">
                        BARBARIAN BREW
                    </Link>
                </div>
                <ul className="hidden md:flex gap-4 list-none flex-1 justify-center ml-12">
                    <li><Link href="/" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Home</Link></li>
                    <li><Link href="/museo" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Il Museo</Link></li>
                    <li><Link href="/shop" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Prodotti</Link></li>
                    <li><Link href="/galleria" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Galleria</Link></li>
                    <li><Link href="/eventi" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Eventi</Link></li>
                    <li><Link href="/distillerie" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Distillerie</Link></li>
                    <li><Link href="/contatti" className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-50 text-sm font-medium rounded transition">Contatti</Link></li>
                </ul>
            </div>
        </nav>
    );
}
