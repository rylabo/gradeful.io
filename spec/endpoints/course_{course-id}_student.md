# /api/course/{course-id}/student

A collection of summary data for students enrolled in a course

I/O
Instruct frontend <-> Course api

**URL:** /api/course/{course-id}/student

**Methods:** GET

## Request Headers

| Key | Values | Notes |
|-----|------------|-------|
| `Accept` | `application/ld+json`, `application/json` | Optional. Defaults to JSON |

## Request Body

Not Applicable

## Response Headers

TBD

## Response Body

An array of [`Student`](../classes/Student.md) objects.

**Used Optional Properties:** attendanceSummary

```json
[
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
```
