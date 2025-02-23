import { Pricing, PricingMode } from "@/types/interfaces";
import { FunctionComponent } from "react";
import Button from "@/components/Button";
import { Check } from "lucide-react";

interface PricingCardProps extends Pricing{
    // this parameter it will sended by component that used this section
    mode:PricingMode
}

const PriceCard: FunctionComponent<PricingCardProps> = ({
    title,
    description,
    monthlyPrice,
    yearlyPrice,
    features,
    glowPosition,
    isMostPopular,
    mode
}) => {
    return ( <>
        <div className={`relative w-full p-6 flex flex-col space-y-4 lg:space-y-6 ${isMostPopular?'border-2 border-sky-700 bg-slate-800':'border border-slate-700'} rounded-lg overflow-hidden pointer hover:border-sky-500 transition-all`}>

            <figure className={`absolute w-72 h-60 bg-sky-600 -z-10 rounded-full blur-3xl opacity-28 -top-12 ${glowPosition==='left'?'-left-8':'-right-8'} `} />
            {
                isMostPopular && (
                    <p className="absolute top-5 right-6 bg-sky-600 text-white text-xs font-semibold capitalize p-2 rounded-3xl" > most popular </p>
                )
            }

            <h1 className="text-slate-100 font-bold text-base capitalize"> {title} </h1>

            <p>{description}</p>
            <h1 className="font-extrabold text-slate-100 text-4xl">
                ${mode==="monthly"? monthlyPrice:yearlyPrice}
                <small className="text-base text-slate-300 font-semibold ps-1">
                /{mode==="monthly"?"month":"yearly"}</small>
            </h1>

            <Button variant={isMostPopular? 'primary':'secondary'} isFullSize={true} >buy plan</Button>

            <ul className="space-y-4">
                { features.map((feature , index) => (
                    <li key={index} className="flex items-center gap-4">
                        <Check className="text-sky-600" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    </> );
}

export default PriceCard;