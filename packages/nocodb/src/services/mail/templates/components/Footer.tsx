import {
  Column,
  Container,
  Link,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
export const Footer = () => {
  return (
    <Container className="px-3">
      <Text className="text-gray-500 m-auto text-sm max-w-[400px] text-center">
        CorivaCRM help businesses maintain critical data with our solutions.
      </Text>
      <Section className="mt-6">
        <Row className="max-w-[380px] m-auto">
          <Column className="border pr-1 border-y-0 border-l-0 border-r-1 border-solid border-gray-200">
            <Link href="https://crm.coriva.tech" target="_blank">
              <Text className="text-center underline py-0 !my-0 text-gray-500 text-[13px]">
                Getting Started
              </Text>
            </Link>
          </Column>
          <Column className="pl-1">
            <Link href="https://coriva.tech/terms" target="_blank">
              <Text className="text-center underline py-0 !my-0 text-gray-500 text-[13px]">
                Terms of Service
              </Text>
            </Link>
          </Column>
        </Row>

        <Row className="mt-6">
          <Column>
            <Text className="text-center !my-0 text-gray-500 text-[13px]">
              {new Date().getFullYear()} — © Coriva LLC.
            </Text>
          </Column>
        </Row>
        <Row className="mt-6">
          <Column>
            <Text className="text-center !my-0 text-gray-500 text-[13px]">
              All rights reserved.
            </Text>
          </Column>
        </Row>
      </Section>
    </Container>
  );
};
