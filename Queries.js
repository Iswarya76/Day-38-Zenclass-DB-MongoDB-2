// 1. Find all the topics and tasks which are taught in the month of October
db.topics.aggregate([
    {
        '$lookup': {
            'from': 'tasks', 
            'localField': 'taskId', 
            'foreignField': 'taskId', 
            'as': 'taskDetails'
        }
    }, {
        '$project': {
            'topicName': 1, 
            'taskName': '$taskDetails.taskName', 
            'date': 1, 
            'month': {
                '$month': '$date'
            }
        }
    }, {
        '$match': {
            'month': 10
        }
    }, {
        '$unwind': '$taskName'
    }, {
        '$project': {
            'month': 0
        }
    }
]);

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
  db.company_drives.aggregate([
    {
      $project: {
        companyName: "$companyName",
        date: "$driveDate",
      },
    },
    {
      $match: {
        date: {
          $gt: ISODate("2020-10-15"),
          $lt: ISODate("2020-10-31"),
        },
      },
    },
  ]);
  
  // 3. Find all the company drives and students who are appeared for the placement
  db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "appearedStudentsId",
        foreignField: "userId",
        as: "appearedStudentsDetails",
      },
    },
    {
      $project: {
        companyName: 1,
        appearedStudents: "$appearedStudentsDetails.userName",
      },
    },
  ]);
  // 4. Find the number of problems solved by the user in codekata
  db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "userId",
        foreignField: "solvedUsersId",
        as: "codekataDetails",
      },
    },
    {
      $project: {
        userName: 1,
        codekataSolved: {
          $size: "$codekataDetails",
        },
      },
    },
  ]);
  // 5. Find all the mentors with who has the mentee's count more than 15
  db.mentors.aggregate([
    {
      '$project': {
        'mentorName': '$mentorName', 
        'menteesCount': {
          '$cond': {
            'if': {
              '$isArray': '$menteesId'
            }, 
            'then': {
              '$size': '$menteesId'
            }, 
            'else': 'NA'
          }
        }
      }
    }, {
      '$match': {
        'menteesCount': {
          '$gt': 15
        }
      }
    }
  ]);
// 6. Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
  db.attendance.aggregate([
    {
      '$match': {
        'date': {
          '$gt': new Date('Thu, 15 Oct 2020 00:00:00 GMT'), 
          '$lt': new Date('Sat, 31 Oct 2020 00:00:00 GMT')
        }
      }
    }, {
      '$lookup': {
        'from': 'tasks', 
        'localField': 'date', 
        'foreignField': 'date', 
        'as': 'taskDetails'
      }
    }, {
      '$unwind': '$taskDetails'
    }, {
      '$project': {
        'date': 1, 
        'absenteesCount': {
          '$size': '$absenteesId'
        }, 
        'notSubmittedStudCount': {
          '$size': '$taskDetails.notSubmittedStudId'
        }
      }
    }
  ]);