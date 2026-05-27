import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LegalPage } from "@/components/LegalPage";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the use of the ${site.name} website and services.`,
  alternates: { canonical: `${site.url}/terms` },
  robots: { index: true, follow: true },
};

const EFFECTIVE = "May 27, 2026";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Terms of Service"
          title={
            <>
              The rules of
              <br />
              the road.
            </>
          }
          subtitle="The straightforward agreement that governs using this site and our services."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <LegalPage effectiveDate={EFFECTIVE}>
          <h2>Agreement</h2>
          <p>
            By using {site.url} or booking a session with {site.name}, you
            agree to these terms. If you don&rsquo;t agree, please don&rsquo;t
            use the site or our services.
          </p>

          <h2>Who we are</h2>
          <p>
            {site.name} is a coaching and training business operating from{" "}
            {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode}. Contact:{" "}
            <a href={site.emailHref}>{site.email}</a> /{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>

          <h2>Services</h2>
          <p>
            We provide in-person group classes, small-group training, and
            personal training in boxing, strength and conditioning, and
            general fitness for kids and adults.
          </p>

          <h2>Booking and payment</h2>
          <p>
            Inquiries through the website don&rsquo;t commit you to anything.
            Pricing, payment, scheduling, and cancellation terms for actual
            sessions are agreed on directly with us when you book your first
            session.
          </p>

          <h2>Health and safety</h2>
          <p>
            Training is a physical activity. There&rsquo;s inherent risk in
            anything we do, especially boxing. You agree that:
          </p>
          <ul>
            <li>
              You&rsquo;ll honestly disclose any health conditions, injuries,
              or limitations before training
            </li>
            <li>
              You&rsquo;ll consult your doctor before starting any new
              fitness program, especially if you have known health concerns
            </li>
            <li>
              The information on this website is general in nature and is not
              medical advice. Always talk to a qualified healthcare provider
              about your specific situation.
            </li>
            <li>
              For minors: a parent or guardian must register the child, agree
              to these terms, and complete any liability waivers we require
              at intake
            </li>
          </ul>
          <p>
            Any liability waiver you sign at the gym is a separate document
            from these terms.
          </p>

          <h2>Using the website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the site for anything illegal or harmful to other users
            </li>
            <li>
              Try to interfere with the site&rsquo;s operation (scraping,
              automated abuse, hacking attempts)
            </li>
            <li>
              Reproduce or republish our content, photos, branding, or
              materials without written permission
            </li>
          </ul>

          <h2>Our content</h2>
          <p>
            All branding, text, photographs, and design on this site belong
            to {site.name} (or to people who&rsquo;ve given us permission to
            use their image). It&rsquo;s for personal viewing only. Anything
            else requires written permission.
          </p>

          <h2>Your content</h2>
          <p>
            If you send us a testimonial, review, photo, or message and grant
            us permission to use it, we may publish it on our website, social
            media, or marketing materials. You can ask us to remove it at any
            time by emailing <a href={site.emailHref}>{site.email}</a>.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The website is provided &ldquo;as is.&rdquo; We make no warranty
            that the site will be uninterrupted, error-free, or that any
            information on it is complete or current. To the maximum extent
            allowed by law, we disclaim all warranties express or implied.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by Virginia law, {site.name},
            its owners, employees, and contractors are not liable for any
            indirect, incidental, or consequential damages arising from your
            use of the website or our services. Nothing in these terms
            limits any liability that cannot be excluded by law (including
            for personal injury caused by negligence).
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Commonwealth of
            Virginia. Any dispute will be resolved in the courts of Virginia
            Beach, Virginia.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms occasionally. When we do, the
            &ldquo;Effective&rdquo; date at the top changes. Continued use
            of the site after a change means you accept the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={site.emailHref}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </LegalPage>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
