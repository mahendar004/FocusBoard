import { STATUSES } from '../data/sampleTasks.js'

function TaskRow({ task, onEdit, onDelete, onStatusChange }) {
  const date = task.dueDate ? new Date(`${task.dueDate}T12:00:00`) : null
  const dueDate = date && !Number.isNaN(date.valueOf())
    ? new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date)
    : 'No due date'

  return (
    <article className="task-row">
      <div className={`task-check ${task.status === 'Completed' ? 'checked' : ''}`} aria-label={task.status === 'Completed' ? 'Completed' : 'Not completed'}>{task.status === 'Completed' ? '✓' : ''}</div>
      <div className="task-main"><h3>{task.title}</h3><p>{task.description || task.category}</p></div>
      <span className="category-tag">{task.category}</span>
      <span className={`priority-tag priority-${task.priority.toLowerCase()}`}><i aria-hidden="true" /> {task.priority}</span>
      <label className={`status-tag status-${task.status.toLowerCase().replace(' ', '-')}`}><select aria-label={`Status for ${task.title}`} value={task.status} onChange={(event) => onStatusChange(task.id, event.target.value)}>{STATUSES.map((status) => <option key={status}>{status}</option>)}</select></label>
      <span className="due-date"><span aria-hidden="true">◷</span> {dueDate}</span>
      <div className="row-actions"><button type="button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}>✎</button><button type="button" onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`}>⌫</button></div>
    </article>
  )
}

export default function TaskList({ tasks, total, onEdit, onDelete, onStatusChange, onReset }) {
  return (
    <>
      <div className="task-list">{tasks.map((task) => <TaskRow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />)}
        {tasks.length === 0 && <div className="empty-tasks"><span aria-hidden="true">⌕</span><strong>No tasks found</strong><p>Try another search or adjust your filters.</p><button type="button" onClick={onReset}>Clear filters</button></div>}
      </div>
      <footer className="list-footer">Showing <strong>{tasks.length}</strong> of <strong>{total}</strong> tasks <span>Keep your momentum going <b aria-hidden="true">✦</b></span></footer>
    </>
  )
}
