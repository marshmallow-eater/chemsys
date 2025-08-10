import { NavLink } from 'react-router'
import { SaveToClipboard } from '~/shared/components/SaveToClipboard'

const links = [
  ['/', 'Main'],
  ['/products', 'Products'],
  ['/contacts', 'Contacts'],
]

export const Menu = () => {
  return (
    <div className="flex flex-col h-full max-w-48 justify-between p-2">
      <div className="flex flex-col gap-2">
        {links.map(([to, text]) => (
          <NavLink
            key={`link-${to}`}
            className="p-2 hover:bg-amber-50"
            to={to}
          >
            {text}
          </NavLink>
        ))}
      </div>
      <div>
        Phone:
        <SaveToClipboard text="+380980211857">+38 (098) 021 18 57</SaveToClipboard>
        <SaveToClipboard text="+380507816438">+38 (050) 781 64 38</SaveToClipboard>
        <SaveToClipboard text="+380635730837">+38 (063) 573 08 37</SaveToClipboard>
      </div>
      <div>
        Right reserved Chemsystema © 2025
      </div>
    </div>
  )
}
