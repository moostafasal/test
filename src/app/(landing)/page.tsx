'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  CarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Browse & Compare',
      description:
        'Easily browse and compare rental cars from a wide range of providers.',
      icon: <CarOutlined />,
    },
    {
      heading: 'Real-Time Updates',
      description:
        'Get real-time availability updates to ensure you find the perfect vehicle.',
      icon: <ClockCircleOutlined />,
    },
    {
      heading: 'Secure Payments',
      description:
        'Enjoy secure payment options for a hassle-free booking experience.',
      icon: <DollarOutlined />,
    },
    {
      heading: 'Exclusive Deals',
      description:
        'Access exclusive deals and discounts to make car rentals more affordable.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Comprehensive Support',
      description:
        'Benefit from comprehensive customer support whenever you need it.',
      icon: <UserOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Business Traveler',
      content:
        'The Rent Car App made my business trip so much smoother. I could book a car in minutes!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Tourist',
      content:
        'Exploring new destinations has never been easier. The app is a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Commuter',
      content:
        'I love the convenience of short-term rentals for weekend getaways. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Ideal for occasional renters',
      monthly: 9,
      yearly: 69,
      features: ['Browse & Compare', 'Real-Time Updates'],
    },
    {
      title: 'Premium',
      description: 'Perfect for frequent travelers',
      monthly: 19,
      yearly: 149,
      features: [
        'Browse & Compare',
        'Real-Time Updates',
        'Secure Payments',
        'Exclusive Deals',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Best for businesses',
      monthly: 29,
      yearly: 229,
      features: [
        'Browse & Compare',
        'Real-Time Updates',
        'Secure Payments',
        'Exclusive Deals',
        'Comprehensive Support',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How do I book a car?',
      answer:
        'Simply browse available cars, compare options, and book directly through the app.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, we provide transparent pricing with no hidden fees.',
    },
    {
      question: 'Can I cancel my booking?',
      answer:
        'Yes, you can cancel your booking within the app according to our cancellation policy.',
    },
    {
      question: 'Is customer support available?',
      answer:
        'Absolutely! Our customer support team is available 24/7 to assist you.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description:
        'Create an account to get started with our seamless car rental service.',
    },
    {
      heading: 'Browse Cars',
      description:
        'Explore a wide range of rental cars and find the perfect one for your needs.',
    },
    {
      heading: 'Book & Pay',
      description:
        'Book your chosen car and make secure payments through the app.',
    },
    {
      heading: 'Drive Away',
      description:
        'Pick up your car and enjoy your journey with ease and convenience.',
    },
  ]

  const painPoints = [
    {
      emoji: '⏳',
      title: 'Long Wait Times',
    },
    {
      emoji: '📄',
      title: 'Lengthy Paperwork',
    },
    {
      emoji: '😞',
      title: 'Inconsistent Service',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Drive Your Dreams"
        subtitle="Effortlessly rent the perfect car for any occasion"
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/sX57a4-getcar-AK94"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy customers"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Travel Goals"
        subtitle="Our app makes car rentals simple and stress-free"
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from our satisfied customers"
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Affordable Plans for Everyone"
        subtitle="Choose a plan that fits your needs"
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="We've got answers to your questions"
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Hit the Road?"
        subtitle="Sign up now and start your journey"
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
