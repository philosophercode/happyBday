window.onload = function() {
    backgroundCrazy();
};

function ranColor() {
    return (Math.floor(Math.random() * 256));
}



function backgroundCrazy() {
    
    for (let i = 0; i < 10000; i++) {
        const bDay = document.getElementById('bDay');
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        setInterval(() => {
            const red = ranColor();
            const green = ranColor();
            const blue = ranColor();
            //https://www.sitepoint.com/generating-random-color-values/
            
            const hue = 'rgb(' + 255 + ',' + green + ',' + blue + ')';
            
            document.body.style.backgroundColor = hue;
            // document.body.style.color = hue;

            
            const x = (Math.floor(Math.random() * screenWidth));
            const y = (Math.floor(Math.random() * screenHeight));

            bDay.style.left = "" + x + "px";
            bDay.style.top = "" + y + "px";

            const left = document.getElementById("bDay").style.left;
            const top = document.getElementById("bDay").style.top;


            console.log('i: ', i);
            
            
            console.log('screenWidth: ', screenWidth);
            console.log('screenHeight: ', screenHeight);
            console.log('x: ', x);
            console.log('y: ', y);
            console.log('left: ', left);
            console.log('top: ', top);
            
            console.log('color: ', hue);
        }, 300)
    }
}