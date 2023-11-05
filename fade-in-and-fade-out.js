fadeDuration = .5;
fadeIn = linear(time, inPoint, inPoint + fadeDuration, 0, value);
fadeOut = linear(time, outPoint - fadeDuration, outPoint, 0, value)
fadeIn - fadeOut

/*
  Usage: Apply to opacity
*/
