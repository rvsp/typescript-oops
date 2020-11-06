type colors = "RED" | "GREEN" | "BLACK" | "WHITE";




export interface ProductConfig {
    productValue: string;
    costValue: number;
    quantityValue: number;
    colorValue?: colors;
    warrantyValue?: string;
}
