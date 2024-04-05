# AttendanceRecord

A single attendance record for a single student.

**Properties:**

- [AttendanceRecord](#attendancerecord)
  - [*attendanceFor*](#attendancefor)
  - [date](#date)
  - [time](#time)
  - [period](#period)
  - [attendanceStatus](#attendancestatus)
  - [Example Object](#example-object)

## *attendanceFor*

A Node ID referencing a Student object.

**Type:** [Student](./Student.md) & [IdentifiedNode](./IdentifiedNode.md)
**Inverse Property:** [Student.attendanceHistory](./Student.md#attendancehistory)

**Example:**
`"https://.../api/course/NTE4NjU1NjAxNDM1/student/05/"`

## date

A locale formatted date.

**Type:** string

**Example:**
`"2024/04/22"`

## time

A locale formatted time.

**Type:** string

**Example:**
`"14:59:01"`

## period

An integer from 1 to 8, denoting a classroom period.

**Type:** number

**Example:**
`4`

## attendanceStatus

A string value indicating the attendance status of a student.

**Type:** [AttendanceState](../types.md#attendancestate)

**Example:**
`"late"`
*See* [AttendanceState](../types.md#attendancestate) *for more examples.*

## Example Object

```json
{
  "@type": ["AttendanceRecord"],
  "attendanceFor": "https://.../api/course/NTE4NjU1NjAxNDM1/student/05/",
  "date": "2024/04/22",
  "period": 1,
  "attendanceStatus": "present"
}
```
