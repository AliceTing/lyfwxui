Component({
  properties: {
    type: { // 样式类型
      type: String,
      value: 'primary' // primary || danger
    },
    plain: { // 是否镂空，背景色透明
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    circle: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    }
  }
})