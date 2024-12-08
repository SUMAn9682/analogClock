const tickSound = new Audio("ticking-clock-sound-effect-1-mp3-edition-264451.mp3");
        tickSound.preload = "auto";
        tickSound.volume = 0.5; // Adjust volume if needed

        
            setInterval(() => {
                // Reset and play sound
                if (!tickSound.paused) {
                    tickSound.pause(); // Pause the sound if it's already playing
                }
                tickSound.currentTime = 0; // Reset playback
                tickSound.play().catch((error) => {
                    console.error("Audio playback failed:", error);
                });

                // Update clock hands
                const date = new Date();
                const htime = date.getHours();
                const mtime = date.getMinutes();
                const stime = date.getSeconds();

                const hrotation = (30 * htime) + (mtime / 2);
                const mrotation = 6 * mtime;
                const srotation = 6 * stime;

                document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
                document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
                document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
            }, 1000);

            // Disable button after starting clock
            document.getElementById("startClock").disabled = true;
       