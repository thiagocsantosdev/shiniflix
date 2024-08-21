<template>
    <div class="relative w-32 min-h-screen border-r-2 border-gray-900 flex flex-col items-center p-4 hover:w-64 transition-all duration-1000 ease-in-out">
      <div>
        <h1 class="text-red-600 font-bold text-2xl">Shini<span class="text-white">Flix</span></h1>
      </div>
      <div class="h-full w-full">
        <nav class="h-full">
          <ul class="flex flex-col justify-center h-full ">

            <li class="hover:bg-red-500 p-4 rounded-2xl cursor-pointer text-center items-center ">
              <UIcon name="i-material-symbols:other-houses" class="w-6 h-6" /> 
              <p>Home</p>
            </li>

            <li class="hover:bg-red-500 p-4 rounded-2xl cursor-pointer text-center">
              <UIcon name="i-mingcute:fire-fill" class="w-6 h-6" /> 
              <p>Alta</p>
            </li>

            <li class="hover:bg-red-500 p-4 rounded-2xl cursor-pointer text-center">
              <UIcon name="i-mingcute:save-2-line" class="w-6 h-6" /> 
              <p>Seleção</p>
            </li>

            <li class="hover:bg-red-500 p-4 rounded-2xl cursor-pointer text-center">
              <UIcon name="i-mingcute:history-anticlockwise-fill" class="w-6 h-6" /> <p>
                Em Breve
              </p>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <style scoped>
   
  </style>
  