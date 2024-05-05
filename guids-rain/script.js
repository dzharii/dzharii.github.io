
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    let w, h;
    const resizeCanvas = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 20;
    const rowSpacing = 20;

    const columns = Array(Math.floor(w / fontSize)).fill(0);

    function generateUUID() {
        var d = new Date().getTime();
        var d2 = (typeof performance !== 'undefined' && performance.now && (performance.now() * 1000)) || 0;
        return '{xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx}'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'green';
        ctx.font = fontSize + 'pt monospace';

        let pad = 0;
        let uud = generateUUID();

        let nextChar = 0;
        columns.forEach((y, ind) => {
            uud = generateUUID();
            const text = uud[nextChar];
            nextChar = nextChar + 1;
            if (nextChar >= uud.length) {
                nextChar = 0;
            }
            ctx.fillText(text, ind * fontSize + pad, y);
            pad += Math.floor(fontSize / 2);

            // Randomly reset the end of the column if it exceeds the canvas height
            if (y > h && Math.random() > 0.975) {
                columns[ind] = 0;
            } else {
                // Different speed for each column
                columns[ind] = y + (rowSpacing + Math.random() * 10);
            }
        });
    }

    setInterval(draw, 50);
});


