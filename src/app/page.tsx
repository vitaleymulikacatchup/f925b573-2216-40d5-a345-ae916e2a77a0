"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Activity, Gauge, Linkedin, Shield, TrendingUp, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="grid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="FlightSync"
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Metrics", id: "metrics" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Advanced Flight Automation"
          title="The Future of Aviation Control"
          description="Revolutionize your flight operations with intelligent automation that reduces pilot workload, increases safety, and optimizes performance across your entire fleet."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969283995-26ufsefc.jpg"
          imageAlt="Flight automation control dashboard"
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Watch Demo", onClick: () => {} }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          tag="Core Capabilities"
          title="Intelligent Flight Automation"
          description="Comprehensive automation solutions designed for modern aviation"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Autonomous Navigation",
              description: "Advanced route optimization and waypoint management with real-time adjustments based on weather and air traffic",
              icon: Zap
            },
            {
              title: "Predictive Maintenance",
              description: "AI-driven system health monitoring that predicts failures before they occur, reducing downtime and maintenance costs",
              icon: Shield
            },
            {
              title: "Energy Optimization",
              description: "Intelligent fuel consumption management through continuous performance analysis and optimization algorithms",
              icon: Gauge
            },
            {
              title: "Real-Time Monitoring",
              description: "Live dashboard tracking of all systems with instant alerts for anomalies and recommended corrective actions",
              icon: Activity
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Mission"
          title="Transforming Aviation Through Technology"
          description="We believe that intelligent automation is the key to safer, more efficient, and more sustainable aviation. Our platform empowers pilots and operators with cutting-edge technology that handles complex tasks seamlessly."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969284735-hw0xltig.jpg",
            imageAlt: "Flight control mobile application"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969285468-qnx1gqtw.jpg",
            imageAlt: "Airplane automation system mobile dashboard"
          }}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          tag="Performance Metrics"
          title="Impact By The Numbers"
          description="Real results from aviation operators using our automation platform"
          textboxLayout="default"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Efficiency Gain",
              value: "34%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969286261-ypoti8tn.jpg"
            },
            {
              id: "2",
              icon: Zap,
              title: "Fuel Savings",
              value: "28%",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969287044-ldmzgdx4.jpg"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          tag="Expert Team"
          title="Meet The Innovators"
          description="Industry veterans and technology pioneers working to advance aviation"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Captain James Mitchell",
              role: "Chief Pilot",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969288007-50dcyqbg.jpg"
            },
            {
              id: "2",
              name: "Dr. Sarah Chen",
              role: "Engineering Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969288691-3uadt7mj.jpg"
            },
            {
              id: "3",
              name: "Marcus Rodriguez",
              role: "AI Architect",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969289628-hmdwpdmj.jpg"
            },
            {
              id: "4",
              name: "Elena Volkova",
              role: "Systems Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969290299-glp3o4op.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          tag="Client Testimonials"
          title="Trusted By Aviation Leaders"
          description="Hear from industry professionals who have transformed their operations"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Captain Robert Thompson",
              role: "Chief Pilot",
              company: "Delta Air Systems",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969290796-u33f71cn.jpg"
            },
            {
              id: "2",
              name: "Lisa Anderson",
              role: "Flight Operations Manager",
              company: "United Aviation Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969291458-bx2k7s2e.jpg"
            },
            {
              id: "3",
              name: "Dr. Michael Kowalski",
              role: "VP Technology",
              company: "European Aerospace Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969292148-6en8ybp4.jpg"
            },
            {
              id: "4",
              name: "Jennifer Park",
              role: "Maintenance Director",
              company: "Pacific Aviation Services",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969292654-dcodf8wv.jpg"
            },
            {
              id: "5",
              name: "David Hassan",
              role: "Operations Director",
              company: "Middle East Airlines",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969293372-6ff74paz.jpg"
            },
            {
              id: "6",
              name: "Sophie Laurent",
              role: "Systems Engineer",
              company: "Air France Technical",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969293869-qa9eieia.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Automate Your Fleet?"
          description="Join leading aviation operators transforming their operations. Get in touch with our team to schedule a personalized demonstration."
          inputs={[
            { name: "company", type: "text", placeholder: "Airline / Company Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "fleetSize", type: "text", placeholder: "Aircraft Fleet Size", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your automation needs and timeline",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763969294565-gp8ftuun.jpg"
          mediaPosition="right"
          buttonText="Request Demo"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="FlightSync"
          copyrightText="© FlightSync, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "#" },
                { label: "Documentation", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "#" },
                { label: "Help Center", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}