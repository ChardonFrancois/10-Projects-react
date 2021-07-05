import React, { useContext } from 'react';

import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';

import { Context } from '../../context/LangContext';

import './ToggleLangs.css';

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context);

  return (
    <div className="container-langs">
      <img
        onClick={() => toggleLang('FR')}
        src={FrenchFlag}
        alt="french flag"
      />
      <img
        onClick={() => toggleLang('EN')}
        src={EnglishFlag}
        alt=" united-kingdom flag"
      />
      <img
        onClick={() => toggleLang('ES')}
        src={SpanishFlag}
        alt="spain flag"
      />
    </div>
  );
}
