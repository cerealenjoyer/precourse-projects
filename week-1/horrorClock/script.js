const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const audio = Array.from(document.querySelectorAll('audio'))
  let counter = 0;
  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds === 59){
      secondHand.style.transition = 'none';
      audio[0].play()

    }
   
    if (seconds===0){
   
      audio[1].play();
      if (counter === 0) {
        counter ++;
        window.alert('Something was unlocked')
      }
    }
    if (seconds ===1){
      secondHand.style.transition = 'all 0.5s'
    }

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
