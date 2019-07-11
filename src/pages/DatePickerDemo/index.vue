<script>
  import Calendar from '@/components/Calendar'
  export default {
    name: 'DatePickerDemo',
    components: {
      Calendar
    },
    data() {
      return {
        selectedDate: null,
        open: false
      }
    },
    computed: {
      dateText() {
        const { year, month, day } = this.selectedDate
        const zMonth = ('0' + (month + 1)).slice(-2)
        const zDay = ('0' + day).slice(-2)
        return `${year}-${zMonth}-${zDay}`
      }
    },
    methods: {
      onSelect(date) {
        this.selectedDate = date
        this.open = false
      },
      onKeyupEnter(e) {
        const text = e.target.value

        // TODO: error message
        // 驗證輸入格式是否符合 YYYY-MM-DD
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
          this.open = false
          return false
        }

        this.selectedDate = {
          year: parseInt(text.slice(0, 4)),
          month: parseInt(text.slice(5, 7)) - 1,
          day: parseInt(text.slice(8, 10))
        }
        this.open = false
      }
    },
    beforeMount() {
      const now = new Date().toISOString()
      const currentDate = {
        year: parseInt(now.slice(0, 4)),
        month: parseInt(now.slice(5, 7)) - 1,
        day: parseInt(now.slice(8, 10))
      }
      this.selectedDate = JSON.parse(JSON.stringify(currentDate))
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
