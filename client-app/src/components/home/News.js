import React, { Component } from 'react';
import CardNews from './CardNews';
import ReactJS from '../../assets/images/ReactJS.png';


const news=[
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components).','image':ReactJS},
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components.','image':ReactJS},
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components).','image':ReactJS},
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components).','image':ReactJS},
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components).','image':ReactJS},
    {'title':"Giới thiệu về ReactJS phần 1 (Các khái niệm cơ bản)",'content':'React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components).','image':ReactJS},

]

class News extends Component {

    constructor(props) {
        super(props);
        this.state={
            news
        }
    }

    renderNews(){
      var news=  this.state.news.map((news,key)=>{
            return (
              <div className="col-6" key={key}>
                <CardNews news={news}  />
              </div>
            )
        })

        return news;
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="text-center">
                    <h3>Tin tức</h3>

                </div>
                <div className="row mt-3">
                    {this.renderNews()}
                </div>
            </div>

        );
    }
}

export default News;
