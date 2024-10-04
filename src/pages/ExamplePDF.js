// ExamplePDF.js
import React, { useEffect, useState } from 'react';
import { Document, Page, Text,Image, View, StyleSheet,Font  } from '@react-pdf/renderer';
import axios from 'axios';
import {styles,newstyles} from './style'

Font.register(
  {
    family: 'hidayafont',
    src: 'Alice-Regular.ttf',
  }
);

Font.register(
  {
    family: 'bold',
    src: 'BebasNeue-Regular.ttf',
  }
);

Font.register(
  {
    family: 'CustomFont',
    src: 'Anton-Regular.ttf',
  }
);



const ExamplePDF = () => {
  const [users,setUsers] = useState([])
  const getUsers =async() =>{
    const {data} =await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
  }
  useEffect(() =>{
    getUsers()
  },[])
  const [dob,setDOB] = useState('1999-09-03')
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return(
    <Document>
      <Page size="A4" style={styles.page}>
        
        <View style={newstyles.table} >
          {/* campus level heading */}
              <View style={newstyles.rowHeading} >
                <View style={newstyles.colHead1}>
                  <Image src={'hintschool.png'} style={{width:90,marginLeft:'20px'}}/>
                </View>
                
                <View style={newstyles.colHead2}>
                  <View style={newstyles.rowHeading}>
                      <View style={newstyles.colHead3}>
                        <Text style={{fontWeight:900,fontSize:15,textAlign:'right',fontFamily:'CustomFont'}}> STAFF ASSESSMENT REPORT</Text>
                      </View>
                  </View>
                  <View style={newstyles.rowHeading}>
                            <View style={newstyles.colHead3}>
                                <Text style={{fontWeight:900,fontSize:10,textAlign:'right'}}> (Head Office) </Text>
                            </View>
                  </View>
                  <View style={newstyles.rowHeading}>
                    <View style={newstyles.colHead3}>
                      <Text style={{fontWeight:900,fontSize:10,textAlign:'right'}}> From Date: 01-May-2024 </Text>
                    </View>
                  </View>
                  <View style={newstyles.rowHeading}>
                    <View style={newstyles.colHead3}>
                      <Text style={{fontWeight:900,fontSize:10,textAlign:'right'}}> To Date: 31-May-2024 </Text>
                    </View>
                  </View>
                </View>

                
                {/* <View style={newstyles.rowHeading}>
                  
                </View>
          
                <View style={newstyles.rowHeading}>
                  <Text style={{fontWeight:800,fontSize:14}}> From Date: 2024-05-01 </Text>
                </View>
                <View style={newstyles.rowHeading}>
                  <Text style={{fontWeight:800,fontSize:14}}> To Date: 2024-05-01 </Text>
                </View> */}
              </View>
       
          {/* end campus level heading */}


              {/* <View style={[newstyles.row]} >
                  <Text style={newstyles.topHeader}>  </Text>
              </View> */}
              <View style={{marginBottom:12}}>
                <View style={[newstyles.row, newstyles.header]}>
                    <Text style={[newstyles.col1]}>
                    1. Lesson Planning & Preparation:   - Prepares well-structured lesson plans:
                    </Text>
                    
                    
                </View>

                <View style={[newstyles.row ,newstyles.body]} >
                          <Text style={[newstyles.colhead1,newstyles.bold]}>
                            ANSWER: Good
                          </Text>
                            <Text style={newstyles.col2}>Comment:</Text>
                            <Text style={newstyles.col3}>
                              good to see you 
                            </Text>
                </View>

                <View style={[newstyles.row, newstyles.header]}>
                    <Text style={[newstyles.col1]}>
                    1. Lesson Planning & Preparation:   - Prepares well-structured lesson plans:
                    </Text>
                    
                    
                </View>

                <View style={[newstyles.row ,newstyles.body]} >
                          <Text style={[newstyles.colhead1,newstyles.bold]}>
                            ANSWER: Good
                          </Text>
                            <Text style={newstyles.col2}>Comment:</Text>
                            <Text style={newstyles.col3}>
                              good to see you 
                            </Text>
                </View>

             

              </View>

      

              
              <View style={[newstyles.row]} >
                    <Text style={{fontWeight:600,width:'70%',textAlign:'left',fontSize:9}}>Note: This assessment report generated by Abdul Hayee Khan (abdul@gamil.com)</Text>
                    <Text style={{fontWeight:600,width:'30%',textAlign:'right',fontSize:7}}>Report Generated Date: 2024-02-02</Text>
              </View>

       
     
       
          
    
         
        </View>
        
        
      </Page>
    </Document>
  )
}

export default ExamplePDF;