# DeskTemplate

A planned Desk in a planned classroom layout, possibly to be assigned to a student. 

**Properties:**

- [DeskTemplate](#desktemplate)
  - [*assignedTo*](#assignedto)
  - [Example Object](#example-object)

## *assignedTo*

A Student, representing the owner of the desk.

**Type:** [Student](./Student.md) & [BlankNode](./BlankNode.md)

**Example:**

See [the example in Student](Student.md#example-object)

## Example Object

```json
{ 
  "assignedTo":{
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
