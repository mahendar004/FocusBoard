export default function Sidebar({ open, onNavigate }) {
  return (
    <>
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#home" onClick={onNavigate}>
          <span className="brand-mark">f</span>
          <span>focus<span className="brand-light">board</span></span>
        </a>
        <div className="nav-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          <a className="nav-item selected" href="#home" onClick={onNavigate}><span aria-hidden="true">▦</span>My tasks</a>
          <a className="nav-item" href="#tasks" onClick={onNavigate}><span aria-hidden="true">◷</span>Upcoming</a>
          <a className="nav-item" href="#tasks" onClick={onNavigate}><span aria-hidden="true">✓</span>Completed</a>
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-note"><span className="sparkle" aria-hidden="true">✳</span><strong>Make it happen</strong><p>Great things are done by a series of small things brought together.</p><span className="note-credit">— Vincent van Gogh</span></div>
          <div className="profile"><div className="avatar" aria-hidden="true">AM</div><div><strong>Alex Morgan</strong><span>Personal workspace</span></div><button type="button" aria-label="Profile options">···</button></div>
        </div>
      </aside>
      {open && <button type="button" className="nav-scrim" aria-label="Close navigation" onClick={onNavigate} />}
    </>
  )
}
