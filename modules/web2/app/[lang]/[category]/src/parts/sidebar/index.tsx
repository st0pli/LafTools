import { CSS_BG_COLOR_WHITE, light_border_clz_all_no_define_border } from '@/app/__CORE__/meta/styles'
import { NavigatorPassProp } from '..'
import ClientCollapseButton from './client-collapse-btn'
import NavBanner from '../nav/nav-banner'

export default (props: NavigatorPassProp) => {
    return (
        <div className={'w-full h-full flex flex-col ' + CSS_BG_COLOR_WHITE}>
            <div className='flex-1 scrollbar-hide'>
                <NavBanner {...props} />
            </div>
            <div className={'h-[40px] flex justify-center items-center ' + light_border_clz_all_no_define_border + ' border-t-[1px]'}>
                <ClientCollapseButton></ClientCollapseButton>
            </div>
        </div>
    )
}