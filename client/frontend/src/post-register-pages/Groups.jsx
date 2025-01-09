import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import RendevousDescBox from '../components/RendevousDescBox';
import './Groups.css';

function Groups() {
  const [suggestedGroupsData, setSuggestedGroupsData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null); // State for the selected group
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
        <section className="suggested-groups">
          <h2 className="section-title">Groups Suggested For You</h2>
          <p className="subtitle">Curated from your destination &amp; plans</p>
          <div className="groups-grid">
            {suggestedGroupsData.map((group) => (
              <div
                key={group._id}
                onClick={() => handleGroupClick(group)} // Show description box on click
                style={{ cursor: 'pointer' }}
              >
                <SuggestedGroupCard
                  name={group.name}
                  thumbnailLink={group.thumbnailLink}
                  location={group.location}
                  budget={group.budget}
                  personCount={group.personCount}
                  description={group.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Render the RendevousDescBox if a group is selected */}
      {selectedGroup && (
        <RendevousDescBox
          group={selectedGroup}
          onClose={handleCloseDescBox} // Pass the close function
        />
      )}
    </div>
    </>
  );
}

export default Groups;
