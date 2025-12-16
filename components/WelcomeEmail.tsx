import {
  Body,
  Html,
  Button,
  Container,
  Head,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type WelcomeEmailProp = {
  userName: string;
};
export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProp>> = ({
  userName,
}) => (
  <Html>
    <Head />
    <Preview>Welcome To Lumina</Preview>
    <Tailwind>
      <Body className="bg-black text-white font-sans">
        <Container className="my-10 mx-auto p-5">
          <Section className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <Text className="text-orange-500 font-bold text-xl mb-4">
              LUMINA
            </Text>
            <Text className="text-white">
              You are on the waiting list, {userName}
            </Text>
            <Button href={process.env.NEXT_PUBLIC_BASE_URL}>Dashboard</Button>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
