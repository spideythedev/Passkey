import { resetPassword } from "../_actions/auth";
import { SubmitButton } from "../_component/Submitbtn";

export default async function ResetPasswordPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f6f4] px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,255,4,0.08),transparent_32%)]" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-2 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10ff04]" />
            Account security
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-5xl">
            Reset your
            <br />
            <span className="text-zinc-400">password.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-zinc-500">
            Choose a new password to secure your Passkey account.
          </p>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
          <form action={resetPassword} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-800"
              >
                New password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter a new password"
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
                placeholder="Enter your password again"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50/70 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-4 focus:ring-[#10ff04]/10"
              />
            </div>

            <div className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3.5">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#10ff04]" />

                <p className="text-xs leading-5 text-zinc-500">
                  Use a strong password that you don't reuse on other
                  services.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <SubmitButton />
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
          Your new password will be used to protect your Passkey account.
        </p>
      </div>
    </main>
  );
}