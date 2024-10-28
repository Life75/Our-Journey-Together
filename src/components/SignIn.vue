<template>
    <div id="sign-in">
        <div class="bg-no-repeat bg-cover bg-center relative">
            <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div class="self-start hidden lg:flex flex-col  text-white">
                        <img src="" class="mb-3">
                      
                    </div>
                </div>
                <div class="flex justify-center self-center  z-10">
                    <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div class="mb-4">
                            <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p class="text-gray-500">.</p>
                        </div>
                        <div class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input
                                    class=" w-full bg-white text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="" placeholder="mail@gmail.com">
                            </div>
                            <div class="space-y-2">
                                <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input
                                    class="w-full content-center bg-white text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="" placeholder="Enter your password">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox"
                                        class="h-4 w-checkbox  bg-purple-500 focus:ring-blue-400 border-gray-300 rounded">
                                    <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div v-show="false" class="text-sm">
                                    <a href="#" class="text-green-400 hover:text-green-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    class="w-full flex justify-center bg-purple-400  hover:bg-purple-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div class="pt-5 text-center text-gray-400 text-xs">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//https://www.creative-tim.com/twcomponents/component/login-form-ui-by-tailwindcss
</script>
