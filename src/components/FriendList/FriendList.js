
import PropTypes from 'prop-types';
import {List} from './FriendList.styled'
export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <ListItem key={id}>
          <span className="status">{isOnline}</span>
          <img Avatar src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </ListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
