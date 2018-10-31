import React, { Component } from 'react';

class Tabledatarow extends Component {
    permissionShow=()=>{
        if(this.props.permission===1)
        {
            return "admin";
        }
        else if(this.props.permission===2)
        {
            return "Moderator";
        }
        else{
            return "Member";
        }
    }
   editclick=()=>{
       this.props.editfunclick();
       this.props.changeeditsuerstatus();
   }
    render() {
        return (
            <tr>
            <td>{this.props.stt+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>{this.permissionShow()}</td>
            <td>
              <div className="btn btn-warning" onClick={()=>this.editclick()} ><i className="fa fa-edit" />Sua</div>
              <div className="btn btn-success"><i className="fa fa-delete" />Xoa</div>
            </td>
          </tr>
        );
    }
}

export default Tabledatarow;