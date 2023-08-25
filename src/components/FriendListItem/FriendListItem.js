import PropTypes from 'prop-types';
import {ListItem, StatusItem} from './FriendListItem.styled';
export function FriendListItem({ avatar, name, isOnline}) {
  return (
    <ListItem>
      <StatusItem status={isOnline}></StatusItem>
      <img src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
}

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
