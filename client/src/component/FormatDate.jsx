import React from 'react'

const FormatDate = ({date}) => {
    const newDate = new Date(date)
        const yyyy = newDate.getFullYear();
        let mm = newDate.toLocaleString('default', { month: 'short' });
        if(mm<10){
         mm = '0'+mm
        }
        let dd = newDate.getDate();
        if(dd<10){
         dd = '0'+dd
        }
  return (
    <span>{`${mm} ${dd}, ${yyyy}`}</span>
  )
}

export default FormatDate