# cutout-view

## cutout Component
### props
| param | description | type | default |
| :-: | :-: | :-: | :-: |
| show-height | show content height,require | Number,String | 0 |
| on | if false, the cutout will be canceled | Boolean | true |
| layer-height | the bottom layer height | Number,String | 80px |

### events
| name | description | return value |
| :-: | :-: | :-: |
| cancel | Emitted when cutout is canceled(when this expression(!on  || factHeight < showHeight || showHeight < layerHeight) is true))| return false |

### slot
| name | description|
| :-: | :-: |
| layer | the bottom layer area content |
| extra | extra content, At the bottom of the layer area|



##example
live demo,open in [jsfiddle](https://jsfiddle.net/anthinkingcoder/c4guaq1n/6/)
