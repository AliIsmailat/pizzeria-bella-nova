const backgrounds = {
  cream: 'bg-cream',
  tint: 'bg-tint',
  tomato: 'bg-tomato',
  basil: 'bg-basil',
} as const

const colors = {
  cream: 'text-cream',
  tint: 'text-tint',
  tomato: 'text-tomato',
  basil: 'text-basil',
} as const

type Tone = keyof typeof backgrounds

interface WaveProps {
  className?: string
}

export function Wave({ className = '' }: WaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${className}`}
    >
      <path
        d="M0 40C120 0 240 0 360 40C480 80 600 80 720 40C840 0 960 0 1080 40C1200 80 1320 80 1440 40L1440 80L0 80Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface DividerProps {
  from: Tone
  to: Tone
}

export function Divider({ from, to }: DividerProps) {
  return (
    <div className={`${backgrounds[from]} -mb-px`}>
      <Wave className={colors[to]} />
    </div>
  )
}
