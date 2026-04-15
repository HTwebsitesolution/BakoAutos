'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const Y = '#F5C400'
const DARK2 = '#111111'
const LIGHT = '#9A9A9A'
const WHITE = '#F0EEE8'
const D = "'Bebas Neue', sans-serif"
const B = "'DM Sans', sans-serif"

export default function Footer() {
  return (
    <footer style={{ background: '#0D0D0D', borderTop: '1px solid rgba(245,196,0,0.1)' }}>
      {/* Top CTA strip */}
      <div style={{ background: 'rgba(245,196,0,0.05)', borderBottom: '1px solid rgba(245,196,0,0.08)', padding: '2.5rem 3rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: D, fontSize: '1.6rem', letterSpacing: '2px', color: WHITE, margin: 0 }}>Need A Mobile Mechanic Today?</p>
            <p style={{ color: LIGHT, fontWeight: 300, fontSize: '0.88rem', marginTop: '4px', fontFamily: B }}>We come to you — usually same or next day.</p>
          </div>
          <a href="tel:07999180165" style={{
            background: Y, color: '#0A0A0A', padding: '0.9rem 2rem', borderRadius: '6px',
            fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px',
            textDecoration: 'none', fontFamily: B, whiteSpace: 'nowrap',
            boxShadow: '0 0 30px rgba(245,196,0,0.2)',
          }}>
            <Phone size={16} strokeWidth={2.5} /> 07999 180165
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 3rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', width: '34px', height: '34px', borderRadius: '6px', overflow: 'hidden' }}>
                <Image src="/logo-white-bg.jpg" alt="Bako Autos Ltd" fill style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: D, fontSize: '1.1rem', letterSpacing: '3px', color: Y }}>Bako Autos Ltd</span>
            </div>
            <p style={{ color: LIGHT, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.8, fontFamily: B }}>
              South London&apos;s trusted mobile mechanic. We bring the workshop to you — no garage visit required.
            </p>
            {/* Yellow accent */}
            <div style={{ width: '36px', height: '2px', background: Y, borderRadius: '2px', marginTop: '1.25rem' }} />
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: D, fontSize: '0.9rem', letterSpacing: '3px', color: WHITE, marginBottom: '1.25rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/services', label: 'Services' }].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{ color: LIGHT, fontSize: '0.88rem', fontWeight: 300, textDecoration: 'none', fontFamily: B, transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = Y }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = LIGHT }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: D, fontSize: '0.9rem', letterSpacing: '3px', color: WHITE, marginBottom: '1.25rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a href="tel:07999180165" style={{ color: Y, fontSize: '0.88rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: B }}>
                  <Phone size={14} strokeWidth={2} /> 07999 180165
                </a>
              </li>
              <li>
                <a href="mailto:bakoautos@gmail.com" style={{ color: LIGHT, fontSize: '0.88rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: B }}>
                  <Mail size={14} strokeWidth={1.5} /> bakoautos@gmail.com
                </a>
              </li>
              <li>
                <div style={{ color: LIGHT, fontSize: '0.88rem', fontWeight: 300, display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: B }}>
                  <MapPin size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Within 15 miles of SE24,<br />South London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
          <span style={{ color: LIGHT, fontSize: '0.78rem', fontWeight: 300, fontFamily: B }}>© 2026 Bako Autos Ltd. All rights reserved.</span>
          <span style={{ color: LIGHT, fontSize: '0.78rem', fontWeight: 300, fontFamily: B }}>Registered in England &amp; Wales</span>
        </div>
      </div>
    </footer>
  )
}
