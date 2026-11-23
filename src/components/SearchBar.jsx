export default function SearchBar({ value, onChange }) {
  return <label className="search-box"><span aria-hidden="true">⌕</span><input aria-label="Search tasks by title" placeholder="Search tasks..." value={value} onChange={(event) => onChange(event.target.value)} /><kbd aria-hidden="true">⌘ K</kbd></label>
}
