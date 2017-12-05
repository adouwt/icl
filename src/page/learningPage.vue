<template>
  <div>
		<vHeader></vHeader>
    <div style="height: 500px; border: 1px solid #eee">
			<el-col :span="6">
				<div width="200px" style="background-color: rgb(238, 241, 246)" class="icl-scroll-auto" >
				  <div :class="{ 'el-icon-loading': isActive }" style="font-sise:50px"></div>
						<el-menu :default-openeds="['1', '0', '2', '3']">
							<el-submenu v-for="(chapter, index) in chapterTree" :key="chapter.id" :index="index"  class="el-menu-vertical-demo">
								<template slot="title"><i class="el-icon-message"></i>{{chapter.name}}</template>
								<div v-for="section in chapter.sections" :key="section.id" :index="section.id">
									<el-menu-item :index="section.id" @click="getSectionContent(section.id)">
										{{section.name}}
									</el-menu-item>
								</div>
							</el-submenu>
						</el-menu>
				</div>
			</el-col>
			<el-col :span="18">
				<div class="icl-pd-md" >
					<div :class="{ 'el-icon-loading': isActive }" style="font-sise:50px"></div>
					<div :data-id="sectionContent.id">
						<h4 class="text-center">{{sectionContent.name}}</h4>
						<p v-html="sectionContent.contentHTML">
						</p>
					</div>
				</div>
			</el-col>
		</div>
  </div>
</template>
<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
  .el-aside {
    color: #333;
  }
	.icl-scroll-auto {
		height: 95vh;
		overflow: auto;
	}
</style>

<script>
  import vHeader from '../components/header.vue'
  export default {
    components: {vHeader},
    data () {
      return {
        isActive: true,
        chapterTree: {},
        sectionContent: {}
      }
    },
    created () {
      this.getChapterTree()
      this.getSectionContent()
    },
    methods: {
      handleOpen () {},
      handleClose () {},
      getChapterTree () {
        this.$api.get('/courses/' + '1d58816ac0e143fb80d7fa369d30974a' + '/directoryTree/do/list', null, r => {
					this.chapterTree = r.directoryTree
					console.log(this.chapterTree)
        })
      },
      getSectionContent (sectionid) {
        console.log(33)
        this.$api.get('/course/sections/' + 'f9ca08b8d90f4bbdb09a878b086fe769' + '/do/get', null, r => {
          this.isActive = false
          this.sectionContent = r
        })
      }
    }
  }
</script>
