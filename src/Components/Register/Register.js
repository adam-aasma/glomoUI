
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import RegisterStyles from './Register.module.css';

function Register( props) {
    const history = useHistory();
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChange = e => {
            setValue(e.target.value);
        }
        return {
            value,
            onChange: handleChange
        }
    }
    const username = useFormInput('');
    const password = useFormInput('');
    const submitHandler = async e => {
        e.preventDefault();
        let success = await props.handleSubmit({username: username.value, password: password.value})
        if(success) {
            history.replace("/");
        }
      }
    return (
        <div className='centContainer'>
            <form className={RegisterStyles.form} onSubmit={submitHandler}>
                <legend className={RegisterStyles.legend}>{props.title}</legend>
                <div className={RegisterStyles.inputGroup}>
                    <label className={RegisterStyles.label} htmlFor="username">Username</label>
                    <input type="text" className={RegisterStyles.input} {...username}/>
                </div>
                <div className={RegisterStyles.inputGroup}>
                    <label htmlFor="password" className={RegisterStyles.label}>Password</label>
                    <input type="password" {...password} className={RegisterStyles.input}/>
                </div>
                <div className={RegisterStyles.inputGroup}>
                    <input type="submit" className="button submit" value="Submit"/>
                </div>
                <footer className={RegisterStyles.footer}>
                    {props.linkText} <Link  className={RegisterStyles.footerLink} to={props.linkTo}>{props.link}</Link>
                </footer>
            </form>
        </div>
        
      )
}

export default Register;