export default function renderBothBoards(playerOne, playerTwo, playerTurn) {
    if (playerTurn) {
        playerTwo.changeTurn();
    } else {
        playerOne.changeTurn();
    }

    renderLeftBoard(playerOne, playerTwo, playerTurn);
    renderRightBoard(playerOne, playerTwo, playerTurn);

    if(playerTurn == 1 ){
        getRandomClickInputFromComputer();
    }
}


function renderLeftBoard(playerOne, playerTwo, playerTurn) {
    const leftContainer = document.querySelector(".leftContainer");
    while (leftContainer.firstChild) {
        leftContainer.removeChild(leftContainer.firstChild);
    }


    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const square = document.createElement("div");
            const spanElem = document.createElement("span");

            if (playerTurn == 0) {
                square.classList.add("inactiveBoard");
            }
            const gameBoardSquare = playerOne.gameBoard.getCordinate(i, j);
            // if (gameBoardSquare.attacked == true) {
            //     if (gameBoardSquare.hasShip == true) {
            //         spanElem.innerHTML = "&#x2715;";
            //     } else {
            //         spanElem.innerHTML = "&#x2299;" ;
            //     }
            // }

            spanElem.innerHTML = getDisplayInfoForSquare(gameBoardSquare.attacked,gameBoardSquare.hasShip )
            

            if (gameBoardSquare.hasShip == true) {
                square.classList.add("shipSquare");
            }

            square.appendChild(spanElem);
            square.classList.add("leftSquare");
            square.setAttribute("id", `ls-${i}-${j}`);

            if (playerTurn === 1 && gameBoardSquare.attacked === false) {
                square.addEventListener("click", (e) => {
                    // const idVal = e.target.id.split("-");
                    console.log(playerTwo.name);
                    console.log(e.target.id);
                    playerOne.receiveAttack(i, j);
                    playerTwo.changeTurn()
                }, { once: true });
            }
            leftContainer.appendChild(square);
        }
    }
}

function renderRightBoard(playerOne, playerTwo, playerTurn) {
    const rightContainer = document.querySelector(".rightContainer");
    while (rightContainer.firstChild) {
        rightContainer.removeChild(rightContainer.firstChild);
    }

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const square = document.createElement("div");
            const spanElem = document.createElement("span");
            if (playerTurn == 1) {
                square.classList.add("inactiveBoard");
            }


            const gameBoardSquare = playerTwo.gameBoard.getCordinate(i, j);
            // if (gameBoardSquare.attacked == true) {
            //     if (gameBoardSquare.hasShip == true) {
            //         spanElem.innerHTML = "&#x2715;";
            //     } else {
            //         spanElem.innerHTML = "&#x2299;" ;
            //     }
            // }
            spanElem.innerHTML = getDisplayInfoForSquare(gameBoardSquare.attacked,gameBoardSquare.hasShip)
            

            if (gameBoardSquare.hasShip == true) {
                square.classList.add("shipSquare");
            }

            square.appendChild(spanElem);
            square.classList.add("rightSquare");
            square.setAttribute("id", `rs-${i}-${j}`);

            if (playerTurn === 0) {
                square.addEventListener("click", (e) => {
                    // const idVal = e.target.id.split("-");
                    console.log(playerOne.name);
                    console.log(e.target.id);
                    playerTwo.receiveAttack(i, j);
                    playerOne.changeTurn();
                }, { once: true });
            }
            rightContainer.appendChild(square);
        }
    }
}


function getRandomClickInputFromComputer(){
    let i = Math.floor((Math.random() * 10)+1);
    let j = Math.floor((Math.random() * 10)+1);
    console.log("Randomly Generated "+i+" "+j);
    let square = document.querySelector(`#ls-${i}-${j}`)
    square.click()
    // setTimeout(()=>{square.click()},1000);
}


function getDisplayInfoForSquare(previouslyAttacked , hasShip){
    let message = "" ;

    if (previouslyAttacked === true) {
        if (hasShip === true) {
            message  = "&#x2715;";
        } else {
            message = "&#x2299;" ;
        }
    }

    return message ;
}