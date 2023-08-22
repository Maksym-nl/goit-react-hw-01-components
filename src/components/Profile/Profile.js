
import PropTypes from "prop-types";
import { Avatar, Text, Stats, StatsList, StatsItem } from "./Profile.styled";
export function Profile ({ username, tag, location, avatar, stats}) {
 return (
    <div className="profile">
     <div className="description">
       <Avatar src={avatar} alt={username}/>
       <Text>{username}</Text>
       <Text>{tag}</Text>
       <Text>{location}</Text>
     </div>
     <Stats>
       <StatsList>
         <StatsItem>
           <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
         </StatsItem>
         <StatsItem>
           <span className="label">Views: </span>
           <span className="quantity">{stats.views}</span>
         </StatsItem>
         <StatsItem>
           <span className="label">Likes: </span>
           <span className="quantity">{stats.likes}</span>
         </StatsItem>
       </StatsList>
     </Stats>
   </div>
 );
}

Profile.propTypes = {
 avatar: PropTypes.string,
 name: PropTypes.string.isRequired,
 status: PropTypes.bool.isRequired,
 id: PropTypes.number.isRequired,
 tag: PropTypes.string.isRequired,
 location:PropTypes.string.isRequired,
     stats: PropTypes.exact({
   followers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
 }).isRequired,
};