
'use client'

import { loadDOT } from "@/app/__CORE__/utils/i18n-types"

let a = loadDOT("TOB34z6mX")

export default () => {
    let Dot = a()
    return <a onClick={() => {
        if (confirm(Dot("SZDOPPh8G", "To support this project, you can also choose to finance us by purchasing a professional edition of our software, we promise it will be a good investment for you to use LafTools of the professional edition. Do you want to know more?"))) {
            window.open('https://codegen.cc')
        }
    }} className='flex flex-row items-center justify-center ' href={'javascript:void(0);'}>
        <button type="button" className="py-2 w-full   justify-center inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <img src='/controls/help.png' className='w-5 h-5 mr-[2px] ' />
            <span className=''>
                {Dot("smi-8G-AQ", "Fundraising Plan")}
            </span>
        </button>
    </a>
}