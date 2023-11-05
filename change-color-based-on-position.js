linear(                        // like the RangeMapper in Cinema 4D it maps one range of values to a completely different range of values
        thisLayer.position[0] // depending on the same layer's x position represented by position[0] and not y position[1];
       , 380                  // When x is greater than 380 (to the right) map the first color [0,0,0,1] or rgba black with full alpha
       , 280                  // When x is less than 280 (farther to the left) map the second color [1,1,1,1] or solid white
       , [0,0,0,1]            // When x is between the two values interpolate between these two colors (black and white)
       , [1,1,1,1]            //  to get different shades of gray using the linear interpolation method
)
