<template>
  <section class="section">
      <h2 @click='click()'>
          this is a footer
      </h2>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: '这是模态框的标题'
    }
  },
  created () {
    this.click()
  },
  methods: {
    click () {
    }
  }
}
</script>

