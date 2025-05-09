import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req){
    const data = await req.json()
    console.log(data)
    const email = await resend.emails.send({
        from: 'New_Client@resend.dev',
        to: "matthewjwright07@gmail.com",
        subject: "New Client",
        text: `Name: ${data.name}\nEmail: ${data.email}\nProduct: ${data.product}\nMessage: ${data.message}`,
    });
    return new Response(JSON.stringify("Done"))
}