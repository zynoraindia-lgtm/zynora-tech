import Button from '@/components/ui/Button';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="section flex min-h-[75vh] items-center pt-40">
      <div className="container text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="h2 mt-5 text-balance">
          This page <span className="accent-text">doesn&apos;t exist.</span>
        </h1>
        <p className="lead mx-auto mt-5 max-w-md">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="accent" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
