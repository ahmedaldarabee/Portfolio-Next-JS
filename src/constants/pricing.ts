import { Pricing } from "@/types/interfaces";

const PricingItems:Pricing[]=[
    {
        title:"freelancer",
        description:"The essentials to provide your best work for your clients.",
        monthlyPrice:11,
        yearlyPrice:120,
        features:[
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time'
        ],
        glowPosition:"right",
    },{
        title:"Startup",
        description:"A plan that scales with your rapidly growing business.",
        monthlyPrice:10,
        yearlyPrice:100,
        features:[
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automation'
        ],
        isMostPopular:true
    },{
        title:"enterprise",
        description:"Dedicated support and infrastructure for your company.",
        monthlyPrice:150,
        yearlyPrice:130,
        features:[
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automation',
            'Custom reporting tools'
        ],
        glowPosition:"left",
    }
]

export default PricingItems;