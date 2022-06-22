import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/slice';
import ContactItem from 'components/ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contacts';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const { data } = useGetContactsQuery();
  data?.map(contact => console.log(contact.name));

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (data) {
    return (
      <ul>
        {data.map(({ id, name, phone }) => (
          <li className={s.li} key={id}>
            <ContactItem id={id} name={name} number={phone} />
          </li>
        ))}
      </ul>
    );
  }
  // if (contactsFiltered) {
  //   return (
  //     <ul>
  //       {contactsFiltered.map(({ id, name, number }) => (
  //         <li className={s.li} key={id}>
  //           <ContactItem id={id} name={name} number={number} />
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
}
