var members = ['Gilbert', 'Eddie', 'Victor', 'Oscar', 'Angel', 'Eric', 'Rudy', 'Bryan', 'Alfonso', 'Alonso']
var rudyPhoto = 'https://i.imgur.com/xpHqFZX.png?2'
var alonsoPhoto = 'https://i.imgur.com/wE9AsZ0.jpg?1'
var bryanPhoto = 'https://i.imgur.com/9keiZAp.jpg'
var angelPhoto = 'https://i.imgur.com/0nO6oqI.jpg?1'
var eddiePhoto = 'https://i.imgur.com/W2oxnAl.png?1'
var ericPhoto = 'https://i.imgur.com/ReUKmkr.jpg'
var oscarPhoto = 'https://i.imgur.com/zo8LhqB.png?2'
var alfonsoPhoto = 'https://i.imgur.com/bhtfFgK.png'
var vicPhoto = 'https://i.imgur.com/YMbjZQN.jpg?1'
var gilPhoto = 'https://i.imgur.com/GtaUAJs.png?1'

var photos = { 'Rudy': rudyPhoto, 'Alonso': alonsoPhoto, 'Gilbert': gilPhoto, 'Victor': vicPhoto, 'Eddie': eddiePhoto, 'Eric': ericPhoto, 'Oscar': oscarPhoto, 'Alfonso': alfonsoPhoto, 'Bryan': bryanPhoto, 'Angel': angelPhoto }

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // console.log('while its not zero  ' + currentIndex)
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        // console.log('randomIndex ' + randomIndex)
        currentIndex -= 1;
        // console.log('currentIndex - 1 = ' + currentIndex)

        // And swap it with the current element.
        // console.log('array[currentIndex] ' + array[currentIndex])
        temporaryValue = array[currentIndex];
        // console.log('temporaryValue ' + temporaryValue)
        array[currentIndex] = array[randomIndex];
        // console.log('array[currentIndex] ' + array[currentIndex])
        array[randomIndex] = temporaryValue;
        // console.log('array[randomIndex] ' + array[randomIndex])
        // console.log('array shuffle = ' + array)
    }

    return array;
}

// Used like so
function doit() {

    members = shuffle(members);
    var order = ''
    for (i in members) {
        var num = parseInt(i) + 1
        var num = num.toString()
        order += num + "-" + members[i] + ", " + "</br>"
    }
    //console.log(members);
    document.getElementById('text').innerHTML = "HERE GOES!"

    setTimeout(function () {
        console.log('here')
        var node = document.createElement("LI");
        var textnode = document.createTextNode("First pick");
        node.appendChild(textnode);
        document.getElementsByTagName("body")[0].appendChild(node);
    }, 3000)

}