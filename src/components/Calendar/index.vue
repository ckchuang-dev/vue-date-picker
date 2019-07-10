<script>
  export default {
    name: 'Calendar',
    props: {
      date: {
        type: String,
        default: null
      },
      onSelect: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    methods: {
      // 套用蔡勒公式計算特定日期為星期幾
      zellerCongruence(year, month, day) {
        // 蔡勒公式中 1, 2 月視為前一年的 13, 14 月
        if (month === 1 || month === 2) {
          month += 12
          year -= 1
        }
        const c = Math.floor(year / 100) // 年份前兩位數
        const y = year % 100 // 年份後兩位數
        const m = month
        const d = day
        let w = 0
        // TODO: 1582.10.15 以後改曆，目前尚未處理 1582.10.4 以前公式
        w = y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + Math.floor((26 * (m + 1)) / 10) + d - 1
        if (w < 0) w = (w & (7 + 7)) % 7
        else w = w % 7
        return w
      }
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
