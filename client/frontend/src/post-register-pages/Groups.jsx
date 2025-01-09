import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import RendevousDescBox from '../components/RendevousDescBox';
import { Typography } from '@mui/material';
import './Groups.css';

function Groups() {
  const [suggestedGroupsData, setSuggestedGroupsData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null); // State for the selected group
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joinedGroups, setJoinedGroups] = useState([]);


  useEffect(() => {
    async function fetchJoinedGroups() {
      try {
        // No loading spinner here if you prefer—this can share the same loading if you want
        const response = await axios.get('http://localhost:3001/event/joined', {
          withCredentials: true,
        });
        setJoinedGroups(response.data); // an array of events
      } catch (err) {
        console.error('Error fetching joined groups:', err);
      }
    }
    fetchJoinedGroups();
  }, []);

  // Fetch suggested groups
  useEffect(() => {
    async function fetchSuggestedGroups() {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get('http://localhost:3001/event/latest');
        setSuggestedGroupsData(response.data);
      } catch (err) {
        console.error('Error fetching suggested groups:', err);
        setError('Unable to fetch suggested groups.');
      } finally {
        setLoading(false);
      }
    }
    fetchSuggestedGroups();
  }, []);

  const handleGroupClick = (group) => {
    setSelectedGroup(group); // Set the selected group
  };

  const handleCloseDescBox = () => {
    setSelectedGroup(null); // Close the description box
  };

  if (loading) {
    return (
      <>
        <PostRegisterNav />
        <div className="home-container">
          <h2>Loading Suggested Groups...</h2>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PostRegisterNav />
        <div className="home-container">
          <h2>Error: {error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <PostRegisterNav />
      <div className="home-container">
        <div className="main-content">
        {joinedGroups.length > 0 && (
            <section className="joined-groups" style={{ marginBottom: '40px' }}>
              <Typography variant="h4">Your Joined Groups</Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: '16px' }}>
                {joinedGroups.map((group) => (
                  <SuggestedGroupCard
                    key={group._id}
                    name={group.name}
                    thumbnailLink={group.thumbnailLink}
                    location={group.location}
                    budget={group.budget}
                    personCount={group.personCount}
                    description={group.description}
                    timeFrame={group.timeFrame}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="suggested-groups">
            <Typography variant="h1" display="block">
              Groups Suggested For You
            </Typography>
            <Typography
              variant="body1"
              display="block"
              sx={{ mb: '22px', ml: '128px' }}
            >
              Curated from your destination &amp; plans
            </Typography>
            <div className="groups-grid">
              {suggestedGroupsData.map((group) => (
                <div
                  key={group._id}
                  onClick={() => handleGroupClick(group)}
                  style={{ cursor: 'pointer' }}
                >
                  <SuggestedGroupCard
                    name={group.name}
                    thumbnailLink={group.thumbnailLink}
                    location={group.location}
                    budget={group.budget}
                    personCount={group.personCount}
                    description={group.description}
                    timeFrame={group.timeFrame}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {selectedGroup && (
          <RendevousDescBox group={selectedGroup} onClose={handleCloseDescBox} />
        )}
      </div>
    </>
  );
}

export default Groups;