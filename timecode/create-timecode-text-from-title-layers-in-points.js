//Gathers all layers with an "isTitle" checkbox checked and creates text with timecodes
myTitles = "";
numL = thisComp.numLayers;
for ( i = numL; i >= 1; i--) {
	L = thisComp.layer(i);
	try{
	if(L.effect("isTitle")("Checkbox")){
		if (time < L.effect("Linear Wipe")("Transition Completion").key(2).time || time > L.outPoint) {
			myTitles += L.text.sourceText + "\n";
		} else {
			myTitles += "\n";
		}
	}}catch (err){};
}
myTitles
