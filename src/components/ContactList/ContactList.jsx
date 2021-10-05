import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
