import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import { useDeleteContactMutation } from 'redux/contacts';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={s.button}
        type="submit"
        name={name}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
