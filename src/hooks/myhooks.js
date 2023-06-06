import React,{useRef,useState,useLayoutEffect,} from "react";


const useMyhooks=()=>{
    
return useRef()

}

const useTooltip=()=>{
    const [showtooltip,setshowtooltip]=useState(false)

const refobj = useRef()
const labelref=useRef()
useLayoutEffect(()=>{
     const width1=labelref.current.getBoundingClientRect().width;
        const width2=refobj.current.getBoundingClientRect().width;
        refobj.current.style.left=`${-(width2-width1)/2}px`

},[showtooltip])
return [showtooltip,setshowtooltip,refobj,labelref]
}

export {
    useMyhooks,
    useTooltip
};

