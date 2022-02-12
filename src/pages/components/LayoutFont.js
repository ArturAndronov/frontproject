import React, { useEffect } from "react"
import fontstyles from "../../fontstyles"

const ThemeFont = (props) =>{
  
     useEffect (() => {
         if(window.localStorage.getItem('fon') === 'font'){
            switchFontTheme();
        }
        else{
            window.localStorage.setItem('fon','font1');
        }
     })

    const switchFontTheme = () => {
        window.localStorage.setItem('fon','font')
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = fontstyles
    }

    return(
        <>{props.children}</>
    )

}
export default ThemeFont;