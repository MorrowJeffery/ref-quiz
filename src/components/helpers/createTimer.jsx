const createTimer = function(secs) {
let hours = ('0' + Math.floor(secs/3600)).slice(-2);
let minutes = ('0' + Math.floor((secs-(hours*3600))/60)).slice(-2)
let seconds = ('0' + (secs-((hours*3600)+(minutes*60)))).slice(-2)
let timerstr
if (hours<1){
  timerstr = minutes+':'+seconds
}
else {
  timerstr = hours+':'+minutes+':'+seconds
}
return timerstr;
}

export default createTimer;


('0' + 4).slice(-2)
