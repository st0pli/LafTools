'use client'

import Link from 'next/link'
import React from 'react'
import { pushClient } from '@/app/__CORE__/utils/clientUtils'
import { useRouter } from 'next/navigation'


let TestBtn = () => {
    let r = useRouter()
    return <div className=' w-full h-full'>this is full tool panel</div>
}
export default TestBtn;