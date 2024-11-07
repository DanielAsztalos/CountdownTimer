const timer = document.querySelector('.timer');
const minutesSpan = timer.querySelector('.minutes');
const secondsSpan = timer.querySelector('.seconds');
let stop = false;
let minuteModalValue;
let secondModalValue;

function padSeconds(seconds) {
    return seconds.toString().padStart(2, '0');
}

// document.querySelector('.btn_start').addEventListener('click', () => {
//     if (document.querySelector('.btn_start').textContent === 'Stop') {
//         stop = true;
//         // clearInterval(intervalId);
//         document.querySelector('.btn_start').textContent = 'Start';
//         console.log('Stop');
//         return;
//     }

//     let seconds = +minutesSpan.textContent * 60 + +secondsSpan.textContent;
//     const intervalId = setInterval(() => {
//         seconds--;
//         minutesSpan.textContent = Math.floor(seconds / 60);
//         secondsSpan.textContent = (seconds % 60).toString().padStart(2, '0');
//         if (seconds < 0) {
//             clearInterval(intervalId);
//             minutesSpan.textContent = '00';
//             secondsSpan.textContent = '00';
//         }

//         if (stop) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
//     if (!stop) {
//         document.querySelector('.btn_start').textContent = 'Stop';
//     }
//     else{
//         document.querySelector('.btn_start').textContent = 'Start';
//     }
    

// });
let intervalId;

document.querySelector('.btn_start').addEventListener('click', () => {
    if (document.querySelector('.btn_start').textContent === 'Stop') {
        stop = false;
        document.querySelector('.btn_start').textContent = 'Start';
        document.querySelectorAll('.btn-secondary').forEach((btn) => {
            btn.removeAttribute('disabled');
        })
        if(intervalId) {
            clearInterval(intervalId);
        }
        return;
    }

    let seconds = +minutesSpan.textContent * 60 + +secondsSpan.textContent;
    intervalId = setInterval(() => {
            seconds--;
            minutesSpan.textContent = Math.floor(seconds / 60);
            secondsSpan.textContent = (seconds % 60).toString().padStart(2, '0');
            if (seconds < 0) {
                clearInterval(intervalId);
                minutesSpan.textContent = '0';
                secondsSpan.textContent = '00';
                document.querySelector('.btn_start').textContent = 'Start';
                document.querySelectorAll('.btn-secondary').forEach((btn) => {
                    btn.removeAttribute('disabled');
                })
            }
    
            if (stop) {
                clearInterval(intervalId);
            }
        }, 1000);
    
    if (!stop) {
        document.querySelector('.btn_start').textContent = 'Stop';
        document.querySelectorAll('.btn-secondary').forEach((btn) => {
            btn.setAttribute('disabled', 'true');
        })
        // clearInterval(intervalId); 
    }
});

document.querySelector('.btn_save').addEventListener('click', () => {
    minuteModalValue = document.querySelector('#minutes').value;
    secondModalValue = document.querySelector('#seconds').value;

    if(intervalId) {
        clearInterval(intervalId);
        document.querySelector('.btn_start').textContent = 'Start';
    }

    if (minuteModalValue >= 0) {
        minutesSpan.textContent = minuteModalValue;
    }
    if (secondModalValue >= 0) {
        secondsSpan.textContent = padSeconds(secondModalValue);
    }
})


    document.querySelector('.btn_reset').addEventListener('click', () => {
        // clearInterval(intervalId);
        if(intervalId) {
            clearInterval(intervalId);
            document.querySelector('.btn_start').textContent = 'Start';
        }

        if(minuteModalValue >= 0) {
            minutesSpan.textContent = minuteModalValue;
        }
        else {
            minutesSpan.textContent = '10';
        }
        if(secondModalValue) {
            secondsSpan.textContent = padSeconds(secondModalValue);
        }
        else {
            secondsSpan.textContent = '00';
        }
        
        document.querySelector('.btn_start').textContent = 'Start';
    });
