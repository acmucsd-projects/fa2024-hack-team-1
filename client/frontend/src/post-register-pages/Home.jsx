import React from 'react';
import PostRegisterNav from '../components/Post-RegisterNav';
import SuggestedGroupCard from '../components/SuggestedGroupCard';
import './Home.css';

function Home() {
  const [suggestedGroupsData, setSuggestedGroupsData] = useState([]);

  useEffect(() => {
    async function fetchSuggestedGroups() {
      try {
        const response = await axios.get('http://localhost:3001/event/test', { // Implement backend data group
        });
        setSuggestedGroupsData(response.data);
      } catch (error) {
        console.error('Error fetching suggested groups:', error);
      }
    }

    fetchSuggestedGroups();
  }, []);

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