import { VAL_COMMON_MAP } from "../common";
import { TypeRunItem } from "../items";
import { logger } from "../utils/logger";


let item: TypeRunItem = {
    load: (dynamicMode: boolean) => {
        VAL_COMMON_MAP['test2'] = 'this is modified'

        logger.debug("loaded modified version")
    }
}
export default item;