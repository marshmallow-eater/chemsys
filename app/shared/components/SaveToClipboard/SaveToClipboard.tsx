import { useState, useEffect } from 'react'
import { clsx } from 'clsx/lite'
import type { FC, ReactNode } from 'react'

export const SaveToClipboard: FC<{
  children: ReactNode
  text: string
}> = ({ children, text }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const onClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setShowMessage(true)
      })
  }

  useEffect(() => {
    if (!showMessage) {
      return
    }
    const timeoutIndex = setTimeout(() => {
      setShowMessage(false)
    }, 1000)
    return () => {
      clearTimeout(timeoutIndex)
    }
  }, [showMessage])

  return (
    <div
      tabIndex={0}
      onClick={onClick}
      role="button"
      className="relative cursor-pointer"
    >
      {children}
      {showMessage && (
        <div
          className={clsx(
            'absolute',
            'left-0',
            'top-0',
            'w-full',
            'bg-blue-500',
            'z-10',
            'text-center',
          )}
        >
          Copied!
        </div>
      )}

    </div>
  )
}
