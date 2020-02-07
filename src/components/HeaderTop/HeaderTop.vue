<template>
   <!--首页头部-->
        <header class="header">
            <slot name="left"></slot>
          <span class="header_search">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <span class="header_login">
            <span class="header_login_text">登录|注册</span>
          </span>
          <slot name="right"></slot>
        </header>
</template>
<script>
export default {
    props:{
        title: String
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>