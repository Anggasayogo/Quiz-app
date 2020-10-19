import React, { useState } from 'react'
import { Faker } from '../../utils/faker';
import './quiz.css';

const Quiz = () => {
    const [curetindex,setCurentIntex] = useState(0);
    const {id,question,options} = Faker[curetindex];

    // handle click
    const nextQuestion = ()=>{
        if(Faker.length - 1  === curetindex) return;
        setCurentIntex(curetindex + 1);
    }

    const previousQuestion = ()=>{
        if(curetindex === 0) return;
        setCurentIntex(curetindex - 1);
    }
    return (
        <>
            <h3>Question</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="shadow p-3 mb-5 bg-white rounded" style={{display: 'flex',flexWrap: 'wrap'}}>
                   {
                       Faker.map((item,index)=>(
                        <div onClick={()=>{setCurentIntex(index)}} className="border border-primary ml-2 mt-2" style={{display: "flex",height: 35,width: 35,justifyContent: 'center',alignItems: 'center', cursor: 'pointer', backgroundColor: index == curetindex ? '#28a745' : null ,borderRadius: 3}}>
                        {index + 1}
                        </div>
                       ))
                   }
                   </div>
                </div>
                <div className="col-md-9">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h5 className="mb-4">{curetindex + 1}. {question}</h5>
                    {
                        options.map((object,i) => (
                            <div key={i} style={{display: 'flex',}}>
                                <div style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 100,
                                    backgroundColor: 'gray',
                                    cursor: 'pointer',
                                    marginRight: 10,
                                }}/>
                                {object.title}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-warning col-sm-2" 
                onClick={previousQuestion}
                disabled={curetindex === 0 ? true : false}
                >Previous</button>
                <button className="btn btn-primary col-sm-2" 
                onClick={nextQuestion}
                disabled={Faker.length - 1  === curetindex ? true : null}
                >Next</button>
            </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
