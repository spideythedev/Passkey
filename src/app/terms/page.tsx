import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Passkey",
  description: "Terms of use for Passkey password manager.",
};

const sections = [
  ["01", "Acceptance of Terms"],
  ["02", "Account Responsibility"],
  ["03", "Use of Passkey"],
  ["04", "Prohibited Activities"],
  ["05", "Service Availability"],
  ["06", "Limitation of Liability"],
  ["07", "Changes to Terms"],
  ["08", "Contact"],
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-[#f5f6f4]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Legal
            </div>

            <h1 className="mt-7 text-[clamp(3.25rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Terms of
              <br />
              <span className="text-zinc-400">Use.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              These terms explain the rules and responsibilities that apply
              when using Passkey.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Last updated August 1, 2026
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-24 lg:px-12 lg:py-24">
        <aside className="hidden lg:block">
          <div className="sticky top-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              On this page
            </p>

            <nav className="space-y-1">
              {sections.map(([number, title]) => (
                <a
                  key={number}
                  href={`#section-${number}`}
                  className="group flex gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-950"
                >
                  <span className="text-xs text-zinc-300 group-hover:text-[#16c910]">
                    {number}
                  </span>
                  <span>{title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="max-w-3xl">
          <div className="mb-12 border-b border-zinc-200 pb-10">
            <p className="text-base leading-8 text-zinc-600">
              By accessing or using Passkey, you agree to these Terms of Use.
              If you do not agree with these terms, please stop using the
              application.
            </p>
          </div>

          <div className="space-y-16">
            <section id="section-01">
              <SectionHeading number="01" title="Acceptance of Terms" />

              <p>
                By accessing or using Passkey, you agree to these Terms of Use.
                If you do not agree with these terms, please stop using the
                application.
              </p>
            </section>

            <section id="section-02">
              <SectionHeading number="02" title="Account Responsibility" />

              <p>
                You are responsible for keeping your account credentials secure
                and preventing unauthorized access to your account.
              </p>

              <p>
                You should use a strong master password and keep your recovery
                information safe.
              </p>
            </section>

            <section id="section-03">
              <SectionHeading number="03" title="Use of Passkey" />

              <p>
                Passkey provides tools to help you securely store and manage
                your passwords. You agree to use the service only for lawful
                purposes.
              </p>
            </section>

            <section id="section-04">
              <SectionHeading number="04" title="Prohibited Activities" />

              <p>
                You may not attempt unauthorized access, interfere with the
                service, abuse security features, or use Passkey for illegal
                activities.
              </p>
            </section>

            <section id="section-05">
              <SectionHeading number="05" title="Service Availability" />

              <p>
                We may update, modify, or temporarily disable parts of Passkey
                to improve security, performance, or functionality.
              </p>
            </section>

            <section id="section-06">
              <SectionHeading number="06" title="Limitation of Liability" />

              <p>
                Passkey is provided as a password management tool. Users are
                responsible for maintaining their own account security and
                protecting their login information.
              </p>
            </section>

            <section id="section-07">
              <SectionHeading number="07" title="Changes to Terms" />

              <p>
                We may update these Terms of Use from time to time. Continued
                use of Passkey after changes means you accept the updated terms.
              </p>
            </section>

            <section id="section-08">
              <SectionHeading number="08" title="Contact" />

              <p>
                If you have questions regarding these Terms of Use, please
                contact us through the available contact options on Passkey.
              </p>
            </section>
          </div>

          <div className="mt-20 rounded-2xl border border-zinc-200 bg-[#f5f6f4] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#10ff04]" />

              <div>
                <h2 className="font-semibold tracking-[-0.02em] text-zinc-950">
                  Questions about these terms?
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Contact Passkey through the available contact options if you
                  need clarification about these Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-400 sm:px-8 lg:px-12">
          Passkey
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="mt-1 text-xs font-semibold tracking-[0.15em] text-[#16c910]">
        {number}
      </span>

      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}