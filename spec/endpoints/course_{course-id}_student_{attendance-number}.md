# /api/course/{course-id}/student/{attendance-number}

A `Student` object with a complete attendance history

## Table of Contents

- [/api/course/{course-id}/student/{attendance-number}](#apicoursecourse-idstudentattendance-number)
  - [Table of Contents](#table-of-contents)
  - [I/O](#io)
  - [Request Headers](#request-headers)
  - [Request Body](#request-body)
  - [Response Headers](#response-headers)
  - [Response Body](#response-body)

## I/O

Instruct frontend <-> Course api

**URL:** /api/course/{course-id}/student/{attendance-number}

**Methods:** GET, PUT

## Request Headers

| Key | Values | Notes |
|-----|------------|-------|
| `Accept` | `application/ld+json`, `application/json` | Optional. Defaults to JSON |

## Request Body

**Type:** [Student](../classes/Student.md) & [IdentifiedNode](../classes/IdentifiedNode.md)
**Used Optional Properties:** [attendanceHistory](../classes/Student.md#attendancehistory)

## Response Headers

TBD

## Response Body

**Type:** [Student](../classes/Student.md) & [IdentifiedNode](../classes/IdentifiedNode.md)
**Used Optional Properties:** [attendanceHistory](../classes/Student.md#attendancehistory)
