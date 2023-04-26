import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

function ContactItem({ contacts, onDeleteContact }) {
    return (
        <>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.contact__item}>
                    <div className={css.contact__info}>
                        <div className={css.contact__div}>
                            <p className={css.contact__data}>{name}</p>
                        </div>
                        <div className={css.contact__div}>
                            <p className={css.contact__data}>{number}</p>
                        </div>
                    </div>
                    <button type="button" className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
                        Delete contact
                    </button>
                </li>
            ))}
        </>
    );
}


export default ContactItem;

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};