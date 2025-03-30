import Start from "@/components/Other/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function UIDesignPage() {
    return (
        <>
            <Pricing 
                title="UI/UX Design Plans" 
                pricings={[
                    {
                        name: "Starter",
                        price: 300,
                        features: [
                            "Wireframes for 3 Screens",
                            "Basic UI Design",
                            "1 Revision Round",
                            "Style Guide",
                            "Delivery in 1 Week"
                        ],
                        type: "standard"
                    },
                    {
                        name: "Professional",
                        price: 800,
                        features: [
                            "Wireframes for 10 Screens",
                            "Custom UI/UX Design",
                            "2 Revision Rounds",
                            "Interactive Prototypes",
                            "Delivery in 2-3 Weeks"
                        ],
                        type: "popular"
                    },
                    {
                        name: "Enterprise",
                        price: 1500,
                        features: [
                            "Unlimited Screens",
                            "Full UI/UX Design System",
                            "3 Revision Rounds",
                            "Interactive Prototypes & User Testing",
                            "Delivery in 4-6 Weeks"
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="UI/UX Design FAQs" 
                questions={[
                    {
                        question: "What’s included in your UI/UX design services?",
                        answer: "We provide user research, wireframing, UI design, interactive prototyping, and usability testing to create intuitive and visually appealing experiences tailored to your users."
                    },
                    {
                        question: "How long does a UI/UX design project take?",
                        answer: "It depends on the scope. A small project (e.g., 3 screens) takes about 1 week, while a full design system could take 4-6 weeks, including revisions and testing."
                    },
                    {
                        question: "Can you improve the design of an existing product?",
                        answer: "Yes! We can audit your current design, identify pain points, and deliver a revamped UI/UX that enhances usability and aesthetics."
                    }
                ]}
            />
            <Start />
        </>
    );
}