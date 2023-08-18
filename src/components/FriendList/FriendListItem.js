export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ul class="friend-list">
      <li>
        <p>{isOnline}</p>
        <img src={avatar} alt={name} width="50" />
        <p>{name}</p>
        <p key={friend.id}>{id}</p>
      </li>
    </ul>
  );
}
