'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem, RevealText } from '@/components/Reveal'
import dynamic from 'next/dynamic'

const ServicesScene = dynamic(() => import('@/components/ServicesScene'), { ssr: false })

const Y = '#F5C400'
const DARK = '#0A0A0A'
const DARK2 = '#111111'
const DARK3 = '#181818'
const LIGHT = '#9A9A9A'
const WHITE = '#F0EEE8'
const DISPLAY = "'Bebas Neue', sans-serif"

const services = [
  { id:'01', title:'Full Vehicle Servicing', subtitle:'Interim · Full · Major', desc:'Comprehensive servicing for all vehicle types. Oil & filter changes, air & cabin filter replacements, spark plug checks, fluid top-ups, brake checks and a full vehicle health report — all done at your location.', image:'/work-3.jpg', points:['Engine oil & filter change','Air & cabin filter replacement','Spark plug check/replacement','Brake fluid & coolant top-up','Full vehicle health report'] },
  { id:'02', title:'Engine Repairs', subtitle:'Rebuilds · Timing · Head Gaskets', desc:"From timing chain replacements to full engine rebuilds, we tackle the jobs most mobile mechanics won't. Our diagnostic-first approach means we find the root cause before we start — saving you time and money.", image:'/work-5.jpg', points:['Timing chain & belt replacement','Head gasket replacement','Camshaft & valve train repair','Engine oil leak diagnosis','Full engine rebuild'] },
  { id:'03', title:'Diagnostics', subtitle:'Fault Codes · Live Data · ECU', desc:"Using professional-grade diagnostic equipment, we read and interpret fault codes across all vehicle makes and models. We don't just clear codes — we find and fix the underlying cause.", image:'/work-4.jpg', points:['OBD-II & advanced ECU scanning','Live engine data analysis','ABS, airbag & gearbox faults','Emissions & MOT failure diagnosis','Post-repair verification'] },
  { id:'04', title:'Brakes & Suspension', subtitle:'Safety · Handling · Comfort', desc:'Safe stopping and stable handling start here. We replace brake pads, discs, callipers, and suspension components across all vehicle types — returning your car to manufacturer spec.', image:'/work-6.jpg', points:['Brake pad & disc replacement','Calliper servicing & replacement','Shock absorber & spring replacement','Wheel bearing replacement','Track rod & ball joint repair'] },
  { id:'05', title:'Van & Commercial', subtitle:'Transit · Sprinter · Vivaro & More', desc:"Vans are workhorses — downtime costs money. We service and repair all light commercial vehicles. Scheduled and emergency repairs available. We keep you on the road.", image:'/work-2.jpg', points:['Full van servicing','Clutch & gearbox repairs','Fuel system service','DPF cleaning & diagnostics','Commercial vehicle inspections'] },
  { id:'06', title:'Electrical & Battery', subtitle:'Starting · Charging · Faults', desc:'Electrical gremlins are no match for our diagnostic equipment. From dead batteries to alternator failures, starter motors to complex wiring faults — we trace the problem and fix it on-site.', image:'/work-1.jpg', points:['Battery test, charge & replacement','Alternator diagnosis & replacement','Starter motor repair','Central locking & window faults','Sensor & actuator replacement'] },
]

const brands = ['BMW','Mercedes','Audi','Volkswagen','Land Rover','Maserati','Ford','Vauxhall','Toyota','Honda','Nissan','Renault','Peugeot','Citroen','Seat','Skoda','Volvo','Hyundai','Kia','Jaguar','Mini','Fiat','All Vans']

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:'relative', minHeight:'60vh', display:'flex', alignItems:'center', overflow:'hidden', paddingTop:'5rem', backgroundColor:DARK, backgroundImage:'linear-gradient(rgba(245,196,0,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,0,.025) 1px,transparent 1px)', backgroundSize:'80px 80px' }}>
        <div style={{ position:'absolute', inset:0 }}><ServicesScene /></div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.6) 100%)' }} />
        <div style={{ position:'relative', zIndex:10, maxWidth:'1200px', margin:'0 auto', padding:'5rem 2rem', width:'100%' }}>
          <motion.span initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'1rem' }}>What We Offer</motion.span>
          <div style={{ overflow:'hidden' }}>
            <motion.h1 initial={{ y:'100%' }} animate={{ y:0 }} transition={{ duration:0.85, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:DISPLAY, fontSize:'clamp(3rem, 9vw, 7rem)', lineHeight:0.88, letterSpacing:'2px', color:WHITE, margin:0 }}>Expert Work,</motion.h1>
          </div>
          <div style={{ overflow:'hidden', marginBottom:'1.5rem' }}>
            <motion.h1 initial={{ y:'100%' }} animate={{ y:0 }} transition={{ duration:0.85, delay:0.12, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:DISPLAY, fontSize:'clamp(3rem, 9vw, 7rem)', lineHeight:0.88, letterSpacing:'2px', color:Y, margin:0 }}>Every Service.</motion.h1>
          </div>
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}
            style={{ color:LIGHT, fontWeight:300, maxWidth:'480px', lineHeight:1.85, fontSize:'1.05rem', marginBottom:'2rem' }}>
            Full mechanical servicing and repairs for all cars and vans — delivered to your door across South London.
          </motion.p>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }}>
            <a href="tel:07999180165" style={{ background:Y, color:DARK, padding:'0.9rem 2rem', borderRadius:'6px', fontWeight:600, fontSize:'0.95rem', display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none' }}>
              <Phone size={17} strokeWidth={2.5} /> Book: 07999 180165
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      {services.map(({ id, title, subtitle, desc, image, points }, i) => (
        <section key={id} style={{ background: i % 2 === 0 ? DARK : DARK2, padding:'5rem 0', borderTop:'1px solid rgba(245,196,0,0.06)' }}>
          <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'4rem', alignItems:'center' }}>
              <div style={{ order: i % 2 !== 0 ? 2 : 1 }}>
                <Reveal>
                  <span style={{ fontFamily:DISPLAY, fontSize:'3.5rem', color:'rgba(245,196,0,0.1)', letterSpacing:'2px', display:'block', lineHeight:1 }}>{id}</span>
                </Reveal>
                <RevealText>
                  <h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2rem, 4vw, 3rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE }}>{title}</h2>
                </RevealText>
                <Reveal delay={0.1}>
                  <span style={{ color:Y, letterSpacing:'3px', textTransform:'uppercase', fontSize:'0.7rem', display:'block', marginTop:'0.5rem', marginBottom:'1.25rem' }}>{subtitle}</span>
                </Reveal>
                <Reveal delay={0.2}>
                  <p style={{ color:LIGHT, fontWeight:300, lineHeight:1.85, marginBottom:'1.25rem' }}>{desc}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <ul style={{ display:'flex', flexDirection:'column', gap:'0.6rem', listStyle:'none', padding:0, margin:0 }}>
                    {points.map((pt, j) => (
                      <li key={j} style={{ display:'flex', alignItems:'center', gap:'8px', color:LIGHT, fontWeight:300, fontSize:'0.88rem' }}>
                        <CheckCircle2 size={14} style={{ color:Y, flexShrink:0 }} strokeWidth={2} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.4}>
                  <a href="tel:07999180165" style={{ color:Y, fontSize:'0.88rem', fontWeight:500, display:'inline-flex', alignItems:'center', gap:'6px', textDecoration:'none', marginTop:'1.25rem' }}>
                    Get a quote → 07999 180165
                  </a>
                </Reveal>
              </div>
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'} style={{ order: i % 2 !== 0 ? 1 : 2 }}>
                <div style={{ borderRadius:'12px', overflow:'hidden', aspectRatio:'4/3', position:'relative', background:DARK3 }}>
                  <Image src={image} alt={title} fill sizes="50vw" style={{ objectFit:'cover', filter:'brightness(0.87) contrast(1.08)' }} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* BRANDS */}
      <section style={{ background:DARK3, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem', textAlign:'center' }}>
          <Reveal><span style={{ color:Y, letterSpacing:'4px', textTransform:'uppercase', fontSize:'0.72rem', display:'block', marginBottom:'0.75rem' }}>Vehicle Coverage</span></Reveal>
          <RevealText><h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.2rem, 5vw, 3.5rem)', lineHeight:0.92, letterSpacing:'2px', color:WHITE, marginBottom:'1rem' }}>We Work On <span style={{ color:Y }}>All Makes</span></h2></RevealText>
          <Reveal delay={0.2}><p style={{ color:LIGHT, fontWeight:300, maxWidth:'480px', margin:'0 auto 2.5rem', lineHeight:1.8 }}>From everyday hatchbacks to premium luxury marques and commercial vans.</p></Reveal>
          <StaggerReveal style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'0.5rem' }}>
            {brands.map(brand => (
              <StaggerItem key={brand}>
                <span style={{ background:DARK2, border:'1px solid rgba(245,196,0,0.12)', color:LIGHT, fontSize:'0.82rem', padding:'6px 14px', borderRadius:'6px', fontWeight:300 }}>{brand}</span>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:Y, padding:'5rem 0' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto', padding:'0 2rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'3rem', alignItems:'center' }}>
            <div>
              <h2 style={{ fontFamily:DISPLAY, fontSize:'clamp(2.5rem, 5vw, 4rem)', lineHeight:0.92, letterSpacing:'2px', color:DARK }}>Ready To Book?<br />Call Us Now.</h2>
              <p style={{ color:'rgba(10,10,10,0.6)', fontWeight:300, lineHeight:1.8, marginTop:'1rem' }}>Phone is the fastest way. We&apos;ll discuss your vehicle, give a clear quote, and arrange a time that works.</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              <a href="tel:07999180165" style={{ background:DARK, color:Y, padding:'1.1rem 2rem', borderRadius:'10px', fontFamily:DISPLAY, fontSize:'1.6rem', letterSpacing:'3px', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', textDecoration:'none' }}>
                <Phone size={22} strokeWidth={2.5} /> 07999 180165
              </a>
              <a href="mailto:bakoautos@gmail.com" style={{ background:'rgba(0,0,0,0.12)', color:DARK, padding:'0.9rem 2rem', borderRadius:'10px', fontSize:'0.9rem', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', fontWeight:500 }}>
                bakoautos@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
