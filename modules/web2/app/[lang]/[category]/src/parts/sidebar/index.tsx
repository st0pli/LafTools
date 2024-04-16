import { CSS_BG_COLOR_WHITE, light_border_clz_all_no_define_border } from '@/app/__CORE__/meta/styles'
import { NavigatorPassProp } from '..'
import ClientCollapseButton from './client-collapse-btn'
import NavBanner from '../nav/nav-banner'
import { getSubTabs } from '../nav/nav-sub-tab'
import { Dot } from '@/app/__CORE__/utils/TranslationUtils'
import { Button } from '@nextui-org/button'
import _ from 'lodash'
import { URL_SUBCATEGORY_GO_PATH } from '@/app/__CORE__/meta/url'
import { fmtURL_ToolSubPage } from '../../../types'
export let NavTabs = (props: NavigatorPassProp) => {
    if ((
        props.params.category || 'tools'
    ) == 'tools') {
        let subTabs = getSubTabs(props)
        subTabs = subTabs.slice(0, subTabs.length - 2)
        let sp = {
            id: props.params.id
        }
        let subCategory = props.params.subCategory
        let currentSubTabId = sp["id"]
        // defaults to id
        if (_.isEmpty(currentSubTabId) && subTabs.length > 0) {
            currentSubTabId = subTabs[0].id
        }

        return <div className='p-2 space-y-2'>
            <div className='font-light'>{Dot("UJfJuqEaq", "Relevant Tools")}</div>
            <div className='space-y-2'>
                {
                    _.map(subTabs, x => {
                        return <Button href={fmtURL_ToolSubPage([URL_SUBCATEGORY_GO_PATH, subCategory, '' + x.id])} variant='bordered' color={
                            x.id == currentSubTabId ? 'primary' : 'default'
                        } fullWidth >{x.label}</Button>
                    })
                }
            </div>
            <div className='font-light'>{Dot("iQFFa3_3S", "Other Tools")}</div>
            <div>
                <div>快速记笔记</div>
                <div>AI助手</div>
                <div>全局搜索</div>
            </div>
        </div>
    } else {
        return ''
    }
}
export default (props: NavigatorPassProp) => {

    return (
        <div className={'w-full h-full flex flex-col ' + CSS_BG_COLOR_WHITE}>
            <div className='flex-1 scrollbar-hide'>
                <NavBanner {...props} />
                <NavTabs {...props} />
            </div>
            <div className={'h-[40px] flex justify-center items-center ' + light_border_clz_all_no_define_border + ' border-t-[1px]'}>
                <ClientCollapseButton></ClientCollapseButton>
            </div>
        </div>
    )
}