"use client";

import { useState } from 'react';
import { Container, Anchor, Group, Burger, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
const img = require('./sovesa_logo.png').default;
import classes1 from './HeaderMenu.module.css';

//mainstart-homepage
import { Overlay } from '@mantine/core';
import classes4 from './mainstart.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes4.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes4.container} size="md">
        <Title className={classes4.title}>A fully featured React components library</Title>
        <Text className={classes4.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes4.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}

// comments (For testimonials)
import { Avatar } from '@mantine/core';

export function CommentSimple() {
  return (
    <div>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="sm">Jacob Warnhalter</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm">
        This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
        concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
        water spouts that protrude from its shell. The water spouts are very accurate.
      </Text>
    </div>
  );
}

// footer component
import {ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './footer.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <img src={img.src} alt="Logo" className={classes1.logo} width="100" height="100" /> 
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

//FAQ component
import { Image, Accordion} from '@mantine/core';
// import image from './image.svg';
import classes3 from './FAQ.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FaqWithImage() {
  return (
    <div className={classes3.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={img.src} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes3.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes3.item} value="reset-password">
                <Accordion.Control>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes3.item} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes3.item} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes3.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

//grid component
import { Grid, SimpleGrid, Skeleton} from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

// carousal component

import { useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery, useInterval } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes2 from './cardCarousal.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes2.card}
    >
      <div>
        <Text className={classes2.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes2.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read more
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  }
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const breakpointInPixels = parseFloat(theme.breakpoints.sm) * 16; // Convert em to pixels

    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpointInPixels);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme.breakpoints.sm]);

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  const interval = useInterval(() => {
    setCurrentIndex((current) => (current + 1) % data.length);
  }, 5000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [interval]);

  return (
    <Carousel
      slideSize={isMobile ? '100%' : '50%'}
      slideGap={isMobile ? rem(2) : 'xl'}
      align="start"
      slidesToScroll={1}
      withIndicators
      loop
      initialSlide={currentIndex}
    >
      {slides}
    </Carousel>
  );
}

// email input component

import { useRef } from 'react';
import { Autocomplete, Loader } from '@mantine/core';
import Link from 'next/link';

export function AutocompleteLoading() {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };
  return (
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="You may share your email here to receive regular updates from us"  //Async Autocomplete data
      placeholder="Your email"
    />
  );
}

//header

const userLinks = [
  { link: '/home/sign-up', label: 'Sign up' },
  { link: '/sign-in', label: 'Sign in' },
  { link: '/home/support-options', label: 'Support options' },
];

const mainLinks = [
  { link: '#', label: 'Daily practices' },
  { link: '#', label: 'Courses' },
  { link: '#', label: 'Our philosophy' },
  { link: '#', label: 'Trips' },
  { link: '#', label: 'Festivals & events' },
  { link: '#', label: 'About us' },
];

export function DoubleHeader(){
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    // <Link href={item.link}>
      <Anchor<'a'>
        href={item.link}
        key={item.label}
        className={classes1.mainLink}
        data-active={index === active || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
        }}
      >
        {item.label}
      </Anchor>
    // </Link>
  ));

  const secondaryItems = userLinks.map((item) => (
    // <Anchor
    //   href={item.link}
    //   key={item.label}
    //   onClick={(event) => event.preventDefault()}
    //   className={classes1.secondaryLink}
    // >
    //   {item.label}
    // </Anchor>
    <Link href={item.link}>
      {item.label}
    </Link>
  ));

  return (
    <header className={classes1.header}>
      <Container className={classes1.inner}>
      <img src={img.src} alt="Logo" className={classes1.logo} width="100" height="80" /> 
        <Box className={classes1.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes1.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes1.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}

export default function Home() {
  return (
    <div>
      <DoubleHeader />
      <HeroContentLeft/>
      <h1><pre>                             Hare krishna!</pre></h1>
      <AutocompleteLoading/>
      <br></br><br></br>
      <CardsCarousel/>
      <br></br><br></br>
      <LeadGrid/>
      <br></br><br></br>
      <h1>Testimonials</h1>
      <CommentSimple/>
      <br></br><br></br>
      <FaqWithImage/>
      {/* <div style={{ height: '200vh' }}></div> */}
      <br></br><br></br>
      <FooterSocial/>
      
    </div>
    
  );
}
