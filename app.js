//section establishes functions to disable/enable buttons
$('#rect-width').keyup(rectBoxCheck);
$('#rect-height').keyup(rectBoxCheck);
$('#square-height').keyup(function () {
    if(!$('#square-height').val()) {
        $('#square-btn').prop('disabled', true);
    } else {
        $('#square-btn').prop('disabled', false);
    }
});
$('#circle-radius').keyup(function() {
    if(!$('#circle-radius').val()) {
        $('#circle-btn').prop('disabled', true);
    } else {
        $('#circle-btn').prop('disabled', false);
    }
});
$('#triangle-height').keyup(function() {
    if(!$('#triangle-height').val()) {
        $('#tri-btn').prop('disabled', true);
    } else {
        $('#tri-btn').prop('disabled', false);
    }
});

function rectBoxCheck () {
    if(!$('#rect-width').val() || !$('#rect-height').val()) {
        $('#rect-btn').prop('disabled', true);
    } else {
        $('#rect-btn').prop('disabled', false);
    }
}

let counter = 0;

function randomVal(min, max) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}

//classes
class Shape {
    constructor(height, width, shape) {
        $('#shape-area').append(`<div class=${shape} id="${counter}"></div>`);
        $(`#${counter}`).css({
            height: `${height}px`,
            width: `${width}px`,
            top: `${randomVal(0, (600 - height))}px`,
            left: `${randomVal(0, (600 - width))}px`
        });
        $(`#${counter}`).click(() => this.describe());
        $(`#${counter}`).dblclick((event) => $(event.target).remove());
        this.height = height;
        this.width = width;
        this.class = shape;
    }

    describe() {
        $('#radius-text').text('');
        $('#shape-name-text').text(this.class);
        $('#width-text').text(this.width);
        $('#height-text').text(this.height);
        if(this.class === 'circle') {
            $('#radius-text').text(this.radius);
        }
        //Area if/else
        if(this.class === 'rectangle') {
            let area = this.width * this.height;
            $('#area-text').text(area);
        } else if(this.class === 'circle') {
            let area = Math.PI * 0.5 * this.width * 0.5 * this.width;
            $('#area-text').text(area);
        } else {
            let area = 0.5 * this.width * this.height;
            $('#area-text').text(area);
        }
        //Perimeter if/else
        if(this.class === 'rectangle' || this.class ==='square') {
            let perimeter = 2 * this.height + 2 * this.width;
            $('#perimeter-text').text(perimeter);
        } else if(this.class === 'circle') {
            let perimeter = Math.PI * this.width;
            $('#perimeter-text').text(perimeter);
        } else {
            let perimeter = parseFloat((this.height**2 + this.width**2)**(0.5)) + parseFloat(this.width) + parseFloat(this.height); //would only concatenate without parseFloat for reasons I couldn't figure out
            $('#perimeter-text').text(perimeter);
        }
    }
}

class Rectangle extends Shape {
    constructor(height, width, shape) {
        super(height, width, shape);
        this.height = height;
        this.width = width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super((radius * 2), (radius * 2), 'circle');
        this.radius = radius;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length, 'square');
        this.height = length;
        this.width = length;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height, 'triangle');
        $(`#${counter}`).css({
            height: '0px',
            width: '0px',
            borderBottom: `${height}px solid yellow`,
            borderLeft: `${height}px solid transparent`
        });
        this.height = height;
        this.width = height;
    }
}

//button click listeners
$('#rect-btn').click(function() {
    counter++;
    new Rectangle($('#rect-height').val(), $('#rect-width').val(), 'rectangle');
})
$('#square-btn').click(function() {
    counter++;
    new Square($('#square-height').val());
})
$('#circle-btn').click(function() {
    counter++;
    new Circle($('#circle-radius').val());
})
$('#tri-btn').click(function() {
    counter++;
    new Triangle($('#triangle-height').val());
})