import { Ingredient } from "app/models/ingredient.model";

export class Product {
  public productId: string;
  public code: string;
  public name: string;
  public description: string;
  public longDescription: string;
  public brand: string;
  public markedPrice: number;
  public sellingPrice: number;
  public availableQuantity: 2;
  public primaryImageUrl: string;
  public secondaryImageUrl: string;
  public badge: string;
  public active: boolean;
  public isNew: boolean;
  public isFeatured: boolean;
  public isSpecial: boolean;
  public isBestSeller: boolean;

  public updateFrom(src: Product): void {
    this.productId = src.code;
    this.code = src.code;
    this.name = src.name;
    this.description = src.description;
    this.longDescription = src.longDescription;
    this.brand = src.brand;
    this.markedPrice = src.markedPrice;
    this.sellingPrice = src.sellingPrice;
    this.availableQuantity = src.availableQuantity;
    this.primaryImageUrl = src.primaryImageUrl;
    this.secondaryImageUrl = src.secondaryImageUrl;
    this.badge = src.badge;
    this.active = src.active;
    this.isNew = src.isNew;
    this.isFeatured = src.isFeatured;
    this.isSpecial = src.isSpecial;
    this.isBestSeller = src.isBestSeller;
  }
}
