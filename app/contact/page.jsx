import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact',
  description:
    'Talk to Zynora Technology about your project — call, WhatsApp, email or send an enquiry, and find answers to common questions.',
};

// /contact — `page-top` (app/globals.css) sets the gap between the navbar and the first section.
export default function ContactPage() {
  return (
    <div className="page-top">
      <h1 className="sr-only">Contact Zynora Technology</h1>
      <Contact />
      <FAQ />
    </div>
  );
}
