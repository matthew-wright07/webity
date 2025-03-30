import Hero from "@/components/Home/Hero";
import Products from "@/components/Other/Products";
import Questions from "@/components/Other/Questions";
import Reviews from "@/components/Other/Reviews";
import Start from "@/components/Other/Start";

export default function HomePage(){
  return(
    <>
    <Hero/>
    <Products title="Products"/>
    <Reviews more="true" reviews={[{name:"Sarah M.",review:"Webity transformed our online presence! The team was professional, and the website they built for us is both stunning and functional. Highly recommended!"},{name:"David R.",review:"I was impressed with Webity’s attention to detail. The design is sleek, and the user experience is seamless. Plus, their customer support is always ready to help!"},{name:"Jessica L.",review:"Navigating Webity is a breeze! Everything is well-structured, and I found exactly what I needed in no time. Their hosting service is also incredibly reliable."},{name:"Michael T.",review:"As a business owner, I needed a website that not only looked good but performed well. Webity exceeded my expectations with a fast, responsive design that drives traffic!"}]}/>
    <Questions title="FAQs" questions={[{question:"What services does Webity offer?",answer:"Webity provides a range of digital solutions, including web development, UI/UX design, website maintenance, hosting & domain services, SEO, digital marketing, and mobile app development."},{question:"How long does it take to build a website?",answer:"The timeline depends on the complexity of the project. A simple website can take 2-4 weeks, while a more advanced web application may take several months. We work closely with clients to meet deadlines efficiently."},{question:"Do you offer ongoing support and maintenance?",answer:"Yes! We provide website maintenance services to ensure your site stays updated, secure, and optimized for performance. Whether you need occasional updates or long-term support, we’ve got you covered."}]}/>
    <Start/>
    </>
  )
}
