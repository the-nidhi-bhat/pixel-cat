'use client'

import { useMemo, useState } from 'react'
import { Bell, Check, ChevronRight, CircleHelp, Cloud, Coffee, Command, Eye, Gauge, Keyboard, Moon, MousePointer2, Palette, Play, RotateCcw, Save, Settings2, Sparkles, Sun, Volume2, Zap } from 'lucide-react'

const modes = [
  { id: 'focused', label: 'Focused', description: 'Quietly keeping you company', icon: Zap, color: 'amber' },
  { id: 'idle', label: 'Idle', description: 'Taking a tiny stretch break', icon: Sun, color: 'sky' },
  { id: 'away', label: 'Away', description: 'Waiting patiently for you', icon: Cloud, color: 'violet' },
  { id: 'sleeping', label: 'Sleeping', description: 'Dreaming of laser pointers', icon: Moon, color: 'indigo' },
] as const

export default function PixelCatApp() {
  const [activeNav, setActiveNav] = useState('Cat behavior')
  const [mode, setMode] = useState<(typeof modes)[number]['id']>('focused')
  const [enabled, setEnabled] = useState(true)
  const [sound, setSound] = useState(true)
  const [saved, setSaved] = useState(true)

  const current = useMemo(() => modes.find((item) => item.id === mode) ?? modes[0], [mode])
  const CurrentIcon = current.icon

  function chooseMode(nextMode: typeof mode) {
    setMode(nextMode)
    setSaved(false)
  }

  return (
    <main className="pixel-shell">
      <header className="topbar">
        <div className="brand-lockup"><div className="brand-cat">◒</div><div><strong>pixel cat</strong><span>desktop companion</span></div></div>
        <div className="topbar-actions"><span className="sync-pill"><span className="live-dot" /> all systems cozy</span><button className="icon-button" aria-label="Help"><CircleHelp /></button><button className="avatar" aria-label="Open profile">N</button></div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-label">workspace</div>
          <nav aria-label="Settings navigation">
            {[['Cat behavior', Eye], ['Appearance', Palette], ['Sounds', Volume2], ['Keyboard', Keyboard]].map(([label, Icon]) => (
              <button key={label as string} onClick={() => setActiveNav(label as string)} className={`nav-item ${activeNav === label ? 'active' : ''}`}><Icon /><span>{label as string}</span>{activeNav === label && <ChevronRight className="nav-arrow" />}</button>
            ))}
          </nav>
          <div className="sidebar-bottom"><div className="native-card"><div className="native-icon"><Settings2 /></div><div><strong>Native mode</strong><span>coming soon</span></div><span className="mini-dot" /></div><button className="nav-item muted"><CircleHelp /><span>About pixel cat</span></button></div>
        </aside>

        <section className="content">
          <div className="content-heading"><div><p className="eyebrow">settings / {activeNav.toLowerCase()}</p><h1>{activeNav}</h1><p className="lede">Tune how your little desktop companion shows up throughout the day.</p></div><div className="save-state">{saved ? <><Check /> Saved</> : <><span className="unsaved-dot" /> Unsaved changes</>}</div></div>

          {activeNav === 'Cat behavior' ? <>
            <section className="hero-card">
              <div className="preview-stage"><div className="stage-grid" /><div className={`cat-sprite cat-${mode}`}><div className="cat-ears" /><div className="cat-face"><span className="eye left" /><span className="eye right" /><span className="nose" /></div><div className="cat-body" /><div className="cat-tail" /></div><div className="stage-shadow" /><div className="status-chip"><CurrentIcon /><span>{current.label}</span></div></div>
              <div className="preview-copy"><span className="section-kicker">live preview</span><h2>Your cat is <em>{current.label.toLowerCase()}</em></h2><p>{current.description}. This is a simulation of the companion state; native activity sensing will connect here in a future desktop build.</p><div className="preview-meta"><span><Gauge /> 72% cozy</span><span><MousePointer2 /> watching cursor</span></div></div>
            </section>

            <section className="settings-section"><div className="section-title"><div><span className="section-kicker">activity states</span><h2>What should your cat do?</h2></div><span className="count-label">{modes.length} states</span></div><div className="mode-grid">{modes.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => chooseMode(item.id)} className={`mode-card ${mode === item.id ? 'selected' : ''}`}><div className={`mode-icon ${item.color}`}><Icon /></div><div><strong>{item.label}</strong><span>{item.description}</span></div>{mode === item.id && <span className="selected-check"><Check /></span>}</button> })}</div></section>

            <section className="settings-section toggles"><div className="section-title"><div><span className="section-kicker">preferences</span><h2>Keep it comfortable</h2></div></div><div className="toggle-row"><div className="row-icon"><Bell /></div><div className="row-copy"><strong>Show pixel cat</strong><span>Let your companion appear while you work</span></div><button className={`switch ${enabled ? 'on' : ''}`} onClick={() => { setEnabled(!enabled); setSaved(false) }} aria-label="Toggle show pixel cat"><span /></button></div><div className="toggle-row"><div className="row-icon"><Volume2 /></div><div className="row-copy"><strong>Soft notification sounds</strong><span>Play a tiny sound when your cat changes mood</span></div><button className={`switch ${sound ? 'on' : ''}`} onClick={() => { setSound(!sound); setSaved(false) }} aria-label="Toggle notification sounds"><span /></button></div></section>

            <footer className="content-footer"><button className="reset-button" onClick={() => { setMode('focused'); setEnabled(true); setSound(true); setSaved(true) }}><RotateCcw /> Reset defaults</button><button className="save-button" onClick={() => setSaved(true)}><Save /> Save changes</button></footer>
          </> : <div className="empty-panel"><div className="empty-icon"><Sparkles /></div><h2>{activeNav} controls are cozying up</h2><p>These settings are part of the Pixel Cat desktop companion roadmap. Cat behavior simulation is ready to explore now.</p><button className="save-button" onClick={() => setActiveNav('Cat behavior')}><Play /> See simulation</button></div>}
        </section>
      </div>
    </main>
  )
}
