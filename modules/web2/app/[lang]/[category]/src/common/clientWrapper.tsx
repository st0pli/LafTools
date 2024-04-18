'use client'
// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Fri, 8 Mar 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.



import React, { useEffect, useState } from 'react'
import { Provider, } from "react-redux";
import { store } from '@/app/[lang]/client/src/store'
import '@/app/[lang]/client/src/initapp'
import { loadDOT } from '@/app/__CORE__/utils/i18n-for-nonclient'
import SmallScreenDetecter from '@/app/[lang]/client/src/SmallScreenDetecter'
import { ClientPortalContext } from '@/app/[lang]/client/src/pages/WorkBench/FixedLayout/Main/Center/sub/center-view/Transformer/types';
import { createPortal } from "react-dom"
import dynamic from "next/dynamic";
import { type ReactPortal } from "react"
let d = loadDOT("1RH8bdqw")
export let getAppToolHeight = () => {
    return 880
}
interface PortalProps {
    children: React.ReactNode
}

function Portal(props: PortalProps): ReactPortal | null {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? createPortal(props.children, document.body) : null // createPortal will not be rendered on the server. Only on the client after hydration
}


let ClientWrapper = (props: { children: any, noFULL?: boolean }) => {
    d()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return ''
    }
    return <div className={props.noFULL ? '' : 'w-full h-full'}>
        <ClientPortalContext.Provider value={{
            appToolHeight: getAppToolHeight(),
            portalMode: true
        }}>
            <Provider store={store}>
                {props.children}
                <SmallScreenDetecter />
            </Provider>
        </ClientPortalContext.Provider>
    </div>
}

// export function hocClientWrapper<T extends React.ComponentType<any>>(Cpt: T): T {
//     // return dynamic(() => import('./client'), { ssr: false, loading: () => <PageLoadingEffect /> })
//     return ((props = {}) => {
//         const [isMounted, setIsMounted] = useState(false)

//         useEffect(() => {
//             setIsMounted(true)
//         }, [])
//         if (!isMounted) {
//             return ''
//         }
//         return <Portal><ClientWrapper children={
//             <Cpt {...props} />
//         }>
//         </ClientWrapper>
//         </Portal>
//     }) as T;
// }
export default ClientWrapper 