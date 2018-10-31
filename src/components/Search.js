import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={tempvalue:"",
        userobj:{}
        }
    }
    getusereditinfo=(info)=>{
        this.setState({userobj:info});
    }
    isshowform=()=>{
        if(this.props.edituserstatus===true)
        {
            return <EditUser
            getusereditinfo={(info)=>this.getusereditinfo(info)} 
            changeeditsuerstatus={()=>this.props.changeeditsuerstatus()} usereditobject={this.props.usereditobject}/>
        }
    }
    ischange=(event)=>{
        console.log(event.target.value );
        this.setState({tempvalue:event.target.value});
        this.props.checkconectprop(this.state.tempvalue);
    }
    hienthinut=()=>{
        if(this.props.hienThiForm===true)
        {
            return <div className="btn btn-info" onClick={()=>this.props.ketnoi()} >Dong lai</div>
        }
        else{
            return <div className="btn btn-primary" onClick={()=>this.props.ketnoi()}>Them moi</div>    
        }
    }
    render() {
        return (
            <div>
                <div className="col-12">
               {this.isshowform()}
                    <div className="form-group">
                        <div className="btn-group">
                        <input type="text" className="form-control"  onChange={(event)=>this.ischange(event)} placeholder="Nhap tu khoa" />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkconectprop(this.state.tempvalue)}>Tim kiem</div>
                        </div>
                    </div>
                    
                    {this.hienthinut()}
                    </div>
                   
                <hr/>
            </div>
             
        );
    }
}

export default Search;