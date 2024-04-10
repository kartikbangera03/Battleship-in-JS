export default class ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sunkStatus = false;
    }

    hit(){
        this.hits++;

        // if(this.isSunk()){
        //     console.log(this.name+" ship has sunk");
        // }
        return this.hits;
    }


    isSunk(){
        if((this.length - this.hits)===0 && this.sunkStatus==false){
            this.sunkStatus = true;
        }
        return this.sunkStatus;
    }
}