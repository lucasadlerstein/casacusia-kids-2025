import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { EmotionalSection } from '@/components/emotional-section';
import { VideoTestimonial } from '@/components/video-testimonial';
import { Activities } from '@/components/activities';
import { About } from '@/components/about';
import { Gallery } from '@/components/gallery';
import { Sponsors } from '@/components/sponsors';
import { Fundraising } from '@/components/fundraising';
import { Volunteer } from '@/components/volunteer';
import { FAQ } from '@/components/faq';
import { MapSection } from '@/components/map-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-cream'>
      <Header />
      <main className='flex flex-col items-center w-full gap-16'>
        <Hero />
        <Intro />
        <EmotionalSection />
        <VideoTestimonial />
        <Activities />
        <About />
        <Gallery />
        <Sponsors />
        <Fundraising />
        <Volunteer />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
