"use server";

import { resend } from "@/lib/resend";
import { EmailTemplate } from '@/components/email-template';


export async function send(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validate required fields
    if (!name || !email || !message) {
        throw new Error('All fields are required');
    }

    try {
        await resend.emails.send({
            // need to change the domain to send from the user email only
            from: email,
            to: ['pranjalworkon@gmail.com'],
            subject: 'Hey you got a new query from your portfolio',
            react: EmailTemplate({ name, email, message }),
            replyTo: email, // This allows you to reply directly to the sender
        });
        
        // Return only serializable data
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: 'Failed to send email. Please try again.' };
    }
}