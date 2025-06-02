window.addEventListener('DOMContentLoaded', function () {

    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    
    const header1 = document.querySelector(".top1");
    const header2 = document.querySelector(".top2");
    const header3 = document.querySelector(".top3");

    const peaceful1 = document.querySelector(".diff1-1");
    const peaceful2 = document.querySelector(".diff1-2");
    const effeff1 = document.querySelector(".diff2-1");
    const effeff2 = document.querySelector(".diff2-2");
    const eff1 = document.querySelector(".diff3-1");
    const eff2 = document.querySelector(".diff3-2");
    const ease1 = document.querySelector(".diff4-1");
    const ease2 = document.querySelector(".diff4-2");
    const med1 = document.querySelector(".diff5-1");
    const med2 = document.querySelector(".diff5-2");
    const hard1 = document.querySelector(".diff6-1");
    const hard2 = document.querySelector(".diff6-2");
    const dif1 = document.querySelector(".diff7-1");
    const dif2 = document.querySelector(".diff7-2");
    const cha1 = document.querySelector(".diff8-1");
    const cha2 = document.querySelector(".diff8-2");
    const int1 = document.querySelector(".diff9-1");
    const int2 = document.querySelector(".diff9-2");
    const rem1 = document.querySelector(".diff10-1");
    const rem2 = document.querySelector(".diff10-2");
    const ins1 = document.querySelector(".diff11-1");
    const ins2 = document.querySelector(".diff11-2");
    const ext1 = document.querySelector(".diff12-1");
    const ext2 = document.querySelector(".diff12-2");
    const ter1 = document.querySelector(".diff13-1");
    const ter2 = document.querySelector(".diff13-2");
    const cat1 = document.querySelector(".diff14-1");
    const cat2 = document.querySelector(".diff14-2");
    const hor1 = document.querySelector(".diff15-1");
    const hor2 = document.querySelector(".diff15-2");
    const unr1 = document.querySelector(".diff16-1");
    const unr2 = document.querySelector(".diff16-2");
    const nil1 = document.querySelector(".diff17-1");
    const nil2 = document.querySelector(".diff17-2");

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

        effeff1.style.left = x + 10 + "px";
        effeff1.style.top = y + scrollY + "px";
        effeff2.style.left = x + 10 + "px";
        effeff2.style.top = y + 25 + scrollY + "px"

        eff1.style.left = x + 10 + "px";
        eff1.style.top = y + scrollY + "px";
        eff2.style.left = x + 10 + "px";
        eff2.style.top = y + 25 + scrollY + "px"

        ease1.style.left = x + 10 + "px";
        ease1.style.top = y + scrollY + "px";
        ease2.style.left = x + 10 + "px";
        ease2.style.top = y + 25 + scrollY + "px"

        med1.style.left = x + 10 + "px";
        med1.style.top = y + scrollY + "px";
        med2.style.left = x + 10 + "px";
        med2.style.top = y + 25 + scrollY + "px"

        hard1.style.left = x + 10 + "px";
        hard1.style.top = y + scrollY + "px";
        hard2.style.left = x + 10 + "px";
        hard2.style.top = y + 25 + scrollY + "px"

        dif1.style.left = x + 10 + "px";
        dif1.style.top = y + scrollY + "px";
        dif2.style.left = x + 10 + "px";
        dif2.style.top = y + 25 + scrollY + "px"

        cha1.style.left = x + 10 + "px";
        cha1.style.top = y + scrollY + "px";
        cha2.style.left = x + 10 + "px";
        cha2.style.top = y + 25 + scrollY + "px"

        int1.style.left = x + 10 + "px";
        int1.style.top = y + scrollY + "px";
        int2.style.left = x + 10 + "px";
        int2.style.top = y + 25 + scrollY + "px"

        rem1.style.left = x + 10 + "px";
        rem1.style.top = y + scrollY + "px";
        rem2.style.left = x + 10 + "px";
        rem2.style.top = y + 25 + scrollY + "px"

        ins1.style.left = x + 10 + "px";
        ins1.style.top = y + scrollY + "px";
        ins2.style.left = x + 10 + "px";
        ins2.style.top = y + 25 + scrollY + "px"

        ext1.style.left = x + 10 + "px";
        ext1.style.top = y + scrollY + "px";
        ext2.style.left = x + 10 + "px";
        ext2.style.top = y + 25 + scrollY + "px"

        ter1.style.left = x + 10 + "px";
        ter1.style.top = y + scrollY + "px";
        ter2.style.left = x + 10 + "px";
        ter2.style.top = y + 25 + scrollY + "px"

        cat1.style.left = x + 10 + "px";
        cat1.style.top = y + scrollY + "px";
        cat2.style.left = x + 10 + "px";
        cat2.style.top = y + 25 + scrollY + "px"

        hor1.style.left = x + 10 + "px";
        hor1.style.top = y + scrollY + "px";
        hor2.style.left = x + 10 + "px";
        hor2.style.top = y + 25 + scrollY + "px"

        unr1.style.left = x + 10 + "px";
        unr1.style.top = y + scrollY + "px";
        unr2.style.left = x + 10 + "px";
        unr2.style.top = y + 25 + scrollY + "px"

        nil1.style.left = x + 10 + "px";
        nil1.style.top = y + scrollY + "px";
        nil2.style.left = x + 10 + "px";
        nil2.style.top = y + 25 + scrollY + "px"

    });

    diff1.addEventListener('mouseover', () => {
        peaceful1.style.opacity = 100 + "%";
        peaceful2.style.opacity = 100 + "%";
    });
    diff1.addEventListener('mouseout', () => {
        peaceful1.style.opacity = 0 + "%";
        peaceful2.style.opacity = 0 + "%";
    });
    diff2.addEventListener('mouseover', () => {
        effeff1.style.opacity = 100 + "%";
        effeff2.style.opacity = 100 + "%";
    });
    diff2.addEventListener('mouseout', () => {
        effeff1.style.opacity = 0 + "%";
        effeff2.style.opacity = 0 + "%";
    });
    diff3.addEventListener('mouseover', () => {
        eff1.style.opacity = 100 + "%";
        eff2.style.opacity = 100 + "%";
    });
    diff3.addEventListener('mouseout', () => {
        eff1.style.opacity = 0 + "%";
        eff2.style.opacity = 0 + "%";
    });
    diff4.addEventListener('mouseover', () => {
        ease1.style.opacity = 100 + "%";
        ease2.style.opacity = 100 + "%";
    });
    diff4.addEventListener('mouseout', () => {
        ease1.style.opacity = 0 + "%";
        ease2.style.opacity = 0 + "%";
    });
    diff5.addEventListener('mouseover', () => {
        med1.style.opacity = 100 + "%";
        med2.style.opacity = 100 + "%";
    });
    diff5.addEventListener('mouseout', () => {
        med1.style.opacity = 0 + "%";
        med2.style.opacity = 0 + "%";
    });
    diff6.addEventListener('mouseover', () => {
        hard1.style.opacity = 100 + "%";
        hard2.style.opacity = 100 + "%";
    });
    diff6.addEventListener('mouseout', () => {
        hard1.style.opacity = 0 + "%";
        hard2.style.opacity = 0 + "%";
    });
    diff7.addEventListener('mouseover', () => {
        dif1.style.opacity = 100 + "%";
        dif2.style.opacity = 100 + "%";
    });
    diff7.addEventListener('mouseout', () => {
        dif1.style.opacity = 0 + "%";
        dif2.style.opacity = 0 + "%";
    });
    diff8.addEventListener('mouseover', () => {
        cha1.style.opacity = 100 + "%";
        cha2.style.opacity = 100 + "%";
    });
    diff8.addEventListener('mouseout', () => {
        cha1.style.opacity = 0 + "%";
        cha2.style.opacity = 0 + "%";
    });
    diff9.addEventListener('mouseover', () => {
        int1.style.opacity = 100 + "%";
        int2.style.opacity = 100 + "%";
    });
    diff9.addEventListener('mouseout', () => {
        int1.style.opacity = 0 + "%";
        int2.style.opacity = 0 + "%";
    });
    diff10.addEventListener('mouseover', () => {
        rem1.style.opacity = 100 + "%";
        rem2.style.opacity = 100 + "%";
    });
    diff10.addEventListener('mouseout', () => {
        rem1.style.opacity = 0 + "%";
        rem2.style.opacity = 0 + "%";
    });
    diff11.addEventListener('mouseover', () => {
        ins1.style.opacity = 100 + "%";
        ins2.style.opacity = 100 + "%";
    });
    diff11.addEventListener('mouseout', () => {
        ins1.style.opacity = 0 + "%";
        ins2.style.opacity = 0 + "%";
    });
    diff12.addEventListener('mouseover', () => {
        ext1.style.opacity = 100 + "%";
        ext2.style.opacity = 100 + "%";
    });
    diff12.addEventListener('mouseout', () => {
        ext1.style.opacity = 0 + "%";
        ext2.style.opacity = 0 + "%";
    });
    diff13.addEventListener('mouseover', () => {
        ter1.style.opacity = 100 + "%";
        ter2.style.opacity = 100 + "%";
    });
    diff13.addEventListener('mouseout', () => {
        ter1.style.opacity = 0 + "%";
        ter2.style.opacity = 0 + "%";
    });
    diff14.addEventListener('mouseover', () => {
        cat1.style.opacity = 100 + "%";
        cat2.style.opacity = 100 + "%";
    });
    diff14.addEventListener('mouseout', () => {
        cat1.style.opacity = 0 + "%";
        cat2.style.opacity = 0 + "%";
    });
    diff15.addEventListener('mouseover', () => {
        hor1.style.opacity = 100 + "%";
        hor2.style.opacity = 100 + "%";
    });
    diff15.addEventListener('mouseout', () => {
        hor1.style.opacity = 0 + "%";
        hor2.style.opacity = 0 + "%";
    });
    diff16.addEventListener('mouseover', () => {
        unr1.style.opacity = 100 + "%";
        unr2.style.opacity = 100 + "%";
    });
    diff16.addEventListener('mouseout', () => {
        unr1.style.opacity = 0 + "%";
        unr2.style.opacity = 0 + "%";
    });
    diff17.addEventListener('mouseover', () => {
        nil1.style.opacity = 100 + "%";
        nil2.style.opacity = 100 + "%";
    });
    diff17.addEventListener('mouseout', () => {
        nil1.style.opacity = 0 + "%";
        nil2.style.opacity = 0 + "%";
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