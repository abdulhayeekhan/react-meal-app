import React, { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ExamplePDF from './ExamplePDF'

const App = () => {
  useEffect(()=>{
  
  },[])
  return(
    <PDFViewer style={{width:'100%',height:'110vh'}} >
      <ExamplePDF />
    </PDFViewer>
  )
};

export default App;