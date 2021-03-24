import React from 'react';
import { useForm } from "react-hook-form";
import { LoginService } from '../shared/services/login.service';

export function LoginForm(){
    
  const createLoginObject = (data)=>{
    const login ={
      username: data.username, 
      password : data.password,
    }
    return login;
  }

  const { register, handleSubmit, errors } = useForm({shouldFocusError: true});  

  const onSubmit = async (data) => {
    const login = createLoginObject(data);
    await LoginService.submit(login);
  };

  return (
  
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-8">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row mb-1">
              <div className="col-auto">
                <h5>Username</h5>
                <input className="form-control form-control-sm" type="text" name="username" autoFocus ref={register({required: true, maxLength: 50})} />
              </div>
            </div>
            <div className="form-row mb-4">
                <div className="col-auto">
                    {errors.username && <p>Required</p>}
               </div>
            </div>

            <div className="form-row mb-1">
              <div className="col-auto">
                <h5>Password</h5>
                <input className="form-control form-control-sm" type="password"  name="password" ref={register({ required: true})} />
              </div>
            </div>
            <div className="form-row mb-4">
                <div className="col-auto">
                    {errors.password && <p>Required</p>}
                </div>
            </div>

            <div className="form-row">
                <div className="col-auto">
                    <input className="btn btn-primary" type="submit"/>      
                </div>
            </div>
          </form>

        </div>
      </div>
    </div>

  );
}