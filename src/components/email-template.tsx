import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
  Link,
  Tailwind,
} from '@react-email/components';


interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Preview>New message from {name} via your portfolio</Preview>
                <Body className="bg-gray-100 font-sans py-[40px] m-0">
                    <Container className="mx-auto max-w-[600px] bg-white rounded-[12px] shadow-lg overflow-hidden">
                        
                        {/* Header Section */}
                        <Section className="bg-gradient-to-r from-blue-600 to-indigo-700 px-[32px] py-[40px] text-center">
                            <Text className="text-[48px] mb-[8px] m-0">📬</Text>
                            <Heading className="text-black text-[28px] font-bold m-0 mb-[8px] tracking-tight">
                                New Portfolio Message
                            </Heading>
                            <Text className="text-black text-[16px] m-0 opacity-90">
                                Someone reached out through your website
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="px-[32px] py-[32px]">
                            
                            {/* Sender Information Card */}
                            <Section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-[12px] p-[24px] mb-[32px] border border-gray-200">
                                <Text className="text-[12px] text-gray-800 mb-[8px] font-semibold uppercase tracking-[1px] m-0">
                                    Message From
                                </Text>
                                <Text className="text-[24px] font-bold text-gray-900 mb-[12px] m-0">
                                    {name}
                                </Text>
                                <Link 
                                    href={`mailto:${email}`}
                                    className="inline-flex items-center bg-blue-600 text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium no-underline hover:bg-blue-700 transition-colors"
                                >
                                    📧 {email}
                                </Link>
                            </Section>

                            <Hr className="border-gray-200 my-[32px]" />

                            {/* Message Content */}
                            <Section className="mb-[32px]">
                                <Text className="text-[12px] text-gray-800 mb-[16px] font-semibold uppercase tracking-[1px] m-0">
                                    Message Content
                                </Text>
                                <Section className="bg-blue-50 border-l-[4px] border-blue-500 rounded-r-[8px] p-[24px]">
                                    <Text className="text-gray-900 text-[16px] leading-[24px] m-0 whitespace-pre-wrap">
                                        &quot;{message}&quot;
                                    </Text>
                                </Section>
                            </Section>

                            <Hr className="border-gray-200 my-[32px]" />

                            {/* Quick Actions */}
                            <Section className="text-center mb-[24px]">
                                <Text className="text-[16px] text-gray-800 mb-[24px] m-0">
                                    Ready to respond? Click below to reply directly:
                                </Text>
                                <Link
                                    href={`mailto:${email}?subject=Re: Your message from portfolio&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out through my portfolio. `}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-black font-semibold py-[16px] px-[32px] rounded-[8px] no-underline inline-block hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md box-border"
                                >
                                    Reply to {name}
                                </Link>
                            </Section>

                         {/* Timestamp */}
                            <Section className="bg-gray-50 rounded-[8px] p-[20px] text-center">
                                <Text className="text-[14px] text-gray-800 mb-[8px] m-0">
                                    <strong>Received:</strong> {new Date().toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </Text>
                                <Text className="text-[12px] text-gray-700 m-0">
                                    This message was sent through your portfolio contact form
                                </Text>
                            </Section>
                        </Section>


                        {/* Footer */}
                        <Section className="bg-gray-900 px-[32px] py-[24px] text-center">
                            <Text className="text-gray-300 text-[14px] mb-[8px] m-0">
                                Portfolio Contact Notification System
                            </Text>
                            <Text className="text-gray-500 text-[12px] m-0">
                                © {new Date().getFullYear()} - Automated message delivery
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};



export default EmailTemplate;