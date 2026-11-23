import { STATUSES } from '../data/sampleTasks.js'
import SearchBar from './SearchBar.jsx'

export default function FilterTabs({ tasks, status, onStatusChange, priority, onPriorityChange, search, onSearchChange, onReset }) {
  const tabs = ['All tasks', ...STATUSES]
  return (
    <>
      <div className="task-toolbar"><SearchBar value={search} onChange={onSearchChange} />
        <label className="priority-select"><span aria-hidden="true">⇅</span><select aria-label="Filter by priority" value={priority} onChange={(event) => onPriorityChange(event.target.value)}>{['All priorities', 'High', 'Medium', 'Low'].map((item) => <option key={item}>{item}</option>)}</select></label>
        <button type="button" className="filter-reset" onClick={onReset}>Reset</button>
      </div>
      <div className="filter-tabs" role="tablist" aria-label="Filter by status">{tabs.map((item) => <button type="button" role="tab" aria-selected={status === item} className={status === item ? 'filter-tab active-tab' : 'filter-tab'} onClick={() => onStatusChange(item)} key={item}>{item}<span>{item === 'All tasks' ? tasks.length : tasks.filter((task) => task.status === item).length}</span></button>)}</div>
    </>
  )
}
