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
    Row,
    Column
} from '@react-email/components';

interface EmailTemplateProps {
    name: string;
    message: string;
    email: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from {name} via your portfolio</Preview>
            <Body className="bg-gray-50 font-sans m-0 p-0">
                <Container className="mx-auto py-5 px-0 max-w-2xl">
                    {/* Header */}
                    <Section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl px-6 py-8 text-center">
                        <Heading className="text-white text-3xl font-bold m-0 mb-2 tracking-tight">
                            📬 New Portfolio Message
                        </Heading>
                        <Text className="text-blue-100 text-base m-0 opacity-90">
                            Someone reached out through your website
                        </Text>
                    </Section>

                    {/* Main Content */}
                    <Section className="bg-white px-6 py-8 border-l border-r border-gray-200">
                        {/* Sender Info Card */}
                        <Section className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                            <Row>
                                <Column className="w-full">
                                    <Text className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">
                                        From
                                    </Text>
                                    <Text className="text-xl font-semibold text-gray-900 mb-2 m-0">
                                        {name}
                                    </Text>
                                    <Link 
                                        href={`mailto:${email}`}
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium no-underline"
                                    >
                                        📧 {email}
                                    </Link>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="border-gray-200 my-6" />

                        {/* Message Content */}
                        <Section>
                            <Text className="text-sm text-gray-500 mb-3  uppercase tracking-wide font-bold">
                                Message
                            </Text>
                            <Section className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4">
                                <Text className="text-gray-800 text-base leading-relaxed m-0 whitespace-pre-wrap">
                                    {message}
                                </Text>
                            </Section>
                        </Section>

                        <Hr className="border-gray-200 my-6" />

                        {/* Call to Action */}
                        <Section className="text-center">
                            <Link
                                href={`mailto:${email}?subject=Re: Your message from portfolio`}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg no-underline inline-block transition-colors"
                            >
                                Reply to {name}
                            </Link>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section className="bg-gray-100 rounded-b-xl px-6 py-4 text-center border-l border-r border-b border-gray-200">
                        <Text className="text-gray-500 text-xs m-0">
                            This message was sent through your portfolio contact form
                        </Text>
                    </Section>

                    {/* Timestamp */}
                    <Section className="text-center mt-4">
                        <Text className="text-gray-400 text-xs m-0">
                            Received on {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}