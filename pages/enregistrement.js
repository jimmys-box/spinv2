
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../layout';

function RegisterPage() {

  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [birthday, setBirthday] = useState('');
  const [ville, setVille] = useState('');
  // const [ role, setRole] = useState('');
  const [myfile, setMyfile] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "nom") {
      setNom(value);
    }
    if (id === "pseudo") {
      setPseudo(value);
    }
    if (id === "description") {
      setDescription(value);
    }
    if (id === "birthday") {
      setBirthday(value);
    }
    if (id === "ville") {
      setVille(value);
    }
    if (id === "myfile") {
      setMyfile(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    // if(id === "role"){
    //     setRole(value);
    // }

  }
  const handleSubmit = async() => {
    const reponseTentConnexion = await fetch("https://jimmyslab.club:6500/utilisateurs/creer", {
      method: "POST",
      // mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nom: nom,
        pseudo: pseudo,
        description: description,
        birthday: birthday,
        ville: ville,
        myfile: myfile,
        email: email,
        password: password
      })
    })
    let reponseTentConnexionJson = await reponseTentConnexion.json();
      
      if (reponseTentConnexion.status === 201) {
        setEmail("");
        setPassword("");
      //  setMessageErreurApi(reponseTentConnexionJson.message.toString());
      //  navigation.replace('hoome');
      } else {
       // setMessageErreurApi(reponseTentConnexionJson.message.toString());
   
      }
}
  return (
    <Layout>
      <section className="form-page loginPage" style={{ paddingTop: 50 }}>
        <div className="container">
          <div className="form-block">
            <h2 className="form-block__title">Nous rejoindre</h2>

            <form className="form">
              <div className="form__input-row">
                <input placeholder="Nom" name="nom" id="nom" type="text" onChange={(e) => handleInputChange(e)} value={nom} required />
              </div>
              <div className="form__input-row">
                <input placeholder="Pseudo" name="pseudo" id="pseudo" type="text" onChange={(e) => handleInputChange(e)} value={pseudo} required />
              </div>
              <div className="form__input-row">
                <textarea rows={10} placeholder="Description" name="description" id="description" onChange={(e) => handleInputChange(e)} value={description} required></textarea>
              </div>
              <div className="form__input-row">
                <input type="date" id="birthday" name="birthday" onChange={(e) => handleInputChange(e)} value={birthday} required />
              </div>
              <div className="form__input-row">
                <input placeholder="Ville" name="ville" id="ville" type="text" onChange={(e) => handleInputChange(e)} value={ville} required />
              </div>
              <div className="form__input-row">
                <fieldset>
                  <legend>Avatar:</legend>

                  <input style={{ paddingTop: 13 }} type="file" id="myfile" name="myfile" onChange={(e) => handleInputChange(e)} value={myfile} />
                </fieldset>
              </div>
              {/* <div className="form__input-row">
              <select name="cars" id="role" value={role} required style={{appearance: 'auto',cursor: 'pointer'}}>
                <option>Role</option>
                <option onChange = {(e) => handleInputChange(e)} value="standard" id="standard">Joueur</option>
                <option onChange = {(e) => handleInputChange(e)} value="professional" id="professional">Joueur professionnel</option>
                <option onChange = {(e) => handleInputChange(e)} value="society" id="society">Entreprise</option>
              </select>
            </div> */}

              <div className="form__input-row">
                <input className="form__input" placeholder="Email" id="email" type="text" onChange={(e) => handleInputChange(e)} value={email} required />
              </div>

              <div className="form__input-row">
                <input className="form__input" type="Password" id="password" placeholder="Password" onChange={(e) => handleInputChange(e)} value={password} required />
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input name="signed-in" type="checkbox" id="check-signed-in" style={{ display: 'none' }} required />
                    <span className="checkbox__check"></span>
                    <p style={{ color: 'white' }}>J&apos;accepte les termes et conditions</p>
                  </label>
                </div>
              </div>
              <div className='dFlex registerButtons'>
                <input type="reset" className='btn btn--rounded btn-submit' />
                <button onClick={() => handleSubmit()} type="submit" className="btn btn--rounded btn-submit">S&apos;enregistrer</button>
              </div>
              <p className="form__signup-link">
                <Link href="/login">
                  <p href="#">Déjà membre?</p>
                </Link>
              </p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default RegisterPage
