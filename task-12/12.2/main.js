class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let newDiv = document.createElement('div');
        newDiv.textContent = 'Tекст';
        newDiv.style.cssText = `height: ${this.height}px;
            width: ${this.width}px; 
            background: ${this.bg};
            font-size: ${this.fontSize}px; 
            text-align: ${this.textAlign};`;

        document.body.appendChild(newDiv);
    }
}

let elem = new Options(200, 450, 'lightblue', 22, 'center');

elem.createDiv();


