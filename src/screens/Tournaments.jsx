import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

const Tournaments = () => {
  const [segment, setSegment] = React.useState('upcoming');

  const upcomingTournaments = [
    {
      name: 'Founders Cup Championship',
      type: 'Invite Only',
      date: 'Mar 15-16',
      course: 'Spanish Bay',
      format: '36-hole Stroke Play',
      spots: 8,
      total: 32,
      prize: '$5,000',
      premium: true
    },
    {
      name: 'Monthly Medal - January',
      type: 'Open',
      date: 'Jan 25',
      course: 'Torrey Pines South',
      format: '18-hole Stroke Play',
      spots: 24,
      total: 60,
      prize: 'Pro Shop Credit'
    },
    {
      name: 'Winter Match Play',
      type: 'Member',
      date: 'Feb 1-28',
      course: 'Various',
      format: 'Match Play Bracket',
      spots: 16,
      total: 32,
      prize: '$2,500'
    },
    {
      name: 'Networking Scramble',
      type: 'Open',
      date: 'Feb 8',
      course: 'Coronado Golf Course',
      format: '4-Person Scramble',
      spots: 40,
      total: 72,
      prize: 'Prizes + Networking'
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Michael Chen', score: -4, thru: 'F', today: -2 },
    { rank: 2, name: 'James Davidson', score: -2, thru: 'F', today: -1, isUser: true },
    { rank: 3, name: 'Sarah Williams', score: -1, thru: 'F', today: +1 },
    { rank: 4, name: 'David Park', score: 'E', thru: 'F', today: 'E' },
    { rank: 5, name: 'Emily Rodriguez', score: +1, thru: 'F', today: -1 },
    { rank: 6, name: 'Tom Anderson', score: +2, thru: 'F', today: +2 },
    { rank: 7, name: 'Lisa Martinez', score: +3, thru: 'F', today: +1 },
    { rank: 8, name: 'Robert Kim', score: +4, thru: 'F', today: +2 },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tournaments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Segment Control */}
        <div style={{ padding: '16px 16px 0' }}>
          <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value)}>
            <IonSegmentButton value="upcoming">
              <IonLabel>Upcoming</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="live">
              <IonLabel>Live</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="results">
              <IonLabel>Results</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {segment === 'upcoming' && (
          <>
            {/* Featured Tournament */}
            <div className="tournament-card" style={{ margin: '16px' }}>
              <div className="tournament-card-banner" style={{ height: '120px', background: 'linear-gradient(135deg, #0f2d1a 0%, #1a472a 100%)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="badge badge-gold">Featured Event</span>
                  <span style={{ fontSize: '12px', opacity: 0.8 }}>Invite Only</span>
                </div>
                <div>
                  <div className="tournament-card-name" style={{ fontSize: '22px' }}>Founders Cup Championship</div>
                </div>
              </div>
              <div className="tournament-card-content">
                <div className="tournament-card-meta">
                  <div className="tournament-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                    </svg>
                    Mar 15-16, 2026
                  </div>
                  <div className="tournament-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Spanish Bay
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--fairway-gray-500)', margin: '12px 0' }}>
                  36-hole stroke play championship exclusive to founding members. Compete for $5,000 in prizes and the prestigious Founders Cup trophy.
                </p>
                <div className="tournament-card-footer">
                  <div className="tournament-spots">
                    <strong>8</strong> of 32 spots left
                  </div>
                  <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Other Tournaments */}
            <div className="section-header">
              <h3 className="section-title">All Tournaments</h3>
            </div>

            {upcomingTournaments.slice(1).map((tournament, i) => (
              <div key={i} className="tournament-card">
                <div className="tournament-card-banner">
                  <div className="tournament-card-type">{tournament.type}</div>
                  <div className="tournament-card-name">{tournament.name}</div>
                </div>
                <div className="tournament-card-content">
                  <div className="tournament-card-meta">
                    <div className="tournament-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                      </svg>
                      {tournament.date}
                    </div>
                    <div className="tournament-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                        <line x1="4" y1="22" x2="4" y2="15"/>
                      </svg>
                      {tournament.course}
                    </div>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)', margin: '8px 0' }}>
                    {tournament.format} - Prize: {tournament.prize}
                  </div>
                  <div className="tournament-card-footer">
                    <div className="tournament-spots">
                      <strong>{tournament.spots}</strong> of {tournament.total} spots left
                    </div>
                    <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', border: '2px solid var(--fairway-green)', background: 'transparent', color: 'var(--fairway-green)', fontWeight: '600' }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {segment === 'live' && (
          <>
            {/* Live Tournament */}
            <div className="fairway-card fairway-card-premium" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <span className="badge" style={{ background: 'rgba(234, 67, 53, 0.2)', color: '#ea4335', marginBottom: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ea4335', animation: 'pulse 1.5s infinite' }}></span>
                    LIVE
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '600', margin: '4px 0' }}>
                    January Monthly Medal
                  </h3>
                  <p style={{ fontSize: '13px', opacity: 0.8 }}>Torrey Pines South - Round 1</p>
                </div>
              </div>
              <style>{`
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.5; }
                }
              `}</style>
            </div>

            {/* Leaderboard */}
            <div className="section-header">
              <h3 className="section-title">Leaderboard</h3>
              <span style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>36 players</span>
            </div>

            <div className="fairway-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 60px 50px 50px', padding: '12px 16px', background: 'var(--fairway-gray-100)', fontSize: '11px', fontWeight: '600', color: 'var(--fairway-gray-500)', textTransform: 'uppercase' }}>
                <div>Pos</div>
                <div>Player</div>
                <div style={{ textAlign: 'center' }}>Score</div>
                <div style={{ textAlign: 'center' }}>Thru</div>
                <div style={{ textAlign: 'center' }}>Today</div>
              </div>

              {leaderboard.map((player, i) => (
                <div
                  key={i}
                  className="leaderboard-item"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr 60px 50px 50px',
                    alignItems: 'center',
                    padding: '14px 16px',
                    background: player.isUser ? 'rgba(201, 169, 98, 0.1)' : 'var(--fairway-white)',
                    borderBottom: i < leaderboard.length - 1 ? '1px solid var(--fairway-gray-200)' : 'none'
                  }}
                >
                  <div className={`leaderboard-rank ${player.rank === 1 ? 'gold' : player.rank === 2 ? 'silver' : player.rank === 3 ? 'bronze' : ''}`} style={{ width: '28px', height: '28px', fontSize: '13px' }}>
                    {player.rank}
                  </div>
                  <div>
                    <div className="leaderboard-name" style={{ fontWeight: player.isUser ? '700' : '500' }}>
                      {player.name}
                      {player.isUser && <span style={{ color: 'var(--fairway-gold)', marginLeft: '6px' }}>★</span>}
                    </div>
                  </div>
                  <div className="leaderboard-score" style={{ textAlign: 'center', fontSize: '16px' }}>
                    {typeof player.score === 'number' ? (player.score > 0 ? `+${player.score}` : player.score) : player.score}
                  </div>
                  <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--fairway-gray-500)' }}>{player.thru}</div>
                  <div style={{ textAlign: 'center', fontSize: '13px', color: typeof player.today === 'number' && player.today < 0 ? 'var(--fairway-success)' : typeof player.today === 'number' && player.today > 0 ? 'var(--fairway-error)' : 'var(--fairway-gray-500)' }}>
                    {typeof player.today === 'number' ? (player.today > 0 ? `+${player.today}` : player.today) : player.today}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', padding: '16px' }}>
              <a href="#" style={{ color: 'var(--fairway-green)', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>View Full Leaderboard</a>
            </div>
          </>
        )}

        {segment === 'results' && (
          <>
            <div className="section-header">
              <h3 className="section-title">Your Results</h3>
            </div>

            {/* Stats Summary */}
            <div className="stat-grid" style={{ marginBottom: '16px' }}>
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Events</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">2</div>
                <div className="stat-label">Wins</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5</div>
                <div className="stat-label">Top 10s</div>
              </div>
            </div>

            {/* Past Results */}
            {[
              { name: 'Winter Classic', date: 'Dec 15, 2025', place: '2nd', score: '+3 (75)' },
              { name: 'Turkey Trot Scramble', date: 'Nov 28, 2025', place: '1st', score: '-12 (Team)' },
              { name: 'Fall Medal', date: 'Nov 10, 2025', place: '8th', score: '+7 (79)' },
              { name: 'Halloween Shootout', date: 'Oct 31, 2025', place: '3rd', score: '+2 (74)' },
              { name: 'October Monthly Medal', date: 'Oct 20, 2025', place: '1st', score: '-1 (71)' },
            ].map((result, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-icon" style={{
                  background: result.place === '1st' ? 'var(--fairway-gold)' : result.place === '2nd' ? '#c0c0c0' : result.place === '3rd' ? '#cd7f32' : 'var(--fairway-gray-100)',
                  color: result.place.includes('st') || result.place.includes('nd') || result.place.includes('rd') ? 'var(--fairway-white)' : 'var(--fairway-gray-700)',
                  fontWeight: '700',
                  fontSize: '14px'
                }}>
                  {result.place}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{result.name}</div>
                  <div className="list-item-subtitle">{result.date}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '600', color: 'var(--fairway-green)' }}>
                  {result.score}
                </div>
              </div>
            ))}
          </>
        )}

        <div style={{ height: '24px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Tournaments;
