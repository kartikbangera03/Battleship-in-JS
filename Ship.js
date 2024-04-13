export default class ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sunkStatus = false;
    }

    hit(){
        let message ;
        message = "HIT !!!! "+this.name;
        this.hits++;

        if(this.isSunk()){
            message += " ship has sunk";
        }
        return message;
    }


    isSunk(){
        if((this.length - this.hits)<=0 && this.sunkStatus===false){
            this.sunkStatus = true;
        }
        return this.sunkStatus;
    }
}