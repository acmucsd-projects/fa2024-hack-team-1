import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import RendevousDescBox from '../components/RendevousDescBox'


function Groups() {
  const [suggestedGroupsData, setSuggestedGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState(null);           

  useEffect(() => {
    async function fetchSuggestedGroups() {
      try {
        // Start loading
        setLoading(true);
        setError(null);

        // Make the request
        const response = await axios.get('http://localhost:3001/event/test');
        
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

  // Still loading
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

  // If there was an error, show an error message
  if (error) {
    return (
      <>
        <RendevousDescBox />
        <PostRegisterNav />
        <div className="home-container">
          <h2>Error: {error}</h2>
        </div>
      </>
    );
  }

  return (
    
    <div className="home-container">
      <PostRegisterNav />

      <RendevousDescBox />

      <div className="main-content">
        {/* Current Group */}
        <section className="group-section">
          <h2>Your Current Group</h2>
          <div className="row">
            <div className="notification-box">
              <h3>Most Recent Notification From Your Host:</h3>
              {/* connect notifications content here */}
            </div>
            <div className="people-box">
              <h3>People in Your Group:</h3>
              {/* Pull from data */}
            </div>
          </div>
        </section>

        {/* Suggested Groups */}
        <section className="suggested-groups">
          <h2>Groups Suggested For You</h2>
          <p className="subtitle">
            Curated from your destination &amp; plans
          </p>
          <div className="groups-grid">
            {suggestedGroupsData.map(group => (
              <SuggestedGroupCard
                key={group._id}
                // title={group.title}
                // hostInfo={group.hostInfo}
                location={group.location}
                pricePerPerson={group.budget}
                nights={group.personCount}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Groups;