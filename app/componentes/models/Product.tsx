export class PresentationProduct{
    private PresentationImageUrl:string;
    private LinkString:string;
    private Category:string;
    constructor(presentationImageLink:string, linkString:string, category:string){
        this.PresentationImageUrl=presentationImageLink;
        this.LinkString=linkString;
        this.Category=category;
    }
    //-------------Getters-------------//
    getPresentationImageUrl():string{
        return this.PresentationImageUrl;
    }
    getLinkString():string{
        return this.LinkString;
    }
    getCategory():string{
        return this.Category;
    }
}

export class Product{
    private ID:number;
    protected Name:string;
    protected Description:string;
    protected Price:number;
    protected Images:string[];
    protected Available:boolean;
    protected Category:string;
    private Size:string;
    private Color:string;
    private Material:string;

    constructor(id:number, name:string, description:string, price:number, Category:string, images:string[], available:boolean, size:string, color:string, material:string){
        this.ID = id;
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.Category = Category;
        this.Images = images;
        this.Available = available;
        this.Size = size;
        this.Color = color;
        this.Material = material;
    }
    //-------------Getters-------------//
    public getID():number{
        return this.ID;
    }
    public getName():string{
        return this.Name;
    }
    public getDescription():string{
        return this.Description;
    }
    public getPrice():number{
        return this.Price;
    }
    public getCategory():string{
        return this.Category;
    }
    public getImages():string[]{
        return this.Images;
    }
    public getAvailable():boolean{
        return this.Available;
    }
    public getSize():string{
        return this.Size;
    }
    public getColor():string{
        return this.Color;
    }
    public getMaterial():string{
        return this.Material;
    }
}