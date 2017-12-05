<template>
  <div>
    <vHeader></vHeader>
    <vDeheader :detailsData="detailsData"></vDeheader>
    <vDeDes :detailCourseIndex="detailCourseIndex"></vDeDes>
  </div>
</template>

<script>
  import vHeader from '../components/header.vue'
  import vDeheader from '../components/courseDetailsHeader.vue'
  import vDeDes from '../components/couseDetailsDescribe.vue'
  export default {
    components: {vHeader, vDeheader, vDeDes},
    data () {
      return {
        // id: this.$route.params.id,
        id: '87fcef82f3b246ff81ed1cb03a198533',
        detailsData: {},
        detailCourseIndex: {}
      }
    },
    created () {
      this.getDetailsData()
      this.getDetailCourseIndex()
    },
    methods: {
      getDetailsData () {
        this.$api.get('/courses/' + this.id + '/detail', null, r => {
          // console.log(r)
          this.detailsData = r.course
        })
      },
      getDetailCourseIndex () {
        this.$api.get('/courses/' + '1d58816ac0e143fb80d7fa369d30974a' + '/chapters/do/list', null, r => {
          this.detailCourseIndex = r
        })
      }
    }
  }
</script>

