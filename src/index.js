"use strict";
var _a;
// create an array of objects to store x, y & isActive flag
const pixels = [];
// Event listener for Splash button
(_a = document.getElementById('refresh-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', updateColor);
// Create a canvas with pixel buttons and adding isActive as false by default
function createCanvas() {
    const canvasSize = 8;
    const canvas = document.getElementById('canvas');
    for (let x = 0; x < canvasSize; x++) {
        for (let y = 0; y < canvasSize; y++) {
            pixels.push({ x: x, y: y, isActive: false, colorHex: '#efefe1' });
            const pixelBtn = createPixels({ x: x, y: y, isActive: false, colorHex: '#efefe1' });
            canvas === null || canvas === void 0 ? void 0 : canvas.append(pixelBtn);
        }
    }
}
createCanvas();
// Create the pixels with x & y coordinates
function createPixels(pixel) {
    const pixelBtn = document.createElement('button');
    pixelBtn.id = `${pixel.x}-${pixel.y}`;
    pixelBtn.onclick = function () {
        updateState(pixel.x, pixel.y);
    };
    return pixelBtn;
}
// Update the state of pixel (change color) from active to inactive or vice versa
function updateState(x, y) {
    const pixelToUpdate = pixels.find(p => p.x === x && p.y === y);
    if (pixelToUpdate) {
        pixelToUpdate.isActive = !pixelToUpdate.isActive;
        console.log('pixel to update', pixelToUpdate);
        updateCanvas(pixelToUpdate);
    }
}
// Update the canvas with active color
function updateCanvas(pixel) {
    const pixelBtn = document.getElementById(`${pixel.x}-${pixel.y}`);
    if (pixelBtn) {
        pixelBtn.style.backgroundColor = pixel.isActive ? pixel.colorHex = '#28bb84' : pixel.colorHex = '#efefe1';
    }
}
// Update the color on splash button click
function updateColor() {
    const colorInput = document.getElementById('color-input');
    const currentColorHex = colorInput.value;
    for (const p of pixels) {
        const pixelBtn = document.getElementById(`${p.x}-${p.y}`);
        if (pixelBtn && p.isActive && p.colorHex === '#28bb84') {
            p.colorHex = currentColorHex;
            pixelBtn.style.backgroundColor = p.colorHex;
        }
    }
}
