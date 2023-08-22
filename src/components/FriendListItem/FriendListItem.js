import PropTypes from 'prop-types';
import {ListItem} from '../FriendList/FriendList.styled';
export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <ListItem key={id}>
      <span className="status">{isOnline}</span>
      <img Avatar src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
