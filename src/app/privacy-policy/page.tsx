import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Passkey",
  description: "Privacy policy for Passkey password manager.",
};

const sections = [
  ["01", "Introduction"],
  ["02", "Information We Collect"],
  ["03", "How We Use Your Information"],
  ["04", "Data Security"],
  ["05", "Third-Party Services"],
  ["06", "Your Rights"],
  ["07", "Contact"],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-[#f5f6f4]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Privacy
            </div>

            <h1 className="mt-7 text-[clamp(3.25rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Your privacy.
              <br />
              <span className="text-zinc-400">Taken seriously.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              This Privacy Policy explains what information Passkey may
              collect, how it is used, and how we work to protect it.
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
                  <span className="text-xs text-zinc-300 transition group-hover:text-[#16c910]">
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
              Passkey is a secure password management application designed to
              help users store and organize their passwords. Your privacy and
              security are important to us.
            </p>
          </div>

          <div className="space-y-16">
            <section id="section-01">
              <SectionHeading number="01" title="Introduction" />

              <p>
                Passkey is a secure password management application designed to
                help users store and organize their passwords. Your privacy and
                security are important to us.
              </p>
            </section>

            <section id="section-02">
              <SectionHeading
                number="02"
                title="Information We Collect"
              />

              <p>
                We may collect account information such as your email address,
                authentication details, and encrypted password records that you
                choose to store.
              </p>

              <p>
                Your stored passwords are encrypted and are not intended to be
                readable by anyone except you.
              </p>
            </section>

            <section id="section-03">
              <SectionHeading
                number="03"
                title="How We Use Your Information"
              />

              <p>
                Information is used to provide authentication, maintain your
                account, improve application functionality, and protect against
                unauthorized access.
              </p>
            </section>

            <section id="section-04">
              <SectionHeading number="04" title="Data Security" />

              <p>
                We use security practices including encrypted storage, secure
                authentication, and access controls to protect your
                information.
              </p>
            </section>

            <section id="section-05">
              <SectionHeading
                number="05"
                title="Third-Party Services"
              />

              <p>
                Passkey may use third-party services for hosting,
                authentication, analytics, or infrastructure. These services
                may process limited information required to operate the
                application.
              </p>
            </section>

            <section id="section-06">
              <SectionHeading number="06" title="Your Rights" />

              <p>
                You may request access, modification, or deletion of your
                account data where applicable.
              </p>
            </section>

            <section id="section-07">
              <SectionHeading number="07" title="Contact" />

              <p>
                If you have questions regarding this Privacy Policy, please
                contact us through the available contact options on Passkey.
              </p>
            </section>
          </div>

          <div className="mt-20 rounded-2xl border border-zinc-200 bg-[#f5f6f4] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#10ff04]" />

              <div>
                <h2 className="font-semibold tracking-[-0.02em] text-zinc-950">
                  Privacy is part of the product.
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  If you have questions about how your information is handled,
                  contact Passkey through the available contact options.
                </p>
              </div>
            </div>
          
          </article>
      </div>
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