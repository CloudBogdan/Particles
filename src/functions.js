const PI = Math.PI;

function random(min, max) {
    return max ? Math.random() * (max - min) + min : Math.random() * min;
}