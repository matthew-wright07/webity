import Start from "@/components/Other/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function MaintenancePage() {
    return (
        <>
            <Pricing 
                title="Website Maintenance Plans" 
                pricings={[
                    {
                        name: "Basic",
                        price: 50,
                        features: [
                            "Monthly Updates",
                            "Security Monitoring",
                            "Basic Bug Fixes",
                            "Performance Check",
                            "Email Support"
                        ],
                        type: "standard"
                    },
                    {
                        name: "Standard",
                        price: 100,
                        features: [
                            "Weekly Updates",
                            "Enhanced Security & Backups",
                            "Bug Fixes & Minor Edits",
                            "Performance Optimization",
                            "Priority Email/Phone Support"
                        ],
                        type: "popular"
                    },
                    {
                        name: "Premium",
                        price: 200,
                        features: [
                            "Daily Updates",
                            "Full Security Suite & Backups",
                            "Unlimited Edits",
                            "Advanced Performance Tuning",
                            "24/7 Premium Support"
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="Website Maintenance FAQs" 
                questions={[
                    {
                        question: "What does website maintenance include?",
                        answer: "Our maintenance services cover updates, security monitoring, backups, bug fixes, performance optimization, and support to keep your site running smoothly."
                    },
                    {
                        question: "How often do you perform maintenance?",
                        answer: "It depends on your plan. Basic plans include monthly maintenance, while Standard and Pro plans offer weekly or daily updates and checks."
                    },
                    {
                        question: "Can you maintain a site built by someone else?",
                        answer: "Yes! We can take over maintenance for any website, regardless of who built it, ensuring it stays secure, updated, and optimized."
                    }
                ]}
            />
            <Start />
        </>
    );
}