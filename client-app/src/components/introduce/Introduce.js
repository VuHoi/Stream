import React, { Component } from 'react';
import pp_hoc from '../../assets/images/pp_hoc.png';
import teacher from '../../assets/images/giang_vien.png';
import support from '../../assets/images/support.png';
import equipment from '../../assets/images/equipment.png';
import CardInfo from './CardInfor'
const cards=[
    {"src":pp_hoc, "title":"Phương pháp học tiên tiến","content":"Mô hình học tập  giúp giải quyết được nhiều vấn đề thực tế và vô cũng tiện lợi "},
    {"src":teacher,"title":"Giáo viên giảng dạy tận tình","content":"Đội ngũ giáo viên với trình độ chuyên môn cao sẽ mở lớp bất cứ lúc nào bạn cần"},
    {"src":equipment,"title":"Cung cấp dịch vụ tuyệt vời","content":"Chưng trình quản lý học tập cho từng thành viên"},
    {"src":support,"title":"Hỗ trợ học tập phong phú","content":"Phương pháp học tập phù hợp với mọi đối tượng"}]


class Introduce extends Component {

    constructor(props){
        super(props)
        this.state={
            srcImages:cards
        }
    }
    renderInfo(){
        var cards=this.state.srcImages.map((item,key)=>{
            return (
                <div key={key} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                    <CardInfo info={item}  ></CardInfo>
                </div>
            )
        })
        return cards;
    }

    render() {
        return (
            <div>
                <div className="text-center mt-5 container">
                    <h2>Welcome to Classroom Online</h2>

                    <div className="row mt-5">
                        {this.renderInfo()}
                    </div>
                </div>
            </div>

        );
    }
}

export default Introduce;
