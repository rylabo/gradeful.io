# /api/course/{course-id}

Summary data about the collection of courses being taught by a user.

## Table of Contents
1. [I/O](#io)
2. [Request Headers](#request-headers)
3. [Request Body](#request-body)

## I/O

PUT updates to a [Course](../classes/Course.md), or GET details of a [Course](../classes/Course.md). Archive the course with a DELETE. 

**URL:** /api/course_{course-id}

**Methods:** GET, PUT, DELETE

## Request Headers

| Key      | Values                                    | Notes                      |
|----------|-------------------------------------------|----------------------------|
| `Accept` | `application/ld+json`, `application/json` | Optional. Defaults to JSON |

## Request Body 

**Type:** [CourseUpdate](../classes/CourseTemplate.md) & [IdentifiedNode](../classes/IdentifiedNode.md)

## Response Headers

| Key      | Values                                                                          |
|----------|---------------------------------------------------------------------------------|
|`Link`    |`<https://.../api/course/{course-id}/student/{student-id}>; rel="enrollment",...`|

## Response Body

**Type:** [Course](../classes/Course.md) & [IdentifiedNode](../classes/IdentifiedNode.md)

**Notes:**
- New students are assigned new attendance numbers (the final two digits of their IRI) in order of Student.familyName.annotation, and then by Student.givenName.annotation, starting from the currect value of [Course.newAttendanceNumberIndex](../classes/Course.md#newattendancenumberindex).

## Request Example

Consider the case of a JHS first year course called "英語" in Japanese, and "English" in English. The seating plan is as follows.

![a seating plan example](./seatingPlanExample.svg)

The request body for this class setup would look like this:

```json
{
  "@type": ["Course"],
  "courseName": {
    "ja": "英語",
    "en": "English"
  },
  "gradeLevel": "中1",
  "classNumber": 1,
  "deskRows": 3,
  "deskColumns": 3,
  "deskAt": [[
      {"@type": ["Desk"], "assignedTo":{
         "@type": ["Student"],
         "givenNames": [{
           "annotation": "ケンタロ",
           "nameToken": {"en": "Kentaro", "ja": "健太郎"}
         }],
         "familyNames": [{
           "annotation": "サトウ",
           "nameToken": {"en": "Satou", "ja": "佐藤"}
         }],
      }},
      {"@type": ["Desk"], "assignedTo":{
         "@type": ["Student"],
         "givenNames": [{
           "annotation": "ユウ",
           "nameToken": {"en": "Yuu", "ja": "ゆう"}
         }],
         "familyNames": [{
           "annotation": "タナカ",
           "nameToken": {"en": "Tanaka", "ja": "田中"}
         }],
      }},
      {"@type": ["Desk"], "assignedTo":{
         "@type": ["Student"],
         "givenNames": [{
           "annotation": "ハナコ",
           "nameToken": {"en": "Hanako", "ja": "花子"}
         }],
         "familyNames": [{
           "annotation": "ヤマダ",
           "nameToken": {"en": "Yamada", "ja": "山田"}
         }],
      }}
   ], [
      {"@type": ["Desk"], "assignedTo":{
         "@type": ["Student"],
         "givenNames": [{
           "annotation": "マリコ",
           "nameToken": {"en": "Mariko", "ja": "まり子"}
         }],
         "familyNames": [{
           "annotation": "スズキ",
           "nameToken": {"en": "Suzuki", "ja": "鈴木"}
         }],
      }},
      {"@type": ["Desk"], "assignedTo":{
         "@type": ["Student"],
         "givenNames": [{
            "annotation": "タロウ",
            "nameToken": {"en": "Tarou", "ja": "太郎"}
         }],
         "familyNames": [{
            "annotation": "ヤマダ",
            "nameToken": {"en": "Yamada", "ja": "山田"}
         }],
      }},
      {"@type": ["Desk"]}
   ], [
      {},
      {"@type": ["Desk"]},
      {}
   ]]
}
```

## Response Body Example

```json
[
  {
    "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/",
    "courseName": {
      "ja": "英語",
      "en": "English"
    },
    "gradeLevel": "中1",
    "classNumber": 1,
    "deskRows": 3,
    "deskColumns": 3,
    "deskAt": [[
      {"@type": ["Desk"], "assignedTo": "https://.../api/course/NTE4NjU1NjAxNDM1/student/01/"},
      {"@type": ["Desk"], "assignedTo": "https://.../api/course/NTE4NjU1NjAxNDM1/student/03/"},
      {"@type": ["Desk"], "assignedTo": "https://.../api/course/NTE4NjU1NjAxNDM1/student/05/"}
    ], [
      {"@type": ["Desk"], "assignedTo": "https://.../api/course/NTE4NjU1NjAxNDM1/student/02/"},
      {"@type": ["Desk"], "assignedTo": "https://.../api/course/NTE4NjU1NjAxNDM1/student/04/"},
      {"@type": ["Desk"]},
    ], [
      {},
      {"@type": ["Desk"]},
      {}
    ]],
    "enrollment": [
      {
        "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/student/01/",
        "@type": ["Student"],
        "givenNames": [{
          "annotation": "ケンタロ",
          "nameToken": {"en": "Kentaro", "ja": "健太郎"}
        }],
        "familyNames": [{
          "annotation": "サトウ",
          "nameToken": {"en": "Satou", "ja": "佐藤"}
        }],
        "attendanceSummary": {
          "absences": 0,
          "lates": 2,
          "excused": 4
        }
      },
      {
        "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/student/02/",
        "@type": ["Student"],
        "givenNames": [{
          "annotation": "マリコ",
          "nameToken": {"en": "Mariko", "ja": "まり子"}
        }],
        "familyNames": [{
          "annotation": "スズキ",
          "nameToken": {"en": "Suzuki", "ja": "鈴木"}
        }],
        "attendanceSummary": {
          "absences": 0,
          "lates": 0,
          "excused": 0
        }
      },
      { 
        "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/student/03/",
        "@type": ["Student"],
        "givenNames": [{
          "annotation": "ユウ",
          "nameToken": {"en": "Yuu", "ja": "ゆう"}
        }],
        "familyNames": [{
          "annotation": "タナカ",
          "nameToken": {"en": "Tanaka", "ja": "田中"}
        }],
        "attendanceSummary": {
          "absences": 0,
          "lates": 0,
          "excused": 0
        }
      },
      {
        "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/student/04/",
        "@type": ["Student"],
        "givenNames": [{
          "annotation": "タロウ",
          "nameToken": {"en": "Tarou", "ja": "太郎"}
        }],
        "familyNames": [{
          "annotation": "ヤマダ",
          "nameToken": {"en": "Yamada", "ja": "山田"}
        }],
        "attendanceSummary": {
          "absences": 0,
          "lates": 0,
          "excused": 2
        }
      },
      {
        "@id": "https://.../api/course/NTE4NjU1NjAxNDM1/student/05/",
        "@type": ["Student"],
        "givenName": {
          "annotation": "ハナコ",
          "nameToken": {"en": "Hanako", "ja": "花子"}
        },
        "familyName": {
          "annotation": "ヤマダ",
          "nameToken": {"en": "Yamada", "ja": "山田"}
        },
        "attendanceSummary": {
          "absences": 0,
          "lates": 1,
          "excused": 0
        }
      }
    ]
  }
]
```
