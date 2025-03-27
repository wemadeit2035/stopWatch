let timer;
        let isRunning = false;
        let seconds = 0, minutes = 0, hours = 0;
        let lapCount = 1;

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(updateTime, 1000);
            }
        }

        function stopTimer() {
            isRunning = false;
            clearInterval(timer);
        }

        function resetTimer() {
            isRunning = false;
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
            hours = 0;
            lapCount = 1;
            document.getElementById("display").textContent = "00:00:00";
            document.getElementById("laps").innerHTML = "";
        }

        function updateTime() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            
            const display = document.getElementById("display");
            display.textContent = 
                `${String(hours).padStart(2, '0')}:` +
                `${String(minutes).padStart(2, '0')}:` +
                `${String(seconds).padStart(2, '0')}`;
        }

        function recordLap() {
            if (isRunning) {
                const lapsContainer = document.getElementById("laps");
                const lapTime = document.getElementById("display").textContent;
                const lapItem = document.createElement("div");
                lapItem.className = "lap-item";
                lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
                lapsContainer.prepend(lapItem);
            }
        }