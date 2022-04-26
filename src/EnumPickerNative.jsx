import { Component, createElement } from "react";
import {View, Text, Dimensions, StyleSheet} from "react-native";
import {useState,useEffect,useRef } from 'react';
import SelectDropdown from 'react-native-select-dropdown'



const {width} = Dimensions.get('window');

export const EnumPickerNative = (props) => {
    
    const [data1, setdata] = useState([]);
    const[Val,SetVal]=useState(props.empty)
    const dropdownRef = useRef({});  
     
      
       useEffect(() => 
          {

        if(props.scenario.status=='available' && props.EnumAttribute.status=='available' && !props.scenario.value.split(",").includes(props.EnumAttribute.value)
                && props.EnumAttribute.universe.includes(props.EnumAttribute.value)){  
            SetVal(props.empty)      
          dropdownRef.current.reset();
         
            }
    
     
      if( props.scenario.status=='available'){
          let x=[];
           if (!props.scenario.value=="")
             x=props.scenario.value.split(",")

          let v=[]
          v[0]=props.empty
         
           for(let i=0;i<x.length;i++)
           {
                let t=x[i]; 
                v.push(t)
           }
           setdata(v)   
      }
        
        
       
     },[props.scenario.value,props.EnumAttribute.value]);   



     useEffect(() => 
   {
   
  
     if(props.EnumAttribute.status=='available' && props.scenario.status=='available'){
      if( !props.scenario.value.split(",").includes(props.EnumAttribute.value) ){
       
           SetVal(props.empty)
           dropdownRef.current.reset(); 
      }
     
       else {
         
         SetVal(props.EnumAttribute.value)
         dropdownRef.current.reset(); 
       }
      }

     console.warn(props.Action);
    
   } , [ props.EnumAttribute.value]); 
   
     
    return (
     
    
       <View>
        <SelectDropdown
             ref={dropdownRef} 
	            data={data1}
              defaultValue={props.empty}
	             onSelect={(selectedItem, index) => {
		          
               if(props.scenario.value.split(",").includes(selectedItem) && props.EnumAttribute.universe.includes(selectedItem) ){
                props.EnumAttribute.setValue(selectedItem)
                 
               }
     
             else if(selectedItem==props.empty){
              
              props.EnumAttribute.setValue()
             
             }
             else{ 
             console.warn("Enum value selected does not exist in the Enum attribute choosen ")
             }
        
               
                	}}
          	buttonTextAfterSelection={(selectedItem, index) => {
		          // text represented after item is selected
		          // if data array is an array of objects then return selectedItem.property to render after item is selected
              if(props.EnumAttribute.universe.includes(selectedItem) && props.scenario.value.split(',').includes(selectedItem))
	            	return selectedItem
                else { props.EnumAttribute.setValue()
                  return props.empty}
                	}}
	              rowTextForSelection={(item, index) => {
		                                // text represented for each item in dropdown
		                          // if data array is an array of objects then return item.property to represent item in dropdown
	          	          return item
	                  }}
                    defaultButtonText={Val} // default button text 

                    buttonStyle={styles.dropdown4BtnStyle}  // button style
                    buttonTextStyle={styles.dropdown4BtnTxtStyle} ///button text style
                     renderDropdownIcon={isOpened => {console.log(isOpened)
                     
                      return <Text style={styles.headerContent}>{isOpened?'▲':'▼'}</Text> 
                     }}
                    rowStyle={styles.dropdown4RowStyle}
                    rowTextStyle={styles.dropdown4RowTxtStyle}
                    dropdownOverlayColor={""}
         />
        {  props.EnumAttribute.validation?    (
           <View>

            <Text style={{color:'red'}}>{props.EnumAttribute.validation}</Text>
            </View>
                     ): null }

          </View>
        
    );
    
  }





  ///////////////////////////////////////////////////////////////////////////////////////////


  const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      width,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
    saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
    viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: '10%',
      paddingBottom: '20%',
    },
  
    dropdown1BtnStyle: {
      width: '80%',
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  
    dropdown2BtnStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#444',
      borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#444',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
    dropdown2RowTxtStyle: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    dropdown3BtnStyle: {
      width: '80%',
      height: 50,
      backgroundColor: '#FFF',
      paddingHorizontal: 0,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
    },
    dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
    dropdown3BtnTxt: {
      color: '#444',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      marginHorizontal: 12,
    },
    dropdown3DropdownStyle: {backgroundColor: 'slategray'},
    dropdown3RowStyle: {
      backgroundColor: 'slategray',
      borderBottomColor: '#444',
      height: 50,
    },
    dropdown3RowChildStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 18,
    },
    dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
    dropdown3RowTxt: {
      color: '#F1F1F1',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      marginHorizontal: 12,
    },
  
    dropdown4BtnStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#212121',
    },
    dropdown4BtnTxtStyle: {color: '#212121', textAlign: 'left',fontSize: 14},
    dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown4RowStyle: {backgroundColor: 'white', borderBottomColor: 'white'},
    dropdown4RowTxtStyle: {color: '#212121', textAlign: 'center',fontSize: 14},

    headerContent: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold"
  }
  });