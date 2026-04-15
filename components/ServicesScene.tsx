'use client'
import { useEffect, useRef } from 'react'

export default function ServicesScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    let animId: number
    let t = 0

    // Wrench/spanner silhouette particles
    const sparks: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }[] = []

    const addSpark = () => {
      const x = Math.random() * W
      const y = H + 10
      sparks.push({
        x, y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -0.8 - Math.random() * 1.5,
        life: 0,
        maxLife: 80 + Math.random() * 80,
        size: 1 + Math.random() * 2,
      })
    }

    // Rings / orbits
    const rings = Array.from({ length: 4 }, (_, i) => ({
      cx: W * (0.15 + i * 0.22),
      cy: H * 0.5,
      r: 30 + i * 18,
      speed: (i % 2 === 0 ? 1 : -1) * (0.006 + i * 0.003),
      phase: i * Math.PI / 2,
      alpha: 0.06 - i * 0.008,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.01

      // Horizontal scan lines
      for (let y = 0; y < H; y += 40) {
        const wave = Math.sin(t * 0.5 + y * 0.02) * 0.03
        ctx.globalAlpha = 0.015 + wave
        ctx.strokeStyle = '#F5C400'
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }

      // Orbiting rings
      for (const ring of rings) {
        ring.cx = W * (0.15 + rings.indexOf(ring) * 0.22)
        ring.cy = H * 0.45
        const angle = t * ring.speed + ring.phase
        ctx.globalAlpha = ring.alpha
        ctx.strokeStyle = '#F5C400'
        ctx.lineWidth = 0.7
        ctx.beginPath()
        ctx.ellipse(ring.cx, ring.cy, ring.r, ring.r * 0.4, angle, 0, Math.PI * 2)
        ctx.stroke()

        // Dot on ring
        const dotX = ring.cx + Math.cos(angle) * ring.r
        const dotY = ring.cy + Math.sin(angle) * ring.r * 0.4
        ctx.globalAlpha = 0.35
        ctx.fillStyle = '#F5C400'
        ctx.beginPath()
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Rising sparks/particles
      if (Math.random() < 0.3) addSpark()
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx + Math.sin(t * 2 + i) * 0.3
        s.y += s.vy
        s.life++
        if (s.life > s.maxLife) { sparks.splice(i, 1); continue }
        const prog = s.life / s.maxLife
        ctx.globalAlpha = (1 - prog) * 0.3
        ctx.fillStyle = prog < 0.5 ? '#F5C400' : '#ffffff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * (1 - prog * 0.5), 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.75 }} />
}
