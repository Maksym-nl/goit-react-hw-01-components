

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
           <span class="quantity">{stats.folovers}</span>
          </li>
          <li>
            <span class="label">{stats.views}</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li>
            <span class="label">{stats.likes}</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
 



