<template>
  <div>
    <vHeader></vHeader>
    <vSection>
    </vSection> 
  </div>
</template>
<script>
  import vHeader from '../components/header.vue'
  import vSection from '../components/indexSection.vue'
  export default {
    components: { vHeader, vSection },
    data () {
      return {
        isActive: true,
        list: []
      }
    },
    created () {
      // this.pageData()
    },
    methods: {
      pageData () {
        this.$api.get('/courses/do/list', null, r => {
          this.isActive = false
          this.list = r
        })
      }
    }
  }
</script>

<style >
  li {
    list-style: none;
  } 
  a {
    color: inherit;
    text-decoration: none;
  }

  .icl-section-header {
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 1.8rem;
    color: #5D5D5D;
  }
  
</style>

