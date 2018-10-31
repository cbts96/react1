import React, { Component } from 'react';

class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permission:""
    }
  }
  
  ischange=(event)=>{
    const name= event.target.name;
    const value=event.target.value;
    
    this.setState({[name]:value});
    
  }
    
   kiemTratrangThai=()=>{
       if(this.props.hienThiForm===true)
       {
           return (<div className="card border-primary mb-3 mt-3" style={{maxWidth: '18rem'}}>
           <form>
           <div className="card-header">Them moi</div>
           <div className="card-body text-primary">
             <div className="form-group">
               <label/>
               <input type="text" onChange={(event)=>this.ischange(event)} name="name" className="form-control"  placeholder="Ten user" />
             </div>
             <div className="form-group">
               <label/>
               <input type="text" onChange={(event)=>this.ischange(event)} name="tel" className="form-control"  placeholder="SDT" />
             </div>
             <div className="form-group">
               <select className="custom-select" onChange={(event)=>this.ischange(event)} name="permission" required>
                 <option value>Chon quyen mac dinh</option>
                 <option value={1}>Admin</option>
                 <option value={2}>Moderator</option>
                 <option value={3}>Normal</option>
               </select>
             </div>
             <div className="form-group">
               <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.add(this.state.name,this.state.tel,this.state.permission)} value="them moi" />              
             </div>
           </div>
           </form>
         </div>)
           

           
       }
   }
    
  
    render() {
      
        return (
            
<div className="col-3">
  <div className="card text-left  ">
 
  
        {this.kiemTratrangThai()}
    
  </div>
</div>
            
        );
    }
}

export default Adduser;