

import React from 'react'

const Register = () => {
    return (<>
        <div class="pt-6 sm:pt-8 lg:pt-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="rounded-lg  px-4 py-6 md:py-8 lg:py-12">
                <p   class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">inscription</p>

                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Inscription</h2>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
            </div>
        </div>

        <div class="bg-white 2">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                <form class="mx-auto max-w-lg rounded-lg border">
                <div class="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                    <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>


                    <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Register</button>

                   
                </div>

                <div class="flex items-center justify-center bg-gray-100 p-4">
                    <p class="text-center text-sm text-gray-500">Already have an account? <a href="/login" class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</a></p>
                </div>
                </form>
            </div>
        </div>

    </>)
}

export default Register;
