interface Student {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

type StudentStatus = 'active' | 'inactive';

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

// Student Status Formatter
function getStudentStatusLabel(status: StudentStatus): string {
  if (status === 'active') {
    return 'Active Student';
  }

  return 'Inactive Student';
}

// Generic API Response Type
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Runtime validation function
function isValidStudent(data: unknown): data is Student {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const student = data as Record<string, unknown>;

  return (
    typeof student.id === 'number' &&
    typeof student.name === 'string' &&
    typeof student.email === 'string' &&
    (student.status === 'active' || student.status === 'inactive')
  );
}

// Create a sample student
const sampleStudent: Student = {
  id: 1,
  name: 'Shauntie Velasco',
  email: 'shauntievelasco@yahoo.com',
  status: 'active',
};

// Display the formatted student
console.log(formatStudent(sampleStudent));

// Display the readable student status
console.log('\n=== Student Status Labels ===');
console.log('Active:', getStudentStatusLabel('active'));
console.log('Inactive:', getStudentStatusLabel('inactive'));

// ApiResponse examples
const studentResponse: ApiResponse<Student> = {
  success: true,
  data: sampleStudent,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [
    {
      id: 1,
      name: 'Shauntie Velasco',
      email: 'shauntievelasco@yahoo.com',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
    },
  ],
};

console.log('\nSingle Student Response:', studentResponse);
console.log('Multiple Students Response:', studentsResponse);

// Runtime validation tests
const validStudent = {
  id: 1,
  name: 'Shauntie Velasco',
  email: 'shauntievelasco@yahoo.com',
  status: 'active',
};

const invalidStudent1 = {
  id: '1', // Wrong type - should be number
  name: 'Shauntie Velasco',
  email: 'shauntievelasco@yahoo.com',
  status: 'active',
};

const invalidStudent2 = {
  id: 1,
  email: 'shauntievelasco@yahoo.com',
  status: 'active',
  // Missing name property
};

console.log('\n=== Runtime Validation Tests ===');
console.log('Valid student:', isValidStudent(validStudent));
console.log('Invalid student (wrong id type):', isValidStudent(invalidStudent1));
console.log('Invalid student (missing name):', isValidStudent(invalidStudent2));
