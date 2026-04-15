'use client'

const items = ['All Cars & Vans','Mobile Service','South London','15-Mile Radius','SE24 Based','Engine Repairs','Full Servicing','Diagnostics','Brakes & Suspension','Same Day Repairs','No Garage Needed','All Makes & Models']

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', padding: '0', background: '#F5C400', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 26s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '11px 24px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.85rem', letterSpacing: '3px', color: '#0A0A0A', whiteSpace: 'nowrap' }}>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
