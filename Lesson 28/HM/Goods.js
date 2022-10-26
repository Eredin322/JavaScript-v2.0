class Goods{
    constructor(name, amount, image, count, out){
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.out = out;
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<p><b>Наименование продукта: </b>${this.name}<br> <b>Стоимость за штуку: </b>${this.amount}</p>`;
        let img = document.createElement('img');
        img.setAttribute('src', this.image)
        document.querySelector(this.out).before(img);
    }
}