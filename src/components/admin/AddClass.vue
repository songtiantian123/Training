<template>
  <el-card class="box-card">
    <div id="css" class="clearfix">
      <el-button class="btn-cuo" style="float: right" type="text">×</el-button>
    </div>
    <div class="text item">
      <el-form
        ref="form"
        label-width="80px"
        :data="addList"
        class="demo-form-inline"
      >
        <el-form-item label="所选课程">
          <el-select v-model="addList.courseid" placeholder="请选择">
            <el-option
              v-for="(item, index) in couresList"
              :key="index.id"
              :label="item.name"
              :value="item.id"
              >{{ item.name }}</el-option
            >
          </el-select>
        </el-form-item>
        <el-form-item label="班级名称">
          <el-input v-model="addList.name"></el-input>
        </el-form-item>
        <el-form-item label="计划课时">
          <el-input v-model="addList.coursecounts"></el-input
          ><span class="keshi">课时</span>
        </el-form-item>
        <div class="block" label="开班日期" style="padding-bottom: 15px">
          <el-date-picker
            v-model="addList.startdate"
            type="date"
            placeholder="开班日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
        <br />
        <div class="block" label="结班日期">
          <el-date-picker
            v-model="addList.enddate"
            align="right"
            type="date"
            placeholder="结班日期"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
        <el-form-item>
          <!-- <div class="b"><hr class="a" /></div> -->
          <el-button class="primary" @click="addclass" type="primary"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tablist: [],
      keshi: 0,
      class: false,
      index: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      addList: {
        id: 0,
        courseid: "",
        coursename: "",
        name: "",
        startdate: "",
        enddate: "",
        schcourses: "",
      },
      couresList: [],
    };
  },
  methods: {
    // 封装要添加的数据
    restModel() {
      this.addList = {
        courseid: "",
        coursename: "",
        name: "",
        startdate: "",
        enddate: "",
        schcourses: "",
      };
    },
    // 添加
    addclass() {
      let that = this;
      let data = JSON.stringify(that.addList);
      this.$http.post(
        "api/classes/add",
        data,
        (success) => {
          console.log(success);
          that.restModel();
          that.$emit("addChild");
          this.$message({
            showClose: true,
            message: "恭喜你，这是一条添加成功的消息",
            type: "success",
          });
        },
        (fail) => {
          console.log(fail);
        }
      );
    },
  },
  created() {
    // 获取课程列表
    this.$http.get(
      "api/courses/list",
      null,
      (success) => {
        this.couresList = success.data.list;
        console.log(this.couresList);
      },
      (fail) => {
        console.log(fail);
      }
    );
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  /* width: 800px; */
  height: 513px;
}
.btn-cuo {
  font-size: 50px;
  margin-top: -15px;
}
.clearfix {
  width: 1000px;
  margin-left: -20px;
  margin-top: -20px;
  line-height: 60px;
}
.el-form {
  margin-top: 20px;
}
.el-input {
  width: 450px;
  height: 20px;
  float: left;
}
.el-col {
  width: 208px;
}
.primary {
  width: 180px;
  height: 48px;
  font-size: 19px;
  position: absolute;
  right: 30px;
}
.el-select {
  float: left;
  width: 25px;
}
.keshi {
  float: right;
}
</style>