import Start from "@/components/Home/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function SEOMarketingPage() {
    return (
        <>
            <Pricing 
                title="SEO & Digital Marketing Plans" 
                pricings={[
                    {
                        name: "Basic",
                        price: 250,
                        features: [
                            "Basic Keyword Research",
                            "On-Page SEO for 5 Pages",
                            "Monthly Performance Report",
                            "Social Media Setup",
                            "Email Support"
                        ],
                        type: "standard"
                    },
                    {
                        name: "Standard",
                        price: 500,
                        features: [
                            "Advanced Keyword Strategy",
                            "On-Page & Off-Page SEO",
                            "Content Creation (2 Blogs/Month)",
                            "Social Media Management",
                            "Priority Support"
                        ],
                        type: "popular"
                    },
                    {
                        name: "Premium",
                        price: 1000,
                        features: [
                            "Comprehensive SEO Audit",
                            "Full SEO & Link Building",
                            "Content Creation (4 Blogs/Month)",
                            "Multi-Platform Ad Campaigns",
                            "24/7 Premium Support"
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="SEO & Digital Marketing FAQs" 
                questions={[
                    {
                        question: "What’s included in your SEO and digital marketing services?",
                        answer: "We offer keyword research, on-page and off-page SEO, content creation, social media management, paid ad campaigns, and detailed analytics to boost your online presence."
                    },
                    {
                        question: "How long does it take to see results from SEO?",
                        answer: "SEO is a long-term strategy. Initial improvements can show in 1-3 months, with significant results typically visible in 6-12 months, depending on competition and effort."
                    },
                    {
                        question: "Can you manage my existing digital marketing campaigns?",
                        answer: "Yes! We can optimize and manage your current SEO, social media, or ad campaigns to improve performance and ROI."
                    }
                ]}
            />
        </>
    );
}