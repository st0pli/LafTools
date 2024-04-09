export const key_full_screen = "pLR3xcEfg"

export let isFullScreen = () => {
    return localStorage.getItem(key_full_screen) === 't'
}

export let setFullScreen = (v: boolean) => {
    localStorage.setItem(key_full_screen, v ? 't' : 'f')
}