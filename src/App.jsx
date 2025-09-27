import { useState } from 'react'

// ----------------------
// Main App Component
// ----------------------
function App() {
  // State: tracks if the checkbox is accepted (true/false)
  const [isAccepted, setIsAccepted] = useState(false)

  return (
    <form>
      {/* Child component for the checkbox */}
      <Chk checked={isAccepted} onCheck={setIsAccepted} />

      {/* Button is disabled until checkbox is accepted */}
      <button disabled={!isAccepted}>SEND</button>
    </form>
  )
}

// ----------------------
// Child Component (Checkbox)
// ----------------------
function Chk({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input 
          type="checkbox"
          // When user toggles the checkbox, update parent state
          onChange={(e) => onCheck(e.target.checked)}
          // Controlled input: checkbox state comes from parent
          checked={checked} 
        />
        ACCEPTER LES TERMS DU CONTRACT
      </label>
    </div>
  )
}

export default App

