"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, Leaf, Network, Package, Smartphone, Sparkles, Star, TrendingUp, Users, MessageSquare, Building, HelpCircle, Shield, Zap, Palette, Twitter, Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Support", id: "faq" }
          ]}
          brandName="Apple"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Think Different"
          description="Experience the perfect blend of innovation, design, and technology that transforms the way you work, create, and connect."
          tag="Innovation"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Products", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g7067bc92d502d7e53d975390674c73a5cb09716a24e2b6b749ff35649c4170eebae61496b405a8ac59ad19819403c4208196ea84eaa9621924371649e148e6e5_1280.jpg",
              imageAlt: "iPhone"
            },
            {
              imageSrc: "https://pixabay.com/get/g89c8c91ed8a92755cae01515b8458acb59f92059815f89690ad834332fd92e45a8e88fa4e32548f839cafb84ae95de8282fc867e208a2a289971d9b7bab0d4a2_1280.jpg",
              imageAlt: "MacBook Pro"
            },
            {
              imageSrc: "https://pixabay.com/get/g7fef5ca5607b3f990e4258d71ea3a84c0055cfa7b4d2f82b4b47cd2299ddd49fa5fc44d2b8e72d6a299695a5f684391b69af078650ec995450d007a2ad966eb8_1280.jpg",
              imageAlt: "iPad"
            },
            {
              imageSrc: "https://pixabay.com/get/gb0a10da90cf586a98261ce8b2454d555bb4a8631ac5c1150701fa2d8921764420bbcf0b6304b26d403f1ddd62016630dc9f195aa5f66e420f288686ed6109197_1280.jpg",
              imageAlt: "Apple Watch"
            },
            {
              imageSrc: "https://pixabay.com/get/gb6a4f49ca09c450ecab826bfe19bfa63172c29ea8b1c973bffa01ce988332b7d3eef50b7ac68511cc86dff20227f04d39b9bb00e9d54073545a64cbcf5b334a5_1280.jpg",
              imageAlt: "AirPods"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe technology should enhance human potential, not complicate it. Our commitment to simplicity, quality, and innovation drives everything we create."
          features={[
            {
              icon: Zap,
              title: "Innovation First",
              description: "We push the boundaries of what's possible, creating breakthrough technologies that redefine entire industries and set new standards."
            },
            {
              icon: Shield,
              title: "Privacy by Design",
              description: "Your data belongs to you. We build privacy into everything we make, ensuring your personal information stays personal."
            },
            {
              icon: Palette,
              title: "Design Excellence",
              description: "Every detail matters. From the curve of a corner to the feel of a surface, we obsess over creating beautiful, intuitive experiences."
            },
            {
              icon: Leaf,
              title: "Environmental Responsibility",
              description: "We're committed to leaving the planet better than we found it through renewable energy, recycled materials, and carbon neutrality."
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Designed for Excellence"
          description="Every feature is thoughtfully crafted to deliver an unparalleled user experience"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          features={[
            { title: "Seamless Performance", icon: Zap },
            { title: "Intuitive Interface", icon: Smartphone },
            { title: "Advanced Security", icon: Shield },
            { title: "Ecosystem Integration", icon: Network },
            { title: "Sustainable Design", icon: Leaf }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Product Line"
          description="Discover our range of innovative products designed to enhance your digital life"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "iphone",
              brand: "Apple",
              name: "iPhone Pro",
              price: "$999.00",
              rating: 5,
              reviewCount: "125k",
              imageSrc: "https://pixabay.com/get/ga117f3ebcae0996cf8394d93806e0403ff664e628c8849c1f2972df3dd0d5a76ff29c7ac816b728e055c71eea6acec2ba2413911ed16eba9bc048d29b6743d6a_1280.jpg",
              imageAlt: "iPhone Pro"
            },
            {
              id: "macbook",
              brand: "Apple",
              name: "MacBook Pro",
              price: "$1,999.00",
              rating: 5,
              reviewCount: "89k",
              imageSrc: "https://pixabay.com/get/gd6477999c32ae11516682436cea75318463badaf53de5bcb2f849245f58e9fb4887d4bd1e15565ebf546761f42f79a4535b17db490c4ff1b271b2dfd7eaccb3f_1280.jpg",
              imageAlt: "MacBook Pro"
            },
            {
              id: "ipad",
              brand: "Apple",
              name: "iPad Pro",
              price: "$799.00",
              rating: 5,
              reviewCount: "67k",
              imageSrc: "https://pixabay.com/get/g18af783d31517c479e3013a8a6ca695394bd514eda7aeb072c56c3373211e17b2c2737ee6abdd5aa536b9d96969c6136d4c9542da7e6884ae4ff68a7bed497f4_1280.jpg",
              imageAlt: "iPad Pro"
            },
            {
              id: "watch",
              brand: "Apple",
              name: "Apple Watch",
              price: "$399.00",
              rating: 5,
              reviewCount: "156k",
              imageSrc: "https://pixabay.com/get/g3228d2b2aa06cb3ad45a90124469b2d813ea4129166470f7a781ad854690b3e3aa1b5ab7e444a46c8678a35eed740fd6ea6d18e8f209298f749abfbb6070595a_1280.jpg",
              imageAlt: "Apple Watch"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Global Impact"
          description="Numbers that reflect our commitment to innovation and customer satisfaction"
          tag="Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "1.8B+",
              title: "Active Devices",
              description: "Devices worldwide running our ecosystem",
              icon: Smartphone
            },
            {
              id: "2",
              value: "99%",
              title: "Customer Satisfaction",
              description: "Users who would recommend our products",
              icon: Heart
            },
            {
              id: "3",
              value: "Carbon",
              title: "Neutral",
              description: "Committed to environmental responsibility",
              icon: Leaf
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The visionaries and creators behind our innovative products"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Design Lead",
              imageSrc: "https://pixabay.com/get/g01ee125c780e1569aa13c09036677ef0b48f556be27ebf8c9c0d500ac883c96b2a69eba315e5d1ecd904a226f63508488de71b63bf3dd26e23dce72af3c4857a_1280.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Engineering",
              imageSrc: "https://pixabay.com/get/g9786a9aa9f3a3c443075246a1e246c974b53437236feeb83470d770b8095280439dbd2b41540b79d53ffa9c63dca238f8a31927281e4f31bd5940955edd90472_1280.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Product Strategy",
              imageSrc: "https://pixabay.com/get/g6e77fe71eb7e3218898bbc723bdda90ff12f76f0137a6f9d5b676a103517e1406ad70e300c4d5ce64ded9c917f70c584dd0381504e0c9cded5f2e31c2c974288_1280.jpg",
              imageAlt: "Elena Rodriguez"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What People Are Saying"
          description="Real experiences from our satisfied customers around the world"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "David Kim",
              role: "Creative Director at Studio X",
              testimonial: "The seamless integration across devices has revolutionized how our team collaborates. It's not just technology, it's magic.",
              imageSrc: "https://pixabay.com/get/g86dc7167fd31a40af3b0e256581992f437ccbfc6a3ac996fb1e1ba8f9d4ffd5cadc7fdebcfc19245a5ec40491375b5819b1a6ed7e5644b6a7213ee28bdbeb986_1280.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Photographer & Content Creator",
              testimonial: "The quality and attention to detail in every product is extraordinary. It's clear that this company truly cares about user experience.",
              imageSrc: "https://pixabay.com/get/g731391c903083ebaff86c640a0ea079b5623dbefee26f6c9c55b69d37147158dc3b0ec4b706d67566bffe97d524f1f4830b82168ca0e8b3862dff1eebc09f9ad_1280.jpg",
              imageAlt: "Maria Santos"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Technology Consultant",
              testimonial: "I've never experienced such intuitive design combined with powerful performance. These products set the standard for the industry.",
              imageSrc: "https://pixabay.com/get/g8407b6e0f24223a9607d431643453a38804426cfe35164d82ed825fe5a258b4283e7f81551cedbbd5ac917db11e3300a692d4eda88f8f01e1b69daa03bdf6d90_1280.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "4",
              name: "Lisa Chang",
              role: "Small Business Owner",
              testimonial: "From the moment I unboxed my first device, I knew this was different. The ecosystem just works, and it works beautifully.",
              imageSrc: "https://pixabay.com/get/g4e2b1f2410ba4e5dade967952c5d75eed197f39053bec61beda68bca0cfe408878b193fd207bb50d88864c6f2b621411030017824713eb73be1579e9b9f4aa6c_1280.jpg",
              imageAlt: "Lisa Chang"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join millions of professionals and companies who rely on our ecosystem daily"
          tag="Partners"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g671637b8416d9ddfdf540d6bb86d52bac84e85dce5eeafc79571767ee1de582602ec894213cf0fb24355a83f87c5b4392f02132c29fc7fe0ce4e467b6872ee91_1280.jpg",
            "https://pixabay.com/get/g3d30cac1682e175ea6bea6eb73fe08d9bbcd0b4888835209d04710ecade8dae7e3ca979358523c5ef277ad2e8b67bad09f36f027dce79f1235df3bbd49d47ab8_1280.jpg",
            "https://pixabay.com/get/gfff358d6a014701ab3234965a1c00ef1d73a80d13cef5c94d7360b359c6eb052690c9fb25dada025131a63ec0829552703bbf459b070e5e53f3699532f206ac5_1280.jpg",
            "https://pixabay.com/get/g233d034660e0799b485816d48efd9a35680e133d46d846f676502a5ca69441d2cc18565ca7baea761619084ac781aca6fb6a7ef3cc910bb5cff29bed8e7a264b_1280.jpg",
            "https://pixabay.com/get/g42157e5f625917f51657c92afacab62d84a2e94a988e49f091617eedc0f031e034fc31b046128aca9b1b6054b0dcdcf5553b168387f6b87231e1b9fdffbe0770_1280.jpg",
            "https://pixabay.com/get/gb36d39052eb2481a3a853fd24b3c450e2c92afe55ce49f66da7a009d70c7c54554c114eb0bb344303132f9dbf6d273fc1d5a8ce14069602793a07f6d16993dcf_1280.jpg",
            "https://pixabay.com/get/g9300357a90f53e07e3b0b24842ec104039c134941296910f1fdfa96945b5128ad9bb1837ff392e12f4d469a8135bbf27654db54b117aea35f00dc5e3455fa3d4_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our products and services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes your products different?",
              content: "Our products are designed with a focus on simplicity, quality, and user experience. We integrate hardware and software seamlessly to create products that are intuitive, powerful, and beautiful."
            },
            {
              id: "2",
              title: "How do I get support for my device?",
              content: "We offer comprehensive support through multiple channels including our online support portal, phone support, and in-person assistance at our retail locations. Our support team is available 24/7 to help you."
            },
            {
              id: "3",
              title: "What is your privacy policy?",
              content: "Privacy is a fundamental human right. We design our products and services to minimize data collection, use on-device processing whenever possible, and give you control over your information."
            },
            {
              id: "4",
              title: "Do you offer trade-in programs?",
              content: "Yes, we offer trade-in programs for most of our products. You can trade in your old device for credit toward a new purchase, and we'll ensure your old device is recycled responsibly."
            },
            {
              id: "5",
              title: "What about environmental impact?",
              content: "We're committed to becoming carbon neutral across our entire business by 2030. We use recycled materials, renewable energy, and have programs to help customers recycle their devices responsibly."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have a question or want to learn more about our products? We'd love to hear from you."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Apple"
          copyrightText="© 2025 Apple Inc. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "iPhone", href: "products" },
                { label: "Mac", href: "products" },
                { label: "iPad", href: "products" },
                { label: "Watch", href: "products" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Support", href: "faq" },
                { label: "AppleCare", href: "faq" },
                { label: "Updates", href: "faq" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Apple", href: "about" },
                { label: "Careers", href: "about" },
                { label: "Environment", href: "about" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/apple",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/apple",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/apple",
              ariaLabel: "Subscribe to our YouTube channel"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}