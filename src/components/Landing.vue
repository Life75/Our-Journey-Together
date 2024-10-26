<template>
    <div class="w-full flex justify-center items-center min-h-screen ">
        <div class="flex flex-col gap-3 items-center">
            <h1 class="text-white md:text-7xl text-5xl text-center font-semibold">Our Journey Together</h1>
            <h2 class="text-white text-xl text-center pt-1 pb-4">Austyn & Elina</h2>
            
            <div class="">
                <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
                    <div class="backdrop-blur-md glass shadow-xl rounded-box text-white flex flex-col p-2">
                      
                        <span class="countdown font-mono text-5xl">
                            <span :style="`--value:${days};`"></span>
                        </span>
                        days
                    </div>
                    <div class="backdrop-blur-md glass shadow-xl rounded-box text-white flex flex-col p-2">
                        <span class="countdown font-mono text-5xl">
                            <span :style="`--value:${hours};`"></span>
                        </span>
                        hours
                    </div>
                    <div class="backdrop-blur-md glass shadow-xl rounded-box text-white flex flex-col p-2">
                        <span class="countdown font-mono text-5xl">
                            <span :style="`--value:${minutes};`"></span>
                        </span>
                        min
                    </div>
                    <div class=" backdrop-blur-md glass shadow-xl rounded-box text-white flex flex-col p-2">
                        <span class="countdown font-mono text-5xl">
                            <span :style="`--value:${seconds};`"></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <div id="quote-of-the-day" class="text-white  italic ">
                Quote of the day
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted, onUnmounted } from "vue"

    const targetDate = new Date('2025-01-09'); // Replace with your target date
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        // Countdown has ended
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
      } else {
        days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        hours.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000);
      }
    }

    let intervalId;
    onMounted(() => {
      updateCountdown();
      intervalId = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

</script>
