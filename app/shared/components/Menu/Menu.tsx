import { NavLink } from 'react-router'

export const Menu = () => {
  return (
    <div className="flex flex-col h-full max-w-sm justify-between">
      <div className="flex flex-col gap-2">
        <NavLink className="p-2" to="/">Main</NavLink>
        <NavLink className="p-2" to="/contacts">Contacts</NavLink>
      </div>
      <div>
        Right reserved Chemsystema © 2025
      </div>
    </div>
  )
}
