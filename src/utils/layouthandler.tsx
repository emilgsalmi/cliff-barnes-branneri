"use client"

import { useEffect, useState} from "react"

const settings ={
    breakpoints:{
        mobile:{
            width: 750           
        },
        tablet:{
            width: 1124
        }
    }
}

export class LayoutHandler {
    static listen() {
      let resize = function () {
        if (!window) return
  
        let [mobile, tablet, desktop] = LayoutHandler.getBreakpoint(window.innerWidth)
  
        let size = '16px'
        document.getElementsByTagName('html')[0].style.fontSize = size
  
        document.body.classList.remove('desktop')
        document.body.classList.remove('tablet')
        document.body.classList.remove('mobile')
  
        if (mobile) document.body.classList.add('mobile')
        if (tablet) document.body.classList.add('tablet')
        if (desktop) document.body.classList.add('desktop')
      }
  
      if (typeof window == 'undefined') return
      window.removeEventListener('resize', resize)
      window.addEventListener('resize', resize)
      resize()
  
    }
  
    static getBreakpoint(width: number) {
      let mobile = false
      let tablet = false
      let desktop = false
      if (width < settings.breakpoints.mobile.width) {
        mobile = true
      } else if (width < settings.breakpoints.tablet.width) {
        tablet = true
      } else {
        desktop = true
      }
      return [mobile, tablet, desktop]
    }
  
  }

  export function useWindowSize() {
    const [size, setSize] = useState(0)
    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth)
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      setTimeout(updateSize, 0)
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
  }

  /**
* React hook that will define mobile, tablet and desktop booleans to be used
* in components as a method to change the structure depending on the current
* device screen size. Uses the breakpoints defined in the settings object.
*
* Return format: [mobile, tablet, desktop]
*/

  export function useDevices() {
    const width = useWindowSize()
    return LayoutHandler.getBreakpoint(width)
  }
  
  export function LayoutHandlerWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      LayoutHandler.listen();
    }, []);
  
    return <>{children}</>;
  }