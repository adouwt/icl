<template>
  <div>
			<div v-for="chapters in detailCourseIndex">
				<h3 >
					{{chapters.name}}
				</h3>
				<h4 v-for="sections in chapters ">
					{{sections.name}}
				</h4>
			</div>
  </div>
</template>

<script>
export default {
  props: {
    detailCourseIndex: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>

