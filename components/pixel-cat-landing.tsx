'use client'

import { useState } from 'react'
import { ArrowDownToLine, ArrowRight, Bell, Check, GitBranch, Keyboard, MousePointer2, Palette, Timer, Volume2 } from 'lucide-react'

const features = [
  { icon: MousePointer2, title: 'Reacts to your rhythm', copy: 'Pixel Cat notices when you move, type, scroll, or step away — then responds with tiny moments of life.' },
  { icon: Bell, title: 'Gentle stretch nudges', copy: 'A quiet companion that helps you reset your shoulders without noisy system notifications.' },
  { icon: Timer, title: 'Focus, made cozy', copy: 'A built-in Pomodoro loop turns deep work and well-earned breaks into a shared ritual.' },
  { icon: Palette, title: 'Make it yours', copy: 'Swap limited-palette coats and patterns live. Your desk, your cat, your tiny rules.' },
]
const states = [
  ['idle', 'Idle', 'Taking five'], ['curious', 'Curious', 'Watching cursor'], ['typing', 'Typing alert', 'You are on fire'], ['sleep', 'Sleep', 'Dreaming softly'],
]
const coats = [
  ['amber', '#e7a84c', '#6c4b2a'], ['cream', '#e8dfc9', '#5f5b50'], ['pink', '#e89aa6', '#653f4c'], ['mint', '#9bc9ae', '#3e5d4b'],
]

function Cat({ coat = '#e7a84c', outline = '#6c4b2a', className = '' }: { coat?: string; outline?: string; className?: string }) {
  return <div className={`landing-cat ${className}`} style={{ '--coat': coat, '--outline': outline } as React.CSSProperties} aria-label="Pixel Cat sprite"><div className="landing-ears" /><div className="landing-face"><i /><i /><b /></div><div className="landing-body" /><div className="landing-tail" /></div>
}

export default function PixelCatLanding() {
  const [activeState, setActiveState] = useState(0)
  const [activeCoat, setActiveCoat] = useState(0)
  const [downloaded, setDownloaded] = useState(false)
  return <main className="landing-shell">
    <nav className="landing-nav"><a className="landing-logo" href="#top"><span className="logo-mark">◒</span><span>pixel cat<small>desktop companion</small></span></a><div className="landing-links"><a href="#features">Features</a><a href="#move">See it move</a><a href="#download">Download</a></div><a className="nav-cta" href="#download">Get Pixel Cat <ArrowRight /></a></nav>
    <section id="top" className="landing-hero"><div className="hero-copy"><p className="landing-kicker">A tiny friend for big focus</p><h1>A pixel cat that <em>lives</em> on your desktop.</h1><p className="hero-lede">Pixel Cat reacts to your workday, keeps your focus loop cozy, and reminds you to stretch — all without telemetry or attention-seeking noise.</p><div className="hero-actions"><a className="primary-cta" href="#download">Download free <ArrowDownToLine /></a><a className="text-cta" href="#features">How it works <ArrowRight /></a></div><p className="platform-note"><span><Check /> macOS</span><span><Check /> Windows</span><span><Check /> No telemetry</span></p></div><div className="hero-visual"><div className="visual-label"><span className="pulse" /> live on your desk</div><div className="hero-grid" /><div className="hero-spark spark-one">+</div><div className="hero-spark spark-two">✦</div><Cat coat={coats[activeCoat][1]} outline={coats[activeCoat][2]} className="hero-cat" /><div className="hero-caption"><span>currently</span><strong>{states[activeState][1].toLowerCase()}</strong><small>{states[activeState][2]}</small></div></div></section>
    <section id="features" className="feature-section"><div className="section-intro"><p className="landing-kicker">Small signals, good habits</p><h2>Built for the space<br />between <em>work</em> and rest.</h2></div><div className="feature-grid">{features.map(({ icon: Icon, title, copy }, i) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><span className="feature-index">0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section id="move" className="move-section"><div className="section-heading"><div><p className="landing-kicker">See it move</p><h2>Every mood has a little animation.</h2></div><p>Choose a state to preview the energy Pixel Cat brings to your desktop.</p></div><div className="state-strip">{states.map(([id, label, copy], i) => <button key={id} className={`state-tile ${activeState === i ? 'active' : ''}`} onClick={() => setActiveState(i)}><div className="state-stage"><Cat className={`state-cat state-${id}`} /></div><strong>{label}</strong><span>{copy}</span></button>)}</div></section>
    <section className="customize-section"><div className="customize-copy"><p className="landing-kicker">Your cat, your coat</p><h2>Pick a color<br />that feels like <em>you.</em></h2><p>Four tiny palettes, zero visual clutter. Changes apply instantly and stay on your device.</p><div className="coat-picker">{coats.map(([name, color, outline], i) => <button key={name} className={activeCoat === i ? 'chosen' : ''} onClick={() => setActiveCoat(i)} aria-label={`Choose ${name} coat`}><span style={{ background: color, borderColor: outline }} /></button>)}</div></div><div className="customize-stage"><div className="stage-note">palette preview <Palette /></div><Cat coat={coats[activeCoat][1]} outline={coats[activeCoat][2]} className="custom-cat" /><div className="stage-floor" /></div></section>
    <section id="download" className="download-section"><div><p className="landing-kicker">Bring home your companion</p><h2>Your desktop<br /><em>deserves</em> a cat.</h2><p>Free while Pixel Cat is in its early days. No account, no cloud, no tracking.</p></div><div className="download-card"><div className="download-card-top"><span className="download-icon"><Volume2 /></span><div><strong>Pixel Cat v0.1</strong><span>Early access build</span></div></div><a className="download-button" href="https://github.com/your-github-username/pixel-cat-site/releases/latest" target="_blank" rel="noreferrer" onClick={() => setDownloaded(true)}>{downloaded ? <><Check /> Download page opened</> : <>Download for macOS <ArrowDownToLine /></>}</a><a className="windows-button" href="https://github.com/your-github-username/pixel-cat-site/releases/latest" target="_blank" rel="noreferrer" onClick={() => setDownloaded(true)}>Download for Windows <ArrowDownToLine /></a><small><Keyboard /> Placeholder release link · swap when signed builds ship</small></div></section>
    <footer className="landing-footer"><a className="landing-logo" href="#top"><span className="logo-mark">◒</span><span>pixel cat<small>desktop companion</small></span></a><span>Made for focused humans and their many tabs.</span><div><a href="#download">Downloads</a><a href="#features">Features</a><a href="https://github.com" target="_blank" rel="noreferrer"><GitBranch /> GitHub</a></div></footer>
  </main>
}

export { Cat }
