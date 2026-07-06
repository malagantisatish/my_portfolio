import { TbMail, TbPhone, TbMapPin, TbBrandGithub, TbBrandLinkedin, TbArrowUpRight } from 'react-icons/tb';
import { profile } from '../data/resume';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import ResumeButton from '../components/ResumeButton';

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: TbMail },
  { label: profile.phone, href: `tel:${profile.phone}`, icon: TbPhone },
  { label: 'linkedin.com/in/satishmalaganti', href: profile.linkedin, icon: TbBrandLinkedin },
  { label: 'github.com/malagantisatish', href: profile.github, icon: TbBrandGithub },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex items-center gap-2 font-mono text-xs text-muted-light dark:text-muted-dark">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-light dark:border-border-dark">●</span>
        Contact.tsx
      </div>

      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Open to frontend roles and freelance work. Send a message below, or reach out directly."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <div>
          <div className="mb-4 flex items-center gap-2 font-mono text-sm text-muted-light dark:text-muted-dark">
            <TbMapPin className="text-accent" size={16} />
            {profile.location}
          </div>

          <div className="grid gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-between rounded-lg border border-border-light bg-surface-light px-4 py-3.5 transition-colors hover:border-accent dark:border-border-dark dark:bg-surface-dark"
              >
                <span className="flex items-center gap-3 text-sm text-text-light dark:text-text-dark">
                  <Icon className="text-accent" size={18} />
                  {label}
                </span>
                <TbArrowUpRight
                  size={16}
                  className="text-muted-light transition-colors group-hover:text-accent dark:text-muted-dark"
                />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
