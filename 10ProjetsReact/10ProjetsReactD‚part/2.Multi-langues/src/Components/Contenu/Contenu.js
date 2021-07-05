import React, { useContext } from 'react';
import { Context } from '../../context/LangContext';

import data from '../../assets/data.js';
import './Contenu.css';

export default function Contenu() {
  const { lang } = useContext(Context);

  // console.log(lang);

  return (
    <div className="content">
      <h1 className="title">{data[lang].title}</h1>
      <p className="content-text">{data[lang].txt}</p>
    </div>
  );
}
