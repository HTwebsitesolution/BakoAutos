'use client'
import { useEffect, useRef } from 'react'

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animFrame: number
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = canvas.offsetWidth
    let height = canvas.height = canvas.offsetHeight

    // Particles forming an engine/gear motif
    const PARTICLE_COUNT = 160
    const particles: {
      x: number; y: number; z: number
      vx: number; vy: number; vz: number
      size: number; alpha: number; speed: number
      orbitRadius: number; orbitAngle: number; orbitSpeed: number
      layer: number
    }[] = []

    const cx = width / 2
    const cy = height / 2

    // Create orbital particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const layer = Math.floor(Math.random() * 4)
      const orbitRadius = 80 + layer * 55 + Math.random() * 40
      const orbitAngle = Math.random() * Math.PI * 2
      const speed = (0.002 + Math.random() * 0.003) * (layer % 2 === 0 ? 1 : -1)
      particles.push({
        x: cx + Math.cos(orbitAngle) * orbitRadius,
        y: cy + Math.sin(orbitAngle) * orbitRadius,
        z: Math.random(),
        vx: 0, vy: 0, vz: 0,
        size: 0.5 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.7,
        speed,
        orbitRadius,
        orbitAngle,
        orbitSpeed: speed,
        layer,
      })
    }

    // Floating ambient particles
    const floaters: { x: number; y: number; vy: number; size: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      floaters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -0.1 - Math.random() * 0.2,
        size: 0.5 + Math.random() * 1,
        alpha: 0.05 + Math.random() * 0.15,
      })
    }

    let t = 0

    const drawGear = (x: number, y: number, outerR: number, innerR: number, teeth: number, angle: number, alpha: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.globalAlpha = alpha
      ctx.strokeStyle = `rgba(245,196,0,${alpha})`
      ctx.lineWidth = 0.8
      ctx.beginPath()
      for (let i = 0; i < teeth * 2; i++) {
        const a = (i / (teeth * 2)) * Math.PI * 2
        const r = i % 2 === 0 ? outerR : innerR
        if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
        else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      }
      ctx.closePath()
      ctx.stroke()
      // Inner circle
      ctx.beginPath()
      ctx.arc(0, 0, innerR * 0.55, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      t += 0.008

      // Background radial glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.5)
      grd.addColorStop(0, 'rgba(245,196,0,0.04)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      // Draw gears
      drawGear(cx, cy, 90, 72, 12, t * 0.4, 0.12)
      drawGear(cx, cy, 140, 118, 18, -t * 0.25, 0.08)
      drawGear(cx, cy, 200, 172, 24, t * 0.15, 0.05)
      drawGear(cx + 120, cy - 60, 45, 36, 8, -t * 0.6, 0.06)
      drawGear(cx - 100, cy + 50, 35, 28, 6, t * 0.7, 0.05)

      // Connection lines between orbital particles (same layer)
      ctx.lineWidth = 0.3
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[i].layer !== particles[j].layer) continue
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 60) {
            ctx.globalAlpha = (1 - dist / 60) * 0.12
            ctx.strokeStyle = 'rgba(245,196,0,1)'
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw orbital particles
      for (const p of particles) {
        p.orbitAngle += p.orbitSpeed
        p.x = cx + Math.cos(p.orbitAngle) * p.orbitRadius
        p.y = cy + Math.sin(p.orbitAngle) * p.orbitRadius

        const flicker = 0.7 + 0.3 * Math.sin(t * 3 + p.orbitAngle * 5)
        ctx.globalAlpha = p.alpha * flicker
        ctx.fillStyle = p.layer === 0 ? '#F5C400' : p.layer === 1 ? '#ffffff' : 'rgba(245,196,0,0.6)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Ambient floaters
      for (const f of floaters) {
        f.y += f.vy
        if (f.y < 0) f.y = height
        ctx.globalAlpha = f.alpha
        ctx.fillStyle = 'rgba(245,196,0,1)'
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animFrame = requestAnimationFrame(render)
    }

    render()

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  )
}
