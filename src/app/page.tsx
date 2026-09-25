import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

import LandingImage from "@/app/_assets/landing-image.png";
import LandingImageMobile from "@/app/_assets/landing-image-mobile.png";
import PasskeyImg from "@/app/_assets/Passkey.jpg";

export const metadata: Metadata = {
  title: "Passkey — Secure Password Manager",
  description:
    "Store, organize, and manage all your passwords securely in one encrypted vault.",
  keywords: [
    "password manager",
    "password vault",
    "password storage",
    "password generator",
    "secure passwords",
  ],
  authors: [{ name: "Passkey Team" }],
  openGraph: {
    title: "Passkey — Secure Password Manager",
    description:
      "Store, organize, and manage all your passwords securely in one encrypted vault.",
    type: "website",
    images: [
      {
        url: PasskeyImg.src,
        alt: "Passkey Password Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passkey — Secure Password Manager",
    description:
      "Store, organize, and manage all your passwords securely in one encrypted vault.",
    images: [PasskeyImg.src],
  },
};

const features = [
  {
    number: "01",
    title: "Secure Vault",
    description:
      "Keep every credential inside one protected, encrypted space designed around privacy.",
  },
  {
    number: "02",
    title: "Password Generator",
    description:
      "Create strong, unique passwords instantly instead of reusing the same credentials.",
  },
  {
    number: "03",
    title: "Simple Organization",
    description:
      "Keep accounts organized and find exactly what you need without digging through lists.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your vault",
    description:
      "Set up your account and protect your vault with a secure master password.",
  },
  {
    number: "02",
    title: "Add your credentials",
    description:
      "Store your website accounts and credentials inside your private vault.",
  },
  {
    number: "03",
    title: "Access when needed",
    description:
      "Open your vault whenever you need to manage or retrieve an account.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950">
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#f4f5f3]">
        <div className="absolute inset-0">
          <Image
            src={LandingImage}
            alt="Passkey"
            priority
            fill
            className="hidden object-cover object-center md:block"
          />

          <Image
            src={LandingImageMobile}
            alt="Passkey"
            priority
            fill
            className="block object-cover object-center md:hidden"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-zinc-700 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Secure password management
            </div>

            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-zinc-950">
              Your passwords.
              <br />
              <span className="text-zinc-400">Under control.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
              Store, organize, generate, and manage your credentials from one
              secure vault built for everyday use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Get started
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-zinc-900/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Passkey
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200" />
                <span className="h-8 w-8 rounded-full border-2 border-white bg-zinc-300" />
                <span className="h-8 w-8 rounded-full border-2 border-white bg-zinc-400" />
              </div>
              <span>Built around secure credential management.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200/80 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200/80 md:grid-cols-4">
          {[
            ["256-bit", "Encryption"],
            ["∞", "Passwords"],
            ["1", "Master password"],
            ["24/7", "Access"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="px-5 py-10 sm:px-8 sm:py-12"
            >
              <p className="text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16c910]">
              Everything in one place
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Security without the complexity.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-zinc-500">
              Passkey keeps your credentials organized behind a simple,
              focused interface so managing passwords never feels like work.
            </p>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-6 py-10 sm:grid-cols-[80px_1fr] sm:py-12"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-zinc-400">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-base leading-7 text-zinc-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#10ff04] transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0c0b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12 lg:py-36">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10ff04]">
              How it works
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Simple by design.
              <br />
              Secure by default.
            </h2>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#0b0c0b] p-8 transition duration-300 hover:bg-[#111311] sm:p-10"
              >
                <span className="text-sm font-medium text-[#10ff04]">
                  {step.number}
                </span>

                <h3 className="mt-20 text-2xl font-semibold tracking-[-0.035em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#f5f6f4] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16c910]">
              Security first
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl">
              Your credentials belong to you.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500">
              Passkey is designed around protecting your stored credentials
              while keeping the experience fast, clean, and easy to understand.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                "Encrypted password storage",
                "Secure master password protection",
                "Strong password generation",
                "Private credential management",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-zinc-800"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-xs text-[#10ff04]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,255,4,0.13),transparent_38%)]" />

            <div className="absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">
                      PRIVATE VAULT
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#10ff04]" />
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="h-11 rounded-xl border border-white/10 bg-white/[0.04]" />
                    <div className="h-11 rounded-xl border border-white/10 bg-white/[0.04]" />
                    <div className="h-11 rounded-xl border border-white/10 bg-white/[0.04]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-20 text-center sm:px-12 sm:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10ff04]">
            Passkey
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
            One vault.
            <br />
            Less to worry about.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Keep your passwords organized, protected, and ready whenever you
            need them.
          </p>

          <Link
            href="/signup"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Create your vault
          </Link>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>Passkey</span>
        <span>Secure password management.</span>
      </footer>
    </main>
  );
}