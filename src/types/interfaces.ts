// this section that mean this variable or function or etc..., you can used in multiple section in this project

export interface Client {
    imageURL:string,
    alt:string,
}

export interface Feature {
    imageUrl:string,
    title:string,
    content:string
}

export interface featureBlock extends Feature {
    isReversed?:boolean
}

export interface Pricing {
    title:string,
    description:string,
    monthlyPrice:number,
    yearlyPrice:number,
    features:string[],
    isMostPopular?:boolean,
    glowPosition?:'right'|'left'; // it will not accepted another value, must be either left or right just that! 
}

export interface Feedback {
    imageUrl:string,
    name:string,
    description:string,
    role:string,
}

export interface FooterColumn {
    title:string,
    links:string[]
}

export type PricingMode = "monthly" | "yearly"