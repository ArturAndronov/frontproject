import React, { useEffect } from "react"
import darkstyles from "../../darkstyles"
import whitestyles from "../../whitestyles"

const Theme = (props) =>{
  

    // useEffect (() => {
    //      if(window['localStorage'] !== null){
    //          window.localStorage.getItem('theme') === 'dark'
    //              ? switchDarkTheme()
    //              : window.localStorage.setItem('theme','light')
    //      }
    // })
    var date = new Date();
     useEffect (() => {
        if(window.localStorage.getItem('theme') === 'dark')
        {
            switchDarkTheme();
        }
        else if(window.localStorage.getItem('theme') === 'white')
        {
            switchWhiteTheme();
        }
        else if(date.getHours() >= 18){
            switchDarkTheme();
        }
        else{
            window.localStorage.setItem('theme','light');
        }
     })

    const switchDarkTheme = () => {
        window.localStorage.setItem('theme','dark')
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = darkstyles
    }
    const switchWhiteTheme = () => {
        window.localStorage.setItem('theme','white')
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = whitestyles
    }

    // function ld () {
        // var date = new Date();
        // alert(date.getHours());
        // if(date.getHours() >= 18){
        // switchDarkTheme()
        // }
        // else {
        //     window.localStorage.setItem('theme','light') 
        // }
    // }
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
    return(
        <>{props.children}</>
    )

}
export default Theme;