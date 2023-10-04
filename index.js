const boy =document.querySelector('#b1')
boy.addEventListener('click', showmegirl)

function showmegirl(){
    boy.innerHTML='X'
}

const man =document.querySelector('#b2')
man.addEventListener('click', showmeman)

function showmeman(){
    man.innerHTML='Y'
}

const come =document.querySelector('#b3')
come.addEventListener('click', showmecome)

function showmecome(){
    come.innerHTML='O'
}

// end of first row

const mummy =document.querySelector('#b4')
mummy.addEventListener('click', showmemummy)

function showmemummy(){
    mummy.innerHTML='Y'
}

const brother =document.querySelector('#b5')
brother.addEventListener('click', showmebrother)

function showmebrother(){
    brother.innerHTML='X'
}

const chair =document.querySelector('#b6')
chair.addEventListener('click', showmechair)

function showmechair(){
    chair.innerHTML='O'
}

// send of second row

const tomiwa =document.querySelector('#b7')
tomiwa.addEventListener('click', showmetomiwa)

function showmetomiwa(){
    tomiwa.innerHTML='X'
}

const rashidat =document.querySelector('#b8')
rashidat.addEventListener('click', showmemotunrayo)

function showmemotunrayo(){
    rashidat.innerHTML='Y'
}

const osun =document.querySelector('#b9')
osun.addEventListener('click', showmeosogbo)

function showmeosogbo(){
    osun.innerHTML='O'
}

// const chair =document.querySelector('#b6')
// chair.addEventListener('click', showmechair)

// function showmechair(){
//     chair.innerHTML='CHAIR'
// }




function startGame(){
    let name = 'Play and Win!!!'
    alert(`Welcome to the Game ${name}`)
    // console.log(window)
}

