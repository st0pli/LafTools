// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 22 Feb 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.


import { Inter } from "next/font/google";
import TranslationUtils, { getWebsiteLocale as getWebsiteLocale } from "../../utils/TranslationUtils";
import { TopNav } from "../TopNav";
import CenterPart from "../CenterPart";
import Footer from "../Footer";
import { ThemeProvider } from "../../../theme-provider";
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout(props: {
    children,
}) {
    let { children } = props;
    return (
        <html lang={getWebsiteLocale()}>
            <head>
                <meta name="baidu-site-verification" content="codeva-fgug77ENT9" />
                {/** in online LafTools only */}
                {/* <script dangerouslySetInnerHTML={{
                    __html: `
        
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?34e460a0d05b623e9032da256ff98807";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

`
                }}></script> */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-C3NXGY8E7J"
                />
                <Script id="google-analytics">
                    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C3NXGY8E7J');
          `}
                </Script>
            </head>
            <body className={' laf-app min-h-screen dark:bg-slate-950 dark:text-slate-300    ' + inter.className}>
                <div className="w-full h-full">
                    {children}
                </div>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
                </ThemeProvider>
            </body>
        </html>
    );
}
