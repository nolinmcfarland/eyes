const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth;
    const y = (event.clientY * 100) / window.innerHeight;

    for (let i = 0; i < balls.length; i++) {
        balls.item(i).style.left = `${x}%`;
        balls.item(i).style.top = `${y}%`;
        balls.item(i).transform = `translate(-${x}, -${y})`;
    }
}