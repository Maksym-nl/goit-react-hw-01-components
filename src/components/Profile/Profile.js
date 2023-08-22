
import PropTypes from "prop-types";
import { Avatar, Text, Quantity, StatsList, StatsItem } from "./Profile.styled";
export function Profile ({ username, tag, location, avatar, stats}) {
 return (
    <div>
     <div className="description">
       <Avatar src={avatar} alt={username}/>
       <Text color="red">{username}</Text>
       <Text>{'@' + tag}</Text>
       <Text color="green">{location}</Text>
     </div>
     <div>
       <StatsList>
         <StatsItem>
           <span className="label">Followers: </span>
          <Quantity>{stats.followers}</Quantity>
         </StatsItem>
         <StatsItem>
           <span className="label">Views: </span>
           <Quantity>{stats.views}</Quantity>
         </StatsItem>
         <StatsItem>
           <span className="label">Likes: </span>
           <Quantity>{stats.likes}</Quantity>
         </StatsItem>
       </StatsList>
     </div>
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