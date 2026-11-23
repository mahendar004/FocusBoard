export default function StatCard({ title, value, icon, cardClass = '', iconTone = '', footer, progress, barClass = 'progress-line' }) {
  return (
    <article className={`stat-card ${cardClass}`}>
      <div className="stat-top"><span>{title}</span><span className={`stat-icon ${iconTone}`}>{icon}</span></div>
      <strong>{value}</strong>
      <div className={`stat-foot ${progress === undefined ? 'stat-muted' : ''}`}>
        {progress !== undefined && <span className={barClass} aria-hidden="true"><i style={{ width: `${progress}%` }} /></span>}
        <span>{footer}</span>
      </div>
    </article>
  )
}
