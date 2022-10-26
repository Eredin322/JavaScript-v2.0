class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sale){
        super(name, amount, image, count, out);
        this.sale = sale;
    }
    draw(){
        document.querySelector(this.out).innerHTML = this.sale;
    }   
}