import { TypeRunItem } from "@/items";
import { getAppBootstrapInternalDir } from "../share-copy/appdir";
import path from 'path'

export default {
    load: () => {
        let bootstrapInternalDir = getAppBootstrapInternalDir();
        console.log("entrypoint", bootstrapInternalDir);

        let currentDIRName = __dirname;
        let defaultServerEntry = path.join(
            currentDIRName,
            "..",
            '..',
            "core",
            "server.js",
        );

        // start launching the server
        require(defaultServerEntry);
    },
    versionCheck() {
        //
    },
} satisfies TypeRunItem