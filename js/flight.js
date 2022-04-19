let start = 0;
let stopAnim = 0;
let timerFlight;

let StopCheck = setInterval(() => {
  if(stopAnim == 1){
    stopAnim = 0;
    timerFlight = setInterval(() => {
      animation()
      }, 1200000)
  }

  },10 )



// повторить с интервалом 2 секунды
function animation(){
    clearInterval(timerFlight);
    let scene = document.getElementsByClassName('bg_plane')
    scene = scene[0]
    scene.style.opacity = "1";
    let op = 1;
    scene.style.opacity = op;

    let Time = setTimeout(() => {
      start = 1;
    }, 4000);

    let TimeCheck = setInterval(() => {
      if(start == 1){
        clearInterval(TimeCheck);
        
        let interval = setInterval(() => {  
          if(op == 0 || op < 0){
            start = 0;
            stopAnim = 1;
            clearInterval(interval);
          }
          console.log(op) 
          op -= 0.005
          scene.style.opacity = op;

        }, 20);    

      }
    }, 10)

}

animation()

