import React from 'react';
import { useForm } from "react-hook-form";
import { AssessmentService } from '../shared/services/assessment.service';

export function AssessmentNew(){
  const createAssessmentObject = (data)=>{
    var assessment ={
      instrument: data.instruments, 
      catName : data.catName,
      catDateOfBirth : data.catDateOfBirth,
    }
    assessment.score = calculateScore(data)
    assessment.riskLevel = calculateRiskLevel(assessment.score)
    return assessment;
  }

  const calculateScore = (data)=>{
    var score = 0;
    score += +data.response1;
    score += +data.response2;
    score += +data.response3;
    score += +data.response4;
    score += +data.response5;
    return score;
  }

  const calculateRiskLevel = (score)=>{
    var riskLevel = 'low';
    if(score > 1){
      if(score <=3) riskLevel = 'meduim';
      else riskLevel = 'high';
    }

    return riskLevel;
  }

  const { register, handleSubmit, errors } = useForm({shouldFocusError: true});  

  const onSubmit = async (data) => {
    var assessment = createAssessmentObject(data);
    await AssessmentService.submit(assessment);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="question-header">Cat Name</h2>
      <input type="text" name="catName" autoFocus ref={register({required: true, maxLength: 80})} />
      {errors.catName && <p>Required</p>}

      <h2 className="question-header">Instrument</h2>
      <select name="instruments" id="instrument-select" ref={register({ required: true })}>
        <option value="">--Please choose an option--</option>
        <option value="clarinet">Clarinet</option>
        <option value="drum">Drum</option>
        <option value="guitar">Guitar</option>
        <option value="piano" >Piano</option>
      </select>
      {errors.instruments && <p>Required</p>}

      <h2>Cat Date of Birth</h2>
      <input type="date"  name="catDateOfBirth" ref={register({ required: true })} />
      {errors.catDateOfBirth && <p>Required</p>}

      <h2 className="question-header">Previous contact with the Cat Judicial System</h2>
      <input type="radio" id="response1-no" name="response1" value="0" ref={register({ required: true })}/>
      <label htmlFor="response1-no">No</label><br/>
      <input type="radio" id="response1-yes" name="response1" value="1" ref={register({ required: true })}/>
      <label htmlFor="response1-yes">Yes</label><br/>
      {errors.response1 && <p>Required</p>}

      <h2 className="question-header">Physical altercations with other cats</h2>
      <input type="radio" id="response2-0" name="response2" value="0" ref={register({ required: true })}/>
      <label htmlFor="response2-0">0-3 altercations</label><br/>
      <input type="radio" id="response2-3" name="response2" value="1" ref={register({ required: true })}/>
      <label htmlFor="response2-3">3+ altercations</label><br/>
      {errors.response2 && <p>Required</p>}

      <h2 className="question-header">Physical altercations with owner (scratching, biting, etc...)</h2>
      <input type="radio" id="response3-10" name="response3" value="1" ref={register({ required: true })}/>
      <label htmlFor="response3-10">10+ altercations</label><br/>
      <input type="radio" id="response3-0" name="response3" value="0" ref={register({ required: true })}/>
      <label htmlFor="response3-0">0-10 altercations </label><br/>
      {errors.response3 && <p>Required</p>}

      <h2 className="question-header">Plays well with dogs</h2>
      <input type="radio" id="response4-no" name="response4" value="1" ref={register({ required: true })}/>
      <label htmlFor="response4-no">No</label><br/>
      <input type="radio" id="response4-yes" name="response4" value="0" ref={register({ required: true })}/>
      <label htmlFor="response4-yes">Yes</label><br/>
      {errors.response4 && <p>Required</p>}

      <h2 className="question-header">Hisses at strangers</h2>
      <input type="radio" id="response5-yes" name="response5" value="1" ref={register({ required: true })}/>
      <label htmlFor="response5-yes">Yes</label><br/>
      <input type="radio" id="response5-no" name="response5" value="0" ref={register({ required: true })}/>
      <label htmlFor="response5-No">No</label><br/> 
      {errors.response5 && <p>Required</p>}

      <input type="submit" />
    </form>
  );
}