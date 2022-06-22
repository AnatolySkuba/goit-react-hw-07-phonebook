import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
// import {
//   useGetPokemonByNameQuery,
//   useGetContactsByIdQuery,
// } from 'redux/pokemon';

export default function App() {
  // const { data, error, isLoading } = useGetContactsByIdQuery(2);
  // console.log(data, error, isLoading);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
