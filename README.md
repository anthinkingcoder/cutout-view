# cutout-view

## cutout Component
### props
| param | description | type | default |
| :-: | :-: | :-: | :-: |
| show-height | show content height,require, show-height not greater than content height and not less than layer-height。if the show-height valid error, will emitter @on-cancel | Number,String | 0 |
| on | if false, the cutout will be canceled,emitter @on-cancel | Boolean | true |
| layer-height | the bottom layer height | Number,String | 80px |

### events
| name | description | return value |
| :-: | :-: | :-: |
| on-cancel | Emitted when cutout is canceled| return false |

### slot
| name | description|
| :-: | :-: |
| layer | the layer area content |
| extra | extra content, at the bottom of the layer area|


##example

> live demo,open in [jsfiddle](https://jsfiddle.net/anthinkingcoder/c4guaq1n)
```html
<cutout :show-height="800" :on="on" @on-cancel="cancel">
    <div slot="layer">
      <img src="./img/down.png" class="down-btn" @click="open">
    </div>
    
    <div slot="extra" class="extra">
      <div class="button" @click="open">
        关注作者查看全文
      </div>
    </div>
    //...content
</cutout>
```
```javascript
  var app = new Vue({
    el: '#app',
    data: {
      on: true
    },
    methods: {
      open() {
        this.on = false;
      },
      cancel() {
        console.info('cancel cutout');
      }
    }
  })
```
