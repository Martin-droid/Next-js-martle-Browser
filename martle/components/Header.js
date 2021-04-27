import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/outline';
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    return (
        <header>
 
            <Image src="/logo.png" height={60} width={60} onClick={() => router.push("/")} className="cursor-pointer" /> Martle

            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />

<XIcon className="h-7 sm:mr-3 text=gray=500 cursor-pointer transition duration-100 transform hover:scale-125"
    onClick={() => (searchInputRef.current.value="")}
/>
<MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-yellow-500"/>
            </form>

            
        </header>
    )
}

export default Header;
