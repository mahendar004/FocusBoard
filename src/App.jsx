import { useMemo, useState } from 'react'
import FocusNotes from './components/FocusNotes.jsx'
import FilterTabs from './components/FilterTabs.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import StatCard from './components/StatCard.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import useLocalStorage from './hooks/useLocalStorage.js'
import { FOCUS_NOTES, SAMPLE_TASKS, STATUSES, STORAGE_KEY } from './data/sampleTasks.js'

function App() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, SAMPLE_TASKS)
  const [statusFilter, setStatusFilter] = useState('All tasks')
  const [priority, setPriority] = useState('All priorities')
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)
  const [mobileNav, setMobileNav] = useState(false)
  const completed = tasks.filter((task) => task.status === 'Completed').length
  const inProgress = tasks.filter((task) => task.status === 'In progress').length
  const completionRate = tasks.length ? Math.round((completed / tasks.length) * 100) : 0
  const todayLabel = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date()).toUpperCase()
  const visibleTasks = useMemo(() => tasks.filter((task) =>
    (statusFilter === 'All tasks' || task.status === statusFilter)
    && (priority === 'All priorities' || task.priority === priority)
    && task.title.toLowerCase().includes(search.trim().toLowerCase()),
  ), [tasks, statusFilter, priority, search])

  function saveTask(task) {
    setTasks((current) => current.some((item) => item.id === task.id)
      ? current.map((item) => item.id === task.id ? task : item)
      : [...current, task])
    setEditing(null)
  }
  function deleteTask(task) {
    if (window.confirm('Delete "' + task.title + '"? This task will be removed.')) {
      setTasks((current) => current.filter((item) => item.id !== task.id))
    }
  }
  function changeStatus(id, status) {
    if (STATUSES.includes(status)) setTasks((current) => current.map((task) => task.id === id ? { ...task, status } : task))
  }
  function resetFilters() {
    setStatusFilter('All tasks')
    setPriority('All priorities')
    setSearch('')
  }

  return (
    <div className="app-shell">
      <Sidebar open={mobileNav} onNavigate={() => setMobileNav(false)} />
      <main className="main-area" id="home">
        <Header mobileNavOpen={mobileNav} onToggleNavigation={() => setMobileNav((open) => !open)} />
        <div className="page-content">
          <div className="welcome-row">
            <div><p className="eyebrow">{todayLabel} <span className="sun" aria-hidden="true">*</span></p><h1>A good day to get things done<span className="period">.</span></h1><p className="welcome-sub">Here's what's happening with your tasks today.</p></div>
            <button type="button" className="button button-primary add-button" onClick={() => setEditing({})}><span aria-hidden="true">+</span> New task</button>
          </div>
          <section className="stats-grid" aria-label="Task overview">
            <StatCard title="Total tasks" value={String(tasks.length).padStart(2, '0')} icon="#" cardClass="stat-total" progress={tasks.length ? Math.max(14, (completed / tasks.length) * 100) : 0} barClass="mini-bar" footer={completed + ' completed'} />
            <StatCard title="In progress" value={String(inProgress).padStart(2, '0')} icon=">" iconTone="lilac" footer="Tasks you're moving forward" />
            <StatCard title="Completed" value={String(completed).padStart(2, '0')} icon="+" iconTone="mint" footer="Nice work, keep it up!" />
            <StatCard title="Completion rate" value={<>{completionRate}<small>%</small></>} icon="+" iconTone="gold" cardClass="progress-card" progress={completionRate} footer="of all tasks" />
          </section>
          <FocusNotes slides={FOCUS_NOTES} />
          <section className="tasks-section" id="tasks">
            <div className="tasks-heading"><div><p className="eyebrow">YOUR WORK, AT A GLANCE</p><h2>My tasks <span className="count-pill">{visibleTasks.length}</span></h2></div><button type="button" className="button button-outline add-button-small" onClick={() => setEditing({})}><span aria-hidden="true">+</span> Add task</button></div>
            <FilterTabs tasks={tasks} status={statusFilter} onStatusChange={setStatusFilter} priority={priority} onPriorityChange={setPriority} search={search} onSearchChange={setSearch} onReset={resetFilters} />
            <TaskList tasks={visibleTasks} total={tasks.length} onEdit={setEditing} onDelete={deleteTask} onStatusChange={changeStatus} onReset={resetFilters} />
          </section>
          <footer className="page-footer">Made with intention <span aria-hidden="true">*</span> FocusBoard</footer>
        </div>
      </main>
      {editing !== null && <TaskForm task={editing.id ? editing : null} onClose={() => setEditing(null)} onSave={saveTask} />}
    </div>
  )
}

export default App
