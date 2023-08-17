import { Profile } from './Profile/Profile';
import user from 'Data/user.json';
import data from 'Data/data.json';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  return (
    <div
      style={{
        height: '50vh',
        display: 'flex',
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

    </div>
   
  );
};
