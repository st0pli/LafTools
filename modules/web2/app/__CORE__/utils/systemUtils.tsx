export let IsCurrentServerMode = () => {
    return process.env.ONLINEMODE == 'true'
}