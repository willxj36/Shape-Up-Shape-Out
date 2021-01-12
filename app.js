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

//classes
class Shape {
    constructor(height, width) {
        $('#shape-area').append('<div></div>');
        // this.div.style.height = height;
        // this.div.style.width = width;
    }

    describe() {
        $('#shape-text').text(`${this.className}`);
        $('#width-text').text(`${this.div.style.width}`);
        $('#height-text').text(`${this.div.style.height}`);
        if(this.className === 'circle') {
            $('#radius-text').text(this.radius);
        }
        //Area if/else
        if(this.className === 'rectangle') {
            let area = width * height;
            $('#area-text').text(area);
        } else if(this.className === 'circle') {
            let area = Math.PI * this.radius * this.radius;
            $('#area-text').text(area);
        } else {
            let area = 0.5 * width * height;
            $('#area-text').text(area);
        }
        //Perimeter if/else
        if(this.className === 'rectangle') {
            let perimeter = 2 * height + 2 * width;
            $('#perimeter-text').text(perimeter);
        } else if(this.className === 'circle') {
            let perimeter = 2 * Math.PI * this.radius;
            $('#perimeter-text').text(perimeter);
        } else {
            let perimeter = height + width + Math.sqrt(height * height + width * width);
            $('#perimeter-text').text(perimeter);
        }
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.height = height;
        this.width = width;
        this.className = 'rectangle';
    }
}

//button click listeners
$('#rect-btn').click(function() {
    new Rectangle($('#rect-height').val(), $('#rect-width').val());
})
$('#square-btn').click(function() {

})
$('#circle-btn').click(function() {

})
$('#tri-btn').click(function() {

})