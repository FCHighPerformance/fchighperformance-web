import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { LegalPage } from "@/components/LegalPage";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: `${site.url}/privacy` },
  robots: { index: true, follow: true },
};

const EFFECTIVE = "May 27, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Privacy Policy"
          title={
            <>
              How we handle
              <br />
              your information.
            </>
          }
          subtitle="Plain English. No tricks. Here's what we collect, what we do with it, and what we don't do."
          breadcrumb={[{ label: "Home", href: "/" }]}
        />
        <LegalPage effectiveDate={EFFECTIVE}>
          <h2>Who we are</h2>
          <p>
            {site.name} (&ldquo;FC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            operates the website at {site.url} and provides in-person coaching
            services from {site.address.street}, {site.address.city},{" "}
            {site.address.region} {site.address.postalCode}.
          </p>
          <p>
            Questions about this policy? Email{" "}
            <a href={site.emailHref}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>

          <h2>What we collect</h2>
          <p>We collect information you give us directly, plus a small amount of technical data from your browser.</p>

          <h3>Information you give us</h3>
          <ul>
            <li>
              Name, phone number, email address (through the contact / booking
              form)
            </li>
            <li>
              SMS consent (a checkbox you tick if you want text messages from
              us)
            </li>
            <li>
              Anything you write in a message to us by email, text, or the form
            </li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li>
              Basic browser data (page visited, approximate location based on
              IP, device type) used only to keep the site running properly
            </li>
            <li>
              Standard hosting cookies set by our hosting provider (Vercel)
              for performance
            </li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your inquiry and schedule a session</li>
            <li>
              To send you service messages about your session (confirmations,
              changes, follow-ups)
            </li>
            <li>
              If you ticked the SMS consent box: to send you occasional updates
              about programs, classes, and events. You can stop these at any
              time by replying STOP to a text from us.
            </li>
          </ul>

          <h2>Who we share it with</h2>
          <p>We share your information only with service providers we use to run the business:</p>
          <ul>
            <li>
              <strong>GoHighLevel</strong> — our customer relationship and
              communications system (where your form submission lives, and
              where SMS / email automations run from)
            </li>
            <li>
              <strong>Vercel</strong> — our website hosting provider
            </li>
            <li>
              <strong>Google / map provider</strong> — for displaying our
              location on a map
            </li>
          </ul>
          <p>
            We do not sell your personal information. We do not share it with
            advertisers or data brokers.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Access</strong>: ask us what information we have about
              you
            </li>
            <li>
              <strong>Correction</strong>: ask us to fix anything that&rsquo;s
              wrong
            </li>
            <li>
              <strong>Deletion</strong>: ask us to delete your data (we may
              need to keep some records for legal or tax reasons)
            </li>
            <li>
              <strong>Opt out of SMS</strong>: reply STOP to any text from us
            </li>
            <li>
              <strong>Opt out of email</strong>: click unsubscribe in any
              email from us
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={site.emailHref}>{site.email}</a>.
          </p>

          <h2>Children</h2>
          <p>
            We work with kids ages 7 and up. Parents or guardians must
            register children and consent to the use of their child&rsquo;s
            information. We do not knowingly collect information from
            children under 13 directly through this website.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect your information, but no
            method of transmission over the internet is 100% secure. If you
            have reason to believe your data with us has been compromised,
            contact us immediately.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do,
            we&rsquo;ll update the &ldquo;Effective&rdquo; date at the top.
            Material changes will also be announced on this page.
          </p>
        </LegalPage>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
