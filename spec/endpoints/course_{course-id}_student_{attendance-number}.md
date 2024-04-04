# /api/course/{course-id}/student/{attendance-number}

A `Student` object with a complete attendance history

## Table of Contents

- [/api/course/{course-id}/student/{attendance-number}](#apicoursecourse-idstudentattendance-number)
  - [Table of Contents](#table-of-contents)
  - [I/O](#io)
  - [Query Parameters](#query-parameters)
  - [Request Headers](#request-headers)
  - [Request Body](#request-body)
  - [Response Headers](#response-headers)
  - [Response Body](#response-body)
  - [Properties](#properties)
    - [Top Level](#top-level)
    - [Name Objects](#name-objects)
    - [Attendance Record Objects](#attendance-record-objects)
      - [Example Object](#example-object)

## I/O

Instruct frontend <-> Course api

**URL:** /api/course/{course-id}/student/{attendance-number}

**Methods:** GET

## Query Parameters

| Key               | Type     | Example                                                 |
|-------------------|----------|---------------------------------------------------------|
| getall            | boolean  | `true`                                                  |

## Request Headers

| Key | Values | Notes |
|-----|------------|-------|
| `Accept` | `application/ld+json`, `application/json` | Optional. Defaults to JSON |

## Request Body

Not Applicable

## Response Headers

TBD

## Response Body

A single `Student` object with the `attendanceHistory` property set.

```json
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
  "attendanceHistory": [
    {
      "@type": ["AttendanceRecord"],
      "date": "2024/4/22",
      "time": "8:50:47",
      "period": 1,
      "attendanceStatus": "present"
    },
    {
      "@type": ["AttendanceRecord"],
      "date": "2024/4/23",
      "time": "11:51:13",
      "period": 4,
      "attendanceStatus": "present"
    },
    {
      "@type": ["AttendanceRecord"],
      "date": "2024/04/24",
      "time": "15:21:01",
      "period": 7,
      "attendanceStatus": "present"
    },
    {
      "@type": ["AttendanceRecord"],
      "date": "2024/04/25",
      "time": "8:59:01",
      "period": 1,
      "attendanceStatus": "late"
    },
  ] 
}

```

## Properties

### Top Level

| Key               | Type     | Example                                                 |
|-------------------|----------|---------------------------------------------------------|
| @id               | IRI      | `"https://.../api/course/NTE4NjU1NjAxNDM1/student/05/"` |
| @type             | string[] | **Must be** `["Student"]`                               |
| givenName         | Object   | [See Name Objects](#name-objects)                       |
| familyName        | Object   | [See Name Objects](#name-objects)                       |
| attendance        | Object[] | [See Attendance Objects](attendance-objects)            |

### Name Objects

| Key               | Type     | Example                                               |
|-------------------|----------|-------------------------------------------------------|
| annotation        | string   | `"ハナコ"`, `"マツザカ"`                                 |
| nameToken         | Object   |                                                       |
| nameToken.en      | String   | `"Hanako"`, `"Matsuzaka"`                             |
| nameToken.ja      | String   | `"花子"`, `"松阪"`                                      |

**Note:** Either nameToken.en or nameToken.ja must be provided.

### Attendance Record Objects

| Key                   | Type     | Example                                                 |
|-----------------------|----------|---------------------------------------------------------|
| *attendanceFor*       | Node ID  | `"https://.../api/course/NTE4NjU1NjAxNDM1/student/05/"` |
| **date**              | string   | `"2024/04/22"`                                          |
| **time**              | string   | `"8:59:01"`                                             |
| **period**            | number   | `1`, `5`, `7`                                           |
| **attendanceStatus**  | string   | `"present"`, `"late"`, `"left early"`, `"excused"`      |

#### Example Object

```json
{
  "@type": ["AttendanceRecord"],
  "attendanceFor": "https://.../api/course/NTE4NjU1NjAxNDM1/student/05/",
  "date": "2024/04/22",
  "period": 1,
  "attendanceStatus": "present"
}
```
