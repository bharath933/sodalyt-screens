import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button ,Alert, TouchableOpacity, TouchableWithoutFeedback,SafeAreaView, TouchableNativeFeedback} from "react-native";

import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { Card, CardItem } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {CheckBox} from "react-native-elements"
import Colors from "./src/constants/Colors"

export default class App extends React.Component {

  constructor() {
		super();
		this.state = {
			content: {}
		}
  };


  state={
    selecteds1:false,selecteds2:false,selecteds3:false,selecteds4:false,selecteds5:false,selecteds6:false,selecteds7:false,selecteds8:false,selecteds9:false,selecteds10:false,
    selecteds11:false,selecteds12:false,selecteds13:false,selecteds14:false,selecteds15:false,selecteds16:false,selecteds17:false,selecteds18:false,selecteds19:false, selectedc1:false,
    selectedc2:false,selectedc3:false,selectedc4:false,selectedc5:false,selectedc6:false,selectedc7:false,selectedc8:false,selectedc9:false,selectedc10:false,
    selectedc11:false,selectedc12:false,selectedc13:false,selectedc14:false,selectedc15:false,selectedc16:false,selectedc17:false,selectedc18:false,selectedc19:false,selectedc20:false,
    selectedc21:false,selectedc22:false,selectedc23:false,selectedc24:false,selectedc25:false,selectedc26:false,selectedc27:false,selectedc28:false,selectedc29:false,selectedc30:false,
  }


  render() {
    const {selecteds1,selecteds2,selecteds3,selecteds4,selecteds5,selecteds6,selecteds7,selecteds8,selecteds9,selecteds10,selecteds11,selecteds12,selecteds13,selecteds14,selecteds15,
    selecteds16,selecteds17,selecteds18,selecteds19,selectedc1,selectedc2,selectedc3,selectedc4,selectedc5,selectedc6,selectedc7,selectedc8,selectedc9,selectedc10,selectedc11,
   selectedc12,selectedc13,selectedc14,selectedc15,selectedc16,selectedc17,selectedc18,selectedc19,selectedc20,selectedc21,selectedc22,selectedc23,selectedc24,selectedc25,
selectedc26,selectedc27,selectedc28,selectedc29,selectedc30} = this.state
   
   
   
    return (
   
   <SafeAreaView style={{flexDirection:"column",flex:1,backgroundColor:Colors.background.gray}}>



   <View style={{ height: "90%",backgroundColor:Colors.background.gray}}>

            <View style={{flexDirection:"row",paddingTop:10,backgroundColor:Colors.background.gray}}>

                     <TouchableOpacity style={{paddingLeft:20,justifyContent:"flex-start",width:"50%"}}>


                                 <Text style={{fontSize:22,backgroundColor:"#F7F7F7",color:"#3D3D3D"}}
                                          onPress={()=>this.setState({
                                           selecteds1:false,selecteds2:false,selecteds3:false,selecteds4:false,selecteds5:false,selecteds6:false,selecteds7:false,selecteds8:false,selecteds9:false,selecteds10:false,
                                          selecteds11:false,selecteds12:false,selecteds13:false,selecteds14:false,selecteds15:false,selecteds16:false,selecteds17:false,selecteds18:false,selecteds19:false, selectedc1:false,
                                          selectedc2:false,selectedc3:false,selectedc4:false,selectedc5:false,selectedc6:false,selectedc7:false,selectedc8:false,selectedc9:false,selectedc10:false,
                                          selectedc11:false,selectedc12:false,selectedc13:false,selectedc14:false,selectedc15:false,selectedc16:false,selectedc17:false,selectedc18:false,selectedc19:false,selectedc20:false,
                                          selectedc21:false,selectedc22:false,selectedc23:false,selectedc24:false,selectedc25:false,selectedc26:false,selectedc27:false,selectedc28:false,selectedc29:false,selectedc30:false,
                                          })}>        Clear
                                          </Text>


                     </TouchableOpacity>

                     <TouchableOpacity style={{flexDirection:"row",justifyContent:"flex-end",width:"50%",paddingRight:10}}>

    
                                 <Text style={{fontSize:22,backgroundColor:"#F7F7F7",color:"#3D3D3D",paddingRight:25}}
                                           onPress={()=> Alert.alert ("awesomeyou are completed")}> Done
                                 </Text>


                     </TouchableOpacity>

            </View>

                  
            <View style={{alignItems:"center"}}> 
                        <Text style={styles.SFProHeaderText}> Filters </Text>
            </View>


    <View style={{backgroundColor:Colors.background.gray}}>


      <TouchableWithoutFeedback style={{backgroundColor:Colors.background.gray}}>

      <CollapsibleView title={<Text style={styles.collapsabletext}> Service </Text>}
           collapsibleContainerStyle={{backgroundColor: Colors.background.gray,color:'white'}}
           Arrow = {false}
           style={{...styles.collapsable,backgroundColor:Colors.background.gray}}
           >
          <View style={{backgroundColor:Colors.background}}>
               <ScrollView style={{ backgroundColor:Colors.background.gray,
                  height: "62%" ,width:"100%"}}> 
                  
                  <TouchableWithoutFeedback style={{backgroundColor:Colors.background.gray}}>

                  <View style={{backgroundColor:Colors.background.gray,borderColor:Colors.borders.silver}}>

                     
                        
                                     
                                             <CardItem header style={{backgroundColor:Colors.background.gray}}>
                                                <Text style={styles.SFProSubHeaderText}> Why do you want personal Trainer </Text>
                                             </CardItem>

                                             <CardItem style={{backgroundColor:Colors.background.gray}}>

                                                 <CheckBox checked={selecteds1} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} backgroundColor="white" onPress={()=>this.setState({selecteds1:!selecteds1})}
                                                  />
                                                          <Text style={{...styles.checkBoxTxt,color:this.state.selecteds1?"#B6B6B9":"#B6B6B9"}}
                                                           >Keep up with my changing life</Text>


                                             </CardItem>

                                             <CardItem style={{backgroundColor:Colors.background.gray}}>
                                             

                                                   <CheckBox checked={selecteds2} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray}onPress={()=>this.setState({selecteds2:!selecteds2})}/>
                                                               <Text style={
                                                               {...styles.checkBoxTxt,
                                                                  color:this.state.selecteds2?"#B6B6B9":"#B6B6B9",
                                                                           }}
                                                                           >Show off..at an event..,to an ex,etc.</Text>

                                                   </CardItem>

                                                   <CardItem  style={{backgroundColor:Colors.background.gray}}> 

                                                            <CheckBox checked={selecteds3} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds3:!selecteds3})}/>
                                                                     <Text style={
                                                                     {...styles.checkBoxTxt,
                                                                        color:this.state.selecteds3?"#B6B6B9":"#B6B6B9",
                                                                           
                                                                                 }}
                                                                                 >Doctor told me to </Text>

                                                      
                                                   </CardItem>


                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds4} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds4:!selecteds4})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds4?"#B6B6B9":"#B6B6B9",
                                                                 
                                                                        }}
                                                                        >Need help with an injury </Text>
                                                   </CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds5} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds5:!selecteds5})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds5?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        >Diet and Nutrition </Text>
                                                   </CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds6} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds6:!selecteds6})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds6?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        >Bigger , Faster, Stronger </Text>
                                                   </CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds7} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds7:!selecteds7})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds7?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        >Restorative and Holistic healing </Text>
                                                   </CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds8} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds8:!selecteds8})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds8?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        >I am a pro or Semi Pro Athelete </Text>
                                                   
                                                   </CardItem>
                                                   
                                                   <CardItem header style={{backgroundColor:Colors.background.gray}}>
                                                            <Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "center",padding:15 }}> What Motivates You </Text>
                                                      </CardItem>

                                                   


                                                   < CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds9} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds9:!selecteds9})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds9?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > Bark at Me </Text>
                                                   </ CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds10} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds10:!selecteds10})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds10?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > Run along Side Me </Text>
                                                   </CardItem>

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                      <CheckBox checked={selecteds11} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds11:!selecteds11})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds11?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > Give Me autonomy </Text>
                                                   </CardItem>
                                                   
                                                   

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                   <Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "center",padding:15 }}> Meeting Experience </Text>
                                                   </CardItem>
                                                   


                                                   <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds12} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds12:!selecteds12})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds12?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > Virtual </Text>
                                                   </CardItem>

                                                   <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds13} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds13:!selecteds13})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds13?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > In-Person </Text>
                                                   </CardItem>

                                                   

                                                   <CardItem style={{backgroundColor:Colors.background.gray}}>
                                                   
                                                   <Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "left", }}> Price </Text>

                                                   </CardItem>
                                                   
                                                   

                                                      <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds14} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds14:!selecteds14})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds14?"#B6B6B9":"#B6B6B9",
                                                                 
                                                                        }}
                                                                        > $25-$50 </Text>
                                                   </CardItem>



                                                   <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds15} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds15:!selecteds15})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds15?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > $50-$100 </Text>
                                                   </CardItem>



                                                   <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds16} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds16:!selecteds16})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds16?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > $100-$150 </Text>
                                                   </CardItem>

                                                   <CardItem style={styles.item} >
                                                      <CheckBox checked={selecteds17} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selecteds17:!selecteds17})}/>
                                                            <Text style={
                                                            {...styles.checkBoxTxt,
                                                               color:this.state.selecteds17?"#B6B6B9":"#B6B6B9",
                                                                  
                                                                        }}
                                                                        > $150+ </Text>
                                                   </CardItem>

                                    
                     
                     </View></TouchableWithoutFeedback>
      </ScrollView>
      </View>
      </CollapsibleView>
      </TouchableWithoutFeedback>

      </View>

   <View>


      <CollapsibleView title={<Text style={styles.collapsabletext}> Personality </Text>}
           
           Arrow = {true}

           style={ styles.collapsable}
           >

         <View style={{paddingTop:5}}>


            
               <Text style = {{paddingTop:5, color:"black",textAlign:"center" }}>Sodalyt Matches your your results </Text>
               <Text style = {{padding: 1, color:"black" ,textAlign:"center"}}> Based on Personality Automatically </Text>
            


         </View>
      </CollapsibleView>

   </View>



   <View>

      <TouchableWithoutFeedback>




      <CollapsibleView title={<Text style={styles.collapsabletext}> Culture </Text>}
           collapsibleContainerStyle={{backgroundColor:Colors.background.gray,color:'white'}}
           Arrow = {false}
           style={styles.collapsable}
           >
         <ScrollView style={{height:"25%"}}> 
         <TouchableWithoutFeedback>
         <View>

                  <CardItem style={{backgroundColor:Colors.background.gray}}>
   
                        {<Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "center", padding:15 }}> Gender Preference </Text>}
                  </CardItem>



                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc1} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc1:!selectedc1})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc1?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Female</Text>
                  </CardItem>
       
  
                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc2} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc2:!selectedc2})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc2?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Male</Text>
                  </CardItem>


                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc3} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc3:!selectedc3})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc3?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Non - Binary </Text>
                  </CardItem>

                  
                  <CardItem style={{backgroundColor:Colors.background.gray}}>
                           <Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "center",padding:15 }}> Racial Identity </Text>
                  </CardItem>

                  


                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc4} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc4:!selectedc4})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc4?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Asian </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc5} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc5:!selectedc5})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc5?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Asian Sub-Continent </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc6} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc6:!selectedc6})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc6?"#B6B6B9":"#B6B6B9",
                                
                                    }}
                                       > Black </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc7} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc7:!selectedc7})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc7?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Hispanic </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc8} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc8:!selectedc8})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc8?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Native American </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc9} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc9:!selectedc9})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc9?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Pacific ISlander </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc10} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc10:!selectedc10})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc10?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > White </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc11} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc11:!selectedc12})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc11?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Other </Text>

                  </CardItem>
                  
                  

                  <CardItem header style={{backgroundColor:Colors.background.gray}}>
                  <Text style={{ color: "black", fontSize: 16, fontStyle: "normal", textAlign: "center",padding:15 }}> What languages You Speak </Text>
                  </CardItem>
                  


                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc12} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc12:!selectedc12})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc12?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Arabic </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc13} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc13:!selectedc13})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc13?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Bangla/Bengali </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc14} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc14:!selectedc14})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc14?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Hindi </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc15} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc15:!selectedc15})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc15?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Japanese </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc16} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc16:!selectedc16})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc16?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > Chinese-Mandarin </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc17} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc17:!selectedc17})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc17?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >English </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc18} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc18:!selectedc18})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc18?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       > French </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc19} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc19:!selectedc19})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc19?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Portugese </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc20} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc20:!selectedc20})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc20?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Punjabi </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc21} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc21:!selectedc21})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc21?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Russian </Text>
                  </CardItem>

                  <CardItem style={styles.item} >
                     <CheckBox checked={selectedc22} checkedColor={Colors.active.blue} uncheckedColor={Colors.inactive.gray} onPress={()=>this.setState({selectedc22:!selectedc22})}/>
                        <Text style={
                           {...styles.checkBoxTxt,
                              color:this.state.selectedc22?"#B6B6B9":"#B6B6B9",
                                 
                                    }}
                                       >Spanish </Text>
                  </CardItem>

       </View>
       </TouchableWithoutFeedback>

</ScrollView>
</CollapsibleView>
</TouchableWithoutFeedback>
</View>

</View> 


   
      <View style= {styles.submit}>

         <TouchableNativeFeedback style={styles.Button}>

            <Text style={styles.buttontext}
            onPress={()=>Alert.alert('all selected items will be submitted and Create some action for this button')}>
               View [no.of] Results
            </Text>
            
           
         </TouchableNativeFeedback>
      
       </View>

      
  
  </SafeAreaView>
        
      
  );
}};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f7f7f7",
    justifyContent: "flex-start",
    flexDirection:"column"
  },
  SFProHeaderText:{
   fontSize: 20,
   color: Colors.header.onyx,
   marginBottom: 4,
   alignItems:"center",
   justifyContent:"center"
},
   SFProSubHeaderText:{
         fontSize: 16,
         fontFamily: "sf-pro-display-semibold",
         color: Colors.header.onyx,
         marginBottom: 4,

   },

   SFProBodytext:{

   },

  checkboxContainer: {
    flexDirection: "column",
  },
  checkbox: {
    alignSelf: "center",
    flexDirection:'row',
  },
  label: {
    flexDirection:'row',
    alignSelf:'center'
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
     backgroundColor:Colors.background.gray
    
  },
  checkBoxTxt:{
    fontSize:18,
    flexDirection:"row",
    color:"#B6B6B9"
  },
  submit:{
    fontSize:20,
    alignItems:"center",
    justifyContent:"center",


  
  },

  text:{
    color: "black", 
    fontSize: 14, 
    fontStyle: "normal" ,
    alignItems:"flex-start",
    alignContent:"flex-start",
    justifyContent:"flex-start",
  },
  collapsable:{
    borderWidth: 0, 
    padding:15,
    alignContent:"flex-start"
  },
  collapsabletext:{
    alignItems:"flex-start", 
    justifyContent:"flex-start",
    position:"relative", 
    paddingLeft:0, 
    flex:1, 
    color:"black" , 
    fontStyle:"normal",
    fontSize: 18
  }
,
  buttontext:{fontSize:20,width:250,alignItems:"center",
  height:50,
  justifyContent:"center",textAlign:"center",borderRadius:20,
paddingTop:10,
paddingBottom:10,
borderWidth:2,
color:"white",
backgroundColor:"#151F6A"},


button:{
      width: 200,
      marginTop: 20,
      backgroundColor: "#151F6A",
      padding: 15,
   
}
  
});