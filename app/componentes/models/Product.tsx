class Product{
    private Name:string;
    private Description:string;
    private Price:number;
    private Type:string;
    private Images:string[];
    private Available:boolean;
    constructor(name:string, description:string, price:number, type:string, images:string[], available:boolean){
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.Type = type;
        this.Images = images;
        this.Available = available;
    }
    //-------------Getters-------------//
    getName():string{
        return this.Name;
    }
    getDescription():string{
        return this.Description;
    }
    getPrice():number{
        return this.Price;
    }
    getType():string{
        return this.Type;
    }
    getImages():string[]{
        return this.Images;
    }
    getAvailable():boolean{
        return this.Available;
    }
}

export default Product;