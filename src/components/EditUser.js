import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:this.props.usereditobject.id,
      name:this.props.usereditobject.name,
      tel:this.props.usereditobject.tel,
      permission:this.props.usereditobject.permission
    }
  }
  
  ischange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({[name]:value});
  }
  savebutton=()=>{
    var info={};
    info.id= this.state.id;
    info.name= this.state.name;
    info.tel= this.state.tel;
    info.permission= this.state.permission;
    this.props.getusereditinfo(info);
    this.props.changeeditsuerstatus();
  }
    render() {
        return (
            <div className="col-12">
                
            
            <form>
           <div className="card-header">Sua thong tin nguoi dung</div>
           <div className="card-body text-primary">
             <div className="form-group">
               <label/>
               <input type="text" defaultValue={this.props.usereditobject.name} onChange={(event)=>this.ischange(event)} name="name" className="form-control"  placeholder="Ten user" />
             </div>
             <div className="form-group">
               <label/>
               <input type="text" defaultValue={this.props.usereditobject.tel} onChange={(event)=>this.ischange(event)} name="tel" className="form-control"  placeholder="SDT" />
             </div>
             <div className="form-group">
               <select defaultValue={this.props.usereditobject.permission} className="custom-select" onChange={(event)=>this.ischange(event)} name="permission" required>
                 <option value>Chon quyen mac dinh</option>
                 <option value={1}>Admin</option>
                 <option value={2}>Moderator</option>
                 <option value={3}>Normal</option>
               </select>
             </div>
             <div className="form-group">
               <input type="button" className="btn btn-block btn-primary" onClick={()=>this.savebutton()} value="Luu" />              
             </div>
           </div>
           </form>
           </div>)
    }
}

export default EditUser;