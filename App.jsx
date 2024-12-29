import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PixelQr } from './components/PixelQr'
function App() {
  const [enteringAValue,setEnteringAValue] = useState('') 
  const [binarValue,setBinarValue] = useState([])
 const [elemQr,setElemQr] = useState([])
  return (
    <>
    <div className='nevQRCode'>
    <input value={enteringAValue} onChange={(e)=>{setEnteringAValue(e.target.value)}}></input>
    <button onClick={()=>{
      setBinarValue([...(enteringAValue.split("").map(l => l.charCodeAt(0).toString(2)).join(" "))])
      
    }}>Создать QR Code</button>


   {console.log(binarValue)}
    <p>Бинарный код: {binarValue}</p>
     
    </div>
    <div>
      <button onClick={()=>{
        binarValue.map((pixel)=>{
    if (pixel ==  0){
        return setElemQr(<PixelQr size = 's' collor = 'binarTwoValue'></PixelQr>,...elemQr) 
        
    } else {
      return (setElemQr(<PixelQr size = 'xs' collor = 'binarOneValue'></PixelQr>,...elemQr))
    }
        })
      }}>
 Отобразить QrCode
      </button>
      
    </div>
    <div className='qrCode'>
    {elemQr}
  
    </div>
    </>
  )
}

export default App