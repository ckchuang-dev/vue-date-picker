<script>
  import Calendar from '@/components/Calendar'
  let handleOutsideClick
  export default {
    name: 'DatePickerDemo',
    components: {
      Calendar
    },
    directives: {
      'click-outside': {
        bind(el, { value }) {
          handleOutsideClick = e => {
            const isClickOutside = e.target !== el && !el.contains(e.target)
            if (isClickOutside) value(e)
            e.stopPropagation()
          }
          document.addEventListener('click', handleOutsideClick)
          document.addEventListener('touchstart', handleOutsideClick)
        },
        unbind() {
          document.removeEventListener('click', handleOutsideClick)
          document.removeEventListener('touchstart', handleOutsideClick)
        }
      }
    },
    data() {
      return {
        selectedDate: null,
        open: false,
        inputDate: ''
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
        this.inputDate = this.dateText
        this.onClose()
      },
      onClose() {
        this.open = false
      },
      onKeyupEnter() {
        const text = this.inputDate

        // TODO: error message
        // 驗證輸入格式是否符合 YYYY-MM-DD
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
          this.onClose()
          return false
        }

        this.selectedDate = {
          year: parseInt(text.slice(0, 4)),
          month: parseInt(text.slice(5, 7)) - 1,
          day: parseInt(text.slice(8, 10))
        }
        this.onClose()
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
