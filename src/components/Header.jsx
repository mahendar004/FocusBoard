export default function Header({ mobileNavOpen, onToggleNavigation }) {
  return (
    <header className="topbar">
      <button type="button" className="menu-toggle" onClick={onToggleNavigation} aria-label="Toggle navigation" aria-expanded={mobileNavOpen}>☰</button>
      <div className="breadcrumb">Workspace <span>/</span> <strong>My tasks</strong></div>
      <div className="top-actions"><button type="button" className="top-icon" aria-label="Notifications">♧<i aria-hidden="true" /></button><div className="top-avatar" aria-label="Signed in as Alex Morgan">AM</div></div>
    </header>
  )
}
