export default function Footer(){
    return (
        <div className="px-8 lg:px-32 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col gap-4 lg:justify-self-start">
                    <a href="/" className="flex items-center gap-2">
                        <img src="/webitylogo.svg" className="w-10"/>
                        <h1 className="text-3xl font-bold">Webity</h1>
                    </a>
                    <p className="text-secondary">Webity &copy; 2025</p>
                    <p className="text-secondary">Contact:<br/>info@webity.io<br/>512-586-4786</p>
                </div>
                <div className="flex flex-col gap-2 lg:justify-self-center">
                    <h1 className="font-bold text-lg">Products</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a href="/products/webdev" className="text-secondary hover:text-white transition duration-500">Web Development</a></li>
                        <li><a href="/products/uiux" className="text-secondary hover:text-white transition duration-500">UI/UX Design</a></li>
                        <li><a href="/products/maintenance" className="text-secondary hover:text-white transition duration-500">Website Maintenance</a></li>
                        <li><a href="/products/hostingdomain" className="text-secondary hover:text-white transition duration-500">Hosting & Domain Services</a></li>
                        <li><a href="/products/seomarketing" className="text-secondary hover:text-white transition duration-500">SEO & Digital Marketing</a></li>
                        <li><a href="/products/mobileapp" className="text-secondary hover:text-white transition duration-500">Mobile App Development</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 lg:justify-self-center">
                    <h1 className="font-bold text-lg">Links</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a href="/about" className="text-secondary hover:text-white transition duration-500">About</a></li>
                        <li><a href="/contact" className="text-secondary hover:text-white transition duration-500">Contact</a></li>
                        <li><a href="/products" className="text-secondary hover:text-white transition duration-500">Pricing</a></li>
                        <li><a href="/reviews" className="text-secondary hover:text-white transition duration-500">Reviews</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 lg:justify-self-end">
                    <h1 className="font-bold text-lg">Legal</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a href="/legal/terms" className="text-secondary hover:text-white transition duration-500">Terms of Service</a></li>
                        <li><a href="/legal/privacy" className="text-secondary hover:text-white transition duration-500">Privacy Policy</a></li>
                        <li><a href="/legal/disclaimer" className="text-secondary hover:text-white transition duration-500">Disclaimer</a></li>
                        <li><a href="/legal/refund" className="text-secondary hover:text-white transition duration-500">Refund Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}