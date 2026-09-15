import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Mail, Send, CheckCircle2, Info } from 'lucide-react';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend connected — this form does not send messages anywhere.
    // It only confirms the form was filled out.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-galaxy-pink">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100/85">
            Feel free to connect with me as I continue learning, exploring
            technology, and building projects.
          </p>
        </div>

        <div
          ref={ref}
          className="reveal glass rounded-3xl border border-white/10 p-7 shadow-2xl shadow-black/40 sm:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="mb-4 h-14 w-14 text-emerald-400" />
              <h3 className="font-display text-xl font-bold text-white">
                Thanks for filling out the form!
              </h3>
              <p className="mt-2 max-w-md text-sm text-indigo-200/70">
                This form doesn&apos;t have a backend connected yet, so your
                message wasn&apos;t sent. Once I set up a contact service,
                messages will be delivered automatically.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', message: '' });
                }}
                className="mt-6 rounded-xl glass glass-hover px-5 py-2.5 text-sm font-semibold text-white"
              >
                Write another
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-indigo-100/90"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-indigo-300/40 transition-colors focus:border-galaxy-blue/50 focus:bg-white/8"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-indigo-100/90"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-indigo-300/40 transition-colors focus:border-galaxy-blue/50 focus:bg-white/8"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-indigo-100/90"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Say hello..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-indigo-300/40 transition-colors focus:border-galaxy-blue/50 focus:bg-white/8"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-galaxy-blue via-galaxy-violet to-galaxy-pink px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-galaxy-violet/40 transition-all hover:scale-[1.01] hover:shadow-galaxy-pink/40 sm:w-auto"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3">
                <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-amber-300/80" />
                <p className="text-xs leading-relaxed text-amber-200/70">
                  This contact form is a demo for now — it doesn&apos;t send
                  messages to a real inbox. Once a backend is connected, it will
                  deliver messages automatically. No fake emails, phone numbers,
                  or social links are listed.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-indigo-300/50">
                <Mail className="h-4 w-4" />
                <span>Contact details coming soon</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
