import { useState } from 'react'

export default function FocusNotes({ slides }) {
  const [active, setActive] = useState(0)
  const slide = slides[active]
  const move = (offset) => setActive((current) => (current + offset + slides.length) % slides.length)

  return (
    <section className="focus-card" aria-roledescription="carousel" aria-label="Focus notes">
      <div className="focus-art" aria-hidden="true"><div className="art-sun"/><div className="art-hill hill-back"/><div className="art-hill hill-front"/><span className="art-star star-one">✦</span><span className="art-star star-two">✧</span></div>
      <div className="focus-copy"><div className="focus-kicker"><span className="focus-spark" aria-hidden="true">✳</span> FOCUS NOTES <span className="focus-sep">/</span> {active + 1} OF {slides.length}</div>
        <h2>{slide.title}</h2><p>{slide.copy}</p>
        <div className="carousel-controls"><button type="button" className="carousel-arrow" onClick={() => move(-1)} aria-label="Previous note">←</button><div className="dots" role="group" aria-label="Choose a focus note">{slides.map((item, index) => <button type="button" key={item.title} aria-label={`Show note ${index + 1}`} aria-current={index === active ? 'true' : undefined} className={index === active ? 'dot active-dot' : 'dot'} onClick={() => setActive(index)} />)}</div><button type="button" className="carousel-arrow" onClick={() => move(1)} aria-label="Next note">→</button></div>
      </div><div className="focus-mark" aria-hidden="true">✳</div>
    </section>
  )
}
