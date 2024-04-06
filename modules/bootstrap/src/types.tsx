export let IsCurrentServerMode = () => {
    return process.env.ONLINEMODE == "true";
};
export type DLinkType = {
    loadPath: string;
};