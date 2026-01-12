import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from '@ionic/react';

const CourseBooking = () => {
  const [selectedDate, setSelectedDate] = React.useState(0);
  const [selectedTime, setSelectedTime] = React.useState('7:30');
  const [players, setPlayers] = React.useState(4);

  const dates = [
    { day: 'Today', date: 'Jan 12' },
    { day: 'Tomorrow', date: 'Jan 13' },
    { day: 'Wed', date: 'Jan 14' },
    { day: 'Thu', date: 'Jan 15' },
    { day: 'Fri', date: 'Jan 16' },
    { day: 'Sat', date: 'Jan 17' },
    { day: 'Sun', date: 'Jan 18' },
  ];

  const courses = [
    {
      name: 'Pebble Beach Golf Links',
      location: 'Pebble Beach, CA',
      rating: 4.9,
      price: '$595',
      par: 72,
      yards: '6,828',
      times: ['6:30', '7:00', '7:30', '11:00', '2:30'],
      premium: true
    },
    {
      name: 'Torrey Pines South',
      location: 'La Jolla, CA',
      rating: 4.7,
      price: '$205',
      par: 72,
      yards: '7,607',
      times: ['7:00', '7:30', '8:00', '8:30', '1:00', '3:30']
    },
    {
      name: 'Coronado Golf Course',
      location: 'Coronado, CA',
      rating: 4.5,
      price: '$45',
      par: 72,
      yards: '6,590',
      times: ['6:30', '7:00', '8:00', '9:30', '10:00', '2:00']
    },
    {
      name: 'Maderas Golf Club',
      location: 'Poway, CA',
      rating: 4.6,
      price: '$150',
      par: 72,
      yards: '7,167',
      times: ['7:30', '8:00', '10:30', '12:00']
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book a Round</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Search */}
        <div style={{ padding: '8px 16px 0' }}>
          <IonSearchbar
            placeholder="Search courses..."
            style={{ '--background': 'var(--fairway-white)', '--border-radius': '12px' }}
          />
        </div>

        {/* Quick Filters */}
        <div className="horizontal-scroll" style={{ padding: '8px 16px' }}>
          {['Near Me', 'Top Rated', 'Under $100', 'Partner Courses', 'Walking Only'].map((filter, i) => (
            <div key={i} style={{
              padding: '8px 16px',
              background: i === 0 ? 'var(--fairway-green)' : 'var(--fairway-white)',
              color: i === 0 ? 'var(--fairway-white)' : 'var(--fairway-gray-700)',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              boxShadow: 'var(--shadow-sm)',
              cursor: 'pointer'
            }}>
              {filter}
            </div>
          ))}
        </div>

        {/* Date Selection */}
        <div className="section-header">
          <h3 className="section-title">Select Date</h3>
        </div>
        <div className="horizontal-scroll">
          {dates.map((d, i) => (
            <div
              key={i}
              onClick={() => setSelectedDate(i)}
              style={{
                minWidth: '70px',
                padding: '12px 8px',
                background: selectedDate === i ? 'var(--fairway-green)' : 'var(--fairway-white)',
                color: selectedDate === i ? 'var(--fairway-white)' : 'var(--fairway-gray-700)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '12px', opacity: 0.8 }}>{d.day}</div>
              <div style={{ fontWeight: '600', fontSize: '14px', marginTop: '4px' }}>{d.date}</div>
            </div>
          ))}
        </div>

        {/* Players Selection */}
        <div className="section-header">
          <h3 className="section-title">Players</h3>
        </div>
        <div style={{ display: 'flex', gap: '8px', padding: '0 16px' }}>
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              onClick={() => setPlayers(num)}
              style={{
                flex: 1,
                padding: '14px',
                background: players === num ? 'var(--fairway-green)' : 'var(--fairway-white)',
                color: players === num ? 'var(--fairway-white)' : 'var(--fairway-gray-700)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                fontWeight: '600',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              {num} {num === 1 ? 'Player' : 'Players'}
            </div>
          ))}
        </div>

        {/* Available Courses */}
        <div className="section-header">
          <h3 className="section-title">Available Courses</h3>
          <span style={{ fontSize: '13px', color: 'var(--fairway-gray-500)' }}>{courses.length} found</span>
        </div>

        {courses.map((course, i) => (
          <div key={i} className="fairway-card" style={{ marginBottom: '12px' }}>
            {/* Course Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '600', margin: 0 }}>
                    {course.name}
                  </h4>
                  {course.premium && (
                    <span className="badge badge-gold" style={{ fontSize: '10px', padding: '2px 6px' }}>PREMIUM</span>
                  )}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--fairway-gray-500)', margin: 0 }}>{course.location}</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '12px', color: 'var(--fairway-gray-600)' }}>
                  <span>Par {course.par}</span>
                  <span>{course.yards} yds</span>
                  <span style={{ color: 'var(--fairway-gold)' }}>★ {course.rating}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--fairway-green)' }}>
                  {course.price}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--fairway-gray-500)' }}>per player</div>
              </div>
            </div>

            {/* Tee Times */}
            <div style={{ borderTop: '1px solid var(--fairway-gray-200)', paddingTop: '12px' }}>
              <div style={{ fontSize: '12px', color: 'var(--fairway-gray-500)', marginBottom: '8px' }}>Available Tee Times</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {course.times.map((time, j) => (
                  <div
                    key={j}
                    style={{
                      padding: '8px 14px',
                      background: 'var(--fairway-gray-100)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--fairway-gray-700)',
                      cursor: 'pointer'
                    }}
                  >
                    {time} AM
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Member Perk Banner */}
        <div className="fairway-card fairway-card-premium" style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--fairway-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--fairway-green)">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '15px' }}>Member Priority Booking</div>
              <div style={{ fontSize: '13px', opacity: 0.8 }}>Book up to 14 days in advance at 200+ partner courses</div>
            </div>
          </div>
        </div>

        <div style={{ height: '24px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default CourseBooking;
