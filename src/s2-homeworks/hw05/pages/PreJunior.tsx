import React from 'react'
import HW1 from '../../hw01/HW1'
import HW2 from '../../hw02/HW2'
import HW3 from '../../hw03/HW3'
import HW4 from '../../hw04/HW4'
import s from './PreJunior.module.css'

function PreJunior() {
    return (
        <div className={s.prejunior}>
            {/*pre junior page*/}
            <HW1 />
            <HW2 />
            <HW3 />
            <HW4 />
        </div>
    )
}

export default PreJunior
