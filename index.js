function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var fruits = ['apple', 'banana', 'cherry', 'dragonfruit', 'grapes', 'kiwi', 'lychee'];
var musics = ['guitar', 'piano', 'violin', 'flute', 'casio'];
var animals = ['cat', 'dog', 'donkey', 'monkey', 'horse'];
var vehicles = ['bike', 'car', 'bus', 'truck', 'train', 'plain'];

var arrys = {
    'fruits': fruits,
    'musics': musics,
    'animals': animals,
    'vehicles': vehicles
};

let value = arrys[Object.keys(arrys)[Math.floor(Math.random() * Object.keys(arrys).length)]];
let key = getKeyByValue(arrys, value);
value = value[Math.floor(Math.random() * value.length)];
let underscore = '';

for (let index = 0; index < value.length; index++) {
    underscore += '_';
}

$('#randomKey').text(key);
$('#randomValue').text(underscore);
$("#score").html(5);

function checkValue(element) {
    let entered_value = element.value.toLowerCase();
    console.log(entered_value);
    let get_underscore_value_from_page = $("#randomValue").html();
    let score = $("#score").html();
    underscore = '';


    if (score > 0) {
        if (!value.includes(entered_value)) {
            score--;
            score == 0 ? $(".modal").modal('show'): '';
        }

        for (let index = 0; index < value.length; index++) {
            if (entered_value == value[index]) {
                if (get_underscore_value_from_page[index] == '_') {
                    underscore += entered_value;
                } else {
                    underscore += get_underscore_value_from_page[index];
                }
            } else if (get_underscore_value_from_page[index] != '_') {
                underscore += get_underscore_value_from_page[index];
            } else {
                underscore += '_';
            }
        }

        $("#score").html(score);
        $("#inputGuess").val('');
        $('#randomValue').html(underscore);
        $(`#${entered_value}`).prop('disabled', true).css('background-color','gray').css('color','white');
    } else {
        $(".modal").modal('show');
    }
}