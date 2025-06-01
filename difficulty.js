window.addEventListener('DOMContentLoaded', function () {

    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    
    const header1 = document.querySelector(".top1");
    const header2 = document.querySelector(".top2");
    const header3 = document.querySelector(".top3");

    const peaceful1 = document.querySelector(".diff1-1");
    const peaceful2 = document.querySelector(".diff1-2");

    const diff1 = document.querySelector(".difficulty1");
    const diff2 = document.querySelector(".difficulty2");
    const diff3 = document.querySelector(".difficulty3");
    const diff4 = document.querySelector(".difficulty4");
    const diff5 = document.querySelector(".difficulty5");
    const diff6 = document.querySelector(".difficulty6");
    const diff7 = document.querySelector(".difficulty7");
    const diff8 = document.querySelector(".difficulty8");
    const diff9 = document.querySelector(".difficulty9");
    const diff10 = document.querySelector(".difficulty10");
    const diff11 = document.querySelector(".difficulty11");
    const diff12 = document.querySelector(".difficulty12");
    const diff13 = document.querySelector(".difficulty13");
    const diff14 = document.querySelector(".difficulty14");
    const diff15 = document.querySelector(".difficulty15");
    const diff16 = document.querySelector(".difficulty16");
    const diff17 = document.querySelector(".difficulty17");

    header1.style.left = document.documentElement.clientWidth / 2 - 80 + "px";
    header2.style.left = document.documentElement.clientWidth / 2 - 220 + "px";
    header3.style.left = document.documentElement.clientWidth / 2 - 270 + "px";

    diff1.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff2.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff3.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff4.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff5.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff6.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff7.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff8.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff9.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff10.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff11.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff12.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff13.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff14.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff15.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff16.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";
    diff17.style.left = this.document.documentElement.clientWidth / 2 - 100 + "px";


    function delay(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX; // X-coordinate relative to the viewport
        const y = event.clientY; // Y-coordinate relative to the viewport
        peaceful1.style.left = x + 10 + "px";
        peaceful1.style.top = y + scrollY + "px";
        peaceful2.style.left = x + 10 + "px";
        peaceful2.style.top = y + 25 + scrollY + "px"
    });

    diff1.addEventListener('mouseover', () => {
        peaceful1.style.opacity = 100 + "%";
        peaceful2.style.opacity = 100 + "%";
    });
    diff1.addEventListener('mouseout', () => {
        peaceful1.style.opacity = 0 + "%";
        peaceful2.style.opacity = 0 + "%";
    });

    async function update()
    {
        while (true)
        {
            scrollX = window.scrollX;
            scrollY = window.scrollY;
            await delay(1);
        }
            
    }
     update();
});