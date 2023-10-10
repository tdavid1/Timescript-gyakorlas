export class series{
    constructor(public title:string, public episode:number ,public director:string){
        if(title.trim()==''){
            throw new Error('A cím nem lehet űres');
        }
        else if(director.trim()==''){
            throw new Error('A rendező nem lehet üres');
        }
        else if(episode<1 || isNaN(episode)){
            throw new Error('Az epizódok szémának pozitívnak kell lennie')
        }
    }
}