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

