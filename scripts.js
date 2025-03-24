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
            seconds = 0; minutes = 0; hours = 0; lapCount = 1;
            document.getElementById("display").innerText = "00:00:00";
            document.getElementById("laps").innerHTML = "";
        }

        function updateTime() {
            seconds++;
            if (seconds == 60) { seconds = 0; minutes++; }
            if (minutes == 60) { minutes = 0; hours++; }
            document.getElementById("display").innerText =
                (hours < 10 ? "0" : "") + hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;
        }

        function recordLap() {
            if (isRunning) {
                const lapTime = document.getElementById("display").innerText;
                const lapList = document.getElementById("laps");
                const lapItem = document.createElement("div");
                lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
                lapList.appendChild(lapItem);
                lapCount++;
            }
        }