import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { EmotionalSection } from '@/components/emotional-section';
import { VideoTestimonial } from '@/components/video-testimonial';
import { Activities } from '@/components/activities';
import { About } from '@/components/about';
import { Gallery } from '@/components/gallery';
import { Sponsors } from '@/components/sponsors';
import { HelpSection } from '@/components/help-section';
import { FAQ } from '@/components/faq';
import { MapSection } from '@/components/map-section';
import { Footer } from '@/components/footer';
import { FloatingDonateButton } from '@/components/floating-donate-button';
import { RainNoticeDialog } from '@/components/lluvia-dialog';

export default function Home() {
  return (
    <div className='min-h-screen bg-cream'>
      <Header />
      <RainNoticeDialog />
      <main className='flex flex-col items-center w-full pb-32 md:pb-40'>
        <Hero />
        <Intro />
        <EmotionalSection />
        <VideoTestimonial />
        <Activities />
        <About />
        <Gallery />
        <Sponsors />
        <HelpSection />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <FloatingDonateButton />
    </div>
  );
}
