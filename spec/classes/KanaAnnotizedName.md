# KanaAnnotizedName

A token in multiple languages.

**Properties:**

- [KanaAnnotizedName](#kanaannotizedname)
  - [annotation](#annotation)
  - [nameToken](#nametoken)
  - [Example Object](#example-object)

## annotation

A string in katakana, reprensenting the pronunciation of a Japanese name. Used as a sorting key.

**Type:** string

**Example:**
`"ハナコ"`

## nameToken

An [I18nNameToken](I18nNameToken.md), representing an internationalized given or family name.

**Type:** [I18nNameToken](I18nNameToken.md)

**Example:**
See [the example in I18nNameToken](I18nNameToken.md#example-object)

## Example Object

```json
{
  "annotation": "ケンタロ",
  "nameToken": {"en": "Kentaro", "ja": "健太郎"}
}
```
