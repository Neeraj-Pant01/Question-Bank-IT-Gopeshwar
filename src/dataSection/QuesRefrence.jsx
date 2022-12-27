import React from 'react'
import { FourthYearCe, FourthYearCse, FourthYearEce, FourthYearEe, FourthYearMe } from './FourthYear'
import { ThirdYearCe, ThirdYearCse, ThirdYearEce, ThirdYearEe, ThirdYearMe } from './ThirdYear'
import { SecondYearCe, SecondYearCse, SecondYearEce, SecondYearEe, SecondYearMe } from './SecondYear'

const QuesRefrence = ({year, curYear}) => {
  return (
    <>
    {
        (year === "2" && curYear === "cse") &&
        SecondYearCse.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'orange'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'green'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ce") &&
        SecondYearCe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'orange'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'red'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "me") &&
        SecondYearMe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'orange'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'blue'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ee") &&
        SecondYearEe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red", cursor:"pointer"}}>
                <h1 style={{color:'orange'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'yellow'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "2" && curYear === "ece") &&
        SecondYearEce.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'orange'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'purple'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }

       {/* for 3rd year....... */}

{
        (year === "3" && curYear === "cse") &&
        ThirdYearCse.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'crimson'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'green'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ce") &&
        ThirdYearCe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'crimson'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'red'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "me") &&
         ThirdYearMe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'crimson'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'blue'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ee") &&
        ThirdYearEe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red", cursor:"pointer"}}>
                <h1 style={{color:'crimson'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'yellow'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "3" && curYear === "ece") &&
        ThirdYearEce.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'crimson'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'purple'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }


    {/* for 4 year........ */}

    {
        (year === "4" && curYear === "cse") &&
        FourthYearCse.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red",color:'teal'}}>
                <h1 style={{color:'teal'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:"green"}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ce") &&
        FourthYearCe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'teal'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'red'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "me") &&
        FourthYearMe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'teal'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'blue'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ee") &&
        FourthYearEe.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red", cursor:"pointer"}}>
                <h1 style={{color:'teal'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'yellow'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
        {
        (year === "4" && curYear === "ece") &&
        FourthYearEce.map((c)=>{
            return (
                <div className='subject' style={{width:"30vh", height:"30vh", border:"2px solid red"}}>
                <h1 style={{color:'teal'}} className='curyear'>{year + "year"}</h1>
                <h1 className='branch'>{`BRANCH - ${curYear}`}</h1>
                <h1 style={{color:'purple'}}>{c.sub}</h1>
                </div>
            )
        })
        
    }
      </>
  )
}

export default QuesRefrence
