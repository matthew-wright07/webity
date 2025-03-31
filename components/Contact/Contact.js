export default function Contact(){
    return (
        <div className="px-8 lg:px-32 py-12 flex justify-center">
            <div className="flex flex-col justify-center w-full border border-white rounded-lg p-10 gap-4">
                <h1 className="text-2xl font-bold text-center">Contact</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="to">To</label>
                    <select name="product" id="product" className="border border-white rounded-lg p-4 hover:cursor-pointer">
                        <option value="webdev" className="text-white bg-black">info@webity.io</option>
                        <option value="uiux" className="text-white bg-black">512-586-4786</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="rounded-lg p-4 border border-white "/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="rounded-lg p-4 border border-white "/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="product">Product</label>
                    <select name="product" id="product" className="border border-white rounded-lg p-4 hover:cursor-pointer">
                        <option value="webdev" className="text-white bg-black">Web Development</option>
                        <option value="uiux" className="text-white bg-black">UI/UX Design</option>
                        <option value="maintenance" className="text-white bg-black">Website Maintenance</option>
                        <option value="hostingdomain" className="text-white bg-black">Hosting & Domain Services</option>
                        <option value="seomarketing" className="text-white bg-black">SEO & Digital Marketing</option>
                        <option value="mobileapp" className="text-white bg-black">Mobile App Development</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="rounded-lg p-4 border border-white "/>
                </div>
                <div className="flex justify-center">
                    <button className="w-full h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition duration-500 hover:cursor-pointer">Submit</button>
                </div>
            </div>
        </div>
    )
}