import Reviews from "@/components/Other/Reviews";
import Start from "@/components/Other/Start";

export default function ReviewsPage() {
    return (
        <>
            <Reviews more="false" reviews={[
                { name: "Sarah M.", review: "Webity transformed our online presence! The team was professional, and the website they built for us is both stunning and functional. Highly recommended!" },
                { name: "David R.", review: "I was impressed with Webity’s attention to detail. The design is sleek, and the user experience is seamless. Plus, their customer support is always ready to help!" },
                { name: "Jessica L.", review: "Navigating Webity is a breeze! Everything is well-structured, and I found exactly what I needed in no time. Their hosting service is also incredibly reliable." },
                { name: "Michael T.", review: "As a business owner, I needed a website that not only looked good but performed well. Webity exceeded my expectations with a fast, responsive design that drives traffic!" },
                { name: "Emma W.", review: "I love the simplicity and efficiency of Webity. Their team made it easy for me to set up my online store without any hassle." },
                { name: "James P.", review: "Webity’s designs are beautifully crafted and tailored to my needs. They created a website that perfectly reflects my brand." },
                { name: "Olivia K.", review: "Great service and excellent design! Webity has truly elevated my business with a professional-looking website." },
                { name: "Daniel H.", review: "Reliable, efficient, and affordable! Webity’s team provided top-notch web services for my small business." },
                { name: "Sophia N.", review: "I appreciate Webity’s commitment to user-friendly solutions. They made my website vision come to life effortlessly." },
                { name: "Ethan C.", review: "Webity’s SEO services have helped my website rank higher on search engines, bringing in more customers than ever before!" },
                { name: "Mia B.", review: "Top-notch customer support! Whenever I had a question, Webity’s team responded quickly and effectively." },
                { name: "Liam D.", review: "Webity offers the perfect balance between design flexibility and functionality. My website looks fantastic!" },
                { name: "Ava S.", review: "Fast-loading pages and a responsive design make Webity the best web services agency I’ve worked with." },
                { name: "Noah J.", review: "The team at Webity is intuitive, and their hosting service is rock solid. I highly recommend them!" },
                { name: "Isabella F.", review: "Webity made website creation stress-free. Their expertise helped me achieve exactly what I envisioned!" },
                { name: "William B.", review: "From start to finish, Webity exceeded my expectations. My website looks fantastic, and the whole process was seamless." }
            ]} />
            <Start/>
        </>
    );
}
