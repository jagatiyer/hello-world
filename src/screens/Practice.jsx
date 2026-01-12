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

const Practice = () => {
  const [segment, setSegment] = React.useState('range');
  const [selectedTime, setSelectedTime] = React.useState('10:00');
  const [selectedBay, setSelectedBay] = React.useState('standard');

  const timeSlots = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00'];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Practice</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Segment Control */}
        <div style={{ padding: '16px 16px 0' }}>
          <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value)}>
            <IonSegmentButton value="range">
              <IonLabel>Range</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="coaching">
              <IonLabel>Coaching</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="drills">
              <IonLabel>Drills</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {segment === 'range' && (
          <>
            {/* Location Card */}
            <div className="fairway-card" style={{ marginTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--fairway-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fairway-gold)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '16px' }}>FAIRWAY Range - Del Mar</div>
                  <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>2.3 miles away - Open until 9 PM</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fairway-gray-400)" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </div>

            {/* Date Selection */}
            <div className="section-header">
              <h3 className="section-title">Select Date</h3>
            </div>
            <div className="horizontal-scroll">
              {['Today', 'Tomorrow', 'Wed 15', 'Thu 16', 'Fri 17', 'Sat 18', 'Sun 19'].map((day, i) => (
                <div key={i} style={{
                  minWidth: '70px',
                  padding: '12px 16px',
                  background: i === 0 ? 'var(--fairway-green)' : 'var(--fairway-white)',
                  color: i === 0 ? 'var(--fairway-white)' : 'var(--fairway-gray-700)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '14px',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer'
                }}>
                  {day}
                </div>
              ))}
            </div>

            {/* Bay Type */}
            <div className="section-header">
              <h3 className="section-title">Bay Type</h3>
            </div>

            <div className={`range-option ${selectedBay === 'standard' ? 'selected' : ''}`} onClick={() => setSelectedBay('standard')}>
              <div className="range-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="range-content">
                <div className="range-title">Standard Bay</div>
                <div className="range-subtitle">Open-air bay with 100 balls</div>
              </div>
              <div className="range-price">$25</div>
            </div>

            <div className={`range-option ${selectedBay === 'trackman' ? 'selected' : ''}`} onClick={() => setSelectedBay('trackman')}>
              <div className="range-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div className="range-content">
                <div className="range-title">TrackMan Bay</div>
                <div className="range-subtitle">Full shot data & analytics</div>
              </div>
              <div className="range-price">$45</div>
            </div>

            <div className={`range-option ${selectedBay === 'simulator' ? 'selected' : ''}`} onClick={() => setSelectedBay('simulator')}>
              <div className="range-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <div className="range-content">
                <div className="range-title">Full Simulator</div>
                <div className="range-subtitle">Play any course virtually</div>
              </div>
              <div className="range-price">$75</div>
            </div>

            {/* Time Slots */}
            <div className="section-header">
              <h3 className="section-title">Available Times</h3>
            </div>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  <div className="time-slot-time">{time}</div>
                  <div className="time-slot-price">AM</div>
                </div>
              ))}
            </div>

            {/* Book Button */}
            <div style={{ padding: '24px 16px' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>
                Book Range Session - ${selectedBay === 'standard' ? '25' : selectedBay === 'trackman' ? '45' : '75'}
              </button>
              <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--fairway-gray-500)', marginTop: '8px' }}>
                Free for members (3 of 5 sessions remaining this month)
              </p>
            </div>
          </>
        )}

        {segment === 'coaching' && (
          <>
            <div className="section-header">
              <h3 className="section-title">Your Coach</h3>
            </div>

            <div className="fairway-card fairway-card-gold">
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--fairway-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fairway-gold)', fontSize: '28px', fontWeight: '700' }}>
                  MT
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '600' }}>Mike Thompson</div>
                  <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)', marginBottom: '8px' }}>PGA Certified - 15 years experience</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="badge badge-success">Full Swing</span>
                    <span className="badge badge-success">Short Game</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--fairway-gray-200)', display: 'flex', gap: '12px' }}>
                <button className="btn-primary" style={{ flex: 1 }}>Book Lesson</button>
                <button className="btn-outline" style={{ flex: 1, padding: '14px 24px', borderRadius: 'var(--radius-md)', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Message</button>
              </div>
            </div>

            <div className="section-header">
              <h3 className="section-title">Browse Coaches</h3>
              <a href="#" className="section-link">View All</a>
            </div>

            {[
              { name: 'Sarah Chen', specialty: 'Putting & Mental Game', rating: '4.9', price: '$150/hr' },
              { name: 'David Park', specialty: 'Course Management', rating: '4.8', price: '$120/hr' },
              { name: 'Lisa Martinez', specialty: 'Beginners & Women', rating: '5.0', price: '$100/hr' },
            ].map((coach, i) => (
              <div className="list-item" key={i}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--fairway-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fairway-white)', fontWeight: '600' }}>
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{coach.name}</div>
                  <div className="list-item-subtitle">{coach.specialty}</div>
                  <div style={{ fontSize: '12px', color: 'var(--fairway-gold)', marginTop: '2px' }}>
                    ★ {coach.rating}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '600', color: 'var(--fairway-green)' }}>{coach.price}</div>
                </div>
              </div>
            ))}

            <div className="section-header">
              <h3 className="section-title">Upcoming Lessons</h3>
            </div>

            <div className="list-item">
              <div className="list-item-icon" style={{ background: 'var(--fairway-gold)', color: 'var(--fairway-green)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="list-item-content">
                <div className="list-item-title">Full Swing Analysis</div>
                <div className="list-item-subtitle">Sat, Jan 18 - 2:00 PM with Mike T.</div>
              </div>
              <div className="list-item-badge" style={{ background: 'var(--fairway-gold)', color: 'var(--fairway-gray-900)' }}>Booked</div>
            </div>
          </>
        )}

        {segment === 'drills' && (
          <>
            <div className="section-header">
              <h3 className="section-title">Recommended Drills</h3>
              <span style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>Based on your stats</span>
            </div>

            <div className="fairway-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="badge badge-gold">Focus Area</span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                Improve Your GIR %
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--fairway-gray-500)', marginBottom: '16px' }}>
                Your GIR is at 38%. These drills will help you hit more greens and lower your scores.
              </p>
              <button className="btn-primary" style={{ width: '100%' }}>Start Practice Plan</button>
            </div>

            {[
              { name: '9-to-3 Tempo Drill', category: 'Iron Play', duration: '15 min', difficulty: 'Beginner' },
              { name: 'Gate Drill', category: 'Putting', duration: '10 min', difficulty: 'Intermediate' },
              { name: 'Stock Shot Practice', category: 'Full Swing', duration: '20 min', difficulty: 'All Levels' },
              { name: 'Ladder Chipping', category: 'Short Game', duration: '15 min', difficulty: 'Beginner' },
              { name: 'Pressure Putting', category: 'Putting', duration: '10 min', difficulty: 'Advanced' },
            ].map((drill, i) => (
              <div className="list-item" key={i}>
                <div className="list-item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10,8 16,12 10,16 10,8" fill="currentColor"/>
                  </svg>
                </div>
                <div className="list-item-content">
                  <div className="list-item-title">{drill.name}</div>
                  <div className="list-item-subtitle">{drill.category} - {drill.duration}</div>
                </div>
                <span className="badge" style={{ background: 'var(--fairway-gray-100)', color: 'var(--fairway-gray-700)' }}>{drill.difficulty}</span>
              </div>
            ))}

            <div className="section-header">
              <h3 className="section-title">Practice History</h3>
            </div>
            <div className="fairway-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>🎯</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '700', color: 'var(--fairway-green)' }}>12</div>
              <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>Practice sessions this month</div>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '18px' }}>4.2 hrs</div>
                  <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)' }}>Total time</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '18px' }}>850</div>
                  <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)' }}>Balls hit</div>
                </div>
              </div>
            </div>
          </>
        )}

        <div style={{ height: '24px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Practice;
