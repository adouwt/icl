<template>
  <div>
		<div class="icl-course-details-box">
			<div class="icl-course-logo">
				<img src="detailsData.logoFileURL" alt="">
			</div>
			<div class="icl-course-text">
				<p class="icl-course-describe">
					{{detailsData.name}}
				</p>
				<p>{{detailsData.brief || '暂无名称简介'}}</p>
				<div class="icl-course-feature">
					<div class="icl-course-number">
						<div class="icl-course-feature-header">
							<p class="icl-course-feature-logo"></p>
							<p class="icl-course-number-text">
								<span>课程编号</span><br>
								<span>{{detailsData.name}}</span>
							</p>
						</div>
					</div>
					<div class="icl-course-time">
						<div class="icl-course-feature-header">
							<p class="icl-course-feature-logo"></p>
							<p class="icl-course-number-text">
								<span>学习时间</span><br>
								<span>{{detailsData.periodHours}}</span>
							</p>
						</div>
					</div>
					<div class="icl-course-count">
						<div class="icl-course-feature-header">
							<p class="icl-course-feature-logo"></p>
							<p class="icl-course-number-text">
								<span>学习人数</span><br>
								<span>{{detailsData.user_count}}</span>
							</p>
						</div>
					</div>
					<div class="icl-course-level">
						<div class="icl-course-feature-header">
							<p class="icl-course-feature-logo"></p>
							<p class="icl-course-number-text">
								<span>学习难度</span><br>
								<span>{{detailsData.difficulty}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center icl-mr-md">
			<el-button type="primary">
				<router-link :to="'/course/' + detailsData.id + '/learning'">
				立即学习
				</router-link>
			</el-button>
		</div>
  </div>
</template>

<script>
export default {
  props: {
    detailsData: {
      type: Object
    }
  }
}
</script>

<style scoped>
	.icl-course-details-box {
		margin-top: 20px;
	}
	.icl-course-text {
		margin-left: 10px;
	}
	.icl-course-describe {
		font-weight: bold;
		height: 30px;
	}
  .icl-course-details-box {
		display: flex;
	}
	.icl-course-logo,.icl-course-text {
		height: 220px;
		}
	.icl-course-details-box .icl-course-logo {
		flex: 1;
		background: url(../../static/default-course-logo.png) no-repeat center center;
		background-size: cover;
	}
	.icl-course-details-box .icl-course-text {
		flex: 4
	}
	.icl-course-feature {
		display: flex;
	}
	.icl-course-feature>div {
		flex:1;
	}
	.icl-course-feature-header {
		display: flex;
	}

	.icl-course-feature-header>p {
		flex: 1;
	}
	.icl-course-feature-logo {
		background: url(../../static/default-course-logo.png) no-repeat center center;
		background-size: cover;
	}
	.icl-course-feature {
		position: relative;
		top: 58%;
	}
	.icl-course-number-text span:nth-of-type(1) {
		font-family: MicrosoftYaHei;
		font-size: 12px;
		color: #5F6367;
	}
	.icl-course-number-text span:nth-of-type(2) {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		color: #333333;
	}
</style>

