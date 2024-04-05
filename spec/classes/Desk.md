# Desk

A Desk in a classroom, possibly assigned to a student.

**Properties:**

- [Desk](#desk)
  - [*assignedTo*](#assignedto)
  - [Example Object](#example-object)

## *assignedTo*

A Student, representing the owner of the desk.

**Type:** [Student](./Student.md) & [IdentifiedNode](./IdentifiedNode.md)

**Example:**

See [the example in Student](Student.md#example-object)

## Example Object

```json
{ 
  "assignedTo":{
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
  }
}
```
