import { Feature } from "@/types/interfaces";
import Image from "next/image";
import { FunctionComponent } from "react";

interface FeatureCardProps extends Feature {}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({imageUrl,title,content}) => {
    return ( 
        <div className="w-full md:max-w-[30rem] lg:max-w-[36rem] transition-all
            border-2 border-transparent rounded-lg py-4 px-8 hover:border-sky-600 hover:bg-slate-800 cursor-pointer">

            <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6">
                <Image src={imageUrl} width={50} height={50} alt={title}/>

                <div className="flex flex-col text-center md:text-start space-y-1">
                    <h4 className="text-slate-100 font-bold text-base">{title}</h4>
                    <p className="text-sm leading-6">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;