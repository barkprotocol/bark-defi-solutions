"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx } from '@/ui/components';
import Link from 'next/link';

export default function Home() {
  // Define the links for different sections with descriptions
  const links = [
    {
      href: "https://example.com/swap",
      title: "Swap",
      description: "Effortlessly exchange assets with our intuitive swap interface.",
    },
    {
      href: "https://example.com/mev-agents",
      title: "MEV Agents",
      description: "Leverage advanced strategies and engage in MEV activities with our open-source algorithms.",
    },
    {
      href: "https://example.com/arena",
      title: "Bark Arena",
      description: "Participate in real-time order flow auctions and peer-to-peer matches.",
    },
  ];

  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      <Background dots={false} />
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={68}
        direction="column" alignItems="center" flex={1}>
        <Flex
          as="main"
          direction="column" justifyContent="center"
          fillWidth fillHeight padding="l" gap="l">
          <Flex
            mobileDirection="column"
            fillWidth gap="24">
            <Flex
              position="relative"
              flex={2} paddingTop="56" paddingX="xl">
              <Logo size="xl" icon={false} style={{ zIndex: '1' }} />
            </Flex>
            <Flex
              position="relative"
              flex={4} gap="24" marginBottom="104"
              direction="column">
              <InlineCode
                className="shadow-m"
                style={{
                  width: 'fit-content',
                  padding: 'var(--static-space-8) var(--static-space-16)',
                  backdropFilter: 'blur(var(--static-space-1))'
                }}>
                Powered by <span className="brand-on-background-medium">Solana</span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s">
                <span className="font-code">
                  <LetterFx trigger="instant">
                    Revolutionizing DeFi with Innovative Solutions
                  </LetterFx>
                </span>
              </Heading>
              <Button
                href="https://docs.barkprotocol.net"
                suffixIcon="chevronRight"
                variant="secondary">
                Read Documentation
              </Button>
            </Flex>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth>
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: 'var(--responsive-space-l)' }}
                key={link.href}
                href={link.href}>
                <Flex
                  fillWidth paddingY="8" gap="8"
                  direction="column">
                  <Flex
                    fillWidth gap="12"
                    alignItems="center">
                    <Text
                      variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth paddingX="l" paddingY="m"
        justifyContent="space-between">
        <Text
          variant="body-default-s" onBackground="neutral-weak">
          © 2024 BARK Protocol. All rights reserved. <Link href="https://example.com/terms">Terms of Use</Link>
        </Text>
        <Flex gap="12">
          <Button
            href="https://github.com/barkprotocol/bark-defi-solutions"
            prefixIcon="github" size="s" variant="tertiary">
            GitHub
          </Button>
          <Button
            href="https://discord.com/invite/"
            prefixIcon="discord" size="s" variant="tertiary">
            Discord
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
