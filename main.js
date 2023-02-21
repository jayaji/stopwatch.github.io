let show=document.getElementById('display')
let start_btn=document.getElementById('start')
let reset_btn=document.getElementById('reset')
let stop_btn=document.getElementById('stop')
let hour=0,min=0,sec=0,ms=0;
let wantToSet=false;

start_btn.addEventListener('click', count);
function count() {
let intervalFunction=setInterval(function() {
  ms++;
  if(ms==100){
    ms=0;
    sec++;
  if (sec==60) {
    sec=0;
    min++;
    if (min==60) {
      min=0;
      hour++;
      if (hour==24) {
        hour=0;
        count();
      }
    }
  }}


  stop_btn.addEventListener('click', function(e) {
    clearInterval(intervalFunction);
    show.textContent=`${hour}h:${min}m:${sec}s:${ms}ms`;
  });

show.textContent=`${hour}h:${min}m:${sec}s:${ms}ms`;

}, 10);


// IDEA: set time by user input
reset_btn.addEventListener('click', setTime)
  function setTime() {
    hour=0;
    min=0;
    sec=0;
    ms=0;
    clearInterval(intervalFunction);
    count()
  }


}
