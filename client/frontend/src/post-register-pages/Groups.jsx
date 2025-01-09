import RendevousDescBox from '../components/RendevousDescBox'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import './Groups.css';

function Groups() {
  const [suggestedGroupsData, setSuggestedGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="home-container">
      <PostRegisterNav />

      <div className="main-content">
        <section className="group-section">
          <h2>Your Current Group</h2>
          <div className="row">
            <div className="notification-box">
              <h3>Most Recent Notification From Your Host:</h3>
              {/* Add logic for current group notifications */}
            </div>
            <div className="people-box">
              <h3>People in Your Group:</h3>
              {/* Add logic for current group people */}
            </div>
          </div>
        </section>

        <section className="suggested-groups">
          <h2>Groups Suggested For You</h2>
          <p className="subtitle">
            Curated from your destination &amp; plans
          </p>
          <div className="groups-grid">
            {suggestedGroupsData.map((group) => (
              <SuggestedGroupCard
                key={group._id}
                name={group.name}
                thumbnailLink={group.thumbnailLink}
                location={group.location}
                budget={group.budget}
                personCount={group.personCount}
                description={group.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Groups;
