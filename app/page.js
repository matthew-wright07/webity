import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Other/Portfolio";
import Products from "@/components/Other/Products";
import Questions from "@/components/Other/Questions";
import Start from "@/components/Home/Start";

export default function HomePage(){
  return(
    <>
    <Hero/>
    <Products title="Products"/>
    <Portfolio more="true" data={[{title:"Legalo",p:"A legal document generator site made using Next.js and Tailwind CSS",href:"https://thelegalo.com",img:"/legalo.png"},{title:"Wedding Website",p:"A wedding website for a couple made using Wix",href:"https://savannahandandrew.com",img:"/weddingwebsite.png"},{title:"Pinzo",p:"A location tracking website made using Bootstrap and Vercel",href:"https://thepinzo.com",img:"/pinzo.png"},{title:"Therapix",p:"A therapy tips website made using Next.js and Tailwind CSS",href:"https://mytherapix.com",img:"/therapix.png"}]}/>
    <Questions title="FAQs" questions={[{question:"What services does Webity offer?",answer:"Webity provides a range of digital solutions, including web development, UI/UX design, website maintenance, hosting & domain services, SEO, digital marketing, and mobile app development."},{question:"How long does it take to build a website?",answer:"The timeline depends on the complexity of the project. A simple website can take 2-4 weeks, while a more advanced web application may take several months. We work closely with clients to meet deadlines efficiently."},{question:"Do you offer ongoing support and maintenance?",answer:"Yes! We provide website maintenance services to ensure your site stays updated, secure, and optimized for performance. Whether you need occasional updates or long-term support, we’ve got you covered."}]}/>
    <Start/>
    </>
  )
}
