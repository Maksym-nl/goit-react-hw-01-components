

 export function Profile ({ username, tag, location, avatar, stats}) {
  return (
     <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>
      <div>
        <ul class="stats">
          <li>
            <span class="label">{stats.folovers}</span>
            <span class="quantity">{stats.quantity}</span>
          </li>
          <li>
            <span class="label">{stats.views}</span>
            <span class="quantity">{stats.quantity}</span>
          </li>
          <li>
            <span class="label">{stats.likes}</span>
            <span class="quantity">{stats.quantity}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}


<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  folovers={stats.folovers}
  quantity={stats.quantity}
  views={stats.views}
  likes={stats.likes}
/>;
