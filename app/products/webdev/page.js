import Start from "@/components/Home/Start";
import Pricing from "@/components/Pricing/Pricing";
import Questions from "@/components/Other/Questions";

export default function WebDevelopmentPage() {
    return (
        <>
            <Pricing 
                title="Web Development Plans" 
                pricings={[
                    {
                        name: "Basic",
                        price: 250,
                        features: [
                            "5-Page Static Website",
                            "Responsive Design",
                            "Basic SEO Setup",
                            "Contact Form Integration",
                        ],
                        type: "standard"
                    },
                    {
                        name: "Standard",
                        price: 500,
                        features: [
                            "10-Page Dynamic Website",
                            "Responsive & Custom Design",
                            "Advanced SEO Optimization",
                            "CMS Integration",
                        ],
                        type: "popular"
                    },
                    {
                        name: "Premium",
                        price: 1000,
                        features: [
                            "Custom Web Application",
                            "Fully Responsive Design",
                            "E-commerce or Advanced Features",
                            "SEO & Analytics Setup",
                        ],
                        type: "standard"
                    }
                ]}
            />
            <Questions 
                title="Web Development FAQs" 
                questions={[
                    {
                        question: "What does your web development service include?",
                        answer: "We offer end-to-end web development, including custom design, coding, responsive layouts, SEO optimization, CMS integration, and post-launch support tailored to your needs."
                    },
                    {
                        question: "How long does it take to develop a website?",
                        answer: "It varies by project scope. A basic site takes 2-4 weeks, while complex sites or web apps can take 8-12 weeks. We’ll provide a timeline after discussing your requirements."
                    },
                    {
                        question: "Can you redesign an existing website?",
                        answer: "Yes! We can revamp your current site with a fresh design, improved functionality, and better performance, all while keeping your brand identity intact."
                    }
                ]}
            />
        </>
    );
}