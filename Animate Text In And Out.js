frequency =.001;
amplitude = 100;
decay = 7;
delay = .08;
delayPerTextIndex = delay*textIndex;
if (time <= inPoint + (outPoint - inPoint)/2){
t = (time - inPoint) - delayPerTextIndex;
}else{
t = (outPoint - time) - delayPerTextIndex;
}
if (t >= 0){
s = amplitude*Math.cos(frequency*t*2*Math.PI)/Math.exp(decay*t);
[s,s]
}else{
value
}

/* 
Usage:
1) Create text layer
2) Add an animator
3) Add property animations
4) Change property values
5) Add Expression Selector
6) Apply this expression to Expression Selector -> Amount
*/
