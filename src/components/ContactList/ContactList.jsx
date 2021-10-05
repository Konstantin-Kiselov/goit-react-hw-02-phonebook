import s from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

export default ContactList;
