import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
// import {phone} from 'react-icons-kit/icomoon/phone';
import {ic_phone} from 'react-icons-kit/md/ic_phone';
import {envelopeO} from 'react-icons-kit/fa/envelopeO';
import {location2} from 'react-icons-kit/icomoon/location2';
import {calendar} from 'react-icons-kit/fa/calendar'



//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({ size: 50, style: {color: 'black'}})

export const Phone = () => <SideIconContainer icon={ic_phone}/>
export const EnvelopeO = () => <SideIconContainer icon={envelopeO}/>
export const Location2 = () => <SideIconContainer icon={location2}/>
export const Calendar = () => <SideIconContainer icon={calendar}/>