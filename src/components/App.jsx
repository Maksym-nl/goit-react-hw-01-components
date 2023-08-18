import { Profile } from './Profile/Profile';
import user from 'Data/user.json';
import data from 'Data/data.json';
import { Statistics } from './Statistics/Statistics';
import friends from 'Data/friends.json';
import { FriendList } from './FriendList/FriendList';



export const App = () => {
  return (
    <div
      style={{
        height: '50vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
 <Statistics title="Upload stats" stats={data} />
 <FriendList friends={friends} />;
    </div>
   
  );
};
