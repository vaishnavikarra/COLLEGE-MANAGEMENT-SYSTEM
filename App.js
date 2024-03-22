import React from 'react';
import AuthForm from './components/AuthForm';
import StudentManagement from './components/StudentManagement';
import CourseManagement from './components/CourseManagement';
import AttendanceTracking from './components/AttendanceTracking';
import GradeManagement from './components/GradeManagement';

const App = () => {
  return (
    <div>
      {/* Add Header component */}
      <AuthForm />
      {/* Add Routing for different components */}
    </div>
  );
}

export default App;
