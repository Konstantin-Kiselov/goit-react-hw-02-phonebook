import s from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name }) => (
      <li className={s.item} key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>
);

export default Contacts;
