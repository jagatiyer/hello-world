import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from '@ionic/react';

const Looking = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const golfers = [
    {
      name: 'Sarah Chen',
      initials: 'SC',
      bio: 'Tech executive who picked up golf 3 years ago. Looking for weekend morning rounds and friendly competition.',
      handicap: 18.2,
      rounds: 45,
      memberSince: '2024',
      tags: ['Weekends', 'Morning Rounds', 'Walking', 'Beginner Friendly'],
      location: 'La Jolla, CA',
      preferredCourses: ['Torrey Pines', 'Coronado', 'Balboa Park']
    },
    {
      name: 'Michael Park',
      initials: 'MP',
      bio: 'Retired physician, golf addict. Happy to mentor newer players. Prefer walking rounds.',
      handicap: 8.4,
      rounds: 120,
      memberSince: '2024',
      tags: ['Weekdays', 'Walking', 'Mentor', 'Serious Player'],
      location: 'Del Mar, CA',
      preferredCourses: ['Aviara', 'Maderas', 'Grand Del Mar']
    },
    {
      name: 'Emily Rodriguez',
      initials: 'ER',
      bio: 'Finance professional who loves links-style courses. Looking for other women golfers and mixed groups.',
      handicap: 14.6,
      rounds: 32,
      memberSince: '2025',
      tags: ['Evenings', 'Weekends', 'Women Golfers', 'Networking'],
      location: 'Downtown SD',
      preferredCourses: ['Torrey Pines', 'Coronado', 'Salt Creek']
    },
    {
      name: 'David Kim',
      initials: 'DK',
      bio: 'Startup founder. Use golf for networking and clearing my head. Flexible schedule.',
      handicap: 22.1,
      rounds: 18,
      memberSince: '2025',
      tags: ['Flexible', 'Networking', 'Beginner', 'Tech'],
      location: 'UTC, CA',
      preferredCourses: ['Coronado', 'Balboa Park', 'Mission Bay']
    },
  ];

  const currentGolfer = golfers[currentIndex];

  const handlePass = () => {
    setCurrentIndex((prev) => (prev + 1) % golfers.length);
  };

  const handleConnect = () => {
    // In a real app, this would send a connection request
    alert(`Connection request sent to ${currentGolfer.name}!`);
    setCurrentIndex((prev) => (prev + 1) % golfers.length);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Looking</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Intro Card */}
        <div className="fairway-card" style={{ marginTop: '16px', background: 'linear-gradient(135deg, var(--fairway-green) 0%, var(--fairway-green-light) 100%)', color: 'var(--fairway-white)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--fairway-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--fairway-green)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '16px' }}>Find Your Golf Partners</div>
              <div style={{ fontSize: '13px', opacity: 0.9 }}>Connect with members who match your style</div>
            </div>
          </div>
        </div>

        {/* Golfer Card */}
        <div className="golfer-card">
          <div className="golfer-card-header">
            <div className="golfer-card-avatar">
              {currentGolfer.initials}
            </div>
            <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                {currentGolfer.location}
              </span>
            </div>
          </div>

          <div className="golfer-card-content">
            <div className="golfer-card-name">{currentGolfer.name}</div>
            <div className="golfer-card-bio">{currentGolfer.bio}</div>

            <div className="golfer-card-stats">
              <div className="golfer-stat">
                <div className="golfer-stat-value">{currentGolfer.handicap}</div>
                <div className="golfer-stat-label">Handicap</div>
              </div>
              <div className="golfer-stat">
                <div className="golfer-stat-value">{currentGolfer.rounds}</div>
                <div className="golfer-stat-label">Rounds</div>
              </div>
              <div className="golfer-stat">
                <div className="golfer-stat-value">{currentGolfer.memberSince}</div>
                <div className="golfer-stat-label">Member</div>
              </div>
            </div>

            <div className="golfer-card-tags">
              {currentGolfer.tags.map((tag, i) => (
                <span key={i} className="golfer-tag">{tag}</span>
              ))}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)', marginBottom: '6px' }}>Preferred Courses</div>
              <div style={{ fontSize: '14px', color: 'var(--fairway-gray-700)' }}>
                {currentGolfer.preferredCourses.join(' - ')}
              </div>
            </div>

            <div className="golfer-card-actions">
              <button className="golfer-action-btn pass" onClick={handlePass}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <button className="golfer-action-btn connect" onClick={handleConnect}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <button className="golfer-action-btn super" onClick={handleConnect}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Your Connections */}
        <div className="section-header">
          <h3 className="section-title">Your Connections</h3>
          <a href="#" className="section-link">View All (12)</a>
        </div>

        <div className="horizontal-scroll" style={{ paddingBottom: '8px' }}>
          {[
            { name: 'Tom A.', initials: 'TA', status: 'online' },
            { name: 'Lisa M.', initials: 'LM', status: 'offline' },
            { name: 'Robert K.', initials: 'RK', status: 'online' },
            { name: 'Jennifer W.', initials: 'JW', status: 'offline' },
            { name: 'Chris P.', initials: 'CP', status: 'online' },
          ].map((connection, i) => (
            <div key={i} style={{ textAlign: 'center', minWidth: '70px' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--fairway-green)',
                  color: 'var(--fairway-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                  {connection.initials}
                </div>
                {connection.status === 'online' && (
                  <div style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--fairway-success)',
                    border: '2px solid var(--fairway-white)'
                  }}></div>
                )}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--fairway-gray-700)', marginTop: '6px' }}>{connection.name}</div>
            </div>
          ))}
        </div>

        {/* Pending Requests */}
        <div className="section-header">
          <h3 className="section-title">Pending Requests</h3>
          <span className="badge" style={{ background: 'var(--fairway-green)', color: 'white' }}>3</span>
        </div>

        {[
          { name: 'Alex Thompson', handicap: 15.2, message: 'Would love to play Torrey sometime!' },
          { name: 'Maria Santos', handicap: 20.8, message: 'Fellow tech golfer here!' },
        ].map((request, i) => (
          <div key={i} className="list-item">
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--fairway-gold)',
              color: 'var(--fairway-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600'
            }}>
              {request.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="list-item-content">
              <div className="list-item-title">{request.name}</div>
              <div className="list-item-subtitle">{request.handicap} HCP - "{request.message}"</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'var(--fairway-gray-100)',
                color: 'var(--fairway-gray-500)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <button style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'var(--fairway-green)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Looking For Game */}
        <div className="section-header">
          <h3 className="section-title">Looking For Game</h3>
          <a href="#" className="section-link">Post</a>
        </div>

        <div className="fairway-card">
          <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--fairway-green)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600'
            }}>TA</div>
            <div>
              <div style={{ fontWeight: '600' }}>Tom Anderson</div>
              <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)' }}>Posted 2 hours ago</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--fairway-gray-700)', marginBottom: '12px' }}>
            Looking for 1-2 players for Torrey South tomorrow morning (7:30 AM). Walking preferred. All skill levels welcome!
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className="badge" style={{ background: 'var(--fairway-gray-100)' }}>Tomorrow</span>
            <span className="badge" style={{ background: 'var(--fairway-gray-100)' }}>Torrey South</span>
            <span className="badge" style={{ background: 'var(--fairway-gray-100)' }}>2 spots</span>
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>Join This Round</button>
        </div>

        <div style={{ height: '24px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Looking;
