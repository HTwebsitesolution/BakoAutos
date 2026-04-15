'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from 'lucide-react'
import dynamic from 'next/dynamic'
import Ticker from '@/components/Ticker'
import { Reveal, StaggerReveal, StaggerItem, RevealText } from '@/components/Reveal'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })
const CarAnimation = dynamic(() => import('@/components/CarAnimation'), { ssr: false })

const Y = '#F5C400'
const DARK = '#0A0A0A'
const DARK2 = '#111111'
const DARK3 = '#181818'
const LIGHT = '#9A9A9A'
const WHITE = '#F0EEE8'
const D = "'Bebas Neue', sans-serif"

const services = [
  { title: 'Full Servicing', desc: 'Oil changes, filter replacements, fluid checks — complete service at your door.' },
  { title: 'Engine Repairs', desc: 'Timing chains, head gaskets, diagnostics — expert engine work on all makes.' },
  { title: 'Diagnostics', desc: 'Live ECU scanning and fault code clearing. Find the issue fast.' },
  { title: 'Van Servicing', desc: 'Full mechanical care for all light commercial vehicles and vans.' },
  { title: 'Brakes & Suspension', desc: 'Pads, discs, bushes, springs — all brake and suspension work covered.' },
  { title: 'Electrical', desc: 'Battery, alternator, starters and vehicle electrics diagnosed and repaired.' },
]

const gallery = [
  { src: '/work-3.jpg', label: 'Diagnostic work', span: false },
  { src: '/work-2.jpg', label: 'Engine repair', span: false },
  { src: '/work-4.jpg', label: 'Camshaft service', span: false },
  { src: '/work-5.jpg', label: 'Timing chains', span: false },
  { src: '/work-1.jpg', label: 'Timing chain kit', span: false },
  { src: '/work-6.jpg', label: 'VAG engine', span: false },
]

const areas = ['Herne Hill','Brixton','Peckham','Dulwich','Streatham','Lewisham','Clapham','Stockwell','Vauxhall','Greenwich']

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', overflow: 'hidden', paddingTop: '5rem', backgroundColor: DARK,
        backgroundImage: 'linear-gradient(rgba(245,196,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,0,.03) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }}>
        {/* Subtle particle background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}><HeroScene /></div>
        {/* Gradient: strong on left for text, clear on right for car */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.3) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)' }} />
        {/* Yellow left accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: 'linear-gradient(to bottom, transparent, #F5C400 25%, #F5C400 75%, transparent)' }} />

        {/* Two-column layout */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '4rem 3rem 6rem', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', minHeight: '80vh' }}>

          {/* LEFT: text */}
          <div>
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', width: '36px', height: '1px', background: Y }} />
              <span style={{ color: Y, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                Mobile Mechanic &nbsp;·&nbsp; South London
              </span>
            </motion.div>

            {[
              { text: 'Your Car,', color: WHITE, delay: 0 },
              { text: 'Fixed.', color: Y, delay: 0.14 },
              { text: 'We Come To You.', color: 'rgba(240,238,232,0.18)', delay: 0.28 },
            ].map(({ text, color, delay }) => (
              <div key={text} style={{ overflow: 'hidden' }}>
                <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: D, fontSize: 'clamp(3rem, 7vw, 7.5rem)', lineHeight: 0.86, letterSpacing: '1px', color, margin: 0, padding: 0 }}>
                  {text}
                </motion.h1>
              </div>
            ))}

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              style={{ marginTop: '2.5rem' }}>
              <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, fontSize: '1rem', marginBottom: '2rem', fontFamily: "'DM Sans', sans-serif", maxWidth: '420px' }}>
                Professional servicing and repairs for all cars and vans, brought directly to your door. No garage visit. No towing. No stress.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                <a href="tel:07999180165" style={{
                  background: Y, color: DARK, padding: '1rem 2rem', borderRadius: '6px', fontWeight: 600,
                  fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", boxShadow: '0 0 30px rgba(245,196,0,0.25)',
                }}>
                  <Phone size={15} strokeWidth={2.5} /> Call: 07999 180165
                </a>
                <Link href="/services" style={{
                  border: '1px solid rgba(245,196,0,0.35)', color: WHITE, padding: '1rem 1.75rem', borderRadius: '6px',
                  fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", background: 'rgba(255,255,255,0.04)',
                }}>
                  Our Services <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '3rem' }}>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                <ChevronDown size={14} style={{ color: Y }} />
              </motion.div>
              <span style={{ fontSize: '0.6rem', letterSpacing: '4px', color: LIGHT, textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
            </motion.div>
          </div>

          {/* RIGHT: car animation */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            style={{ position: 'relative', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Phase label */}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2 }}>
              <span style={{ background: 'rgba(245,196,0,0.1)', border: '1px solid rgba(245,196,0,0.25)', color: Y, fontSize: '0.62rem', letterSpacing: '3px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px', fontFamily: "'DM Sans', sans-serif" }}>
                Live Demo
              </span>
            </div>
            {/* Canvas */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <CarAnimation />
            </div>
            {/* 15mi badge repositioned */}
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                position: 'absolute', bottom: '-1rem', right: '0',
                width: '90px', height: '90px', borderRadius: '50%',
                border: '1px solid rgba(245,196,0,0.4)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(8px)',
              }}>
              <span style={{ fontFamily: D, fontSize: '1.9rem', color: Y, lineHeight: 1 }}>15mi</span>
              <span style={{ fontSize: '0.48rem', letterSpacing: '2px', color: LIGHT, lineHeight: 1.4, textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>RADIUS<br />COVERED</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <Ticker />

      {/* ══ WHY BAKO ══ */}
      <section style={{ background: DARK2, padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-block', width: '28px', height: '1px', background: Y }} />
                  <span style={{ color: Y, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif" }}>Why Choose Bako</span>
                </div>
              </Reveal>
              <RevealText>
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 0.92, letterSpacing: '1px', color: WHITE, marginBottom: '2rem' }}>
                  Expert Repairs,<br /><span style={{ color: Y }}>On Your Doorstep.</span>
                </h2>
              </RevealText>
              <Reveal delay={0.2}>
                <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, marginBottom: '1.1rem', fontFamily: "'DM Sans', sans-serif" }}>
                  Bako Autos Ltd is a fully mobile mechanic service covering South London. We come to your home, workplace — or wherever your vehicle is.
                </p>
                <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, marginBottom: '1.1rem', fontFamily: "'DM Sans', sans-serif" }}>
                  From routine oil changes to complex engine rebuilds, we handle{' '}
                  <strong style={{ color: WHITE, fontWeight: 500 }}>all makes and models</strong> — cars, SUVs, and all types of vans.
                </p>
                <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, fontFamily: "'DM Sans', sans-serif" }}>
                  No garage, no towing, no waiting. Honest, professional work at a time and place that suits you.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link href="/about" style={{
                  color: Y, fontSize: '0.72rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center',
                  gap: '6px', textDecoration: 'none', marginTop: '2rem', fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '1px', textTransform: 'uppercase',
                }}>
                  More About Us <ArrowRight size={13} />
                </Link>
              </Reveal>
            </div>

            <StaggerReveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { num: 'All', label: 'Vehicle Types', sub: 'Cars, vans, SUVs' },
                { num: '15mi', label: 'Service Radius', sub: 'From SE24' },
                { num: 'SE24', label: 'Based In', sub: 'South London' },
                { num: '100%', label: 'Mobile Service', sub: 'We come to you' },
              ].map(({ num, label, sub }) => (
                <StaggerItem key={label}>
                  <div style={{
                    background: DARK3, border: '1px solid rgba(245,196,0,0.1)', borderRadius: '12px',
                    padding: '1.75rem 1.5rem', position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: Y, opacity: 0.7 }} />
                    <div style={{ fontFamily: D, fontSize: '2.6rem', color: Y, lineHeight: 1, marginBottom: '4px' }}>{num}</div>
                    <div style={{ color: WHITE, fontSize: '0.8rem', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", marginBottom: '2px' }}>{label}</div>
                    <div style={{ color: LIGHT, fontSize: '0.72rem', fontWeight: 300, fontFamily: "'DM Sans', sans-serif" }}>{sub}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{ background: DARK, padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <Reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-block', width: '28px', height: '1px', background: Y }} />
                  <span style={{ color: Y, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif" }}>What We Do</span>
                </div>
              </Reveal>
              <RevealText>
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 0.92, letterSpacing: '1px', color: WHITE }}>Our Services</h2>
              </RevealText>
            </div>
            <Reveal direction="right">
              <Link href="/services" style={{ color: Y, fontSize: '0.72rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", letterSpacing: '1px', textTransform: 'uppercase' }}>
                View All Services <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>

          <StaggerReveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(245,196,0,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
            {services.map(({ title, desc }, i) => (
              <StaggerItem key={title}>
                <div style={{ background: DARK2, padding: '2.5rem 2rem', height: '100%', cursor: 'default', transition: 'background 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = DARK3 }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = DARK2 }}>
                  {/* Number */}
                  <div style={{ fontFamily: D, fontSize: '1rem', color: 'rgba(245,196,0,0.3)', letterSpacing: '2px', marginBottom: '1.25rem' }}>
                    0{i + 1}
                  </div>
                  {/* Yellow bar */}
                  <div style={{ width: '32px', height: '2px', background: Y, marginBottom: '1.25rem', borderRadius: '2px' }} />
                  <h3 style={{ fontFamily: D, fontSize: '1.4rem', letterSpacing: '1px', color: WHITE, marginBottom: '0.75rem' }}>{title}</h3>
                  <p style={{ color: LIGHT, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ══ GALLERY ══ */}
      <section style={{ background: DARK3, padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <Reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-block', width: '28px', height: '1px', background: Y }} />
                  <span style={{ color: Y, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif" }}>Our Work</span>
                </div>
              </Reveal>
              <RevealText>
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 0.92, letterSpacing: '1px', color: WHITE }}>In The Workshop</h2>
              </RevealText>
            </div>
          </div>

          {/* Asymmetric gallery grid */}
          <StaggerReveal style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '0.75rem' }}>
            {gallery.map(({ src, label }, i) => (
              <StaggerItem key={i} style={{ gridColumn: i === 0 ? 'span 1' : 'span 1', gridRow: i === 0 ? 'span 2' : 'span 1' }}>
                <div style={{
                  position: 'relative', borderRadius: '10px', overflow: 'hidden',
                  height: i === 0 ? '100%' : '200px', minHeight: i === 0 ? '420px' : '200px',
                  background: DARK,
                }}>
                  <Image src={src} alt={label} fill sizes="(max-width:768px) 100vw, 40vw"
                    style={{ objectFit: 'cover', filter: 'brightness(0.85) contrast(1.08) saturate(0.95)', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                  />
                  {/* Label overlay */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1rem 0.75rem',
                    background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 100%)',
                  }}>
                    <span style={{ color: 'rgba(240,238,232,0.7)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ background: DARK2, padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px,1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Left: text */}
            <div>
              <Reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'inline-block', width: '28px', height: '1px', background: Y }} />
                  <span style={{ color: Y, letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif" }}>Get In Touch</span>
                </div>
              </Reveal>
              <RevealText>
                <h2 style={{ fontFamily: D, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 0.92, letterSpacing: '1px', color: WHITE, marginBottom: '2rem' }}>
                  Book A Job<br /><span style={{ color: Y }}>Or Get A Quote</span>
                </h2>
              </RevealText>
              <Reveal delay={0.2}>
                <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, marginBottom: '1rem', fontFamily: "'DM Sans', sans-serif" }}>
                  The fastest way to reach us is by phone. Call or text and we&apos;ll arrange to come straight to you — usually same or next day.
                </p>
                <p style={{ color: LIGHT, fontWeight: 300, lineHeight: 1.9, fontFamily: "'DM Sans', sans-serif" }}>
                  We cover all of South London within a{' '}
                  <strong style={{ color: WHITE, fontWeight: 500 }}>15-mile radius of SE24</strong>. Not sure if we reach you? Just ring us.
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div style={{ marginTop: '2rem' }}>
                  <p style={{ color: LIGHT, fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'DM Sans', sans-serif" }}>Areas covered</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {areas.map(a => (
                      <span key={a} style={{
                        background: 'rgba(245,196,0,0.08)', color: Y,
                        border: '1px solid rgba(245,196,0,0.2)', borderRadius: '4px',
                        padding: '4px 12px', fontSize: '0.75rem', fontFamily: "'DM Sans', sans-serif",
                      }}>{a}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: contact cards */}
            <StaggerReveal style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
              {/* Phone - hero card */}
              <StaggerItem>
                <a href="tel:07999180165" style={{
                  background: Y, borderRadius: '14px', padding: '2rem', display: 'flex',
                  alignItems: 'center', gap: '1.5rem', textDecoration: 'none',
                  boxShadow: '0 20px 60px rgba(245,196,0,0.2)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 28px 70px rgba(245,196,0,0.3)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 20px 60px rgba(245,196,0,0.2)' }}>
                  <div style={{ width: '52px', height: '52px', background: 'rgba(0,0,0,0.18)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} style={{ color: DARK }} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(10,10,10,0.5)', marginBottom: '3px', fontFamily: "'DM Sans', sans-serif" }}>
                      Phone — Best Way To Reach Us
                    </div>
                    <div style={{ fontFamily: D, fontSize: '2rem', color: DARK, letterSpacing: '2px', lineHeight: 1.1 }}>07999 180165</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(10,10,10,0.55)', marginTop: '3px', fontFamily: "'DM Sans', sans-serif" }}>
                      Call or text for a fast response
                    </div>
                  </div>
                  <ArrowRight size={20} style={{ color: DARK, flexShrink: 0 }} />
                </a>
              </StaggerItem>

              {/* Email */}
              <StaggerItem>
                <a href="mailto:bakoautos@gmail.com" style={{
                  background: DARK3, border: '1px solid rgba(245,196,0,0.12)', borderRadius: '14px',
                  padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(245,196,0,0.3)'; el.style.background = '#202020' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(245,196,0,0.12)'; el.style.background = DARK3 }}>
                  <div style={{ width: '46px', height: '46px', background: 'rgba(245,196,0,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} style={{ color: Y }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '3px', color: LIGHT, marginBottom: '3px', fontFamily: "'DM Sans', sans-serif" }}>Email</div>
                    <div style={{ color: WHITE, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>bakoautos@gmail.com</div>
                  </div>
                </a>
              </StaggerItem>

              {/* Location */}
              <StaggerItem>
                <div style={{
                  background: DARK3, border: '1px solid rgba(245,196,0,0.12)', borderRadius: '14px',
                  padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem',
                }}>
                  <div style={{ width: '46px', height: '46px', background: 'rgba(245,196,0,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} style={{ color: Y }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '3px', color: LIGHT, marginBottom: '3px', fontFamily: "'DM Sans', sans-serif" }}>Coverage Area</div>
                    <div style={{ color: WHITE, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>Within 15 miles of SE24, South London</div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </div>
      </section>
    </>
  )
}
