import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { P } from '@react-email/p';
import * as React from 'react';

interface StripeWelcomeProps {}

export const StripeWelcome: React.FC<Readonly<StripeWelcomeProps>> = () => {
  return (
    <Html>
      <Head />
      <table
        style={main}
        width="100%"
        border={0}
        cellSpacing="0"
        cellPadding="0"
      >
        <tr>
          <td>
            <Container style={container}>
              <div style={box}>
                <Img
                  src="/static/images/stripe-logo.png"
                  width="49"
                  height="21"
                  alt="Stripe"
                />
                <Hr style={hr} />
                <P style={paragraph}>
                  Thanks for submitting your account information. You're now
                  ready to make live transactions with Stripe!
                </P>
                <P style={paragraph}>
                  You can view your payments and a variety of other information
                  about your account right from your dashboard.
                </P>
                <Button
                  pX={10}
                  pY={10}
                  style={button}
                  href="https://dashboard.stripe.com/login"
                >
                  View your Stripe Dashboard
                </Button>
                <Hr style={hr} />
                <P style={paragraph}>
                  If you haven't finished your integration, you might find our{' '}
                  <Link style={anchor} href="https://stripe.com/docs">
                    docs
                  </Link>{' '}
                  handy.
                </P>
                <P style={paragraph}>
                  Once you're ready to start accepting payments, you'll just
                  need to use your live{' '}
                  <Link
                    style={anchor}
                    href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
                  >
                    API keys
                  </Link>{' '}
                  instead of your test API keys. Your account can simultaneously
                  be used for both test and live requests, so you can continue
                  testing while accepting live payments. Check out our{' '}
                  <Link style={anchor} href="https://stripe.com/docs/dashboard">
                    tutorial about account basics
                  </Link>
                  .
                </P>
                <P style={paragraph}>
                  Finally, we've put together a{' '}
                  <Link
                    style={anchor}
                    href="https://stripe.com/docs/checklist/website"
                  >
                    quick checklist
                  </Link>{' '}
                  to ensure your website conforms to card network standards.
                </P>
                <P style={paragraph}>
                  We'll be here to help you with any step along the way. You can
                  find answers to most questions and get in touch with us on our{' '}
                  <Link style={anchor} href="https://support.stripe.com/">
                    support site
                  </Link>
                  .
                </P>
                <P style={paragraph}>— The Stripe team</P>
                <Hr style={hr} />
                <P style={footer}>
                  Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
                </P>
              </div>
            </Container>
          </td>
        </tr>
      </table>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const footer = {
  color: '#8898aa',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
};

export default StripeWelcome;
