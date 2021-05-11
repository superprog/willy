import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  * as  Permission  from 'expo-permissions';
import  {BarCodeScanner} from 'expo-barcode-scanner';


export default  class Transactionscreen  extends  React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermission:null,
            scanned:false,
            scannedData:'',
        }
    }
    getCamerPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permission.CAMERA);
        this.setState({
            hasCameraPermission:status==='granted'
        })
    }
render(){
    const hasCameraPermission=this.state.hasCameraPermission;
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
          margin:10
      },
      buttonText:{
       color:'white',
       fontSize:5,
       alignItems:'center',
       justifyContent:'center'
    }
})