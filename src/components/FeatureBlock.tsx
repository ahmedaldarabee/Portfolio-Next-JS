import { Feature, featureBlock } from "@/types/interfaces";
import Image from "next/image";
import { FunctionComponent } from "react";
import Heading from "@/components/Heading";

interface FeatureBlockProps extends featureBlock {}

// the component it will worked once data assign to it
const FeatureBlock: FunctionComponent<FeatureBlockProps> = ({imageUrl,title,content,isReversed}) => {
    return (
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${isReversed && "lg:flex-row-reverse"}`}>
            <Image
                src={imageUrl}
                alt={title}
                width={370}
                height={370}
                className="basis-5/12 shadow-lg w-full"
            />
            <div className="basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
                <Heading title={title}/>
                <p className="lg:max-w-[40rem]"> {content} </p>
            </div>
        </div>
    );
}

export default FeatureBlock;