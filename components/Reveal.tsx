'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function Reveal({ children, className = '', style, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 36 : 0,
    x: direction === 'left' ? -36 : direction === 'right' ? 36 : 0,
  }
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function RevealText({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.div
        initial={{ y: '100%' }}
        animate={inView ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.div>
    </div>
  )
}

export function StaggerReveal({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className} style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
      }}>
      {children}
    </motion.div>
  )
}
