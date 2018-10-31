import React, { Component } from 'react';

import './../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import Adduser from './Adduser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
 constructor(props) {
   super(props);
   this.state={
     hienThiForm:true,
     Data:DataUser,
     edituserstatus:true,
     usereditobject:{}
   }
 }
 changeeditsuerstatus=()=>{
   this.setState({
     edituserstatus:!this.state.edituserstatus
   });
 }
 edituser=(ueser)=>{
   console.log("da ket noi"); 
   this.setState({
     usereditobject:ueser
   });
   console.log(ueser);
  
 }
 getuserdata=(name,tel,permission)=>{
 var item={};
 item.id=uuidv1();;
 item.name=name;
 item.tel=tel;
 item.permission=permission;
 var items=this.state.Data;
 this.setState({Data:items});
 items.push(item);
 console.log(this.state.Data);
 

 }
 gettextsearch=(dl)=>{this.setState({searchText:dl});}
 doitrangthai=()=>{
   this.setState({
     hienThiForm:!this.state.hienThiForm
   });
 }
 
  render() {
    var ketqua=[];
    this.state.Data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!==-1)
      ketqua.push(item);
    })
    console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="SearchForm">
            <div className="container">
              <div className="row">
                <Search ketnoi={()=>this.doitrangthai()} hienThiForm={this.state.hienThiForm} checkconectprop={(dl)=>this.gettextsearch(dl)} edituserstatus={this.state.edituserstatus}
                changeeditsuerstatus={()=>this.changeeditsuerstatus()} usereditobject={this.state.usereditobject}/>
               
              
            <div className="col-12">
               <Tabledata editfun={(ueser)=>this.edituser(ueser)} datauserprops={ketqua} changeeditsuerstatus={()=>this.changeeditsuerstatus()}/>
                <Adduser add={(name,tel,permission)=>this.getuserdata(name,tel,permission)} hienThiForm={this.state.hienThiForm}/>
            </div>
           </div>
        </div>
        </div> 
      </div>
    );
  }
}

export default App;
