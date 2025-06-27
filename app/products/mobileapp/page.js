import Start from "@/components/Home/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function MobileAppDevelopmentPage() {
    return (
        <>
            <Pricing 
                title="Mobile App Development Plans" 
                pricings={[
                    {
                        name: "Basic",
                        price: 250,
                        features: [
                            "Single Platform (iOS or Android)",
                            "Up to 5 Screens",
                            "Basic UI/UX Design",
                            "1 Month Post-Launch Support",
                            "App Store Submission"
                        ],
                        type: "standard"
                    },
                    {
                        name: "Standard",
                        price: 500,
                        features: [
                            "Dual Platform (iOS & Android)",
                            "Up to 15 Screens",
                            "Custom UI/UX Design",
                            "3 Months Post-Launch Support",
                            "Basic Backend Integration"
                        ],
                        type: "popular"
                    },
                    {
                        name: "Premium",
                        price: 1000,
                        features: [
                            "Dual Platform (iOS & Android)",
                            "Unlimited Screens",
                            "Advanced UI/UX & Prototyping",
                            "6 Months Post-Launch Support",
                            "Full Backend & API Integration"
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="Mobile App Development FAQs" 
                questions={[
                    {
                        question: "What’s included in your mobile app development services?",
                        answer: "We provide end-to-end app development, including UI/UX design, coding for iOS and Android, backend integration, testing, and app store submission, tailored to your needs."
                    },
                    {
                        question: "How long does it take to build a mobile app?",
                        answer: "Timelines vary by complexity. A basic app takes 4-8 weeks, while a feature-rich app may take 3-6 months. We’ll provide a detailed estimate after scoping your project."
                    },
                    {
                        question: "Do you offer support after the app is launched?",
                        answer: "Yes! Depending on your plan, we provide 1-6 months of post-launch support for updates, bug fixes, and optimization, with options for ongoing maintenance."
                    }
                ]}
            />
        </>
    );
}