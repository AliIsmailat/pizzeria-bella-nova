import { useEffect, useState } from 'react'
import { CallButton } from './CallButton'

export function StickyCallBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById('hero-cta')
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting))
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-20 bg-basil px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.25)] motion-safe:transition-transform motion-safe:duration-300 lg:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <CallButton fullWidth />
    </div>
  )
}
