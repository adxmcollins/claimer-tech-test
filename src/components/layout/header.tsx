import React from 'react'

import { Logo, AccountNotifications } from '.'

export const Header = () => {
  return (
    <header className="bg-grey-100 border-b border-grey-500 relative z-20">
      <div className="px-4 max-w-screen-md lg:max-w-screen-xl mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="text-grey-800">
            <Logo />
          </div>
          <div>
            <AccountNotifications />
          </div>
        </div>
      </div>
    </header>
  )
}
