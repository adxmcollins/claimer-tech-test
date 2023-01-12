import React from 'react'

import { Notifications, FilledChevron } from '../../vectors'

import ProfilePhoto from '../../images/avatar.jpg'

export const AccountNotifications = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-grey-700">
        <Notifications />
      </div>
      <div className="ml-3">
        <img
          src={ProfilePhoto}
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="ml-1 text-grey-700">
        <FilledChevron className="w-4 h-2" />
      </div>
    </div>
  )
}
