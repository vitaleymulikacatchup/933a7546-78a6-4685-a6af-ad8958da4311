"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const theme: SiteTheme = {
  styleVariant: 'funAndTrendy',
  colorTemplate: 1,
  textAnimation: 'slide'
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759392064199-d1c81d05.jpg"
          logoWidth={150}
          logoHeight={50}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' }
          ]}
          buttonText="Get MEME"
          onButtonClick={() => alert('CTA clicked!')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="YoYoterr122223"
          subtitle="Dive into the world of playful memecoins"
          contractAddress="0xExampleAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemePulse is your go-to platform for engaging with memecoins. Join our community and learn how to buy, hold, and trade your favorite tokens safely!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and supply of our memecoin is crucial for making informed decisions."
          kpiItems={[{ value: '10 Million', description: 'Total Supply', longDescription: 'The maximum number of tokens available.' }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759392064199-d1c81d05.jpg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: 'Community', items: [{ label: 'Discord', onClick: () => console.log('Discord clicked') }, { label: 'Twitter', onClick: () => console.log('Twitter clicked') }] },
            { title: 'Resources', items: [{ label: 'Documentation', onClick: () => console.log('Docs clicked') }] },
            { title: 'Help', items: [{ label: 'Contact', onClick: () => console.log('Contact clicked') }] }
          ]}
          copyrightText="© 2023 MemePulse"
          onPrivacyClick={() => alert('Privacy Policy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}