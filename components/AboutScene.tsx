'use client'
import { useEffect, useRef } from 'react'

export default function AboutScene() {
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

    // Hex grid nodes
    const cols = 12
    const rows = 8
    const nodes: { x: number; y: number; phase: number; active: boolean }[] = []

    const buildGrid = () => {
      nodes.length = 0
      const cellW = W / cols
      const cellH = H / rows
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * cellW + cellW / 2 + (r % 2 === 0 ? 0 : cellW / 2),
            y: r * cellH + cellH / 2,
            phase: Math.random() * Math.PI * 2,
            active: Math.random() > 0.55,
          })
        }
      }
    }
    buildGrid()

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.012

      // Draw connections first
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist > W / cols * 1.8) continue
          if (!a.active && !b.active) continue
          const pulse = (Math.sin(t + a.phase) + 1) / 2
          ctx.globalAlpha = pulse * 0.08
          ctx.strokeStyle = '#F5C400'
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = (Math.sin(t * 1.2 + n.phase) + 1) / 2
        const size = n.active ? 2.5 + pulse * 1.5 : 1 + pulse * 0.5
        ctx.globalAlpha = n.active ? 0.25 + pulse * 0.45 : 0.06 + pulse * 0.08
        ctx.fillStyle = n.active ? '#F5C400' : '#ffffff'
        ctx.beginPath()
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Traveling data pulses
      const pulseCount = 5
      for (let p = 0; p < pulseCount; p++) {
        const idx = Math.floor(((t * 0.3 + p / pulseCount) % 1) * nodes.length)
        if (idx < nodes.length) {
          const n = nodes[idx]
          ctx.globalAlpha = 0.5
          ctx.fillStyle = '#F5C400'
          ctx.beginPath()
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2)
          ctx.fill()
          // Ring
          ctx.globalAlpha = 0.2
          ctx.strokeStyle = '#F5C400'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(n.x, n.y, 8 + (Math.sin(t * 3 + p) + 1) * 4, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      buildGrid()
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />
}
