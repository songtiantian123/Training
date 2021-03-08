<template>
  <div>
    <div class="head">
      <div class="av">
        <span class="sched">排课</span>
        <span class="clas">架子鼓基础班2021(架子鼓课)</span>
      </div>
    </div>
    <!-- 图一 -->
    <el-col class="one">
      <el-card shadow="never">
        <el-form class="form1">
          <!-- 下列框(1) -->
          <el-form-item>
            <div class="kuang1">
              <span class="Star">*</span>
              <span>主讲老师</span>
              <span @click="add">添加助教</span>
            </div>
            <el-select placeholder="请选择">
              <el-option></el-option>
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <!-- 下列框(2) -->
          <el-form-item v-if="seen">
            <div class="kuang2">
              <span>助教老师</span>
            </div>
            <el-select placeholder="请选择">
              <el-option></el-option>
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <!-- 下列框(3) -->
          <el-form-item>
            <div class="kuang3">
              <span>教室</span>
            </div>
            <el-select placeholder="请选择">
              <el-option></el-option>
              <el-option></el-option>
            </el-select>
          </el-form-item>
          <!-- 下列框(4) -->
          <el-form-item>
            <div class="kuang4">
              <span class="Star">*</span>
              <span>单节扣除学员课时</span>
            </div>
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <!-- 图二 -->
    <div style="margin-top: 20px">
      <el-col class="two">
        <el-card shadow="never">
          <div style="float: left; margin-top: 20px">
            <span @click="noshow" style="padding-right: 20px">单次排课</span>
            <span @click="isshow" class="batch">批量排课</span>
          </div>
          <br /><br /><br />
          <div>
            <!-- 批量排课 -->
            <div v-if="show">
              <!-- 开课日期 -->
              <div class="block1">
                <div class="starts">开课日期</div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </div>

              <!-- 结束方式 -->
              <div class="mode">结束方式</div>
              <div class="end">
                <div class="danxuan">
                  <el-radio-group v-model="radio">
                    <span @click="cour">
                      <el-radio label="1" aria-checked="checked"
                        >按课节</el-radio
                      ></span
                    >
                    <span @click="courses" style="padding-left: 20px"
                      ><el-radio label="2">按日期</el-radio></span
                    >
                  </el-radio-group>
                </div>
              </div>

              <!-- 排课总数 -->
              <div class="number" v-if="paike2">
                <div style="float: left">排课总数</div>
                <div class="kuang5">
                  <el-input></el-input>
                </div>
              </div>
              <!-- 结课日期 -->
              <div class="number" v-if="paike">
                <div style="float: left">结课日期</div>
                <div class="kuang5">
                  <el-input placeholder="结课日期"></el-input>
                </div>
              </div>
              <!-- 星期选择 -->
              <div class="data">
                <div v-if="checkeds">
                  <span style="float: left"><i>*</i>星期选择</span><br />
                  <div style="float: left; margin-top: 10px; margin-left: 10px">
                    <el-checkbox >星期一</el-checkbox>
                    <el-checkbox >星期二</el-checkbox>
                    <el-checkbox >星期三</el-checkbox>
                    <el-checkbox >星期四</el-checkbox>
                    <el-checkbox >星期五</el-checkbox>
                    <el-checkbox >星期六</el-checkbox>
                    <el-checkbox >星期日</el-checkbox>
                  </div>
                  <!-- 时间 -->
                  <div>
                    <br />
                    <br />
                    <br />
                    <div class="data-1">
                      <span style="float: left">周六时间</span>
                      <br />
                      <br />
                      <div style="float: left">
                        <el-time-select
                          style="width: 120px"
                          placeholder="起始时间"
                          v-model="startTime"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                          }"
                        >
                        </el-time-select>
                        <el-time-select
                          style="width: 130px"
                          v-model="value"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                          }"
                          placeholder="时长(45分钟)"
                        >
                        </el-time-select>
                        <el-time-select
                          style="width: 120px"
                          placeholder="结束时间"
                          v-model="endTime"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime,
                          }"
                        >
                        </el-time-select>
                      </div>
                    </div>

                    <div class="data-2">
                      <div style="margin-top: -36px"><span>周日时间</span></div>
                      <br />
                      <div>
                        <el-time-select
                          style="width: 120px"
                          placeholder="起始时间"
                          v-model="startTime"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                          }"
                        >
                        </el-time-select>
                        <el-time-select
                          style="width: 130px"
                          v-model="value"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                          }"
                          placeholder="时长(45分钟)"
                        >
                        </el-time-select>
                        <el-time-select
                          style="width: 120px"
                          placeholder="结束时间"
                          v-model="endTime"
                          :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime,
                          }"
                        >
                        </el-time-select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 上课时间 -->
              <div id="time" v-if="shangke" class="block">
                <div class="bot">
                  <span class="demonstration"><i>*</i>上课时间</span>
                </div>

                <el-date-picker
                  v-model="value3"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="起始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-DD hh:mm"
                >
                </el-date-picker>
              </div>
            </div>
            <!-- 单次排课 -->
            <div v-else>
              <div class="block1">
                <div class="starts">开课日期</div>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </div>
              <br />
              <!-- 上课时间 -->
              <div id="time" class="block">
                <div class="bot">
                  <span class="demonstration"><i>*</i>上课时间</span>
                </div>
                <!---->
                <el-date-picker
                  v-model="value3"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="起始时间"
                  end-placeholder="结束时间"
                  value-format="yyyy-MM-DD hh:mm"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <div></div>
    </div>

    <!-- 图三 -->
    <el-col class="three">
      <el-card shadow="never">
        <div class="no">
          <b style="float: left">选择学员(0)</b>
          <span style="float: left; padding-left: 30px" @click="students = true"
            >添加学员</span
          >
        </div>
        <!-- 排课组件 -->
        <el-dialog
          style="margin-left: 200px; width: 1500px"
          :visible.sync="students"
        >
          <students
            style="height: 500px; width: 100%; background-color: #fcfcfc"
          ></students>
        </el-dialog>
        <!-- 添加学员列表 -->
        <div class="student">
          <ul>
            <li>米尔</li>
            <li>Jasses</li>
          </ul>
        </div>
        <div style="border-top: 1px solid #e9e9e9">
          <el-button type="primary" style="" class="primary">保存</el-button>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import students from "@/components/admin/Select_students.vue";
export default {
  data() {
    return {
      seen: false, // 定义 助教老师  不显示
      show: false, // 定义 单次/批量 不显示
      course: false, // 定义按日期是否显示
      // checked: false,
      checkes: false,
      coursa: false,
      paike: false,
      paike2: false,
      shangke: false,
      students: false,
      checkeds:false,
      data: [],
      startTime: "",
      endTime: "",
      num: 1,
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
      value: "",
      value1: "",
      value2: "",
      value3: "",
      radio: 1,
    };
  },
  components: {
    students,
  },
  methods: {
    // 显示
    isshow() {
      let that = this;
      // that.seen = true; // 控制那个助教讲师的(切换点击批量按钮时，并且助教老师显示)
      that.show = true; // 控制内容的 (点击批量按钮，里面的内容显示)
    },
    // 不显示
    noshow() {
      let that = this;
      // that.seen = false; // 控制那个助教讲师的 (切换点击单次按钮时，并且助教老师不显示)
      that.show = false; // 控制内容的 (点击单次按钮，内容不显示)
    },
    // 按日期
    courses() {
      let that = this;
      if (that.radio == 1) {
        that.checkeds = true;
        that.paike = true;
        that.paike2 = false;
        that.shangke = false;
      }
    },
    // 按课节
    cour() {
      let that = this;
      if (that.radio == 2) {
        that.checkeds = false;
        that.paike = false;
        that.paike2 = true;
        that.shangke = true;
      }
    },
    // 添加学员(弹框)
    students() {
      let that = this;
      that.students = true;
    },
    // 接口
    loaddata() {
      let url = "api/coursetables/add";
      let that = this;
      that.$http.post(
        url,
        (success) => {
          console.log("成功");
          console.log(success);
        },
        (failure) => {
          console.log("失败");
          console.log(failure);
        }
      );
    },
    add(){
      let that = this
      that.seen = !that.seen
    }
  },
  created() {
    this.loaddata();
  },
};
</script>

<style lang="less" scoped>
@import "../../less/button";
@import "../../less/span";
ul li:nth-of-type(1) {
  background-position: 0px -622px;
}
ul li:nth-of-type(2) {
  background-position: 0px -622px;
}
.el-form-item {
  width: 150px;
  float: left;
  padding: 0px 17px 0px 0px;
}
li:nth-of-type(1) {
  margin-left: -600px;
}
.Star {
  color: red;
}
.bot {
  margin-bottom: 6px;
}
.kuang1 {
  display: inline-block;
}
.kuang1 span:nth-of-type(3) {
  padding-left: 20px;
  cursor: pointer;
}
.kuang1 span:nth-of-type(3):active {
  color: #3e9fff;
}
.kuang2 span {
  margin-left: -80px;
}
.kuang3 span {
  margin-left: -120px;
}
.kuang4 {
  margin-left: -25px;
}
/* 图二 */
.two {
  margin-bottom: 20px;
  margin-top: 20px;
}
.el-card .paike span:nth-of-type(1) {
  font-size: 19px;
  float: left;
}
.el-card .paike span:nth-of-type(2) {
  float: left;
  padding-left: 20px;
  font-size: 19px;
}
.paike span:active {
  color: #3e9fff;
  text-decoration: underline;
}
/* 开课日期 */
.block {
  // float: left;
  margin-top: 15px;
  // margin-left: -120px;
  width: 210px;
  height: 100%;
  margin-bottom: 20px;
}
.starts {
  margin-left: -156px;
  margin-bottom: 5px;
}
.mode {
  margin-top: -60px;
  margin-bottom: 5px;
  margin-left: -100px;
  line-height: 30px;
}
li {
  width: 90px;
  // float: left;
  list-style: none;
  padding: 20px 15px 5px 15px;
  line-height: 15px;
  display: inline-block;
}
// 添加学员
.no span {
  font-size: 15px;
  background-position: -141px -793px;
}
.no span:active {
  color: #3e9fff;
  display: inline-block;
}
.no span:hover {
  cursor: pointer;
}
i {
  color: red;
}
.demonstration {
  margin-left: -150px;
}
#time {
  margin-left: 5px;
}
.block1 {
  display: inline-block;
  margin-left: -620px;
}
.block2 {
  // display: inline-block;
  margin-left: -310px;
  margin-top: 20px;
}
.demonstration1 {
  margin-left: -290px;
}
.kuang5 {
  width: 200px;
  // display: inline-block;
  // margin-top: -10px;
  // margin-left: 400px;
}
.four {
  width: 400px;
  height: 300px;
  background: #fff;
  margin: 20px;
}
.number {
  margin-left: 550px;
  margin-top: -48px;
}
.sched {
  position: absolute;
  top: 7px;
  left: 9px;
  font-size: 21px;
}
.clas {
  position: absolute;
  top: 7px;
  left: 250px;
  font-size: 21px;
}
.head {
  width: 100%;
  height: 45px;
  background: #f5f6fa;
  position: absolute;
  top: 0px;
  right: 0px;
}
.batch:active {
  color: #3fb8ff;
  text-decoration: underline;
}
.data {
  padding-top: 20px;
}
.data-2 {
  margin-top: -20px;
  margin-left: 60px;
}
.primary {
  float: right;
  width: 150px;
  height: 40px;
  margin-bottom: 12px;
  margin-top: 10px;
  font-size: 17px;
}
</style>