sourceTextProperty = thisComp.layer("TEXT LAYER NAME HERE").text.sourceText; // Layer to copy style from
newStyle = sourceTextProperty.getStyleAt(0,0); // (get Style At character Index of 0 at 0 seconds)
newStyle.setText(sourceTextProperty); // copy the style to this layer
