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

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <span className="header-logo">FAIR<span>WAY</span></span>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <div className="avatar">JD</div>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Welcome Card */}
        <div className="fairway-card fairway-card-premium" style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '4px' }}>Good morning,</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '600', marginBottom: '8px' }}>
                James Davidson
              </h2>
              <div className="badge badge-gold" style={{ background: 'rgba(201, 169, 98, 0.3)', color: '#d4bc7d' }}>
                Founding Member
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '11px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Handicap</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: '700', color: 'var(--fairway-gold)' }}>12.4</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stat-grid" style={{ marginTop: '20px' }}>
          <div className="stat-item">
            <div className="stat-value">23</div>
            <div className="stat-label">Rounds</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">84</div>
            <div className="stat-label">Best Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">7</div>
            <div className="stat-label">Courses</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="section-header">
          <h3 className="section-title">Quick Actions</h3>
        </div>
        <div className="quick-actions">
          <div className="quick-action">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="quick-action-label">Book Tee Time</div>
          </div>
          <div className="quick-action">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div className="quick-action-label">Range</div>
          </div>
          <div className="quick-action">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="quick-action-label">Find Partner</div>
          </div>
          <div className="quick-action">
            <div className="quick-action-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <div className="quick-action-label">Pro Shop</div>
          </div>
        </div>

        {/* Upcoming */}
        <div className="section-header">
          <h3 className="section-title">Coming Up</h3>
          <a href="#" className="section-link">View All</a>
        </div>

        <div className="list-item">
          <div className="list-item-icon" style={{ background: 'var(--fairway-green)', color: 'var(--fairway-gold)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
              <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
          </div>
          <div className="list-item-content">
            <div className="list-item-title">Pebble Beach Golf Links</div>
            <div className="list-item-subtitle">Tomorrow, 7:30 AM - 4 players</div>
          </div>
          <div className="list-item-badge">Confirmed</div>
        </div>

        <div className="list-item">
          <div className="list-item-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <div className="list-item-content">
            <div className="list-item-title">Range Session + Lesson</div>
            <div className="list-item-subtitle">Saturday, 2:00 PM - Coach Mike</div>
          </div>
          <div className="list-item-badge" style={{ background: 'var(--fairway-gold)', color: 'var(--fairway-gray-900)' }}>Lesson</div>
        </div>

        {/* Featured Courses */}
        <div className="section-header">
          <h3 className="section-title">Featured Courses</h3>
          <a href="#" className="section-link">Explore</a>
        </div>

        <div className="horizontal-scroll" style={{ paddingBottom: '16px' }}>
          <div className="course-card">
            <div className="course-card-image">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
            </div>
            <div className="course-card-content">
              <div className="course-card-name">Pebble Beach</div>
              <div className="course-card-location">Pebble Beach, CA</div>
              <div className="course-card-meta">
                <span>Par 72</span>
                <span>6,828 yds</span>
                <span style={{ color: 'var(--fairway-gold)', fontWeight: '600' }}>$$$</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-image" style={{ background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a5d 100%)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
            </div>
            <div className="course-card-content">
              <div className="course-card-name">Torrey Pines South</div>
              <div className="course-card-location">La Jolla, CA</div>
              <div className="course-card-meta">
                <span>Par 72</span>
                <span>7,607 yds</span>
                <span style={{ color: 'var(--fairway-gold)', fontWeight: '600' }}>$$</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-image" style={{ background: 'linear-gradient(135deg, #0f2d1a 0%, #1a472a 100%)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
            </div>
            <div className="course-card-content">
              <div className="course-card-name">Bandon Dunes</div>
              <div className="course-card-location">Bandon, OR</div>
              <div className="course-card-meta">
                <span>Par 72</span>
                <span>6,732 yds</span>
                <span style={{ color: 'var(--fairway-gold)', fontWeight: '600' }}>$$$</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Events */}
        <div className="section-header">
          <h3 className="section-title">Member Events</h3>
          <a href="#" className="section-link">See All</a>
        </div>

        <div className="fairway-card fairway-card-gold">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div className="badge badge-premium">Invite Only</div>
          </div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>
            Founders Cup Championship
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--fairway-gray-500)', marginBottom: '16px' }}>
            Exclusive 36-hole stroke play event at Spanish Bay. Limited to founding members.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>
              <strong style={{ color: 'var(--fairway-green)' }}>March 15-16</strong> - 8 spots left
            </div>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>RSVP</button>
          </div>
        </div>

        <div style={{ height: '24px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
