/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 

 $(document).ready(function(){ 

// backgroud music
    var audio = document.createElement('audio');
        audio.setAttribute('src', 'sounds/music.mp3');
        audio.play();

// bouncing arrow
    slide ();
    function slide() {
        $(".one img").animate({top: "380px"}, 600)
        $(".one img").animate({top: "400px"}, 600, slide);       
    }

function draw() { // start of draw function
    var pathObj = {
        "corgi": {
          "strokepath": [
                {
                    "path": "M185,322.3c17.2-21,39.8-47.7,66.4-54.1c22.7-5.4,47.8,0.3,64.6,17.7c24.8,25.7,29.1,67.8,17.8,102.9   c-21.6,67.4-66.8,125.5-135,148.8c-4.1,1.4-8.3,2.6-12.6,2.6c-1.1,0-2.1-0.1-3.1-0.3c-4.3-0.5-8.6-2.1-12.6-3.7   c-64.7-26.4-113.6-81.8-134.9-148.4c-11.3-35.1-7.1-78.1,17.7-103.8c16.8-17.4,41.8-21.4,64.5-16c26.6,6.4,49,33,66.2,54h0.7",
                    "duration": 1200
                },
                {
                    "path": "M175.1,84.6c-1.9,0.1-3.7,0.2-5.6,0.3c-34.8,2.9-68.5,19.1-90.6,46.4c-46.3,57.2-54,169.6-29.4,237.2   c11.9,32.7,46.7,56.8,73,73.2c22.9,14.3,49.5,22.5,75.7,17.3c25.5-5.1,48.6-24.7,70-40.6c16.6-12.3,32.4-27.7,40.4-48.4   c10.1-26.1,4.1-51.8,3.2-78.4c-2.6-75.4,2.5-158.4-78.3-195.8C215.2,87.4,195.1,83.8,175.1,84.6",
                    "duration": 1200
                },
                {
                    "path": "M174.7,312.2c15-12.4,32.1-22.5,49.6-30.7c7.7-3.6,15.5-7,23.5-10c60.9-23.3,126.9-29,191.6-31.3   c47.3-1.7,94.7,1.2,141.4,9c39.2,6.6,90.4,12.4,122.5,37.8c14.6,11.5,25.1,27.5,33.1,44.4c10.7,22.8,17,49.8,7.2,73.1   c-8.8,20.8-28.8,34.7-49.6,43.2c-113.8,46.2-238.6,60.9-353.2,105.9c-54,21.2-120.1,14.5-167.1-19.8   c-23.1-16.9-40.1-41.9-48.3-69.6c-11.2-38.1-5.3-81,15.8-114.5C150.2,335.2,161.7,322.9,174.7,312.2",
                    "duration": 1400
                },
                {
                    "path": "M233.5,95.8c16.9-19.9,75.1-105.9,106.9-89c18.5,9.8,13.5,49.2,12.4,65.5c-3.5,52.8-11.8,132.5-42.2,177.7",
                    "duration": 1000
                },
                {
                    "path": "M116.9,101.9C93,74.3,78.7,45.7,49.7,22.4c-7.6-6.1-17.2-11.9-26.5-9c-10.7,3.3-15,16-16.6,27.2   c-8,55.3,12,114.3,37,162.8",
                    "duration": 1000
                },
                {
                    "path": "M560.7,452.5c21.4,44.6,57.7,81.7,101.6,103.9c6.4,3.2,13.5,6.8,15.8,13.6c1.8,5.3,0.1,11.2-2.8,16   c-2.8,4.8-6.7,9-9.6,13.7c-1.7,2.7-3.1,6.1-2.1,9.1c1,3,4.1,4.8,6.9,6c10.6,4.7,22.4,6.4,33.8,5c4.1-0.5,8.3-1.5,11.5-4.1   c11.5-9.7,11.5-33.6,13.7-46.8c3.8-22.8-4.1-45.6,1.8-67.9c5.7-21.4,25.4-43.5,24.8-66c-0.6-22.6-5.8-45.7-7.7-68.4",
                    "duration": 1200
                },
                {
                    "path": "M555.7,489.4c5.9,18.1,23.7,29.3,34.2,45.2c2.1,3.1,3.9,6.6,4,10.3c0.2,5.1-2.8,9.9-6.3,13.7   c-3.4,3.8-7.5,7.2-10.1,11.6c-1,1.7-1.9,3.8-1.5,5.7c0.6,3.1,3.8,4.9,6.7,6c9.2,3.4,19.5,3.7,28.8,0.7c3.7-1.1,7.3-2.8,10-5.6   c4.5-4.7,5.7-11.7,5.5-18.3c-0.3-8.5-1.2-17-1.6-25.5",
                    "duration": 1000
                },
                {
                    "path": "M339.1,377.2c-4.3,67.5,1,130.4-15.2,200.3c-2.7,11.8-7.3,23.1-11.8,34.4c-4.2,10.6-9.5,21.7-19.1,27.6   c-13.4,8.2-31,7.1-45-0.3c-10.8-5.7-12.1-12.5,0.7-19.8c4.1-2.3,6-7.4,7.2-11.9c7.8-29-6.7-62.5-17.5-88.7",
                    "duration": 1200
                },
                {
                    "path": "M216.4,555.4c-5.2,16.5-10.3,33-13.6,49.9c-1.1,5.7-2.2,11.9-6.2,16.1c-4.8,5-12.4,5.9-19.3,5.6   c-6.1-0.2-12.2-1.1-18.1-2.6c-5.1-1.3-10.3-3.2-13.6-7.4c-3.3-4.1-3.6-11,0.5-14.2c4.2-3.3,10.8-1.5,15.1-4.7   c4.6-3.3,4.2-10.2,3.1-15.8c-4.9-22.7-16.4-43.3-27.9-63.5",
                    "duration": 1000
                }
         ],
         "dimensions": {
             "width": 761,
             "height": 650
         }
         }
    }; 
    $('#corgi').lazylinepainter( 
     {
        "svgData": pathObj,
        "strokeWidth": 4,
        "strokeColor": "black"
    }).lazylinepainter('paint'); 
} // end of draw function

// random corgi body
function body() { // start of body function
    var corgi = ["corgi1.png","corgi2.png","corgi3.png"];
    document.getElementById("corgi").innerHTML = "<img src=images/" + corgi[Math.floor(Math.random()*corgi.length)] +">";
} // end of body function

 $(".one img").click(function() {
    $("body").animate({scrollTop: $("#corgi").offset().top}, 1400);
    setTimeout(function() { draw(); }, 700);  //trigger & delay auto drawing 
    setTimeout(function() { body(); }, 11500); 
});

// randomized corgi head
    var corgi = ["silhouette1.png","silhouette2.png","silhouette3.png"];
    document.getElementById("head").innerHTML = "<img src=images/" + corgi[Math.floor(Math.random()*corgi.length)] +">"; 
// end of corgi head

// click corgi to scroll down
$(".ten").click(function() {
    $("body").animate({scrollTop: $("#head").offset().top}, 1400);
});

 });