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
        return `${year}-${month + 1}-${day}`
      }
    },
    methods: {
      onSelect(date) {
        this.selectedDate = date
        this.open = false
      },
      onKeyupEnter(e) {
        const text = e.target.value
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
