import { site } from '../content'

interface CallButtonProps {
  showNumber?: boolean
  fullWidth?: boolean
  className?: string
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function CallButton({
  showNumber = false,
  fullWidth = false,
  className = '',
}: CallButtonProps) {
  const { contact, ctaLabel } = site

  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      <a
        href={contact.phoneHref}
        className={`inline-flex items-center justify-center gap-3 rounded-button bg-tomato px-8 py-4 text-xl font-extrabold text-cream ring-4 ring-cream transition-colors hover:bg-tomato-dark ${fullWidth ? 'w-full' : ''}`}
      >
        <PhoneIcon />
        {ctaLabel}
      </a>
      {showNumber && (
        <span className="hidden font-display text-4xl lg:inline">{contact.phoneDisplay}</span>
      )}
    </div>
  )
}
