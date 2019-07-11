<script>
  import Calendar from '@/components/Calendar'
  export default {
    name: 'DatePickerDemo',
    components: {
      Calendar
    },
    data() {
      return {
        currentDate: null,
        selectedDate: null
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
      }
    },
    beforeMount() {
      const now = new Date().toISOString()
      this.currentDate = {
        year: parseInt(now.slice(0, 4)),
        month: parseInt(now.slice(5, 7)) - 1,
        day: parseInt(now.slice(8, 10))
      }
      this.selectedDate = JSON.parse(JSON.stringify(this.currentDate))
    }
  }
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" scoped />
