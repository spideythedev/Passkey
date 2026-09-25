import type { Metadata } from "next";
import { SubmitButton } from "../_component/Submitbtn";
import Link from "next/link";
import { signup } from "../_actions/auth";

export const metadata: Metadata = {
  title: "Create Account — Passkey",
  description:
    "Create your Passkey account and start securing your passwords with encrypted storage.",
};

const benefits = [
  {
    number: "01",
    title: "Encrypted storage",
    description:
      "Keep your credentials inside a protected vault designed around privacy.",
  },
  {
    number: "02",
    title: "Simple access",
    description:
      "Manage your accounts from one focused and easy-to-use interface.",
  },
  {
    number: "03",
    title: "Privacy first",
    description:
      "Your password management experience stays focused on security and control.",
  },
];

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200/80 bg-[#f5f6f4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(16,255,4,0.09),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
              Join Passkey
            </div>

            <h1 className="mt-7 text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Your secure vault
              <br />
              <span className="text-zinc-400">starts here.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Create your Passkey account and keep your credentials organized
              inside one secure, focused workspace.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-24">
          <div className="max-w-xl">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-9">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16c910]">
                  Get started
                </span>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-zinc-950">
                  Create your account
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Set up your secure Passkey vault in a few simple steps.
                </p>
              </div>

              <form className="space-y-5" action={signup}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Username
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-[#10ff04]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-[#10ff04]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-[#10ff04]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-[#10ff04]/10"
                  />
                </div>

                <div className="pt-2">
                  <SubmitButton />
                </div>

                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-1 bg-zinc-200" />
                  <span className="text-xs text-zinc-400">OR</span>
                  <div className="h-px flex-1 bg-zinc-200" />
                </div>

                <p className="text-center text-sm text-zinc-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-zinc-950 transition hover:text-[#16c910]"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-zinc-400">
              By creating an account, you agree to use Passkey responsibly and
              keep your account credentials secure.
            </p>
          </div>

          <div className="lg:pt-4">
            <div className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16c910]">
                Built for security
              </span>

              <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-5xl">
                Everything you need.
                <br />
                Nothing unnecessary.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-zinc-500">
                Passkey keeps password management simple while putting your
                credentials behind a dedicated secure vault.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 border-y border-zinc-200">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="group grid grid-cols-[48px_1fr] gap-5 py-7"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] text-zinc-400">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-zinc-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
                      {benefit.description}
                    </p>

                    <div className="mt-4 h-px w-0 bg-[#10ff04] transition-all duration-500 group-hover:w-10" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-[#0b0c0b] p-7 text-white sm:p-9">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#10ff04]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Passkey Vault
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#10ff04]" />
                </div>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <div className="h-2 w-24 rounded-full bg-white/10" />
                    <div className="h-2 w-8 rounded-full bg-[#10ff04]/60" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <div className="h-2 w-32 rounded-full bg-white/10" />
                    <div className="h-2 w-8 rounded-full bg-white/10" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
                    <div className="h-2 w-20 rounded-full bg-white/10" />
                    <div className="h-2 w-8 rounded-full bg-white/10" />
                  </div>
                </div>

                <p className="mt-7 text-sm leading-6 text-zinc-500">
                  One secure place for the credentials that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>Passkey</span>
          <Link
            href="/"
            className="transition hover:text-zinc-950"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}