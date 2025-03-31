import Start from "@/components/Other/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function HostingDomainPage() {
    return (
        <>
            <Pricing 
                title="Hosting & Domain Plans" 
                pricings={[
                    {
                        name: "Basic",
                        price: 50,
                        features: [
                            "1 Domain Registration",
                            "5GB SSD Storage",
                            "Unmetered Bandwidth",
                            "Free SSL Certificate",
                            "24/7 Basic Support"
                        ],
                        type: "standard"
                    },
                    {
                        name: "Standard",
                        price: 100,
                        features: [
                            "3 Domain Registrations",
                            "25GB SSD Storage",
                            "Unmetered Bandwidth",
                            "Free SSL Certificate",
                            "Priority Support",
                            "Daily Backups"
                        ],
                        type: "popular"
                    },
                    {
                        name: "Premium",
                        price: 200,
                        features: [
                            "Unlimited Domains",
                            "100GB SSD Storage",
                            "Unmetered Bandwidth",
                            "Free SSL Certificate",
                            "Premium Support",
                            "Advanced Security Features"
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="Hosting & Domain FAQs" 
                questions={[
                    {
                        question: "What’s included in your hosting plans?",
                        answer: "Our hosting plans include domain registration, SSD storage, unmetered bandwidth, free SSL certificates, and reliable support. Higher tiers offer additional features like daily backups and advanced security."
                    },
                    {
                        question: "How long does it take to set up hosting and a domain?",
                        answer: "Once you choose a plan, we can set up your hosting and domain within 24 hours. Domain propagation might take up to 48 hours depending on the registrar."
                    },
                    {
                        question: "Can I upgrade my hosting plan later?",
                        answer: "Absolutely! You can upgrade your plan at any time as your needs grow. We’ll handle the transition seamlessly with no downtime."
                    }
                ]}
            />
            <Start />
        </>
    );
}