import { useContext } from "react";
import { useEffect } from "react";
import { MatrixContext } from "../context/ContextApi";
import { useMediaQuery } from '@uidotdev/usehooks'
const useSetCellSize =()=>{
    const {setEmptyheight,setEmptyheight2,setCellSize,cellSize} = useContext(MatrixContext)
    const isPhone = useMediaQuery("screen and (max-width : 600px)");
 if (isPhone){
    setCellSize('1cm')
    setEmptyheight('1.15cm')
    setEmptyheight2('1..15cm')
 }
 else {
    setCellSize('1.2cm')
    setEmptyheight('1.15cm')
    setEmptyheight2('1.18cm')
    
 }
 console.log(cellSize)
}



export default useSetCellSize