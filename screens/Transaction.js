import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  * as  Permissions  from 'expo-permissions';
import  {BarCodeScanner} from 'expo-barcode-scanner';


export default  class Transactionscreen  extends  React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }
    getCamerPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission:status==='granted',
            buttonState:'clicked',
        })
    }
    handleBarCodeScanner=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal',
        })
    }
render(){
    const hasCameraPermission=this.state.hasCameraPermission;
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState;
    if(buttonState==="clicked" && hasCameraPermission){
        return(
            <BarCodeScanner
            onBarCodeScanned={scanned ?undefined:this.handleBarCodeScanner}
            style={StyleSheet.absoluteFillObject}
            />
        )
    }
    else if(buttonState==='normal'){
        return(

            <View style={styles.container}>
                <Text style={styles.displayText}>
                   
              {hasCameraPermission===true ?
                this.state.scannedData
                :"Request Camera Permission"}  
                </Text>
                <TouchableOpacity style={styles.scanButton}
                onPress={this.getCamerPermissions}>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        )

    }
    
}
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
      displayText:{
          fontSize:15,
          textDecorationLine:'underline',
        

      },
      scanButton:{
          backgroundColor:'#2196F3',
            padding:10,
          margin:10,

        
         
      },
      buttonText:{
      fontSize:20,
   
      
    }
})