    // declare nextImage funtion
        // display next image when invoked
        // shift picture to left  
        var position = 0;
        function nextImage() {
                // declare var called position then assign to 0;
                
                // use document.getElementById to select mySlider, assign to var
                var mySlider = document.getElementById("mySlider");
                // add 90 to var position
                position = position - 90;
                // use variable, access transform to translate -90px
                mySlider.style.transform = `translate(${position}px)`;
            }
            function previousImage() {
                // declare var called position then assign to 0;
                
                // use document.getElementById to select mySlider, assign to var
                var mySlider = document.getElementById("mySlider");
                // add 90 to var position
                position += 90;
                // position = position + 90; same this as above

                // use variable, access transform to translate +90px
                mySlider.style.transform = `translate(${position}px)`;
            }