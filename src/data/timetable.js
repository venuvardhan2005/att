const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00'
];

const studentSchedule = {
  'Monday': {
    '09:00 - 10:00': { subject: 'Computer Science', teacher: 'Dr. Smith', room: '101', type: 'lecture' },
    '11:00 - 12:00': { subject: 'Mathematics', teacher: 'Prof. Johnson', room: '203', type: 'lecture' },
    '14:00 - 15:00': { subject: 'Physics', teacher: 'Dr. Brown', room: '301', type: 'lab' },
  },
  'Tuesday': {
    '10:00 - 11:00': { subject: 'Chemistry', teacher: 'Prof. Davis', room: '402', type: 'lecture' },
    '13:00 - 14:00': { subject: 'Computer Science', teacher: 'Dr. Smith', room: '101', type: 'tutorial' },
  },
  'Wednesday': {
    '09:00 - 10:00': { subject: 'Computer Science', teacher: 'Dr. Smith', room: '101', type: 'lecture' },
    '11:00 - 12:00': { subject: 'Mathematics', teacher: 'Prof. Johnson', room: '203', type: 'lecture' },
    '15:00 - 16:00': { subject: 'Physics', teacher: 'Dr. Brown', room: '301', type: 'lecture' },
  },
  'Thursday': {
    '10:00 - 11:00': { subject: 'Chemistry', teacher: 'Prof. Davis', room: '402', type: 'lab' },
    '14:00 - 15:00': { subject: 'Mathematics', teacher: 'Prof. Johnson', room: '203', type: 'tutorial' },
  },
  'Friday': {
    '09:00 - 10:00': { subject: 'Physics', teacher: 'Dr. Brown', room: '301', type: 'lecture' },
    '11:00 - 12:00': { subject: 'Computer Science', teacher: 'Dr. Smith', room: '101', type: 'lecture' },
  }
};

const teacherSchedule = {
    'Monday': {
      '09:00 - 10:00': { subject: 'Computer Science', class: 'CS-A', room: '101', type: 'lecture' },
      '13:00 - 14:00': { subject: 'Data Structures', class: 'CS-B', room: '102', type: 'lecture' },
    },
    'Wednesday': {
        '09:00 - 10:00': { subject: 'Computer Science', class: 'CS-A', room: '101', type: 'lecture' },
        '11:00 - 12:00': { subject: 'Data Structures', class: 'CS-B', room: '102', type: 'lecture' },
    },
    'Friday': {
        '11:00 - 12:00': { subject: 'Computer Science', class: 'CS-A', room: '101', type: 'lecture' },
    }
}


export const studentTimetable = { days, timeSlots, schedule: studentSchedule };
export const teacherTimetable = { days, timeSlots, schedule: teacherSchedule };
