import React, { useEffect, useState } from 'react';
import axios from 'axios';
import flag from '../../assets/images/flag.svg';
import address from '../../assets/images/address.svg';
import phone from '../../assets/images/phone.svg';
import website from '../../assets/images/website.svg';
import email from '../../assets/images/email.svg';
import defaultLogo from '../../assets/images/championship.svg';
import '../../assets/css/team.css';
import Squad from './Squad';

const TeamDetails = ({
  match: {
    params: { id }
  }
}) => {
  const [team, setTeam] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/teams/${id}`, {
        headers: { 'X-Auth-Token': '5b42f8f8f9f247439bda03879156cdcb' }
      })
      .then(res => {
        setTeam(res.data);
      });
  }, [id]);
  return (
    <section>
      <div className='container'>
        <div className='team-info'>
          <div className='title'>
            <img
              className='logo'
              src={team.crestUrl ? team.crestUrl : defaultLogo}
              alt='logo'
            />
            <h3>{team.name && team.name}</h3>
          </div>
          <div className='contact'>
            {/* Country */}
            <div className='wrapper'>
              <img src={flag} alt='country' />
              <p>{team.area && team.area.name}</p>
            </div>

            {/* Website */}
            <div className='wrapper'>
              <img src={website} alt='country' />
              <p>{team.website && team.website}</p>
            </div>

            {/* Phone */}
            <div className='wrapper'>
              <img src={phone} alt='phone' />
              <p>{team.phone && team.phone}</p>
            </div>

            {/* Email */}
            <div className='wrapper'>
              <img src={email} alt='email' />
              <p>{team.email && team.email}</p>
            </div>

            {/* Address */}
            <div className='wrapper long'>
              <img src={address} alt='address' />
              <p>{team.address && team.address}</p>
            </div>
          </div>
        </div>
        <Squad squad={team.squad ? team.squad : null} />
      </div>
    </section>
  );
};

export default TeamDetails;
