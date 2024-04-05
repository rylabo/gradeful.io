# BlankNode

An Object with a blank node identifier, or no identifier.

**Properties:**

- [BlankNode](#blanknode)
  - [*@id*](#id)

## *@id*

**Type:** never | \`_:${string}\`

i.e. A Blank node either has no `@id` key, or has a string that begins with `_:`.

## Example Object

```json
{
    ...
    "@id": "_:b1",
    ...
}
```
