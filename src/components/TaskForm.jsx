import { useState } from 'react'
import { STATUSES } from '../data/sampleTasks.js'

const PRIORITIES = ['Low', 'Medium', 'High']

export default function TaskForm({ task, onClose, onSave }) {
  const [form, setForm] = useState(() => task || { title: '', description: '', category: 'General', status: 'To do', priority: 'Medium', dueDate: '' })
  const [error, setError] = useState('')
  const change = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }))

  function submit(event) {
    event.preventDefault()
    if (!form.title.trim()) return setError('Please enter a task title.')
    if (!STATUSES.includes(form.status)) return setError('Please choose a valid status.')
    if (!PRIORITIES.includes(form.priority)) return setError('Please choose a valid priority.')
    if (!form.dueDate) return setError('Please choose a due date.')
    onSave({ ...form, title: form.title.trim(), category: form.category.trim() || 'General', id: task?.id ?? Date.now() })
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <button type="button" className="icon-button dialog-close" onClick={onClose} aria-label="Close form">×</button>
        <p className="eyebrow">YOUR TASKS, YOUR PACE</p><h2 id="dialog-title">{task ? 'Edit task' : 'Create a task'}</h2>
        <p className="dialog-intro">{task ? 'Make changes to your task details.' : 'Add a little clarity to your day.'}</p>
        <form onSubmit={submit}>
          <label>Task title<input autoFocus required maxLength="120" value={form.title} onChange={change('title')} placeholder="e.g. Prepare project brief" /></label>
          <label>Description <span className="optional">Optional</span><textarea value={form.description} onChange={change('description')} placeholder="Add a few details…" rows="3" /></label>
          <label>Category<input value={form.category} onChange={change('category')} placeholder="e.g. Design" /></label>
          <div className="form-row"><label>Status<select required value={form.status} onChange={change('status')}>{STATUSES.map((status) => <option key={status}>{status}</option>)}</select></label><label>Priority<select required value={form.priority} onChange={change('priority')}>{PRIORITIES.map((priority) => <option key={priority}>{priority}</option>)}</select></label></div>
          <label>Due date<input type="date" required value={form.dueDate} onChange={change('dueDate')} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="dialog-actions"><button type="button" className="button button-quiet" onClick={onClose}>Cancel</button><button className="button button-primary">{task ? 'Save changes' : 'Create task'} <span aria-hidden="true">↗</span></button></div>
        </form>
      </section>
    </div>
  )
}
