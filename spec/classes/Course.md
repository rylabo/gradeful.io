# Course

A course a teacher is teaching.

**Properties:**

- [Course](#course)
  - [courseName](#coursename)
  - [gradeLevel](#gradelevel)
  - [classNumber](#classnumber)
  - [deskRows](#deskrows)
  - [deskColumns](#deskcolumns)
  - [deskAt](#deskat)
  - [*enrollment*](#enrollment)
  - [Validation Notes](#validation-notes)
  - [Example Object](#example-object)

## courseName

The internationalized name of the course.

**Type:** [I18nNameToken](I18nNameToken.md)

**Example:**
See [the example in I18nNameToken](I18nNameToken.md#example-object)

## gradeLevel

The Japanese grade level of the course.

**Type:** [GradeLevel](../types.md#gradelevel)

**Example:**
`"中2"`

## classNumber

The class number, or 組, of this class.

**Type:** string

**Example:**
`"A"`, `"1"`

**Note:** This chould be limited to a single letter or number.

## deskRows

However many rows of desks are in the classroom.

**Type:** number

**Example:**
`6`

## deskColumns

However many columns of desks are in the classroom.

**Type:** number

**Example:**
`6`

## deskAt

A 2D array representing the grid arrangment of desks in a classroom, where the first represents the row, and the second the column.

Note that rows are ordered from bottom to top, while columns are ordered left to right. Furthermore, an empty object `{}` represents a spot where there is no desk.

**Type:** [Desk](./Desk.md) | {}

**Example:**

Here is an example classroom with 5 desks and 4 students.

![Classroom Layout Example](./deskArrayPropertyExample.svg)

```json
[[
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
          "annotation": "ハナコ",
          "nameToken": {"en": "Hanako", "ja": "花子"}
        }],
        "familyNames": [{
          "annotation": "ヤマダ",
          "nameToken": {"en": "Yamada", "ja": "山田"}
        }],
    }}
  ], [
    {"@type": ["Desk"]},
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
    {}
  ]
]
```

## *enrollment*

An array representing a set of students enrolled in the course.

**Type:** [Student](./Student.md)[]

**Example:**

See [the example in Student](Student.md#example-object)

**Note:** All studnets in this array must be assigned a desk.

## Validation Notes

The object is considered invalid if:

- There are Students not assigned a desk.

## Example Object

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
   ]
}
```
