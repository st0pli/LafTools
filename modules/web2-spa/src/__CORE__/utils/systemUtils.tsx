'use server'

export let IsCurrentServerMode = () => {
    // TODO: should check this one
    return false;
}

export let IsCurrentServerModeWithPromise = async () => {
    return IsCurrentServerMode()
}