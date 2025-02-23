import { Feedback } from "@/types/interfaces";
import { FunctionComponent } from "react";
import { Quote } from 'lucide-react';
import Image from "next/image";
interface FeedbackCardProps extends Feedback {}

// as you see to each section, we needed to define:
// data type structure
// component to handle these data
// provide main data in constant folder
// then call component in page and send these data to it!

const FeedbackCard: FunctionComponent<FeedbackCardProps> = ({
    imageUrl,
    name,
    description,
    role
}) => {
    return (
        <>
            <div className="flex flex-col items-center md:items-start gap-4 py-6 px-4 rounded-lg hover:bg-slate-800 capitalize transition-all border border-slate-600 hover:border-sky-800">
                <Quote className=" w-12 h-12 text-sky-600 "/>
                <p className="text-lg"> {description} </p>
                
                <div className="flex items-start gap-2">
                    <Image 
                        src={imageUrl}
                        alt={description}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    <div>
                        <h4 className="text-slate-100 font-semibold tracking-wide"> {name}</h4>
                        {/* small is block element */}
                        <small className="text-sky-500 font-semibold"> {role} </small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedbackCard;