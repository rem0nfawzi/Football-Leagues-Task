import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import flag from '../../assets/images/flag.svg';
import address from '../../assets/images/address.svg';
import phone from '../../assets/images/phone.svg';
import website from '../../assets/images/website.svg';
import email from '../../assets/images/email.svg';
import defaultLogo from '../../assets/images/championship.svg';
import '../../assets/css/team.css';
import Squad from './Squad';
import Matches from './Matches';
import Loader from '../common/Loader';
import ErrMsg from '../common/ErrMsg';
import { token } from '../../store/constants';

const TeamDetails = ({
  match: {
    params: { id }
  }
}) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Get team details and assign them to state
    axios
      .get(`https://api.football-data.org/v2/teams/${id}`, {
        headers: { 'X-Auth-Token': token }
      })
      .then(res => {
        setTeam(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // While loading
  if (loading) return <Loader />;

  return (
    <section>
      <div className='container'>
        {!loading && !team.name ? (
          <ErrMsg msg="Can't show team data, Please try again." />
        ) : (
          <Fragment>
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
                {team.area && (
                  <div className='wrapper'>
                    <img src={flag} alt='country' />
                    <p>{team.area.name}</p>
                  </div>
                )}

                {/* Website */}
                {team.website && (
                  <div className='wrapper'>
                    <img src={website} alt='country' />
                    <p>{team.website}</p>
                  </div>
                )}

                {/* Phone */}
                {team.phone && (
                  <div className='wrapper'>
                    <img src={phone} alt='phone' />
                    <p>{team.phone}</p>
                  </div>
                )}

                {/* Email */}
                {team.email && (
                  <div className='wrapper'>
                    <img src={email} alt='email' />
                    <p>{team.email}</p>
                  </div>
                )}

                {/* Address */}
                {team.address && (
                  <div className='wrapper long'>
                    <img src={address} alt='address' />
                    <p>{team.address}</p>
                  </div>
                )}
              </div>
            </div>
            <Squad squad={team.squad ? team.squad : null} />
            <Matches teamId={team.id} />
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default TeamDetails;
