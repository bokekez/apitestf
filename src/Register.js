import React, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({
        signInEmail: '',
        // signInName: ''
      });
      const [username, setUsername] = useState({
        signInName: ''
      });
      
      const onEmailChange = (e) => {
        setUser({signInEmail: e.target.value})
      }
      const onNameChange = (e) => {
        setUsername({signInName: e.target.value})
      }
      
      const onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
                  method: 'post',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
            email: user.signInEmail,
            name: username.signInName
          })
        }).then(resopnse => resopnse.json())
        // .then(setUser({
        //   signInEmail: '',
        //   signInName: ''
        // }))
      
      }
    return (
        <main class="pa4 black-80">
        <form class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6">Email</label>
              <input  onChange={onEmailChange} value={user.email} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6">Name</label>
              <input onChange={onNameChange} value={user.signInName} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name" />
            </div>
          </fieldset>
          <div class="">
            <input onClick={onSubmitSignIn} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"/>
          </div>
        </form>
      </main>
    )

}

export default Register;