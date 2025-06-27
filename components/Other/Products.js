import Wrapper from "../Wrappers/Wrapper";

export default function Products({title}){
    return(
        <Wrapper>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">{title}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <a href="/products/webdev" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/webdevelopment.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">Web Development</h1>
                    <p>We build fast, responsive, and scalable websites that drive business growth. Whether it&#8217;s a landing page or a full-scale web app, we bring your vision to life.</p>
                </a>
                <a href="/products/uiux" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/uiuxdesign.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">UI/UX Design</h1>
                    <p>Design that doesn’t just look good, it works. We craft intuitive, user-friendly experiences that keep visitors engaged and drive conversions.</p>
                </a>
                <a href="/products/maintenance" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/webmaintenance.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">Website Maintenance</h1>
                    <p>Keep your website running smoothly with regular updates, security patches, and performance optimizations, so you can focus on what matters.</p>
                </a>
                <a href="/products/hostingdomain" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/hostingdomain.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">Hosting & Domain Services</h1>
                    <p>Reliable hosting and domain management solutions to keep your website online, secure, and performing at its best, without the technical hassle.</p>
                </a>
                <a href="/products/seomarketing" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/seodigital.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">SEO & Digital Marketing</h1>
                    <p>Boost your online visibility and attract more customers with data-driven SEO, social media strategies, and targeted marketing campaigns.</p>
                </a>
                <a href="/products/mobileapp" className="bg-primary rounded-lg px-4 py-8 text-center flex flex-col items-center gap-2 hover:bg-secondary transition duration-500">
                    <img src="/mobiledev.svg" className="w-10"/>
                    <h1 className="text-xl text-white font-bold">Mobile App Development</h1>
                    <p>We design and develop mobile apps that deliver seamless performance, great user experiences, and real-world impact for businesses and users alike.</p>
                </a>
            </div>
        </div>
        </Wrapper>
    )
}