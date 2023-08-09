// insert users collection
db.users.insertMany([{
    "userId": 1,
    "userName": "Ashok",
    "userEmail": "ashok@gmail.com",
    "batch": 35
  },
  {
    "userId": 2,
    "userName": "Babu",
    "userEmail": "babu@gmail.com",
    "batch": 35
  },
  {
    "userId": 3,
    "userName": "Divya",
    "userEmail": "divya@gmail.com",
    "batch": 35
  },
  {
    "userId": 4,
    "userName": "Inba",
    "userEmail": "inba@gmail.com",
    "batch": 35
  },
  {
    "userId": 5,
    "userName": "Iswarya",
    "userEmail": "iswarya@gmail.com",
    "batch": 36
  },
  {
    "userId": 6,
    "userName": "Maaran",
    "userEmail": "maaran@gmail.com",
    "batch": 36
  },
  {
    "userId": 7,
    "userName": "Bhuvana",
    "userEmail": "bhuvana@gmail.com",
    "batch": 36
  },
  {
    "userId": 8,
    "userName": "Venba",
    "userEmail": "venba@gmail.com",
    "batch": 36
  },
  {
    "userId": 9,
    "userName": "Vetri",
    "userEmail": "vetri@gmail.com",
    "batch": 37
  },
  {
    "userId": 10,
    "userName": "Elakkiya",
    "userEmail": "elakkiya@gmail.com",
    "batch": 37
  },
  {
    "userId": 11,
    "userName": "Kumar",
    "userEmail": "kumar@gmail.com",
    "batch": 37
  },
  {
    "userId": 12,
    "userName": "Raj",
    "userEmail": "raj@gmail.com",
    "batch": 37
  },
  {
    "userId": 13,
    "userName": "Maha",
    "userEmail": "maha@gmail.com",
    "batch": 38
  },
  {
    "userId": 14,
    "userName": "Gunawathi",
    "userEmail": "gunawathi@gmail.com",
    "batch": 38
  },
  {
    "userId": 15,
    "userName": "Kayal",
    "userEmail": "kayal@gmail.com",
    "batch": 38
  },
  {
    "userId": 16,
    "userName": "Bala",
    "userEmail": "bala@gmail.com",
    "batch": 38
  },
  {
    "userId": 17,
    "userName": "Vishwaja",
    "userEmail": "vishwaja@gmail.com",
    "batch": 39
  },
  {
    "userId": 18,
    "userName": "Selvi",
    "userEmail": "selvi@gmail.com",
    "batch": 39
  },
  {
    "userId": 19,
    "userName": "Thara",
    "userEmail": "thara@gmail.com",
    "batch": 39
  },
  {
    "userId": 20,
    "userName": "Aanandhi",
    "userEmail": "aanandhi@gmail.com",
    "batch": 39
  }]);

// insert codekata collection
db.codekata.insertMany([{
    "codekataId": 1,
    "codekataTitle": "Absolute Beginner",
    "solvedUsersId": [1, 2, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 19, 20]
  },
  {
    "codekataId": 2,
    "codekataTitle": "Looping",
    "solvedUsersId": [2, 5, 6, 8, 10, 11, 12, 15, 18, 20]
  },
  {
    "codekataId": 3,
    "codekataTitle": "Algorithm",
    "solvedUsersId": [3, 6, 7, 10, 13, 14, 18, 20]
  },
  {
    "codekataId": 4,
    "codekataTitle": "Strings",
    "solvedUsersId": [1, 2, 4, 5, 7, 9, 11, 14, 16, 18, 20]
  },
  {
    "codekataId": 5,
    "codekataTitle": "Hashing",
    "solvedUsersId": [3, 5, 8, 11, 13, 20]
  },
  {
    "codekataId": 6,
    "codekataTitle": "Queue",
    "solvedUsersId": [2, 3, 9, 12, 14, 15, 19]
  }]);

// insert attendance collection
db.attendance.insertMany([{
    "date": new Date("2020-09-29"),
    "absenteesId": [1, 7, 10, 17]
  },
  {
    "date": new Date("2020-09-30"),
    "absenteesId": [2, 8, 12,15,20]
  },
  {
    "date": new Date("2020-10-03"),
    "absenteesId": [5, 14, 17]
  },
  {
    "date": new Date("2020-10-18"),
    "absenteesId": [4, 8, 15]
  },
  {
    "date": new Date("2020-10-26"),
    "absenteesId": [1, 2, 10]
  },
  {
    "date": new Date("2020-11-05"),
    "absenteesId": [6, 13, 15, 18, 20]
  }]);

// insert topics collection
db.topics.insertMany([{
    "taskId": 1,
    "topicId": 1,
    "topicName": "HTML",
    "date": new Date("2020-09-20")
  },
  {
    "taskId": 2,
    "topicId": 2,
    "topicName": "CSS",
    "date": new Date("2020-09-27")
  },
  {
    "taskId": 3,
    "topicId": 3,
    "topicName": "JavaScript",
    "date": new Date("2020-10-03")
  },
  {
    "taskId": 4,
    "topicId": 4,
    "topicName": "React.js",
    "date": new Date("2020-10-18")
  },
  {
    "taskId": 5,
    "topicId": 5,
    "topicName": "MongoDB",
    "date": new Date("2020-10-26")
  },
  {
    "taskId": 6,
    "topicId": 6,
    "topicName": "Node.js",
    "date": new Date("2020-11-05")
  }]);
// insert tasks collection
 db.tasks.insertMany([{
    "taskId": 1,
    "taskName": "Form validation using DOM",
    "date": new Date("2020-09-19"),
    "submittedStudentsId": [1, 2, 4, 5, 9, 10, 11, 13, 14, 17, 18, 19],
    "notSubmittedStudId": [3, 6, 7, 8, 12, 15, 16, 20]
  },
  {
    "taskId": 2,
    "taskName": "Responsive web design",
    "date": new Date("2020-09-27"),
    "submittedStudentsId": [6, 7, 8, 11, 12, 15, 16, 19],
    "notSubmittedStudId": [1, 2, 3, 4, 5, 9, 10, 13, 14, 17, 18, 20]
  },
  {
    "taskId": 3,
    "taskName": "Calculator",
    "date": new Date("2020-10-03"),
    "submittedStudentsId": [1, 2, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    "notSubmittedStudId": [3, 4, 7]
  },
  {
    "taskId": 4,
    "taskName": "Shopping cart",
    "date": new Date("2020-10-18"),
    "submittedStudentsId": [1, 3, 6, 7, 9, 10, 12],
    "notSubmittedStudId": [2, 4, 5, 8, 11, 13, 15, 16, 14, 17, 18, 19, 20]
  },
  {
    "taskId": 5,
    "taskName": "Product database queries",
    "date": new Date("2020-10-26"),
    "submittedStudentsId": [2, 4, 5, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    "notSubmittedStudId": [1, 3, 6, 7, 9, 10]
  },
  {
    "taskId": 6,
    "taskName": "Hall booking API",
    "date": new Date("2020-11-05"),
    "submittedStudentsId": [1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20],
    "notSubmittedStudId": [4, 6, 14]
  }]);

// insert company_drives collection
  db.company_drives.insertMany([{
    "companyId": 1,
    "companyName": "Company 1",
    "driveDate": new Date("2020-08-24"),
    "appearedStudentsId": [1, 2, 4, 5, 6, 8, 11, 13, 17, 19]
  },
  {
    "companyId": 2,
    "companyName": "Company 2",
    "driveDate": new Date("2020-09-12"),
    "appearedStudentsId": [2, 3, 7, 9, 12, 14, 15]
  },
  {
    "companyId": 3,
    "companyName": "Company 3",
    "driveDate": new Date("2020-09-27"),
    "appearedStudentsId": [5, 6, 9, 13, 16, 18, 20]
  },
  {
    "companyId": 4,
    "companyName": "Company 4",
    "driveDate": new Date("2020-10-19"),
    "appearedStudentsId": [1, 4, 7, 11, 15]
  },
  {
    "companyId": 5,
    "companyName": "Company 5",
    "driveDate": new Date("2020-10-25"),
    "appearedStudentsId": [2, 3, 5, 8, 9, 10, 16, 17]
  }]);

// insert mentors collection
  db.mentors.insertMany([{
    "mentorId": 1,
    "mentorName": "Mentor 1",
    "mentorEmail": "mentor1@gmail.com",
    "menteesId": [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19]
  },
  {
    "mentorId": 2,
    "mentorName": "Mentor 2",
    "mentorEmail": "mentor2@gmail.com",
    "menteesId": [5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    "mentorId": 3,
    "mentorName": "Mentor 3",
    "mentorEmail": "mentor3@gmail.com",
    "menteesId": [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18]
  },
  {
    "mentorId": 4,
    "mentorName": "Mentor 4",
    "mentorEmail": "mentor4@gmail.com",
    "menteesId": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20]
  }]);