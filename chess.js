
const h5 = document.createElement('h1')
const div = document.createElement('div')
const divForNumber = document.createElement('div')
const divForLetters = document.createElement('div')
const mainBord = document.createElement('div')
const root = document.getElementById("root")


console.log("hello")

root.appendChild(h5)
root.appendChild(div)
div.id='bord'
h5.innerText = 'Chess'
div.appendChild(divForNumber)
div.appendChild(mainBord)
div.appendChild(divForLetters)

mainBord.id = 'mainBord'
divForNumber.id = 'divForNumber'
divForLetters.id = 'divForLetters'

const chessChart = [

    {color: 'black', name: 'rook', imgFile:"./BlackFigures/black-rook.png"     , position: ['A8'], id: "A8", },
    {color: 'black', name: 'knight', imgFile:"./BlackFigures/black-knight.png" , position: ['B8'], id: "B8", },
    {color: 'black', name: 'bishop', imgFile:"./BlackFigures/black-bishop.png" , position: ['C8'], id: "C8", },
    {color: 'black', name: 'queen', imgFile:"./BlackFigures/black-queen.png"   , position: ['D8'], id: "D8", },
    {color: 'black', name: 'king', imgFile:"./BlackFigures/black-king.png"     , position: ['E8'], id: "E8", },
    {color: 'black', name: 'bishop', imgFile:"./BlackFigures/black-bishop.png" , position: ['F8'], id: "F8", },
    {color: 'black', name: 'knight', imgFile:"./BlackFigures/black-knight.png" , position: ['G8'], id: "G8", },
    {color: 'black', name: 'rook', imgFile:"./BlackFigures/black-rook.png"     , position: ['H8'], id: "H8", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['A7'], id: "A7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['B7'], id: "B7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['C7'], id: "C7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['D7'], id: "D7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['E7'], id: "E7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['F7'], id: "F7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['G7'], id: "G7", },
    {color: 'black', name: 'pawn', imgFile:"./BlackFigures/black-pawn.png"     , position: ['H7'], id: "H7", },
    {color:'white' , name: 'rook', imgFile:"./WhiteFigures/white-rook.png"     , position: ['A1'], id: "A1"},
    {color:'white' , name: 'knight', imgFile:"./WhiteFigures/white-knight.png" , position: ['B1'], id: "B1"},
    {color:'white' , name: 'bishop', imgFile:"./WhiteFigures/white-bishop.png" , position: ['C1'], id: "C1"},
    {color:'white' , name: 'queen', imgFile:"./WhiteFigures/white-queen.png"   , position: ['D1'], id: "D1"},
    {color:'white' , name: 'king', imgFile:"./WhiteFigures/white-king.png"     , position: ['E1'], id: "E1"},
    {color:'white' , name: 'bishop', imgFile:"./WhiteFigures/white-bishop.png" , position: ['F1'], id: "F1"},
    {color:'white' , name: 'knight', imgFile:"./WhiteFigures/white-knight.png" , position: ['G1'], id: "G1"},
    {color:'white' , name: 'rook', imgFile:"./WhiteFigures/white-rook.png"     , position: ['H1'], id: "H1"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['A2'], id: "A2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['B2'], id: "B2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['C2'], id: "C2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['D2'], id: "D2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['E2'], id: "E2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['F2'], id: "F2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['G2'], id: "G2"},
    {color:'white' , name: 'pawn', imgFile:"./WhiteFigures/white-pawn.png"     , position: ['H2'], id: "H2"},

]

const numArr = ['1','2','3','4','5','6','7','8']
const letterArr = ['A','B','C','D','E','F','G','H']



let whiteKingLongStep = true
let blackKingLongStep = true

let whiteKingShortStep = true
let blackKingShortStep = true

let kingChax = false;
let kingShaxMath = false;

let turnTo = true

let bordCount = 0
let divNum = 0
let step = 2
let removableBoxes = []
let permittedPiece = []
let castlingArr = []
let changePawnArr = []
let bishopSteps = []
let board = []
let eatableData
let child;


function numArrDiv () {
        numArr.reverse()
    for (let i=0; i<numArr.length; i++) {
        let div = document.createElement('div')
        divForNumber.appendChild(div)
        div.innerText=numArr[i]
        div.className="numItem"
    
    }
}
numArrDiv()


function letterArrDiv () {
    for (let j=0; j<letterArr.length; j++) {
        let div = document.createElement('div')
        divForLetters.appendChild(div)
        div.innerText=letterArr[j]
        div.className='letterItem'
    }
}

letterArrDiv()

const removeEachEvent = (pice) => {
    // console.log(pice)
        pice.classList.remove('checked')
        pice.classList.remove('edible')
        pice.classList.remove('castling')
        pice.removeEventListener('click' , castlToShort)
        pice.removeEventListener('click' , castlToLong)
        pice.removeEventListener('click' , goingTo)
        pice.removeEventListener('click' , moves)
        pice.removeEventListener('click' , eateing)
}

const removeEvents = () => {

    removableBoxes.map(remBox => removeEachEvent(remBox))
    permittedPiece.map(piece => removeEachEvent(piece))
    castlingArr.map(cast => removeEachEvent(cast))
    permittedPiece = []
    removableBoxes = []
    castlingArr = []
}


const addEdibleEvent = (box) => {
    box.classList.add('edible')
    box.addEventListener('click', eateing)
}

const addBoxEvents = (box) => {
    box.classList.add('checked')
    box.addEventListener('click', goingTo)   
}

const removeBoxEvent = (box) => {
    box.classList.remove('castling')
    box.classList.remove('edible')
    box.classList.remove('checked')
    box.removeEventListener('click', goingTo)
    box.removeEventListener('click', eateing)
}

const setTurnEvent = () => {

    board.map(box => {
        if (box.children.length>0 ) {
            box.children[0].removeEventListener('click' , moves)
            if (box.children[0].dataset.turn == turnTo.toString()) {
                box.children[0].addEventListener('click' , moves)
            }
        }
    })
    turnTo = !turnTo}

const eateing = (e) => {

    child.removeEventListener('click', eateing)
    e.target.parentElement.appendChild(child)

    e.target.remove(e.target);
    if (child.dataset.type == 'pawn' && child.parentElement.dataset.y == 8 && child.dataset.color == 'white') {
        changePawnTo(child.dataset.color,child.parentElement)
    }else if (child.dataset.type == 'pawn' && child.parentElement.dataset.y == 1 && child.dataset.color == 'black') {
        changePawnTo(child.dataset.color,child.parentElement)
    } else {
        console.log('hello')
        removeEvents()
        setTurnEvent()
    }
    
}


const pawChangeWith = (args,e) => {
console.log(e.target.dataset)
    
    e.target.dataset.color == "white"?e.target.dataset.turn = true:e.target.dataset.turn = false;
    
    args.replaceChild(e.target, args.children[0])

    mainBord.lastChild.remove()
    removeEvents()
    setTurnEvent()    
}

const changePawnTo = (color,parentBox) => {

    const toCastlWith = document.createElement('div')
    toCastlWith.classList.add('toCastlWith')
    color === 'white'? toCastlWith.style.top = 0:  toCastlWith.style.bottom = 0;

    changePawnArr = chessChart.filter(char => { 
        if (char.color == color && char.name !== 'pawn' && char.name !== 'king') {
            return char        
        }
    })
    changePawnArr.length = 4

    changePawnArr.map(box => {

        let newPawn = document.createElement('div')
        newPawn.addEventListener('click' , (e) => pawChangeWith(parentBox,e))
        newPawn.className = 'chessBord';
        let img = document.createElement('img')
        img.src = box.imgFile
        img.dataset.type = box.name
        img.dataset.color = box.color
        img.classList.add('char')
        newPawn.append(img)
        toCastlWith.append(newPawn)

    })
    mainBord.appendChild(toCastlWith)
    removeEvents()
    // setTurnEvent()

}

const chekingShax = (child) => {
    console.log(child[0])
    knightMove(child[0])
}

const pawnExtraEateing = (x,y) => {
    board.filter(box => {
        console.log(box.dataset.y,y)

        if (box.dataset.y == y) {
            console.log(box)
            if (box.dataset.x == +x+1) {
                console.log(box)
            }

        }
    })
}


const goingTo = (e) => {
    let box = e.target
    e.target.appendChild(child)
    let data = e.target.children[0].dataset
        data.type == 'rook' && e.target.dataset.x == 1 && e.target.dataset.y == 1?  whiteKingLongStep = false: null;
        data.type == 'rook' && e.target.dataset.x == 8 && e.target.dataset.y == 1?  whiteKingShortStep = false: null;
        data.type == 'rook' && e.target.dataset.x == 1 && e.target.dataset.y == 8?  blackKingLongStep = false: null;
        data.type == 'rook' && e.target.dataset.x == 8 && e.target.dataset.y == 8?  blackKingShortStep = false: null;

        if (data.type == 'king' && data.color == 'white') {
            whiteKingLongStep = false;
            whiteKingShortStep = false;
        }else if (data.type == 'king' && data.color == 'black') {
            blackKingLongStep = false;
            blackKingShortStep = false;
        }

        if (data.type == 'pawn' && data.color == 'white' && e.target.dataset.y == 5) {
            console.log(e.target,board)
            pawnExtraEateing(e.target.x,e.target.y)
        }else if (data.type == 'pawn' && data.color == 'black' && e.target.dataset.y == 4) {
            console.log(e.target,board)
        }

    if (data.type == 'pawn' && data.color == 'white' && e.target.dataset.y == 8) {
        changePawnTo(data.color,box)
    }else if (data.type == 'pawn' &&  data.color == 'black' && e.target.dataset.y == 1) {
        changePawnTo(data.color,box)
    }else {
        removeEvents()
        setTurnEvent()    
    }
}

const whitePawnStap = (x,y,step,color,finesh,cycle) => {
    y++
    if (step <= 0 || finesh || y == 9) { return }
    board.reverse().map(box => {
        if (cycle == 1) {
            if (box.children.length>0 && box.children[0].dataset.color !=  color && box.dataset.x == +x-1 && box.dataset.y == +y) {
                addEdibleEvent(box)
                removableBoxes.push(box)
            }
            if ( box.children.length>0 && box.children[0].dataset.color !=  color && box.dataset.x == +x+1 && box.dataset.y == +y) {
                addEdibleEvent(box)
                removableBoxes.push(box)
            }
        }
        if (box.dataset.x == x && box.dataset.y < +y+2) {
               if (box.dataset.y == y) {
                   if (box.children.length > 0 && box.children[0].dataset.color !=  color) {
                    finesh = true
                    return
                }else if (box.children.length > 0 && box.children[0].dataset.color ==  color) {
                    finesh = true
                    return
                } else {
                    step--
                    addBoxEvents(box)
                    permittedPiece.push(box)
                }
           }
        }
    })
    cycle++
    whitePawnStap(x,y,step,color,finesh,cycle)
}

const blackPawnStap = (x,y,step,color,finesh,cycle) => {
    y--
    if (step <= 0 || finesh || y == 0) { return }
    board.filter(box => {
        if (cycle == 1) {
            if (box.children.length>0 && box.children[0].dataset.color !=  color && box.dataset.x == +x-1 && box.dataset.y == +y) {
                addEdibleEvent(box)
                removableBoxes.push(box)
            }
            if (box.children.length>0 && box.children[0].dataset.color !=  color && box.dataset.x == +x+1 && box.dataset.y == +y) {
                addEdibleEvent(box)
                removableBoxes.push(box)
            }
        }
        if (box.dataset.x == x && box.dataset.y > +y-2) {
            if (box.dataset.y == y) {
                if (box.children.length>0 && box.children[0].dataset.color !=  color) {
                 finesh = true
                 return
             }else if (box.children.length>0 && box.children[0].dataset.color ==  color) {
                finesh = true
                 return
             } else {
                 step--
                 addBoxEvents(box)
                 permittedPiece.push(box)
             }
        }
        }
    })
    cycle++
    blackPawnStap(x,y,step,color,finesh,cycle)
}



const pawnMove = (img) => {
    let finesh = false
    let cycle = 1
    let x = img.target.parentElement.dataset.x
    let y = img.target.parentElement.dataset.y
    
    child = img.target
    color = img.target.dataset.color
    y == 2 || y == 7? step = 2 : step = 1;

    color == 'white'? whitePawnStap(x,y,step,color,finesh,cycle):
    color == 'black'? blackPawnStap(x,y,step,color,finesh,cycle): null;
}

const knight_top_buttom_check = (box,color) => {
   
    if (box.children.length > 0 && box.children[0].dataset.color != color && box.children[0].dataset.type != 'king') {
        addEdibleEvent(box)
        removableBoxes.push(box) 
    }else if (box.children.length > 0 && box.children[0].dataset.color != color && box.children[0].dataset.type == 'king') {
        console.log(box)
        box.classList.add('kingChax')
    }else if (box.children.length > 0 && box.children[0].dataset.color == color) {
       return undefined
   } else {
       addBoxEvents(box)
       return box
   }
}

const knightMove = (img) => {
    // console.log(img.parentElement)
    let x = img.target.parentElement.dataset.x
    let y = img.target.parentElement.dataset.y
    let color = img.target.dataset.color
    child = img.target

    permittedPiece = board.filter(box => {
        if (box.dataset.y == +y+2) {
           if (box.dataset.x == +x+1 ) {
           return knight_top_buttom_check(box,color)
           }
           if (box.dataset.x == +x-1) {
            return knight_top_buttom_check(box,color)
           }
        }
        if (box.dataset.y == +y-2) {
            if (box.dataset.x == +x+1 ) {
              return knight_top_buttom_check(box,color)
            }
            if (box.dataset.x == +x-1) {
              return  knight_top_buttom_check(box,color)
            }
         }
         if (box.dataset.x == +x+2) {
            if (box.dataset.y == +y+1 ) {
            return knight_top_buttom_check(box,color)
            }
            if (box.dataset.y == +y-1) {
             return knight_top_buttom_check(box,color)
            }
         }
         if (box.dataset.x == +x-2) {
             if (box.dataset.y == +y+1 ) {
               return knight_top_buttom_check(box,color)
             }
             if (box.dataset.y == +y-1) {
               return  knight_top_buttom_check(box,color)
             }
          }
    })
}

const charRec = (x,y,color,finesh) => {
    board.filter(box => {
        if (+box.dataset.x === x && +box.dataset.y === y) {
            if (box.children[0] && box.children[0].dataset.color !== color) {
                addEdibleEvent(box)
                removableBoxes.push(box)
                 return finesh = true
             }else if (box.children[0] && box.children[0].dataset.color === color) {
                removeBoxEvent(box)
                return finesh = true
            }else {
                removeBoxEvent(box)
                addBoxEvents(box)
                permittedPiece.push(box)
                return box
            }
        }
    })
    if (finesh) {
        return finesh
    }
}

const charSlesh = (x,y,color) => {
    let finesh = false
    x+=1;
    y+=1;
    finesh =charRec(x,y,color,finesh)

    if (+x>8 || +y>8 || finesh) {
       return permittedPiece
    }
    charSlesh(x,y,color)
}

const backSleshChar = (x,y,color) => {
    let finesh = false
    x -= 1;
    y += 1;
    finesh =charRec(x,y,color,finesh)
    if (+x<1 || +y>8 || finesh) {
       return permittedPiece
    }
    backSleshChar(x,y,color)
}

const charBackSlesh = (x,y,color) => {
    let finesh = false
    x += 1;
    y -= 1;
    finesh = charRec(x,y,color,finesh)
    if (x>8 || y<1 || finesh) {
       return permittedPiece
    }
    charBackSlesh(x,y,color)
}

const sleshChar = (x,y,color) => {
    let finesh = false
    x -= 1;
    y -= 1;
    finesh = charRec(x,y,color,finesh)
    if (x>8 || y<1 || finesh) {
       return permittedPiece
    }
    sleshChar(x,y,color)
}

const topChar = (x,y,color) => {
    let finesh = false
    y += 1;
    finesh = charRec(x,y,color,finesh)
    if ( y>8 || finesh) {
       return permittedPiece
    }
    topChar(x,y,color)
}


const charBottom = (x,y,color) => {
    let finesh = false
    y -= 1;
    finesh = charRec(x,y,color,finesh)
    if ( y<1 || finesh) {
       return permittedPiece
    }
    charBottom(x,y,color)
}


const leftChar = (x,y,color) => {
    let finesh = false
    x -= 1;
    finesh = charRec(x,y,color,finesh)
    if ( x<1 || finesh) {
       return permittedPiece
    }
    leftChar(x,y,color)
}

const charRight = (x,y,color) => {
    let finesh = false
    x += 1;
    finesh = charRec(x,y,color,finesh)
    if ( x>8 || finesh) {
       return permittedPiece
    }
    charRight(x,y,color)
}

const bishopMove = (img) => {
    let x = +img.target.parentElement.dataset.x
    let y = +img.target.parentElement.dataset.y
    child = img.target
    let color = img.target.dataset.color
    charSlesh(x,y,color)
    backSleshChar(x,y,color)
    charBackSlesh(x,y,color)
    sleshChar(x,y,color)
}


const rookMove = (img) => {
    let x = +img.target.parentElement.dataset.x
    let y = +img.target.parentElement.dataset.y
    child = img.target
    let color = img.target.dataset.color
    topChar(x,y,color)
    charBottom(x,y,color)
    leftChar(x,y,color)
    charRight(x,y,color)
}

const queenMove = (img) => {
    let x = +img.target.parentElement.dataset.x
    let y = +img.target.parentElement.dataset.y
    child = img.target
    let color = img.target.dataset.color

    topChar(x,y,color)
    charBottom(x,y,color)
    leftChar(x,y,color)
    charRight(x,y,color)
    charSlesh(x,y,color)
    backSleshChar(x,y,color)
    charBackSlesh(x,y,color)
    sleshChar(x,y,color)
}

const topKing = (box,x,y,color) => {
    if (box.dataset.x == x && box.dataset.y == y) {
        
        if (box.children.length > 0 && box.children[0].dataset.color !== color) {
            addEdibleEvent(box)
            removableBoxes.push(box)

        } else if (box.children.length === 0) {
            addBoxEvents(box)
            permittedPiece.push(box) 
        }
    }
    setTurnEvent()

}

const castlToLong = (x,y,child,king) => {
    if (king.dataset.color == 'white') {
        whiteKingLongStep = false;
        whiteKingShortStep = false;
    }else {
        blackKingLongStep = false;
        blackKingShortStep = false;
    }
    board.map(box => {
        if (box.dataset.x == x-1 && box.dataset.y == y) {
            box.appendChild(child)
        }
        if (box.dataset.x == x-2 && box.dataset.y == y) {
            box.appendChild(king)
        }
        removeBoxEvent(box)
    })
    setTurnEvent()
}

const castlToShort = (x,y,child,king) => {
    board.map(box => {
        if (box.dataset.x == x+1 && box.dataset.y == y) {
            box.appendChild(child)
        }
        if (box.dataset.x == x+2 && box.dataset.y == y) {
            box.appendChild(king)
        }
        removeBoxEvent(box)
    })
    setTurnEvent()
}

const longSideCastling = (x,y,king) => {
    let charCount = 0
    board.filter(box => {
        box.dataset.x < x && box.dataset.y == y?box.children.length == 0 ? charCount++ : null :null;
        })
    if (charCount == 3) {
        board.filter(box => {
            if (box.dataset.x == 1 && box.dataset.y == y) {
                box.children[0].addEventListener('click',() => castlToLong(x,y,box.children[0],king))
                box.classList.add('castling')
                castlingArr.push(box)
            }
        })
    }
}

const shortSideCastling = (x,y,king) => {
  let charCount = 0
    board.filter(box => {
        box.dataset.x > x && box.dataset.y == y?box.children.length == 0 ? charCount++ : null :null;
    })
    if (charCount == 2) {
        board.filter(box => {
            if (box.dataset.x == 8 && box.dataset.y == y) {
                box.children[0].addEventListener('click',() => castlToShort(x,y,box.children[0],king))
                box.classList.add('castling')
                castlingArr.push(box)
            }
        })
    }
}


const castling = (x,y,color,box) => {
    whiteKingLongStep && color == 'white'? longSideCastling(x,y,box): null;
    whiteKingShortStep && color == 'white'? shortSideCastling(x,y,box): null;
    blackKingLongStep && color == 'black'? longSideCastling(x,y,box): null;
    blackKingShortStep && color == 'black'? shortSideCastling(x,y,box): null;
}

const kingsMove = (img) => {
    let x = +img.target.parentElement.dataset.x
    let y = +img.target.parentElement.dataset.y
    child = img.target
    let color = img.target.dataset.color
        board.filter(box => {
                topKing(box,x,y+1,color)
                topKing(box,x,y-1,color)
                topKing(box,x+1,y,color)
                topKing(box,x-1,y,color)
                topKing(box,x+1,y+1,color)
                topKing(box,x+1,y-1,color)
                topKing(box,x-1,y+1,color)
                topKing(box,x-1,y-1,color)  
        })
    castling(x,y,color,child)
}

const moves = (imgMove) => {
    removeEvents()
    imgMove.target.dataset.type === "pawn"? pawnMove(imgMove) :null;
    imgMove.target.dataset.type === 'knight'? knightMove(imgMove): null;
    imgMove.target.dataset.type === 'bishop'? bishopMove(imgMove): null;
    imgMove.target.dataset.type === 'rook'? rookMove(imgMove): null;
    imgMove.target.dataset.type === 'queen'? queenMove(imgMove): null;
    imgMove.target.dataset.type === 'king'? kingsMove(imgMove): null;
}

const drowingBord = (div,place,charBoard) => {

    charBoard.filter(chart => {
        if (place === chart.position[chart.position.length-1]) {
            let img = document.createElement('img')
            img.src = chart.imgFile
            img.dataset.type = chart.name
            img.dataset.color = chart.color
            img.alt = chart.name
            img.classList.add('char')
            div.id = chart.id
            div.appendChild(img)
            if (div.children[0].dataset.color == 'white') {
                div.children[0].dataset.turn = true
            }else if (div.children[0].dataset.color == 'black') {
                div.children[0].dataset.turn = false
            }
            board.push(div)
            // console.log(board)
            
        }
    })
}


const table = () => {
    
    numArr.map((line, x) => letterArr.map((calum, y) => {
        let div = document.createElement('div');
        div.className = 'chessBord';
       (x)%2 === 0?(y)%2 === 0?                                             //    
       div.classList.add('white'):div.classList.add('black'):               //  sharum 1 dashti guynery  
       (y)%2 === 0? div.classList.add('black'):div.classList.add('white');  //
        mainBord.appendChild(div)
        div.dataset.x = y+1 
        div.dataset.y = line
        div.dataset.name = calum+line
        drowingBord(div,calum+line,chessChart)
        
        return {x: y+1, y: +line, name: calum+line}
    }))
    setTurnEvent()
    
board = Array.from(document.querySelectorAll('.chessBord'))
}
table()






// let button = document.createElement('button')
// root.appendChild(button)
// button.id = 'startGame'
// button.innerText = 'START'

// button.onclick = () => startGame()