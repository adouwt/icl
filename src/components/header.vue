<template>
  <div>
    <header class="header">
      <!-- <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">  -->
        <el-col :span="24" class="">
          <el-col :span="10" :xs="9">
            <div class="grid-content icl-flex pull-left">
              <img src="../../static/icl-icon.png" alt="">
            </div></el-col>
          <el-col :span="9"  :xs="1"><div class="grid-content"></div></el-col>
          <el-col :span="2"  :xs="6">
            <div class="grid-content icl-flex">
              <span class="el-icon-view el-dropdown-link" @click="show = !show"></span>
              
            </div>
          </el-col>
          <el-col :span="3"  :xs="8"><div class="grid-content icl-flex"><a href="">前往内部站</a></div></el-col>
        </el-col>
        <transition name="fade">
          <p v-show="!show" class="icl-index-header-modal"  @click="show = !show"></p>
        </transition>
    </header>
    <div  class="icl-index-header-ul-box"> 
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <ul class="li-dropdown-menu icl-index-header-ul" v-show="!show">
          <li v-for="i in list" :key="i.id">
            <!-- <router-link :to="'/courses/' + i.id + '/detail'"> -->
            <router-link :to="'/courses/' + '87fcef82f3b246ff81ed1cb03a198533' + '/detail'">
              <div class="icl-flex">
              <div class="icl-flex-1">
                <img src="../../static/default-course-logo.png" alt="">
              </div>
              <div class="icl-flex-3">
                <div class="icl-course-text">
                  <div>{{i.name}}</div>
                  <div>{{i.difficulty}}</div>
                </div>
              </div>
            </div>
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      show: true,
      list: []
    }
  },
  created () {
    this.$api.get('/courses/do/list', null, r => {
      this.list = r.courses
      this.$nextTick(() => {
        this._initScroll()
      })
    })
  },
  methods: {
    transitionComplete: function (el) {
      // 传入 'el' 这个 DOM 元素作为参数。
    },
    _initScroll () {
			let indexHeaderWrappper = document.querySelector('.icl-index-header-ul-box')
			this.headerScroll = new BScroll(indexHeaderWrappper, {})
		}
  }
}
</script>

<style lang='less' >
  .icl-index-header-ul-box {
    width: 300px;
    height: 80vh;
    overflow: hidden;
    position: absolute;
    top: 43px;
    right: 0;
    .icl-index-header-ul {
      width: 100%;
      top: 0;
      margin-top: 0;
      padding-top: 1rem;
      padding-left: 0rem;
      li {
        margin-left: 1rem;
      }
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 0.4rem;
    min-height: 3.6rem;
  }
  .row-bg {
    padding: 1rem 0;
    background-color: #f9fafc;
  }
  .icl-flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icl-flex-1 {
    flex: 1;
  }
  .icl-flex-3 {
    flex: 3;
  }
  .pull-left {
    float: left;
    margin-left: 1rem;
  }
  .header {
    overflow: hidden;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
    .icl-index-header-ul {
      margin-top: 0.1rem;
      padding: 0.8rem;
      z-index: 10;
      overflow: hidden;
      margin-top: 0;
      li {
        margin-bottom: 0.5rem;
        margin-left: 1rem;
      }
    }
  }
  .li-dropdown-menu  {
    height: 86vh;
    overflow: auto;

    position: absolute;
    top: 3.3rem;
    right: 0px;

    z-index: 1;
    background-color: #fff;
    padding-bottom: 2rem;
  }
  .icl-flex-1 img {
    width: 10rem;
  }
  .icl-flex-3 .icl-course-text {
    >div:first-child {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 15rem;
    }
    padding-left: 10px;
  }
 
  .icl-index-header-modal {
		position: fixed;
		top: 3.5rem;
		left: 0;
		right: 0;
		bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
  }

 
</style>
