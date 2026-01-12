import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';

const MyGolf = () => {
  const [segment, setSegment] = React.useState('stats');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Golf</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">JD</div>
          <div className="profile-name">James Davidson</div>
          <p style={{ opacity: 0.8, fontSize: '14px' }}>Member since 2024</p>
          <div className="profile-membership">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Founding Member
          </div>
        </div>

        {/* Handicap Card */}
        <div className="fairway-card" style={{ marginTop: '-20px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--fairway-gray-500)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                GHIN Handicap Index
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '700', color: 'var(--fairway-green)' }}>
                  12.4
                </span>
                <span style={{ fontSize: '14px', color: 'var(--fairway-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  -0.8
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>Last updated Jan 10, 2026</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)', marginBottom: '4px' }}>Low Index</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '600', color: 'var(--fairway-gray-700)' }}>10.2</div>
            </div>
          </div>
        </div>

        {/* Segment Control */}
        <div style={{ padding: '0 16px', marginTop: '8px' }}>
          <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value)}>
            <IonSegmentButton value="stats">
              <IonLabel>Stats</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="equipment">
              <IonLabel>Equipment</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="membership">
              <IonLabel>Membership</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {segment === 'stats' && (
          <>
            {/* Season Stats */}
            <div className="section-header">
              <h3 className="section-title">2026 Season</h3>
            </div>
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-value">23</div>
                <div className="stat-label">Rounds</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">89.2</div>
                <div className="stat-label">Avg Score</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">84</div>
                <div className="stat-label">Best</div>
              </div>
            </div>

            <div className="stat-grid" style={{ marginTop: '12px' }}>
              <div className="stat-item">
                <div className="stat-value" style={{ fontSize: '22px' }}>42%</div>
                <div className="stat-label">FIR</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" style={{ fontSize: '22px' }}>38%</div>
                <div className="stat-label">GIR</div>
              </div>
              <div className="stat-item">
                <div className="stat-value" style={{ fontSize: '22px' }}>1.9</div>
                <div className="stat-label">Putts/GIR</div>
              </div>
            </div>

            {/* Recent Rounds */}
            <div className="section-header">
              <h3 className="section-title">Recent Rounds</h3>
              <a href="#" className="section-link">All Rounds</a>
            </div>

            {[
              { course: 'Torrey Pines South', date: 'Jan 8', score: 87, diff: '+15' },
              { course: 'Coronado Municipal', date: 'Jan 3', score: 84, diff: '+12' },
              { course: 'Torrey Pines North', date: 'Dec 28', score: 91, diff: '+19' },
            ].map((round, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-icon" style={{ background: 'var(--fairway-green)', color: 'var(--fairway-white)', fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700' }}>
                  {round.score}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{round.course}</div>
                  <div className="list-item-subtitle">{round.date}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--fairway-gray-500)' }}>{round.diff}</div>
              </div>
            ))}
          </>
        )}

        {segment === 'equipment' && (
          <>
            <div className="section-header">
              <h3 className="section-title">My Bag</h3>
              <a href="#" className="section-link">Edit</a>
            </div>

            {[
              { type: 'Driver', name: 'TaylorMade Qi10 Max', specs: '10.5, Stiff, 45"' },
              { type: '3 Wood', name: 'Titleist TSR2', specs: '15, Stiff' },
              { type: 'Irons', name: 'Titleist T200 (5-PW)', specs: 'Steel, Regular' },
              { type: 'Wedges', name: 'Vokey SM9', specs: '52, 56, 60' },
              { type: 'Putter', name: 'Scotty Cameron Phantom X', specs: '34"' },
              { type: 'Ball', name: 'Titleist Pro V1', specs: '' },
            ].map((item, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{item.name}</div>
                  <div className="list-item-subtitle">{item.type} {item.specs && `- ${item.specs}`}</div>
                </div>
              </div>
            ))}

            <div className="section-header" style={{ marginTop: '8px' }}>
              <h3 className="section-title">Shop Equipment</h3>
            </div>
            <div className="fairway-card" style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--fairway-gray-500)', marginBottom: '16px' }}>
                Browse curated equipment from our pro shop partners with member-exclusive pricing.
              </p>
              <button className="btn-primary">Visit Pro Shop</button>
            </div>
          </>
        )}

        {segment === 'membership' && (
          <>
            <div className="section-header">
              <h3 className="section-title">Membership Details</h3>
            </div>

            <div className="fairway-card fairway-card-gold">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--fairway-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--fairway-green)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '600' }}>Founding Member</div>
                  <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>Lifetime access - #FM00147</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--fairway-gray-500)', textTransform: 'uppercase' }}>Member Since</div>
                  <div style={{ fontWeight: '600' }}>Jan 15, 2024</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--fairway-gray-500)', textTransform: 'uppercase' }}>Status</div>
                  <div style={{ fontWeight: '600', color: 'var(--fairway-success)' }}>Active</div>
                </div>
              </div>
            </div>

            <div className="section-header">
              <h3 className="section-title">Benefits</h3>
            </div>

            {[
              { icon: '✓', title: 'Priority Tee Times', desc: 'Book 14 days in advance' },
              { icon: '✓', title: 'Exclusive Events', desc: 'Access to member-only tournaments' },
              { icon: '✓', title: 'Partner Course Access', desc: '200+ courses nationwide' },
              { icon: '✓', title: 'Pro Shop Discounts', desc: '15% off all equipment' },
              { icon: '✓', title: 'Free Range Sessions', desc: '5 sessions per month included' },
              { icon: '✓', title: 'Coaching Credits', desc: '$200/month coaching credit' },
            ].map((benefit, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-icon" style={{ background: 'rgba(52, 168, 83, 0.1)', color: 'var(--fairway-success)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{benefit.title}</div>
                  <div className="list-item-subtitle">{benefit.desc}</div>
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

export default MyGolf;
