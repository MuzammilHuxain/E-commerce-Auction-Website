// Box
var box = document.querySelector('.square');

// Skew X Variables
var sliderx = document.getElementById("sliderX");
var rangevalueX = document.getElementById("rangevalueX");

// Skew Y Variables
var sliderY = document.getElementById("sliderY");
var rangevalueY = document.getElementById("rangevalueY");

// Property array
function getsupportedprop(proparray){
    var root=document.documentElement //reference root element of document
    for (var i=0; i<proparray.length; i++){ //loop through possible properties
        if (proparray[i] in root.style){ //if property exists on element (value will be string, empty string if not set)
            return proparray[i] //return that string
        }
    }
}
 
// Vendor Prefix Transform
var prefixtransform = getsupportedprop(["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"]);


// Slider X Function
sliderx.onchange = function(){
  
    if (rangevalueX <'50') {
    box.style[prefixtransform] = "skewX(-" + (sliderx.value) + 'deg)' + "skewY(-" + (sliderY.value) + 'deg)';
    rangevalueX.value = sliderx.value + "deg";
    }
    else if (rangevalueX >'50') {
    box.style[prefixtransform] = "skewX(" + sliderx.value + 'deg)' + "skewY(" + sliderY.value + 'deg)';
    rangevalueX.value = sliderx.value + "deg";
    }
    };

// Slider Y Function
sliderY.onchange = function(){
  
    if (rangevalueY <'50') {
    box.style[prefixtransform] = "skewX(-" + (sliderx.value) + 'deg)' + "skewY(-" + (sliderY.value) + 'deg)';
    rangevalueY.value = sliderY.value + "deg";
    }
    else if (rangevalueY >'50') {
    box.style[prefixtransform] = "skewX(" + sliderx.value + 'deg)' + "skewY(" + sliderY.value + 'deg)';
    rangevalueY.value = sliderY.value + "deg";
    }
    };
