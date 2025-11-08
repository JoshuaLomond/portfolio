import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>Contact Form Submission</title>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>New message from your portfolio site</Preview>
    <Section>
      <Row>
        <Heading as="h1">New Contact Form Submission</Heading>
      </Row>
      <Row>
        <Text>
          You have received a new message from your portfolio contact form.
        </Text>
      </Row>
      <Row>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
      </Row>
      <Row>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
      </Row>
      <Row>
        <Text>
          <strong>Message:</strong>
        </Text>
      </Row>
      <Row>
        <Text>{message}</Text>
      </Row>
    </Section>
  </Html>
);
