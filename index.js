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
        document.getElementById('text').innerHTML = order + "</br>" + "GOOD LUCK TO EVERYONE IN THE DRAFT!"
    }, 3000)

    //1st pick
    setTimeout(function () {
        p1.innerHTML = "1. FIRST!!! "
    }, 3000)
    setTimeout(function () {
        p1.innerHTML = "1. FIRST!!! " + members[0];
        document.getElementById('imageBox1').src = photos[members[0]]
        document.getElementById('imageBox1').height = '1200';
        document.getElementById('imageBox1').width = '1200';
    }, 3000)

    //2nd pick
    setTimeout(function () {
        p2.innerHTML = "2. SECOND ... so close .. "
    }, 3000)
    setTimeout(function () {
        p2.innerHTML = "2. SECOND ... so close .. " + members[1];
        document.getElementById('imageBox2').src = photos[members[1]];
        document.getElementById('imageBox2').height = '1000';
        document.getElementById('imageBox2').width = '1000';
    }, 3000)

    //3rd pick
    setTimeout(function () {
        p3.innerHTML = "3. Third. Not bad ... "
    }, 3000)
    setTimeout(function () {
        p3.innerHTML = "3. Third. Not bad ... " + members[2]
        document.getElementById('imageBox3').src = photos[members[2]]
        document.getElementById('imageBox3').height = '900';
        document.getElementById('imageBox3').width = '900';
    }, 3000)

    //4th pick
    setTimeout(function () {
        p4.innerHTML = "4. The fourth pick was lucky last year, this year it belongs to ... "
    }, 3000)
    setTimeout(function () {
        p4.innerHTML = "4. The fourth pick was lucky last year, this year it belongs to ... " + members[3]
        document.getElementById('imageBox4').src = photos[members[3]]
        document.getElementById('imageBox4').height = '850';
        document.getElementById('imageBox4').width = '850';
    }, 3000)

    //5th pick
    setTimeout(function () {
        p5.innerHTML = "5. Fifth goes to ... "
    }, 3000)
    setTimeout(function () {
        p5.innerHTML = "5. Fifth goes to ... " + members[4]
        document.getElementById('imageBox5').src = photos[members[4]]
        document.getElementById('imageBox5').height = '800';
        document.getElementById('imageBox5').width = '800';
    }, 3000)

    //6th pick
    setTimeout(function () {
        p6.innerHTML = "6. Sixth will be selected by ... "
    }, 3000)
    setTimeout(function () {
        p6.innerHTML = "6. Sixth will be selected by ... " + members[5]
        document.getElementById('imageBox6').src = photos[members[5]]
        document.getElementById('imageBox6').height = '750';
        document.getElementById('imageBox6').width = '750';
    }, 3000)

    //7th pick
    setTimeout(function () {
        p7.innerHTML = "7. The seventh pick shall go to ... "
    }, 3000)
    setTimeout(function () {
        p7.innerHTML = "7. The seventh pick shall go to ... " + members[6]
        document.getElementById('imageBox7').src = photos[members[6]]
        document.getElementById('imageBox7').height = '700';
        document.getElementById('imageBox7').width = '700';
    }, 3000)

    //8th pick
    setTimeout(function () {
        p8.innerHTML = "8. Eighth ... make the best of it ... "
    }, 3000)
    setTimeout(function () {
        p8.innerHTML = "8. Eighth ... make the best of it ... " + members[7]
        document.getElementById('imageBox8').src = photos[members[7]]
        document.getElementById('imageBox8').height = '650';
        document.getElementById('imageBox8').width = '650';
    }, 3000)

    //9th pick
    setTimeout(function () {
        p9.innerHTML = "9. Ninth ...goes to "
    }, 3000)
    setTimeout(function () {
        p9.innerHTML = "9. Ninth ...goes to " + members[8]
        document.getElementById('imageBox9').src = photos[members[8]]
        document.getElementById('imageBox9').height = '600';
        document.getElementById('imageBox9').width = '600';
    }, 3000)

    //10th pick 
    setTimeout(function () {
        p10.innerHTML = "10. You get to pick last ... "
    }, 3000)
    setTimeout(function () {
        p10.innerHTML = "10. You get to pick last ... " + members[9]
        document.getElementById('imageBox10').src = photos[members[9]]
        document.getElementById('imageBox10').height = '600';
        document.getElementById('imageBox10').width = '600';
    }, 3000)


}