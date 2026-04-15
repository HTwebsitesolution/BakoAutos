'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem, RevealText } from '@/components/Reveal'
import dynamic from 'next/dynamic'

const AboutScene = dynamic(() => import('@/components/AboutScene'), { ssr: false })

const Y = '#F5C400'
const DARK = '#0A0A0A'
const DARK2 = '#111111'
const DARK3 = '#181818'
const LIGHT = '#9A9A9A'
const WHITE = '#F0EEE8'
const DISPLAY = "'Bebas Neue', sans-serif"

const values = [
  { title: 'Transparency', desc: 'Clear, upfront pricing with no hidden fees. We explain every job before we start.' },
  { title: 'Expertise', desc: 'Years of hands-on experience across all makes, models, and vehicle types.' },
  { title: 'Convenience', desc: 'We come to you — home, work, or roadside. No towing, no downtime.' },
  { title: 'Quality', desc: 'Quality parts and proven techniques. Every repair done properly, first time.' },
]

const capabilities = [
  'Engine rebuilds & timing chain replacements',
  'Full vehicle servicing (interim, full, major)',
  'ECU diagnostics & fault code clearing',
  'Brake & suspension overhauls',
  'Clutch & gearbox repairs',
  'Cooling system repairs',
  'Air conditioning servicing',
  'Electrical fault finding',
  'Pre-purchase inspections',
  'Van & light commercial vehicle work',
  'Maserati, BMW, Land Rover & more',
  'VAG group vehicles (VW, Audi, Seat, Skoda)',
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:'relative', minHeight:'65vh', display:'flex', alignItems:'center', overflow:'hidden', paddingTop:'5rem', backgroundColor:DARK, backgroundImage:'linear-gradient(rgba(245,196,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,0,.025) 1px,transparent 1px)', backgroundSize:'80px 80px' }}>
        <div style={{ position:'absolute', inset:0 }}><AboutScene /></div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.7) 100%)' }} />
        <div style={{ position:'relative', zIndex:10, maxWidth:'1200px', margin:'0 auto', padding:'5rem 2rem', width:'100%' }}>
          <motion.span initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'1rem' }}>About Us</motion.span>
          <div style={{ overflow:'hidden' }}>
            <motion.h1 initial={{ y:'100%' }} animate={{ y:0 }} transition={{ duration:0.85, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:DISPLAY, fontSize:'clamp(3rem, 9vw, 7rem)', lineHeight:0.88, letterSpacing:'2px', color:WHITE, margin:0 }}>
              Built On Trust,
            </motion.h1>
          </div>
          <div style={{ overflow:'hidden', marginBottom:'1.5rem' }}>
            <motion.h1 initial={{ y:'100%' }} animate={{ y:0 }} transition={{ duration:0.85, delay:0.12, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:DISPLAY, fontSize:'clamp(3rem, 9vw, 7rem)', lineHeight:0.88, letterSpacing:'2px', color:Y, margin:0 }}>
              Driven By Craft.
            </motion.h1>
          </div>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}
            style={{ color:LIGHT, fontWeight:300, maxWidth:'500px', lineHeight:1.85, fontSize:'1.05rem' }}>
            Bako Autos Ltd brings professional-grade mechanical expertise directly to South London streets — no garage needed.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background:DARK2, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'4rem', alignItems:'center' }}>
            <div>
              <Reveal><span style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem' }}>Our Story</span></Reveal>
              <RevealText>
                <h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE, marginBottom:'1.5rem' }}>
                  The Mobile<br /><span style={{ color:Y }}>Workshop.</span>
                </h2>
              </RevealText>
              <Reveal delay={0.2}>
                <p style={{ color:LIGHT, fontWeight:300, lineHeight:1.85, marginBottom:'1rem' }}>Bako Autos Ltd was founded on a simple idea: <strong style={{ color:WHITE, fontWeight:500 }}>vehicle repair shouldn&apos;t be stressful or expensive</strong>. Getting your car to a garage, waiting days, paying for recovery trucks — it all adds up.</p>
                <p style={{ color:LIGHT, fontWeight:300, lineHeight:1.85, marginBottom:'1rem' }}>We cut all of that out. Our fully-equipped mobile workshop comes to you, whether you&apos;re at home in Brixton, at work in Vauxhall, or stranded somewhere across South London.</p>
                <p style={{ color:LIGHT, fontWeight:300, lineHeight:1.85 }}>We take pride in handling <strong style={{ color:WHITE, fontWeight:500 }}>complex mechanical work</strong> that most mobile mechanics won&apos;t touch — timing chain replacements, engine rebuilds, advanced diagnostics on premium vehicles like Land Rover, Maserati, and BMW.</p>
              </Reveal>
            </div>
            <Reveal direction="right">
              <div style={{ position:'relative' }}>
                <div style={{ borderRadius:'12px', overflow:'hidden', aspectRatio:'4/3', position:'relative' }}>
                  <Image src="/work-2.jpg" alt="Bako Autos mechanic at work" fill sizes="50vw" style={{ objectFit:'cover', filter:'brightness(0.9) contrast(1.05)' }} />
                </div>
                <div style={{ position:'absolute', bottom:'-1.5rem', left:'-1.5rem', background:Y, padding:'1.25rem 1.5rem', borderRadius:'10px' }} className="hidden md:block">
                  <div style={{ fontFamily:DISPLAY, fontSize:'2rem', color:DARK, lineHeight:1 }}>SE24</div>
                  <div style={{ fontSize:'0.7rem', color:'rgba(10,10,10,0.6)', letterSpacing:'2px', textTransform:'uppercase' }}>South London</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background:DARK, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
          <Reveal><span style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem' }}>How We Work</span></Reveal>
          <RevealText><h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE, marginBottom:'3rem' }}>Our Values</h2></RevealText>
          <StaggerReveal style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1rem' }}>
            {values.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div style={{ background:DARK3, border:'1px solid rgba(245,196,0,0.1)', borderRadius:'12px', padding:'1.75rem', height:'100%' }}>
                  <div style={{ width:'32px', height:'3px', background:Y, borderRadius:'2px', marginBottom:'1rem' }} />
                  <h3 style={{ fontFamily:DISPLAY, fontSize:'1.2rem', letterSpacing:'1px', color:WHITE, marginBottom:'0.5rem' }}>{title}</h3>
                  <p style={{ color:LIGHT, fontWeight:300, fontSize:'0.88rem', lineHeight:1.7 }}>{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background:DARK2, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'4rem', alignItems:'center' }}>
            <Reveal direction="left">
              <div style={{ position:'relative' }}>
                <div style={{ borderRadius:'12px', overflow:'hidden', aspectRatio:'3/4', position:'relative' }}>
                  <Image src="/work-5.jpg" alt="Timing chain repair" fill sizes="40vw" style={{ objectFit:'cover', filter:'brightness(0.88) contrast(1.1)' }} />
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal><span style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem' }}>Capabilities</span></Reveal>
              <RevealText>
                <h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE, marginBottom:'1.5rem' }}>
                  What We<br /><span style={{ color:Y }}>Handle</span>
                </h2>
              </RevealText>
              <Reveal delay={0.2}>
                <ul style={{ display:'flex', flexDirection:'column', gap:'0.75rem', listStyle:'none', padding:0, margin:0 }}>
                  {capabilities.map((item, i) => (
                    <li key={i} style={{ display:'flex', alignItems:'center', gap:'10px', color:LIGHT, fontWeight:300, fontSize:'0.88rem' }}>
                      <CheckCircle2 size={14} style={{ color:Y, flexShrink:0 }} strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background:DARK3, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
          <Reveal><span style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem' }}>Gallery</span></Reveal>
          <RevealText><h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE, marginBottom:'2.5rem' }}>Real Jobs,<br /><span style={{ color:Y }}>Real Results</span></h2></RevealText>
          <StaggerReveal style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'0.75rem' }}>
            {['/work-1.jpg','/work-3.jpg','/work-4.jpg','/work-6.jpg'].map((src, i) => (
              <StaggerItem key={i}>
                <div style={{ position:'relative', borderRadius:'8px', overflow:'hidden', aspectRatio:'1/1', background:DARK }}>
                  <Image src={src} alt="Workshop" fill sizes="25vw" style={{ objectFit:'cover', filter:'brightness(0.85) contrast(1.08)' }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:DARK, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem', textAlign:'center' }}>
          <Reveal>
            <h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.5rem, 7vw, 5.5rem)', lineHeight:0.9, letterSpacing:'2px', color:WHITE }}>
              Ready To Get<br /><span style={{ color:Y }}>Your Car Fixed?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color:LIGHT, fontWeight:300, maxWidth:'420px', margin:'1.25rem auto 2.5rem', lineHeight:1.8 }}>
              Give us a call — we&apos;ll talk through the issue and get you booked in fast.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
              <a href="tel:07999180165" style={{ background:Y, color:DARK, padding:'0.9rem 2rem', borderRadius:'6px', fontWeight:600, fontSize:'0.95rem', display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none' }}>
                <Phone size={17} strokeWidth={2.5} /> 07999 180165
              </a>
              <Link href="/services" style={{ border:'1px solid rgba(255,255,255,0.2)', color:WHITE, padding:'0.9rem 2rem', borderRadius:'6px', fontSize:'0.95rem', display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none' }}>
                View Services <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
