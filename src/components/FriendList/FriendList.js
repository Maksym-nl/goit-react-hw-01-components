export function FriendList(friends){
    return (
        <ul className="friend-list">
  <li key={friends.id} className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src="{avatar}" alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
</ul>
    )

    
}