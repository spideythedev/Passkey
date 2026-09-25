import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Passkey",
  description: "Privacy policy for Passkey password manager.",
};

const sections = [
  { id: "information", label: "Information We Collect" },
  { id: "usage", label: "How We Use Information" },
  { id: "storage", label: "Data Storage & Security" },
  { id: "sharing", label: "Data Sharing" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Changes to This Policy" },
];

function SectionHeading({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.18em] text-[#16c910]">
          {number}
        </span>
        <span className="h-px w-8 bg-zinc-200" />
      </div>

      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-[#f5f6f4]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-xs font-medium text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Privacy
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-zinc-950 sm:text-6xl lg:text-7xl">
              Your privacy.
              <br />
              Taken seriously.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
              This Privacy Policy explains how Passkey collects, uses, stores,
              and protects information when you use our password manager.
            </p>

            <p className="mt-6 text-sm font-medium text-zinc-400">
              Last updated August 1, 2026
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-24 lg:px-12 lg:py-24">
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-16 sm:space-y-20">
            <section className="space-y-5">
              <SectionHeading
                number="01"
                title="Information We Collect"
                id="information"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  When you create and use a Passkey account, we may collect
                  information necessary to provide and maintain the service.
                </p>

                <p>
                  This may include account information such as your email
                  address and authentication-related information required to
                  secure your account.
                </p>

                <p>
                  Information stored inside your password vault is used to
                  provide the functionality of the Passkey service and is
                  handled according to the security architecture of the
                  application.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="02"
                title="How We Use Information"
                id="usage"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  We use collected information to operate, maintain, secure,
                  and improve Passkey.
                </p>

                <p>
                  Information may also be used to authenticate users, provide
                  account-related functionality, respond to support requests,
                  detect abuse, and protect the service from unauthorized
                  activity.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="03"
                title="Data Storage & Security"
                id="storage"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  Passkey is designed with security and privacy as core
                  considerations. We use appropriate technical and
                  organizational measures to protect information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <p>
                  No method of electronic storage or transmission can be
                  guaranteed to be completely secure. While we work to protect
                  your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-[#f5f6f4] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10ff04] text-xs font-bold text-zinc-950">
                    P
                  </div>

                  <div>
                    <p className="font-semibold tracking-[-0.02em] text-zinc-950">
                      Security is part of the product.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      We continuously work to maintain appropriate safeguards
                      for the information handled by Passkey.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="04"
                title="Data Sharing"
                id="sharing"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  We do not sell your personal information.
                </p>

                <p>
                  Information may be shared with service providers when
                  necessary to operate Passkey, provide infrastructure,
                  maintain security, or deliver specific functionality. Such
                  providers are expected to handle information only as
                  necessary to provide their services.
                </p>

                <p>
                  We may also disclose information when required by applicable
                  law, legal process, or a valid governmental request.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="05"
                title="Data Retention"
                id="retention"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  We retain information for as long as reasonably necessary to
                  provide the service, maintain account functionality, comply
                  with legal obligations, resolve disputes, and enforce
                  applicable agreements.
                </p>

                <p>
                  When information is no longer required, we may delete or
                  anonymize it in accordance with our operational and legal
                  requirements.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="06"
                title="Your Rights"
                id="rights"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  Depending on your location and applicable law, you may have
                  rights relating to your personal information, including the
                  right to access, correct, delete, or otherwise control
                  certain information.
                </p>

                <p>
                  If you have a privacy-related request, you can contact us
                  using the contact information provided by Passkey.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <SectionHeading
                number="07"
                title="Changes to This Policy"
                id="changes"
              />

              <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes to Passkey, our practices, or applicable
                  requirements.
                </p>

                <p>
                  When changes are made, the updated policy will be published
                  on this page with a revised effective date.
                </p>
              </div>
            </section>

            <section className="border-t border-zinc-200 pt-10">
              <p className="text-sm leading-6 text-zinc-400">
                By using Passkey, you acknowledge that you have read and
                understood this Privacy Policy.
              </p>
            </section>
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