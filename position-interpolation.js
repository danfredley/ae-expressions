//Skullcandy position animation

function getTitleNumber () {
	titles = [];
	numL = thisComp.numLayers;
	for ( i = numL; i >= 1; i--) {
		L = thisComp.layer(i);
		try{
		if(L.effect("isTitle")("Checkbox")){
			titles.push(L);
			if (time > L.inPoint && time < L.outPoint) {
				return titles.length - 1;
				break;
			} else {
				continue;
			}
		}}catch (err){};
	}
	return 0;
}

function easeandwizz_inoutExpo(t, b, c, d) {
	var CORRECTION = .000976563;
	var v;
	if ((t/=d/2) < 1) {
		v = Math.pow(2, 10 * (t - 1)) - CORRECTION;
	} else {
		v = (-Math.pow(2, -10 * (t - 1)) + 2) + CORRECTION;
	}
	return b + (v/2) * c;
}

function easeAndWizz() {
	pL = thisComp.layer(thisLayer.index + 1);
	nL = thisComp.layer(thisLayer.index - 1);
	startTransition = thisComp.layer("CONTROLS").effect("Title Transition Start")("Slider");	
	duration1 = thisComp.layer("CONTROLS").effect("Title Transition Duration")("Slider");
	order = getTitleNumber()*thisComp.layer("TIMECODES").text.sourceText.style.leading;
	if (Math.abs(time - pL.outPoint) > Math.abs(time-outPoint)) {
		t = time - outPoint + 1;
		sX = nL.position[0];
		eX = 0;
		sY = nL.position[1] - 100;
		eY = 200;
		duration1 += .5;
	} else {
		t = time - pL.outPoint + startTransition;
		sX = pL.position[0];
		eX = nL.position[0] - pL.position[0];
		sY = pL.position[1] + order * scale[0]/100;
		eY = nL.position[1] - sY - 100;
	}
	val1 =  easeandwizz_inoutExpo(t, sX, eX, duration1);
	val2 = easeandwizz_inoutExpo(t, sY, eY, duration1);
	return [val1, val2];
}
 
(easeAndWizz() || value);



