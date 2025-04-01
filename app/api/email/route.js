import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req){
    const data = await req.json()
    console.log(data)
    const email = await resend.emails.send({
        from: 'delivered@resend.dev',
        to: "info@webity.io",
        subject: "New Client",
        text: `Name: ${data.name}\nEmail: ${data.email}\nProduct: ${data.product}\nMessage: ${data.message}`,
    });
    return new Response(JSON.stringify("Done"))
}