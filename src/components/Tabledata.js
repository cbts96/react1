import React, { Component } from 'react';
import Tabledatarow from './Tabledatarow';

class Tabledata extends Component {
  mappingDataUser=()=>this.props.datauserprops.map((value,key)=>(
    <Tabledatarow changeeditsuerstatus={()=>this.props.changeeditsuerstatus()} editfunclick={(ueser)=>this.props.editfun(value)} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.permission}/>
  ))
    render() {
      
        return (
            <div>
                <div className="col-9">
  <table className="table table-striped table-hover">
    <thead className="thead-inverse|thead-default">
      <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Dien thoai</th>
        <th>Quyen</th>
        <th>Thao tac</th>
      </tr>
    </thead>
    <tbody>
      {this.mappingDataUser()}
      
    </tbody>
  </table>
</div>

            </div>
        );
    }
}

export default Tabledata;