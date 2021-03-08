<template>
  <div>
    <div class="nav">
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
    </div>
    <el-container>
      <el-container>
        <div style="float: left">今日课表</div>
        <el-main>
          <div class="main"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
   data() {
      return {
        // 日期
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>

<style lang="less" scoped>
@import "../../less/button";
.button {
  margin-left: -900px;
}
.main {
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  margin-left: -19px;
}
.block {
  height: 37px;
  position: absolute;
  top: 128px;
  left: 262px;
}
</style>