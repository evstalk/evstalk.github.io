window.addEventListener('DOMContentLoaded', function () {
    var number = 0;
    var link1Object = document.querySelector(".link1");
    var slider =
    {
        body: document.getElementById("myRange"),
        value: 100
    }
    
    var slider2 =
    {
        body: document.getElementById("myRange2"),
        value: 1
    }

    var slider3 =
    {
        body: document.getElementById("myRange3"),
        value: 1
    }

    var slider4 =
    {
        body: document.getElementById("myRange4"),
        value: 10
    }

    var slider5 =
    {
        body: document.getElementById("myRange5"),
        value: 0
    }

    var slider6 =
    {
        body: document.getElementById("myRange6"),
        value: 0
    }
    var slider7 =
    {
        body: document.getElementById("myRange7"),
        value: 0
    }
    var title = document.querySelector(".title");
    


    slider.body.addEventListener("input", function() {
        slider.value = slider.body.value;
    });

    slider2.body.addEventListener("input", function() {
        slider2.value = slider2.body.value;
    });

    slider3.body.addEventListener("input", function() {
        slider3.value = slider3.body.value;
    });

    slider4.body.addEventListener("input", function() {
        slider4.value = slider4.body.value;
    });

    slider5.body.addEventListener("input", function() {
        slider5.value = slider5.body.value;
    });

    slider6.body.addEventListener("input", function() {
        slider6.value = slider6.body.value;
    });

    slider7.body.addEventListener("input", function() {
        slider7.value = slider7.body.value;
    });


    function delay(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function update()
    {
        
        while(true)
        {

            number += Number(slider2.value) * slider3.value;
            link1Object.textContent = number;
            
            console.log(title.style.rotate);
            title.style.rotate = (Number(title.style.rotate.toString().replace("deg", ""))) + 1 + "deg";

            slider.body.style.left = slider4.value + "px";
            slider.body.style.top = (Number(slider5.value) * -1) + "px";
            slider.offsetHeight;
            slider.offsetWidth;
            slider2.body.style.left = slider4.value + "px";
            slider2.body.style.top = (Number(slider5.value) * -1) + "px";
            slider2.offsetHeight;
            slider2.offsetWidth;
            slider3.body.style.left = slider4.value + "px";
            slider3.body.style.top = (Number(slider5.value) * -1) + "px";
            slider3.offsetHeight;
            slider3.offsetWidth;
            slider4.body.style.top = (Number(slider5.value) * -1) + "px";
            slider4.offsetWidth;
            slider5.body.style.left = slider4.value + "px";
            slider5.offsetHeight;
            slider6.body.style.left = slider4.value + "px";
            slider6.body.style.top = (Number(slider5.value) * -1) + "px";
            slider6.offsetHeight;
            slider7.body.style.left = slider4.value + "px";
            slider7.body.style.top = (Number(slider5.value) * -1) + "px";
            slider7.offsetHeight;

            slider.body.style.rotate = slider6.value + "deg";
            slider2.body.style.rotate = slider6.value + "deg";
            slider3.body.style.rotate = slider6.value + "deg";
            slider4.body.style.rotate = slider6.value + "deg";
            slider5.body.style.rotate = slider6.value + "deg";
            slider7.body.style.rotate = slider6.value + "deg";


            link1Object.style.fontSize = (slider7.value + 17) + "px";

            await delay(slider.value);
            
        }
        
    }

    update();
        
    
    
    
    


});