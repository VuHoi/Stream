import React, { Component } from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import people4 from '../../assets/images/people4.png';
import people5 from '../../assets/images/people5.png';
import people6 from '../../assets/images/people6.png';
import people7 from '../../assets/images/people7.png';
import people8 from '../../assets/images/people8.png';
const backgroundTeacher={
    backgroundColor:'rgb(57,57,57)',
    marginTop:'30px'
}
const colorWhite={
    color:'#ECECEE'
}

const colorBlue={
    color:'#16bdca'
}
class Teacher extends Component {

    constructor(props){
        super(props);
        this.state={
            teachers:[
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people1},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people2},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people3},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people4},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people5},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people6},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people7},
                {"fullName":"Dao Khả Ái","certificate":"IELTS 8.0",'image':people8},
            ]
        }
    }


    renderTeachers(){
        var teachers=this.state.teachers.map((teacher,key)=>{
            return (
                <div className="col-3" key={key}>
              <div className="text-center">
                  <img src={teacher.image} alt={teacher.fullName} className="rounded-circle  "/>

               <h4 className=" mt-1" style={colorBlue}>{teacher.fullName}</h4>
                  <div style={colorWhite} className="h5">{teacher.certificate}</div>
              </div>

                    {key%4===0?(<div className="col-12 mt-4"></div>):null}
                </div>
            )
        })
        return teachers;
    }
    render() {
        return (
            <div style={backgroundTeacher}>
                <div className="container">
                    <br/>
                   <div className="text-center text-danger">
                       <h3  >Học viên tiêu biểu</h3>
                       <div style={colorWhite} className=" mb-5">
                           ClassRoom Online mang lại một hình thức học mới mẻ sáng tạo. Đã tạo ra nhưng tầng lớp học viên ưu tú
                       </div>
                   </div>
                        <div className="row">
                            {this.renderTeachers()}
                        </div>
                </div>
            </div>

        );
    }
}

export default Teacher;
