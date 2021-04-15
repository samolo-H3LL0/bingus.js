const loves = ["loves bingus!", "doesn´t loves bingus :("]

const ro = loves[Math.floor(Math.random() * loves.length)]

let checkLove = name => name + ro;


let img = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010'];
const po = img[Math.floor(Math.random() * loves.length)]


let randomImage = 'https://bingus.samuelbi11.repl.co/' + po + '.png';

module.exports = {
    checkLove,
    randomImage
}