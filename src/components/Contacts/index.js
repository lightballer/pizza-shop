import React from 'react';
import s from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.phone_numbers}>
        <a href='tel:+380443840470'>+380443840470</a>
        <a href='tel:+380633815496'>+380633815496</a>
        <a href='tel:+380675454646'>+380675454646</a>
      </div>
    </div>
  );
}
