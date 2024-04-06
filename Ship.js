export default class ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sunkStatus = false;
    }
    hit(){
        this.hits++;
        return this.hits;
    }

    isSunk(){
        if(this.length - this.hits == 0 && this.sunkStatus==false){
            this.sunkStatus = true;
        }
        return this.sunkStatus;
    }

    placeShip(xcord, ycord, orientation){
        let result;
        if(orientation=="horizontal"){
            if((ycord-1) + this.length >9){
                result = false;
            }else{
                result = true;
            }
        }else if(orientation=="vertical"){
            if((xcord-1) + this.length >9){
                result = false;
            }else{
                result = true;
            }
        }
        return result;
    }


}