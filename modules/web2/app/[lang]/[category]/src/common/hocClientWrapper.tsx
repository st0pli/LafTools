'use client'

import dynamic from "next/dynamic"
import React from "react"
import ClientWrapper from "./clientWrapper"


export let HocClientWrapperClient = (props: { children: any }) => {
    let [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return ''
    return props.children
}

export function hocClientWrapper<T extends React.ComponentType<any>>(Cpt: T): T {
    return (
        (props) => {
            let [mounted, setMounted] = React.useState(false)
            React.useEffect(() => {
                setMounted(true)
            }, [])
            if (!mounted) return ''
            return <ClientWrapper>
                <Cpt {...props} />
            </ClientWrapper>
        }
    ) as T
}