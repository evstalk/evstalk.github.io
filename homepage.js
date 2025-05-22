
window.addEventListener('DOMContentLoaded', function () {

    var spin = 0;
    
    var width = document.documentElement.clientWidth;
    var fofologo = document.querySelector(".fofo");
    fofologo.classList.add("genericstyletostopcrashing");
    var headerTop = document.querySelector(".headerTop");
    var titleText = document.querySelector(".chair");
    titleText.classList.add("text");
    var link = document.querySelector(".link1");
    var link2 = document.querySelector(".link2");
    var link3 = document.querySelector(".link3");
    var link4 = document.querySelector(".link4");
    var backgroundobby = document.querySelector(".bgimage");
    var header2 = document.querySelector(".notAsTopHeader");
    var tinyRect1 = this.document.querySelector(".tinyAhhThing");
    var mouseover1 = false;
    var tinyRect2 = this.document.querySelector(".tinyAhhThing2");
    var mouseover2 = false;
    var tinyRect3 = this.document.querySelector(".tinyAhhThing3");
    var mouseover3 = false;
    var tinyRect4 = this.document.querySelector(".tinyAhhThing4");
    var mouseover4 = false;
    var views = 0;
    const viewHolder = this.document.querySelector(".viewHolder");




      fetch('https://countapi.mileshilliard.com/api/v1/hit/fofosgrandadventure')
    .then(res => res.json())
    .then(data => {
    views = data.value;
    console.log("New value:", views);
    })
    .catch(err => console.error("Error:", err));


    


    

    function delay(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    link.addEventListener("mouseover", function() {
        mouseover1 = true;
        tinyRect1.style.transition = "";
        console.log("1");
    });
    link.addEventListener("mouseleave", function() {
        mouseover1 = false;
        tinyRect1.style.transition = "width 1s";
        tinyRect1.style.width = "0px";
    });

    link2.addEventListener("mouseover", function() {
        mouseover2 = true;
        tinyRect2.style.transition = "";
        console.log("2");
    });
    link2.addEventListener("mouseleave", function() {
        mouseover2 = false;
        tinyRect2.style.transition = "width 1s";
        tinyRect2.style.width = "0px";
    });

    link3.addEventListener("mouseover", function() {
        mouseover3 = true;
        tinyRect3.style.transition = "";
        console.log("3");
    });
    link3.addEventListener("mouseleave", function() {
        mouseover3 = false;
        tinyRect3.style.transition = "width 1s";
        tinyRect3.style.width = "0px";
    });

    link4.addEventListener("mouseover", function() {
        mouseover4 = true;
        tinyRect4.style.transition = "";
        console.log("4");
    });
    link4.addEventListener("mouseleave", function() {
        mouseover4 = false;
        tinyRect4.style.transition = "width 1s";
        tinyRect4.style.width = "0px";
    });


    async function update()
    {
        while(true)
        {
            if(mouseover1 && Number(tinyRect1.style.width.toString().replace("px", "")) < 87)
            {
                tinyRect1.style.width = (Number(tinyRect1.style.width.toString().replace("px", "")) + 1) + "px";
            }
            if(mouseover2 && Number(tinyRect2.style.width.toString().replace("px", "")) < 25)
            {
                tinyRect2.style.width = (Number(tinyRect2.style.width.toString().replace("px", "")) + 1) + "px";
            }
            if(mouseover3 && Number(tinyRect3.style.width.toString().replace("px", "")) < 62)
            {
                tinyRect3.style.width = (Number(tinyRect3.style.width.toString().replace("px", "")) + 1) + "px";
            }
            if(mouseover4 && Number(tinyRect4.style.width.toString().replace("px", "")) < 62)
            {
                tinyRect4.style.width = (Number(tinyRect4.style.width.toString().replace("px", "")) + 1) + "px";
            }
            width = document.documentElement.clientWidth;
            headerTop.style.width = document.documentElement.clientWidth + "px";
            header2.style.width = document.documentElement.clientWidth + "px";
            link.style.left = (width - 400) + "px";
            tinyRect1.style.left = (width - 400) + "px";
            link2.style.left = (width - 270) + "px";
            tinyRect2.style.left = (width - 270) + "px";
            link3.style.left = (width - 200) + "px";
            tinyRect3.style.left = (width - 200) + "px";
            link4.style.left = (width - 100) + "px";
            tinyRect4.style.left = (width - 100) + "px";
            backgroundobby.style.width = document.documentElement.clientWidth + "px";
            //viewHolder.style.left = document.documentElement.clientWidth / 2 - 100 + "px";
            viewHolder.innerHTML = "This website has " + views.toString() + " views!!!"

            if (spin < 360)
            {
               spin += 1;
               fofologo.style.rotate = spin.toString() + "deg";
            }
            else 
            {
               spin = 1;
             fofologo.style.rotate = spin.toString() + "deg";
            }



            await delay(1);
        }
    }
    
    update();

});