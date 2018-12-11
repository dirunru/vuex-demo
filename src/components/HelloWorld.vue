<template>
  <div class="hello">
    <el-form style="display:flex" :inline="true">
      <el-input
        :placeholder="holder"
        class="input-with-select select_ipt"
        v-model="searcheData.serachName"
      >
        <el-select
          class="select"
          v-model="searcheData.serachSearName"
          style="text-align:center"
          slot="prepend"
          placeholder="请输入"
          @change="selectTypeEvent($event)"
        >
          <el-option label="课堂名称" value="1"></el-option>
          <el-option label="课程名称" value="2"></el-option>
          <el-option label="机构名称" value="3"></el-option>
          <el-option label="课堂ID" value="4"></el-option>
          <el-option label="主讲昵称" value="5"></el-option>
          <el-option label="主讲手机号" value="6"></el-option>
          <el-option label="报名手机号" value="7"></el-option>
        </el-select>
      </el-input>

      <el-date-picker
        class="abc"
        v-model="time"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>

      <el-select v-model="name" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <div class="col-sm-2" style="min-width:200px">
        <el-button type="danger">筛选</el-button>
        <el-button type="primary">重置</el-button>
      </div>
    </el-form>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="老师" name="first" :lazy="true" v-loading="loadingTea">
        <div class="content1">
          <h1>老师</h1>
        </div>
      </el-tab-pane>
      <el-tab-pane label="助教" name="second" :lazy="true" v-loading="loadingZj">
        <div class="content2">
          <h1>助教</h1>
        </div>
      </el-tab-pane>
      <el-tab-pane label="学生" name="third" :lazy="true" v-loading="loadingStu">
        <div class="content3">
          <h1>学生</h1>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理</el-breadcrumb-item>
      <el-breadcrumb-item>列表</el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="list">
      <ul class="itemList">
        <li
          v-for="(item,index) in tabs"
          :key="index"
          :class="{active:index == num}"
          @click="tab(index)"
        >{{item}}</li>
      </ul>
      <div class="tabCon">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import HelloWorld from "./js/HelloWorld";
export default HelloWorld;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='' scoped>
@import url(./css/HelloWorld.css);
</style>
