import React, { Component } from 'react';
import '../../assets/styles/css/common.css'
import Toan from '../../assets/images/giaitich12.png';
import Ly from '../../assets/images/ly12.png';
import Hoa from '../../assets/images/hoa.png';
import Card from './Card'


class Subject extends Component {

    constructor(props){
        super(props);
        this.state={
            subjects:[
                {"title":"Toán 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Toan},
                {"title":"Lý 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Ly},
                {"title":"Hóa 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Hoa},
                {"title":"Toán 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Toan},
                {"title":"Lý 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Ly},
                {"title":"Hóa 12","content":"Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực Giải thích những vấn đề trong thực tế một cách chân thực",'image':Hoa}


            ]
        }
    }


    renderSubject(){
        var subjects=this.state.subjects.map((subject,key)=>{
            return (
            <div className="col-4" key={key}>
                <Card info={subject}></Card>
                {key%3===0?(<div className="col-12 mt-4"></div>):null}
            </div>

            )
        });
        return subjects
    }


    render() {
        return (
            <div className="mt-5 container" >
                <div className="text-center">
                    <h4 className="font-weight-bold m-5">Chủ đề</h4>
                </div>
                <div className=" row">
                    {this.renderSubject()}
                </div>
                <br/>  <br/>

            </div>

        );
    }
}

export default Subject;
