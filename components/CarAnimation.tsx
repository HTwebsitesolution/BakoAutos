'use client'
import { useEffect, useRef } from 'react'

export default function CarAnimation() {
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

    // ── Animation state machine ──
    // Phase 0: car drives in from right (t 0→120)
    // Phase 1: car settles, bonnet lifts (t 120→200)
    // Phase 2: diagnostic sparks / wrench action (t 200→340)
    // Phase 3: checkmark appears, bonnet closes (t 340→420)
    // Phase 4: pause, then restart (t 420→500)
    const TOTAL = 500

    const easeOut = (x: number) => 1 - Math.pow(1 - x, 3)
    const easeInOut = (x: number) => x < 0.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
    const lerp = (a: number, b: number, t: number) => a + (b - a) * clamp(t, 0, 1)

    const drawCar = (cx: number, cy: number, scale: number, bonnets: number, phase: number) => {
      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(scale, scale)

      const Y = '#F5C400'
      const W2 = '#F0EEE8'
      const DARK = '#0A0A0A'
      const GRAY = '#2A2A2A'
      const LGRAY = '#3A3A3A'
      const DGRAY = '#1A1A1A'

      // ── Shadow ──
      ctx.beginPath()
      ctx.ellipse(0, 78, 160, 14, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fill()

      // ── Body lower ──
      ctx.beginPath()
      ctx.moveTo(-180, 40)
      ctx.lineTo(-180, 60)
      ctx.quadraticCurveTo(-180, 75, -165, 75)
      ctx.lineTo(165, 75)
      ctx.quadraticCurveTo(180, 75, 180, 60)
      ctx.lineTo(180, 40)
      ctx.closePath()
      ctx.fillStyle = GRAY
      ctx.fill()

      // ── Body main ──
      ctx.beginPath()
      ctx.moveTo(-180, 40)
      ctx.lineTo(-180, 10)
      ctx.lineTo(-120, 10)
      ctx.lineTo(-80, -40)
      ctx.lineTo(80, -40)
      ctx.lineTo(130, 10)
      ctx.lineTo(180, 10)
      ctx.lineTo(180, 40)
      ctx.closePath()
      ctx.fillStyle = LGRAY
      ctx.fill()
      // Body highlight
      ctx.beginPath()
      ctx.moveTo(-170, 20)
      ctx.lineTo(-120, 20)
      ctx.lineTo(-82, -28)
      ctx.lineTo(78, -28)
      ctx.lineTo(128, 20)
      ctx.lineTo(170, 20)
      ctx.strokeStyle = 'rgba(245,196,0,0.15)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // ── Bonnet (opens upward) ──
      ctx.save()
      // Pivot at front-top of bonnet
      ctx.translate(-80, -40)
      ctx.rotate(-bonnets * 0.45) // max ~26 deg open
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-100, 0)
      ctx.lineTo(-100, 12)
      ctx.lineTo(0, 12)
      ctx.closePath()
      ctx.fillStyle = '#333333'
      ctx.fill()
      ctx.strokeStyle = 'rgba(245,196,0,0.2)'
      ctx.lineWidth = 1
      ctx.stroke()
      // Bonnet edge chrome strip
      ctx.beginPath()
      ctx.moveTo(-100, 0)
      ctx.lineTo(0, 0)
      ctx.strokeStyle = Y
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()

      // ── Windscreen ──
      ctx.beginPath()
      ctx.moveTo(-78, -38)
      ctx.lineTo(-42, -75)
      ctx.lineTo(42, -75)
      ctx.lineTo(78, -38)
      ctx.closePath()
      ctx.fillStyle = 'rgba(100,160,200,0.18)'
      ctx.fill()
      ctx.strokeStyle = GRAY
      ctx.lineWidth = 2
      ctx.stroke()
      // Windscreen glare
      ctx.beginPath()
      ctx.moveTo(-68, -42)
      ctx.lineTo(-38, -70)
      ctx.lineTo(-10, -70)
      ctx.lineTo(-38, -42)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255,255,255,0.06)'
      ctx.fill()

      // ── Rear window ──
      ctx.beginPath()
      ctx.moveTo(42, -75)
      ctx.lineTo(78, -38)
      ctx.lineTo(125, 8)
      ctx.lineTo(78, 8)
      ctx.lineTo(42, -72)
      ctx.closePath()
      ctx.fillStyle = 'rgba(100,160,200,0.12)'
      ctx.fill()
      ctx.strokeStyle = GRAY
      ctx.lineWidth = 1.5
      ctx.stroke()

      // ── Door lines ──
      ctx.beginPath()
      ctx.moveTo(-10, -38)
      ctx.lineTo(-10, 40)
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'
      ctx.lineWidth = 1
      ctx.stroke()

      // ── Door handles ──
      for (const dx of [-60, 40]) {
        ctx.beginPath()
        ctx.roundRect(dx, 5, 22, 5, 2)
        ctx.fillStyle = '#555'
        ctx.fill()
      }

      // ── Yellow side stripe ──
      ctx.beginPath()
      ctx.moveTo(-178, 52)
      ctx.lineTo(178, 52)
      ctx.strokeStyle = Y
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6
      ctx.stroke()
      ctx.globalAlpha = 1

      // ── Front grille / headlights ──
      // Grille
      ctx.beginPath()
      ctx.roundRect(-178, 18, 18, 22, 3)
      ctx.fillStyle = DGRAY
      ctx.fill()
      ctx.strokeStyle = Y
      ctx.lineWidth = 1
      ctx.stroke()
      // Grille slats
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.moveTo(-177, 21 + i * 5)
        ctx.lineTo(-162, 21 + i * 5)
        ctx.strokeStyle = 'rgba(245,196,0,0.3)'
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
      // Headlight
      ctx.beginPath()
      ctx.moveTo(-178, 14)
      ctx.lineTo(-150, 10)
      ctx.lineTo(-150, 18)
      ctx.lineTo(-178, 18)
      ctx.closePath()
      ctx.fillStyle = phase >= 1 ? 'rgba(245,196,0,0.9)' : '#222'
      ctx.fill()
      // Headlight beam
      if (phase >= 1) {
        const beamGrad = ctx.createLinearGradient(-178, 14, -260, 0)
        beamGrad.addColorStop(0, 'rgba(245,196,0,0.3)')
        beamGrad.addColorStop(1, 'rgba(245,196,0,0)')
        ctx.beginPath()
        ctx.moveTo(-178, 14)
        ctx.lineTo(-260, -20)
        ctx.lineTo(-260, 20)
        ctx.lineTo(-178, 18)
        ctx.closePath()
        ctx.fillStyle = beamGrad
        ctx.fill()
      }

      // ── Rear lights ──
      ctx.beginPath()
      ctx.moveTo(178, 12)
      ctx.lineTo(155, 10)
      ctx.lineTo(155, 18)
      ctx.lineTo(178, 20)
      ctx.closePath()
      ctx.fillStyle = 'rgba(200,30,30,0.7)'
      ctx.fill()

      // ── Wheels ──
      for (const wx of [-110, 110]) {
        // Tyre
        ctx.beginPath()
        ctx.arc(wx, 75, 30, 0, Math.PI * 2)
        ctx.fillStyle = '#111'
        ctx.fill()
        ctx.strokeStyle = '#333'
        ctx.lineWidth = 3
        ctx.stroke()
        // Rim
        ctx.beginPath()
        ctx.arc(wx, 75, 20, 0, Math.PI * 2)
        ctx.fillStyle = '#222'
        ctx.fill()
        ctx.strokeStyle = Y
        ctx.lineWidth = 1.5
        ctx.stroke()
        // Spokes
        for (let s = 0; s < 5; s++) {
          const ang = (s / 5) * Math.PI * 2 + t * 0.05
          ctx.beginPath()
          ctx.moveTo(wx, 75)
          ctx.lineTo(wx + Math.cos(ang) * 18, 75 + Math.sin(ang) * 18)
          ctx.strokeStyle = 'rgba(245,196,0,0.7)'
          ctx.lineWidth = 2
          ctx.stroke()
        }
        // Hub
        ctx.beginPath()
        ctx.arc(wx, 75, 5, 0, Math.PI * 2)
        ctx.fillStyle = Y
        ctx.fill()
      }

      ctx.restore()
    }

    // Sparks / diagnostic particles
    const sparks: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string }[] = []
    const addSparks = (cx: number, cy: number, count = 6) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.8 + Math.random() * 2
        sparks.push({
          x: cx + (Math.random() - 0.5) * 30,
          y: cy + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 0,
          maxLife: 25 + Math.random() * 25,
          color: Math.random() > 0.4 ? '#F5C400' : '#ffffff',
        })
      }
    }

    // Diagnostic pulse rings
    const pulses: { x: number; y: number; r: number; maxR: number; life: number; maxLife: number }[] = []
    const addPulse = (x: number, y: number) => {
      pulses.push({ x, y, r: 0, maxR: 40, life: 0, maxLife: 40 })
    }

    let lastPhase = -1
    let sparkTimer = 0
    let pulseTimer = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t++
      if (t > TOTAL) t = 0

      const phase = t < 120 ? 0 : t < 200 ? 1 : t < 340 ? 2 : t < 420 ? 3 : 4

      // Car X position
      const carTargetX = W * 0.55
      let carX: number
      if (phase === 0) {
        // Drive in from right
        const p = easeOut(clamp(t / 110, 0, 1))
        carX = lerp(W + 220, carTargetX, p)
      } else {
        // Slight settle bounce
        const settle = phase > 0 ? Math.sin((t - 120) * 0.3) * lerp(3, 0, clamp((t - 120) / 30, 0, 1)) : 0
        carX = carTargetX + settle
      }
      const carY = H * 0.52

      // Bonnet open amount (0→1)
      let bonnetOpen = 0
      if (phase === 1) bonnetOpen = easeInOut(clamp((t - 120) / 60, 0, 1))
      else if (phase === 2) bonnetOpen = 1
      else if (phase === 3) bonnetOpen = lerp(1, 0, easeInOut(clamp((t - 360) / 50, 0, 1)))

      const scale = Math.min(W / 900, H / 500) * 0.85

      // Draw car
      drawCar(carX, carY, scale, bonnetOpen, phase)

      // ── Diagnostic effects in phase 2 ──
      if (phase === 2) {
        sparkTimer++
        pulseTimer++
        if (sparkTimer % 8 === 0) addSparks(carX - 120 * scale, carY - 80 * scale, 4)
        if (pulseTimer % 22 === 0) addPulse(carX - 100 * scale, carY - 70 * scale)

        // Wrench icon animation
        const wx = carX - 115 * scale
        const wy = carY - 95 * scale
        const wAngle = Math.sin(t * 0.15) * 0.5
        ctx.save()
        ctx.translate(wx, wy)
        ctx.rotate(wAngle)
        ctx.strokeStyle = '#F5C400'
        ctx.lineWidth = 3 * scale
        ctx.lineCap = 'round'
        // Wrench handle
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, 18 * scale)
        ctx.stroke()
        // Wrench head
        ctx.beginPath()
        ctx.arc(0, -6 * scale, 7 * scale, 0, Math.PI * 2)
        ctx.strokeStyle = '#F5C400'
        ctx.lineWidth = 2 * scale
        ctx.stroke()
        ctx.restore()

        // Diagnostic text pulse
        const textAlpha = 0.5 + 0.5 * Math.sin(t * 0.2)
        ctx.globalAlpha = textAlpha
        ctx.fillStyle = '#F5C400'
        ctx.font = `${Math.max(9, 11 * scale)}px 'DM Sans', sans-serif`
        ctx.textAlign = 'center'
        ctx.fillText('SCANNING...', carX - 100 * scale, carY - 120 * scale)
        ctx.globalAlpha = 1

        // ECU readout lines
        for (let l = 0; l < 3; l++) {
          const lineAlpha = Math.max(0, Math.sin(t * 0.15 + l * 1.2))
          ctx.globalAlpha = lineAlpha * 0.7
          ctx.fillStyle = l === 0 ? '#4CAF50' : '#F5C400'
          ctx.font = `${Math.max(7, 8 * scale)}px monospace`
          ctx.textAlign = 'left'
          const labels = ['ENGINE: OK', 'OIL: CHECK', 'BATTERY: OK']
          ctx.fillText(labels[l], carX - 185 * scale, carY - 55 * scale + l * (12 * scale))
          ctx.globalAlpha = 1
        }
      }

      // ── Checkmark in phase 3 ──
      if (phase === 3) {
        const prog = clamp((t - 340) / 40, 0, 1)
        const cx2 = carX - 100 * scale
        const cy2 = carY - 90 * scale
        const r = 22 * scale
        ctx.beginPath()
        ctx.arc(cx2, cy2, r, 0, Math.PI * 2)
        ctx.strokeStyle = '#4CAF50'
        ctx.lineWidth = 2 * scale
        ctx.globalAlpha = prog
        ctx.stroke()
        // Checkmark path
        if (prog > 0.3) {
          const cp = clamp((prog - 0.3) / 0.7, 0, 1)
          ctx.beginPath()
          ctx.moveTo(cx2 - r * 0.45, cy2)
          ctx.lineTo(cx2 - r * 0.1, cy2 + r * 0.35)
          const endX = cx2 + r * 0.45
          const endY = cy2 - r * 0.35
          const curX = lerp(cx2 - r * 0.1, endX, cp)
          const curY = lerp(cy2 + r * 0.35, endY, cp)
          ctx.lineTo(curX, curY)
          ctx.strokeStyle = '#4CAF50'
          ctx.lineWidth = 3 * scale
          ctx.lineCap = 'round'
          ctx.stroke()
        }
        ctx.globalAlpha = 1

        ctx.globalAlpha = prog * 0.85
        ctx.fillStyle = '#4CAF50'
        ctx.font = `bold ${Math.max(9, 11 * scale)}px 'DM Sans', sans-serif`
        ctx.textAlign = 'center'
        ctx.fillText('ALL CLEAR', cx2, cy2 + r + 14 * scale)
        ctx.globalAlpha = 1
      }

      // ── Sparks ──
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx; s.y += s.vy; s.vy += 0.08; s.life++
        if (s.life > s.maxLife) { sparks.splice(i, 1); continue }
        const prog = s.life / s.maxLife
        ctx.globalAlpha = (1 - prog) * 0.9
        ctx.fillStyle = s.color
        ctx.beginPath()
        ctx.arc(s.x, s.y, Math.max(0.5, (1.5 - prog) * 2), 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // ── Pulse rings ──
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.r = lerp(0, p.maxR, easeOut(p.life / p.maxLife))
        p.life++
        if (p.life > p.maxLife) { pulses.splice(i, 1); continue }
        const a = 1 - p.life / p.maxLife
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(245,196,0,${a * 0.6})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // ── Speed lines when driving in ──
      if (phase === 0 && t > 5) {
        const speedAlpha = clamp(1 - t / 80, 0, 0.7)
        for (let i = 0; i < 6; i++) {
          const ly = carY - 40 + i * 20 - 60
          const len = 40 + Math.random() * 60
          ctx.beginPath()
          ctx.moveTo(carX + 180, ly)
          ctx.lineTo(carX + 180 + len, ly)
          ctx.strokeStyle = `rgba(245,196,0,${speedAlpha * (0.3 + i * 0.05)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

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

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
