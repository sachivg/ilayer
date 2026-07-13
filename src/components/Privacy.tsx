const CONTACT_EMAIL = "info@ilayersolutions.com";
const LAST_UPDATED = "13 July 2026";

export function Privacy() {
  return (
    <section
      id="privacy"
      className="section-anchor relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            iLayer Solutions (&ldquo;iLayer&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting
            your privacy in accordance with the{" "}
            <span className="text-foreground/90">
              Privacy Act 1988 (Cth)
            </span>{" "}
            and the{" "}
            <span className="text-foreground/90">
              Australian Privacy Principles (APPs)
            </span>
            . This policy explains what personal information we collect
            through this website, how we use it, and your rights in
            relation to it.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              1. What personal information we collect
            </h2>
            <p className="mt-3">
              We only collect the personal information you choose to give
              us. Through this website, that&rsquo;s limited to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <span className="text-foreground/90">Contact form</span>{" "}
                (/contact): your name, email address, and message.
              </li>
              <li>
                <span className="text-foreground/90">
                  Partnership form
                </span>{" "}
                (/partnership): your name, email address, company name,
                partnership type, and message.
              </li>
              <li>
                <span className="text-foreground/90">Careers</span>: if you
                email us a resume via the link on /careers, we receive
                whatever information you choose to include in that email.
              </li>
            </ul>
            <p className="mt-3">
              We do not use cookies, analytics, or tracking technologies on
              this website, and we do not collect any personal information
              passively through your browsing behaviour.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              2. How we collect it
            </h2>
            <p className="mt-3">
              We only collect personal information directly from you, when
              you voluntarily submit a form on this website or email us
              directly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Why we collect and use it
            </h2>
            <p className="mt-3">We use the information you provide to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>respond to your enquiry or request;</li>
              <li>
                evaluate a proposed partnership, referral, or reseller
                relationship; and
              </li>
              <li>consider a job application or resume you send us.</li>
            </ul>
            <p className="mt-3">
              We don&rsquo;t use your information for any other purpose,
              and we don&rsquo;t send marketing communications unless you
              separately ask us to.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              4. Who we disclose it to
            </h2>
            <p className="mt-3">
              Form submissions on this website are processed by{" "}
              <span className="text-foreground/90">Formspree, Inc.</span>,
              a third-party form-delivery service that forwards your
              submission to our inbox ({CONTACT_EMAIL}). Formspree is based
              in the United States, so submitting a form involves your
              personal information being disclosed and processed overseas
              (Australian Privacy Principle 8). Formspree&rsquo;s own
              privacy practices are described at{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-foreground"
              >
                formspree.io/legal/privacy-policy
              </a>
              .
            </p>
            <p className="mt-3">
              Beyond Formspree, we don&rsquo;t sell, rent, or otherwise
              disclose your personal information to any third party.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              5. Data storage and security
            </h2>
            <p className="mt-3">
              Your information is stored on Formspree&rsquo;s
              infrastructure and, once forwarded, in our own email
              systems. We take reasonable steps to protect personal
              information from misuse, loss, and unauthorised access, but
              no method of electronic transmission or storage is 100%
              secure.
            </p>
            <p className="mt-3">
              We keep enquiry and application information only as long as
              reasonably necessary to respond to it and for our legitimate
              business records, after which we delete it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              6. Access, correction, and complaints
            </h2>
            <p className="mt-3">
              Under APPs 12 and 13, you can ask us for access to the
              personal information we hold about you, or ask us to
              correct it if it&rsquo;s inaccurate. To do so, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline underline-offset-2 hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <p className="mt-3">
              If you believe we&rsquo;ve mishandled your personal
              information and want to make a complaint, email us at the
              address above with details, and we&rsquo;ll respond within a
              reasonable time. If you&rsquo;re not satisfied with our
              response, you can lodge a complaint with the{" "}
              <span className="text-foreground/90">
                Office of the Australian Information Commissioner (OAIC)
              </span>
              :
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Website:{" "}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2 hover:text-foreground"
                >
                  oaic.gov.au
                </a>
              </li>
              <li>Phone: 1300 363 992</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              7. Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The &ldquo;last
              updated&rdquo; date at the top reflects the most recent
              revision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              8. Contact us
            </h2>
            <p className="mt-3">
              Questions about this policy or how we handle your
              information:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline underline-offset-2 hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
