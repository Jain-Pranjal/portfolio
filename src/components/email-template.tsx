import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
    name: string
    message: string
    email: string
}

const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
    return (
        <Html lang="en">
            <Head>
                <style>{`
                    @import url("https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap");
                    
                    * {
                        font-family: "Satoshi", "Helvetica Neue", Helvetica, Arial, "Segoe UI", sans-serif;
                    }
                    
                    body, table, td, a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                    }
                    
                    table, td {
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                    }
                `}</style>
            </Head>
            <Preview>New message from {name} via your portfolio</Preview>
            <Body
                style={{
                    width: '100%',
                    height: '100%',
                    fontFamily:
                        "'Satoshi', 'Helvetica Neue', Helvetica, Arial, 'Segoe UI', sans-serif",
                    backgroundColor: '#0b0b12',
                    padding: 0,
                    margin: 0,
                }}
            >
                <Container style={{ maxWidth: '600px', padding: '0 50px' }}>
                    {/* Logo/Icon Section */}
                    <Section style={{ textAlign: 'center', padding: '56px 0' }}>
                        <Text style={{ fontSize: '40px', margin: 0 }}>✉️</Text>
                    </Section>

                    {/* Heading */}
                    <Section
                        style={{
                            textAlign: 'center',
                            borderTop: '1px solid #2d3468',
                            paddingTop: '80px',
                            paddingBottom: '24px',
                        }}
                    >
                        <Heading
                            style={{
                                margin: 0,
                                fontSize: '48px',
                                fontWeight: 400,
                                color: '#ffffff',
                                background:
                                    'linear-gradient(180deg, #ffffff 0%, #f7f7f8 61.54%, #a0a1a8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            New Message
                        </Heading>
                    </Section>

                    {/* Subtitle */}
                    <Section
                        style={{ textAlign: 'center', paddingBottom: '40px' }}
                    >
                        <Text
                            style={{
                                margin: 0,
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#b0b6c7',
                            }}
                        >
                            Someone reached out through your portfolio
                        </Text>
                    </Section>

                    {/* Sender Info */}
                    <Section
                        style={{
                            textAlign: 'center',
                            padding: '24px',
                            borderRadius: '12px',
                            border: '1px solid #2d3468',
                            marginBottom: '32px',
                        }}
                    >
                        <Text
                            style={{
                                margin: 0,
                                fontSize: '12px',
                                color: '#64687f',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '8px',
                            }}
                        >
                            FROM
                        </Text>
                        <Text
                            style={{
                                margin: '8px 0',
                                fontSize: '28px',
                                fontWeight: 500,
                                color: '#ffffff',
                            }}
                        >
                            {name}
                        </Text>
                        <Text
                            style={{
                                margin: '8px 0 0 0',
                                fontSize: '16px',
                                color: '#b0b6c7',
                            }}
                        >
                            {email}
                        </Text>
                    </Section>

                    {/* Message Content */}
                    <Section
                        style={{
                            padding: '24px',
                            borderRadius: '12px',
                            border: '1px solid #2d3468',
                            marginBottom: '32px',
                        }}
                    >
                        <Text
                            style={{
                                margin: '0 0 16px 0',
                                fontSize: '12px',
                                color: '#64687f',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}
                        >
                            MESSAGE
                        </Text>
                        <Text
                            style={{
                                margin: 0,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#b0b6c7',
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            &quot;{message}&quot;
                        </Text>
                    </Section>

                    {/* CTA Button */}
                    <Section
                        style={{ textAlign: 'center', padding: '40px 0 72px' }}
                    >
                        <Link
                            href={`mailto:${email}?subject=Re: Your message from portfolio&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out through my portfolio.`}
                            style={{
                                display: 'inline-block',
                                fontSize: '18px',
                                lineHeight: '18px',
                                fontWeight: 500,
                                color: '#ffffff',
                                textDecoration: 'none',
                                padding: '24px 48px',
                                borderRadius: '999px',
                                border: '1px solid rgba(209, 215, 249, 0.14)',
                                background:
                                    'linear-gradient(162.61deg, rgba(255, 255, 255, 0.08) 11.92%, rgba(255, 255, 255, 0.048) 51.22%, rgba(255, 255, 255, 0.02) 91.28%)',
                            }}
                        >
                            Reply to {name}
                        </Link>
                    </Section>

                    {/* Timestamp */}
                    <Section
                        style={{
                            textAlign: 'center',
                            padding: '20px',
                            marginBottom: '24px',
                        }}
                    >
                        <Text
                            style={{
                                margin: 0,
                                fontSize: '14px',
                                color: '#64687f',
                            }}
                        >
                            Received:{' '}
                            {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section
                        style={{
                            textAlign: 'center',
                            borderTop: '1px solid #2d3468',
                            padding: '24px 0 40px',
                        }}
                    >
                        <Text
                            style={{
                                margin: 0,
                                fontSize: '12px',
                                color: '#64687f',
                            }}
                        >
                            Portfolio Contact System ©{' '}
                            {new Date().getFullYear()}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default EmailTemplate
