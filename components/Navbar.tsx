'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const Y = '#F5C400'
const DARK = '#0A0A0A'
const LIGHT = '#9A9A9A'
const WHITE = '#F0EEE8'
const D = "'Bebas Neue', sans-serif"
const B = "'DM Sans', sans-serif"

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(245,196,0,0.1)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
              <Image src="/logo-white-bg.jpg" alt="Bako Autos Ltd" fill style={{ objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: D, fontSize: '1.25rem', letterSpacing: '3px', color: Y }}>Bako Autos Ltd</span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                position: 'relative', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '3px',
                textTransform: 'uppercase', textDecoration: 'none', fontFamily: B,
                color: pathname === href ? Y : LIGHT, transition: 'color 0.2s',
                paddingBottom: '4px',
              }}>
                {label}
                {pathname === href && (
                  <motion.span layoutId="nav-underline" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: Y }} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a href="tel:07999180165" className="hidden md:flex" style={{
            background: Y, color: DARK, padding: '0.6rem 1.4rem', borderRadius: '6px',
            fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px',
            textDecoration: 'none', fontFamily: B, letterSpacing: '0.3px',
            transition: 'all 0.2s', boxShadow: '0 0 20px rgba(245,196,0,0.2)',
          }}>
            <Phone size={13} strokeWidth={2.5} /> 07999 180165
          </a>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: WHITE, cursor: 'pointer', padding: '4px', display: 'flex' }} className="flex md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', padding: '6rem 2rem 3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {links.map(({ href, label }, i) => (
                <motion.div key={href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 0' }}>
                  <Link href={href} style={{
                    fontFamily: D, fontSize: '3.5rem', letterSpacing: '3px', textDecoration: 'none',
                    color: pathname === href ? Y : WHITE, display: 'block',
                  }}>{label}</Link>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginTop: 'auto' }}>
              <a href="tel:07999180165" style={{
                background: Y, color: DARK, padding: '1.1rem', borderRadius: '10px',
                fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '10px', textDecoration: 'none', fontFamily: B,
              }}>
                <Phone size={18} /> Call Now: 07999 180165
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bar */}
      <a href="tel:07999180165" className="flex md:hidden" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        background: Y, color: DARK, padding: '1rem', alignItems: 'center',
        justifyContent: 'center', gap: '10px', textDecoration: 'none',
        fontWeight: 600, fontSize: '0.95rem', fontFamily: B,
        boxShadow: '0 -4px 30px rgba(245,196,0,0.3)',
      }}>
        <Phone size={17} strokeWidth={2.5} /> Call Now: 07999 180165
      </a>
    </>
  )
}
