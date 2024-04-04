# Student

An object representing a single student in a class.

**Properties:**

- [Student](#student)
  - [@id](#id)
  - [givenName](#givenname)
  - [familyName](#familyname)
  - [*attendanceSummary*](#attendancesummary)
  - [*attendanceHistory*](#attendancehistory)
  - [Example Object](#example-object)

## @id

A Node ID representing the Object identifier of this Object. This will have the URI template `"https://.../api/course/{course-id}/student/{attendance-number}/"`

**Type:** NodeID

**Example:**

`"https://.../api/course/NTE4NjU1NjAxNDM1/student/02/"`

## givenName

A [KanaAnnotizedName](./KanaAnnotizedName.md) Object representing a person's first name.

**Type:** [KanaAnnotizedName](./KanaAnnotizedName.md)

**Example:**

See [the example in KanaAnnotizedName](./KanaAnnotizedName.md#example-object)

## familyName

A [KanaAnnotizedName](./KanaAnnotizedName.md) Object representing a person's last name.

**Type:** [KanaAnnotizedName](./KanaAnnotizedName.md)

**Example:**

See [the example in KanaAnnotizedName](./KanaAnnotizedName.md#example-object)

## *attendanceSummary*

An [AttendanceSummary](./AttendanceSummary.md) Object representing a person's last name.

**Type:** [AttendanceSummary](./AttendanceSummary.md)

**Example:**

See [the example in AttendanceSummary](./AttendanceSummary.md#example-object)

## *attendanceHistory*

An array of [AttendanceRecord](./AttendanceRecord.md) Objects representing a collection of the given student's attendance records.

**Type:** [AttendanceRecord](./AttendanceRecord.md)[]

**Example:**

See [the example in AttendanceRecord](./AttendanceRecord.md#example-object)

## Example Object

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
