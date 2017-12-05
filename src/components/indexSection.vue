<template>
  <div class="index-section-box" >
		<div class="index-section-content" >
			<p class='icl-section-header'>全部课程</p>
			<section class="index-section">
				<div>
					<div :class="{ 'el-icon-loading': isActive }" class="icl-index-section-loading"></div>
				</div>
				<el-row :gutter="20">
					<el-col :sm="6" :md="6" :xs="24" v-for="i in list" :key='i.id'>
						<router-link :to="'/details?courseid=' + i.id">
							<div class="grid-content ">
								<div class="icl-course-default-logo">
									<img :src="i.logoFileURL">
								</div>
								<div class="icl-course-learning-details-text">
									<div class="icl-text-overflow">{{i.name}}</div>
									<div class="icl-course-learning-details">
										<span>平均时长：{{i.periodHours}}</span>
										<span class="">学习人数：{{i.user_count}}</span>
									</div>
								</div>
							</div>
						</router-link>
					</el-col>
				</el-row>
			</section>
		</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	// components: { BScroll },
  data () {
    return {
      isActive: true,
			list: [],
			show: true,
    }
  },
  created () {
		this.$api.get('/courses/do/list', null, r => {
			this.isActive = false;
			this.list = r.courses;
			this.$nextTick(() => {
				this._initScroll()
			})
    })
	},
  methods: {
		_initScroll () {
			let indexSectionWrappper = document.querySelector('.index-section-box')
			this.sectionScroll = new BScroll(indexSectionWrappper, {})
		}
  }
}
</script>

<style scoped>
	.index-section-box {
		height: 95vh;
		overflow: hidden;
	}
	.icl-index-section-loading {
		font-size: 5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -2.5rem;
    margin-left: -2.5rem;
    color: #00c1de;
	}

	.el-col {
		margin-bottom: 2rem;
	}
	.icl-section-header {
		font-size: 1.8rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.icl-course-default-logo {
		width: 100%;
		height: 11rem;
		background: url(../../static/default-course-logo.png) no-repeat center center;
		background-size: cover;
	}
	.icl-course-learning-details-text {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.icl-text-overflow {
		display: block;
		line-height: 4rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: PingFangSC-Regular;
		font-size: 1.4rem;
		color: #333333;
	}
	.icl-course-learning-details {
		line-height: 4rem;
	}
	.icl-course-learning-details span{
		font-family: PingFangSC-Regular;
		font-size: 1.2rem;
		color: #999999;
	}
	.icl-course-learning-details span:last-child {
		float: right;
	}
	.grid-content {
		background: #FFFFFF;
		box-shadow: 2px 3px 12px 0 rgba(0,0,0,0.05);
	}
	.index-section {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
		margin-bottom: 2rem;
	}
	
</style>


