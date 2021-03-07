import React from 'react';
import { useForm } from "react-hook-form";
import { AssessmentService } from '../shared/services/assessment.service';

export function AssessmentNew(){

    const { register, handleSubmit, errors } = useForm(  {shouldFocusError: true});  
    
    const onSubmit = async (data) => {
        //console.log(data);
        await AssessmentService.submit(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="question-header">Cat Name</h2>
        <input type="text" name="name" autoFocus ref={register({required: true, maxLength: 80})} />
        {errors.name && <p>Required</p>}

        <h2 className="question-header">Instrument</h2>
        <input type="text" name="instrument" value="piano" readOnly="readOnly" ref={register()}/>

        <h2>Cat Date of Birth</h2>
        <input type="date"  name="dob" ref={register()} />

        <h2 className="question-header">Previous contact with the Cat Judicial System</h2>
        <input type="radio" id="prevJudSys-no" name="prevJudSys" value="0" ref={register({ required: true })}/>
        <label htmlFor="prevJudSys-no">No</label><br/>
        <input type="radio" id="prevJudSys-yes" name="prevJudSys" value="1" ref={register({ required: true })}/>
        <label htmlFor="prevJudSys-yes">Yes</label><br/>
        {errors.prevJudSys && <p>Required</p>}

        <h2 className="question-header">Physical altercations with other cats</h2>
        <input type="radio" id="phsAltCat-0" name="phsAltCat" value="0" ref={register({ required: true })}/>
        <label htmlFor="PhsAltCat-0">0-3 altercations</label><br/>
        <input type="radio" id="phsAltCat-3" name="phsAltCat" value="1" ref={register({ required: true })}/>
        <label htmlFor="PhsAltCat-3">3+ altercations</label><br/>
        {errors.phsAltCat && <p>Required</p>}

        <h2 className="question-header">Physical altercations with owner (scratching, biting, etc...)</h2>
        <input type="radio" id="phsAltOwn-10" name="prsAltOwn" value="1" ref={register({ required: true })}/>
        <label htmlFor="prsAltOwn-10">10+ altercations</label><br/>
        <input type="radio" id="phsAltOwn-0" name="prsAltOwn" value="0" ref={register({ required: true })}/>
        <label htmlFor="prsAltOwn-0">0-10 altercations </label><br/>
        {errors.prsAltOwn && <p>Required</p>}

        <h2 className="question-header">Plays well with dogs</h2>
        <input type="radio" id="plyDog-no" name="plyDog" value="1" ref={register({ required: true })}/>
        <label htmlFor="plyDog-no">No</label><br/>
        <input type="radio" id="plyDog-yes" name="plyDog" value="0" ref={register({ required: true })}/>
        <label htmlFor="plyDog-yes">Yes</label><br/>
        {errors.plyDog && <p>Required</p>}

        <h2 className="question-header">Hisses at strangers</h2>
        <input type="radio" id="hssStr-yes" name="hssStr" value="1" ref={register({ required: true })}/>
        <label htmlFor="hssStr-yes">Yes</label><br/>
        <input type="radio" id="hssStr-no" name="hssStr" value="0" ref={register({ required: true })}/>
        <label htmlFor="hssStr-No">No</label><br/> 
        {errors.hssStr && <p>Required</p>}

        <input type="submit" />
      </form>
  );
}