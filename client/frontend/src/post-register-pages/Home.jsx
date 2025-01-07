import React from 'react';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import './Home.css';

function Home() {
  // mock data for example
  const suggestedGroupsData = [
    {
      id: 1,
      title: 'Title 1',
      hostInfo: 'Host (0/0)',
      location: 'Location 1',
      pricePerPerson: '$100 / Person',
      nights: '2 nights',
    },
    {
      id: 2,
      title: 'Title 2',
      hostInfo: 'Host (1/3)',
      location: 'Location 2',
      pricePerPerson: '$150 / Person',
      nights: '3 nights',
    },
    {
      id: 3,
      title: 'Title 3',
      hostInfo: 'Host (2/4)',
      location: 'Location 3',
      pricePerPerson: '$80 / Person',
      nights: '1 night',
    }, 
    // etc.
  ];

  return (
    <div className="home-container">
      <PostRegisterNav />

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
                key={group.id}
                title={group.title}
                hostInfo={group.hostInfo}
                location={group.location}
                pricePerPerson={group.pricePerPerson}
                nights={group.nights}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;