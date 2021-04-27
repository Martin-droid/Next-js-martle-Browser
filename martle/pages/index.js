import Head from 'next/head';
import{MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid";
import Image from 'next/image';
import { useRef } from "react";
import { useRouter } from "next/router";

import { SearchIcon } from "@heroicons/react/outline";
export default function Home() {
const router = useRouter();
const searchInputRef = useRef(null);

const search = (e) => {
  
  e.preventDefault();
  const term = searchInputRef.current.value;
  if (!term) return;

  router.push('/search?term=${term}');
};
 




  return (
    <div>
      <Head>
        <title>Martle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<header className="flex w-full p-5 justify-between  text-sm text-gray-500">

{/* left */}
  <div className="flex space-x-4 items-center ">
<p className="link">About</p>
<p className="link">Store</p>
  </div>

{/* right */}
  <div className="flex space-x-4 items-center">
<p className="link">Gmail</p>
<p className = "link">Images</p>



{/* icon */}
<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray cursor-pointer"/>
  </div>

</header>


{/* body  */}
<form className="flex flex-col items-center mt-30 flex-grow">
<Image className="lazy" src="/logo.png" width="200px" height="200px" />
<h2 className="text-xl">Martle Search</h2>
<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200
px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"> 

<SearchIcon className="
h-5 mr-3 text-gray-500"/>
<input ref={searchInputRef} type="text" className="flex-grow focus:outline-none "/>
<MicrophoneIcon className="h-5"/>

</div>

<p className="mt-8 font-semibold inline flex">Private <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>..Secure <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg> ..Incredibly Fast <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
</svg></p>
<div className="flex flex-col w-1/2  justify-center mt-12 
sm:flex-row sm:space-x-4">
  <button onClick={search}className="bg-gray-100 hover:ring-1 focus:outline-none p-3 m-4 rounded-md ring-gray-200 text-sm hover:shadow-md">Martle Search</button>

  <button onClick={search} className="bg-gray-100 hover:ring-1 focus:outline-none p-3 m-4 rounded-md ring-gray-200 text-sm hover:shadow-md">How are You Today</button>
</div>

</form>




     
    </div>
  )
}
