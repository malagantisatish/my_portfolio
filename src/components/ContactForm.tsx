import { useState, type FormEvent } from 'react';
import { TbSend, TbCheck, TbAlertTriangle } from 'react-icons/tb';
import { profile } from '../data/resume';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border-light bg-surface-light p-10 text-center dark:border-border-dark dark:bg-surface-dark">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
          <TbCheck size={22} />
        </span>
        <h3 className="font-display text-lg font-semibold text-text-light dark:text-text-dark">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-muted-light dark:text-muted-dark">
          Thanks for reaching out — I'll get back to you at the email you left, usually within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border-light bg-surface-light p-5 sm:p-6 dark:border-border-dark dark:bg-surface-dark">
      {/* FormSubmit config fields */}
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* honeypot — bots fill this in, humans never see it */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-border-light bg-bg-light px-3 py-2.5 text-sm text-text-light outline-none placeholder:text-muted-light focus:border-accent dark:border-border-dark dark:bg-bg-dark dark:text-text-dark dark:placeholder:text-muted-dark"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-md border border-border-light bg-bg-light px-3 py-2.5 text-sm text-text-light outline-none placeholder:text-muted-light focus:border-accent dark:border-border-dark dark:bg-bg-dark dark:text-text-dark dark:placeholder:text-muted-dark"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a bit about the role or project…"
          className="w-full resize-none rounded-md border border-border-light bg-bg-light px-3 py-2.5 text-sm text-text-light outline-none placeholder:text-muted-light focus:border-accent dark:border-border-dark dark:bg-bg-dark dark:text-text-dark dark:placeholder:text-muted-dark"
        />
      </div>

      {status === 'error' && (
        <div className="mb-4 flex items-center gap-2 rounded-md border border-accent/40 bg-accent-soft px-3 py-2 text-sm text-accent">
          <TbAlertTriangle size={16} />
          Something went wrong. Try again, or email me directly at {profile.email}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        <TbSend size={16} />
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
