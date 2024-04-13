let playerTurn  = 0;




// export default function(players){
//     players[playerTurn].turn = true;
//     renderBothBoards(players[0], players[1], playerTurn)
//     playerTurn = playerTurn==1 ? 0 : 1 ;



// };




export default function renderBothBoards(playerOne, playerTwo, playerTurn){
    
    if(playerTurn){
        playerTwo.changeTurn();
        console.log(playerTwo.name+"'s TURN . TurnStatus : "+playerTwo.turn);
        
    }else{
        playerOne.turn = true;
        console.log(playerOne.name+"'s TURN . TurnStatus : "+playerOne.turn);
        
    }
    renderLeftBoard(playerOne, playerTwo, playerTurn);
    renderRightBoard(playerOne, playerTwo, playerTurn);
} 


function renderLeftBoard(playerOne, playerTwo, playerTurn){
    const leftContainer = document.querySelector(".leftContainer");
    while(leftContainer.firstChild){
        leftContainer.removeChild(leftContainer.firstChild);
    }


    for(let i =1;i<=10;i++){
        for(let j=1;j<=10;j++){
            const square  =  document.createElement("div");
            const spanElem = document.createElement("span");
            // spanElem.textContent = ".";
            const gameBoardSquare = playerOne.gameBoard.getCordinate(i,j);
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
            square.setAttribute("id",`ls-${i}-${j}`);

            if(playerTurn===1 && gameBoardSquare.attacked===false){
                square.addEventListener("click",(e)=>{
                    const idVal = e.target.id.split("-");
                    console.log(idVal[1]+" "+ idVal[2]);
                    playerOne.receiveAttack(i, j);
                    playerTwo.changeTurn()
                    console.log("In left Board");
                    console.log(playerOne.name +" " +playerOne.turn);
                    console.log(playerTwo.name +" " +playerTwo.turn);

                    // await renderBothBoards(playerOne, playerTwo, nextTurn );
                    // changeTurn = true;

                },{once : true});
            }
            
            
            leftContainer.appendChild(square);           
        }
    }




}

function renderRightBoard(playerOne, playerTwo, playerTurn){
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
                square.addEventListener("click",(e)=>{
                    const idVal = e.target.id.split("-");
                    console.log(idVal[1]+" "+ idVal[2]);
                    console.log("In right Board");
                    playerTwo.receiveAttack(i, j);
                    playerOne.changeTurn();
                    console.log(playerOne.name +" " +playerOne.turn);
                    console.log(playerTwo.name +" " +playerTwo.turn);

                    // renderBothBoards(playerOne, playerTwo, nextTurn );
                    // changeTurn = true;
                },{once : true});
            }
            
            
            rightContainer.appendChild(square);           
        }
    }
}