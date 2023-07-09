


import React, { useState } from 'react'

const Vote = () => {

    const [candidat, setCandidat] = useState([]);
    const [poste, setPoste] = useState("president");
    const [vote, setVote] = useState([]);


    
    return (<>
    
        <div className='mb-40'>

            <div class="py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="rounded-lg  px-4 py-6 md:py-8 lg:py-12">
                    <p   class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">inscription</p>

                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Inscription</h2>

                    <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-around'>

                <div className='w-10/12 py-6 sm:py-8 px-6 rounded bg-white drop-shadow shadow'>

                    <ul class="flex border-b justify-around">
                        <li class="-mb-px mr-1">
                            <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Président</a>
                        </li>
                        <li class="mr-1">
                            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Social</a>
                        </li>
                        <li class="mr-1">
                            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">ComCom</a>
                        </li>
                        <li class="mr-1">
                            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">IT</a>
                        </li>
                        <li class="mr-1">
                            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Peda</a>
                        </li>
                        <li class="mr-1">
                            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Sport</a>
                        </li>
                    </ul>

                    <div className='flex justify-center py-6 space-x-6'>

                        <button  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">President</button>
                        <button  class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Adjoint</button>

                    </div>

                    <div class="grid grid-cols-2 gap-4 pb-6">
                        
                        <div className='w-96 h-96 mx-auto bg-white shadow drop-shadow'>
                            
                        </div>

                        <div className='w-96 h-96 mx-auto bg-white shadow drop-shadow'>
                            
                        </div>
                    </div>

                </div>
                
            </div>

            <div className=' w-9/12 mx-auto mt-6 space-y-4 h-fit py-6 sm:py-8 px-6 rounded-xl bg-white drop-shadow shadow'>

                    <div>
                        Liste de vos choix :
                    </div>

                    <div className='grid grid-cols-4 gap-4'>
                        <div className='space-y-2'>
                            <div className='font-semibold'>
                                Presi IT
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='w-20 h-20 bg-red-50 rounded'>
                                    <img src="" alt="" />
                                </div>
                                <div className='text'>
                                    <h2>Prenom 1 2</h2>
                                    <h3>Nom</h3>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <div className='font-semibold'>
                                Presi IT
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='w-20 h-20 bg-red-50 rounded'>
                                    <img src="" alt="" />
                                </div>
                                <div className='text'>
                                    <h2>Prenom 1 2</h2>
                                    <h3>Nom</h3>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='text-center'>
                        <button  class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Valider</button>

                    </div>    

                </div>


        </div>

    </>)
}

export default Vote
