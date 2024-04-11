export default function renderBothBoards(playerOne, playerTwo, playerTurn){
    renderLeftBoard(playerOne,playerTurn);
    renderRightBoard(playerTwo,playerTurn);
} 

renderLeftBoard(playerOne,playerTurn){
    const leftContainer = document.querySelector(".leftContainer");
    while(leftContainer.firstChild){
        leftContainer.removeChild(leftContainer.firstChild);
    }

    for(let i =1;i<=10;i++){
        for(let j=1;j<=10;j++){
            const square  =  document.createElement("div");
            const spanElem = document.createElement("span");
            // spanElem.textContent = ".";
            const gameBoardSquare = playerTwo.gameBoard.getCordinate(i,j);
            if(gameBoardSquare.attacked == true){
                if(gameBoardSquare.hasShip==true){
                    spanElem.textContent = "X";
                }else{
                    spanElem.textContent = ".";
                }
            }

            if(gameBoardSquare.hasShip==true){
                square.classList.add("shipSquare");
            }

            square.appendChild(spanElem);
            square.classList.add("leftSquare");
            square.setAttribute("id",`rs-${i}-${j}`);

            if(playerTurn===1){
                square.addEventListener("click", (e)=>{
                    const idVal = e.target.id.split("-");
                    console.log(idVal[1]+" "+ idVal[2]);
                });
            }
            
            
            rightContainer.appendChild(square);           
        }
    }


}

function renderRightBoard(playerTwo,playerTurn){
    const rightContainer = document.querySelector(".rightContainer");
    while(rightContainer.firstChild){
        rightContainer.removeChild(rightContainer.firstChild);
    }

    for(let i =1;i<=10;i++){
        for(let j=1;j<=10;j++){
            const square  =  document.createElement("div");
            const spanElem = document.createElement("span");
            // spanElem.textContent = ".";
            const gameBoardSquare = playerTwo.gameBoard.getCordinate(i,j);
            if(gameBoardSquare.attacked == true){
                if(gameBoardSquare.hasShip==true){
                    spanElem.textContent = "X";
                }else{
                    spanElem.textContent = ".";
                }
            }
            square.appendChild(spanElem);
            square.classList.add("rightSquare");
            square.setAttribute("id",`rs-${i}-${j}`);

            if(playerTurn===0){
                square.addEventListener("click", (e)=>{
                    const idVal = e.target.id.split("-");
                    console.log(idVal[1]+" "+ idVal[2]);
                });
            }
            
            
            rightContainer.appendChild(square);           
        }
    }
}