import { StyleSheet,Font  } from '@react-pdf/renderer';

Font.register(
  {
    family: 'hidayafont',
    src: 'Alice-Regular.ttf',
  }
);

Font.register(
  {
    family: 'CustomFont',
    src: 'Anton-Regular.ttf',
  }
);

Font.register(
  {
    family: 'bold',
    src: 'ArchivoBlack-Regular.ttf',
  }
);


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#ffff',
    border: '1px solid #000000',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 9,
  },
});

const newstyles = StyleSheet.create({
  table: {
    width: '100%',
    fontSize:9
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3
  },
  rowHeading: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3
  },
  bottomrow :{
    display: 'flex',
    flexDirection: 'row',
    borderTop: '2px solid #0000',
    borderBottom:'2px solid #0000',
    fontSize:7,
    fontWeight:800,
    marginTop:3,
    paddingTop: 3,
    paddingBottom: 3
  },
  colHead1: {
    width: '20%',
    paddingLeft:2
  },
  colHead2: {
    width: '80%',
    paddingLeft:2
  },
  colHead3: {
    width: '100%',
    paddingLeft:2
  },
  topHeader:{
    fontSize:9,
    fontFamily:'bold'
  },  
  header: {
    borderTop: 'none',
    paddingTop:4,
    paddingBottom: 4,
    borderTop:'1px solid #0000',
    borderBottom: '1px solid #0000',
    fontWeight:600,
  },
  body:{
    marginBottom:7
  },
  bold: {
    fontFamily: 'bold',
  },
  // So Declarative and unDRY 👌 👌👌👌👌👌👌
  col1: {
    width: '100%',
    paddingLeft:2,
    fontWeight:'bold',
    fontSize:13
  },
  col2: {
    width: '10%',
    textAlign:'left'
  },
  colhead1:{
    width: '50%',
    textAlign:'left'
  }
  ,
  col3: {
    width: '70%',
    textAlign:'left',
    color:'grey'
  },
  col4: {
    width: '10%',
    textAlign:'right'
  },
  col5: {
    width: '10%',
    textAlign:'right'
  },
  col6: {
    width: '10%',
    textAlign:'right'
  },
  col7: {
    width: '10%',
    textAlign:'right'
  },
  col8: {
    width: '6%',
    textAlign:'center',
    
  },
})



export {styles,newstyles}