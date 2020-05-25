<template>
  <div class="index">
    <!-- <div class="box_1">Introduction1</div>
    <div class="box_2">Introduction2</div> -->
    <div class="box_3">
      <div class="price_caculate">
        <div class="title">Price Caculate</div>
        <div
          class="introduction"
        >EssaysProfessors.com is one of the best custom essay writing services in the industry. This is the best place to buy college research papers, term papers and essays online at affordable prices from unemployed professors.</div>
        <div class="form">
          <el-form ref="price_caculate_form">
            <div class="left_form">
              <el-form-item label="Type of your assignment">
                <el-select>
                  <el-option label="Easy"></el-option>
                  <el-option label="Term paper"></el-option>
                  <el-option label="Reasearch paper"></el-option>
                  <el-option label="Grant proposal"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Urgency">
                <el-select>
                  <el-option label="11 days"></el-option>
                  <el-option label="10 days"></el-option>
                  <el-option label="9 days"></el-option>
                  <el-option label="8 days"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Spacing">
                <el-select>
                  <el-option label="Single spaced"></el-option>
                  <el-option label="Double spaced"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="right_form">
              <el-form-item label="Currency">
                <el-radio-group>
      <el-radio-button label="USD"></el-radio-button>
      <el-radio-button label="EUR"></el-radio-button>
      <el-radio-button label="GBP"></el-radio-button>
      <el-radio-button label="AUD"></el-radio-button>
    </el-radio-group>
              </el-form-item>
              <el-form-item label="Writer level">
                <el-select>
                  <el-option label="High School"></el-option>
                  <el-option label="College"></el-option>
                  <el-option label="Universitys"></el-option>
                  <el-option label="Master's"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Spacing">
                <el-select>
                  <el-option label="Single spaced"></el-option>
                  <el-option label="Double spaced"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
        </div>

        <el-button type="warning" round class="button">Order now</el-button>
      </div>
      <div class="picture">Picture</div>
    </div>
    <div class="box_4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "000",
      username: "zhangyao",
      password: "000000"
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("/login/validate", {
        userid: this.userid,
        username: this.username,
        password: this.password
      });
      console.log(res.data);
    }
  },
  mounted() {
    this.login();
  }
};
</script>

<style lang='less' scoped>
.index {
  .box_1 {
    font-size: 50px;
    height: 600px;
    background-color: brown;
  }
  .box_2 {
    font-size: 50px;
    height: 300px;
    background-color: #00295c;
  }
  .box_3 {
    font-size: 50px;
    height: 1200px;
    .price_caculate {
      background-color: white;
      width: 50%;
      height: 80%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.04);
      margin: 4% 0% 0% 5%;
      float: left;
      position: relative;
      .title {
        background-color: #ebf7fa;
        font: 900 30px/100px CircularStd;
        color: #002e5e;
        text-align: left;
        display: inline-block;
        position: relative;
        width: 80%;
        padding: 0% 10% 0% 3%;
        margin: 3% 0% 0% 0%;
      }
      .introduction {
        width: 60%;
        font: 300 0.5em Roboto;
        color: #323538;
        text-align: left;
        margin: 3% 0% 0% 3%;
      }
      .form {
        .left_form {
          width: 40%;
          margin: 5% 0% 0% 3%;
          float: left;
          font: 300 14px CircularStd;
          color: #a3a6a9;
          text-align: left;
          display: block;
          .el-form-item {
            width: 100%;
            margin: 10%;
            .el-select{
                width: 90%;
            }
          }
        }
        .right_form {
          width: 40%;
          margin: 5% 0% 0% 5%;
          float: left;
          font: 300 14px CircularStd;
          color: #a3a6a9;
          text-align: left;
          display: block;
          .el-form-item {
            width: 100%;
            margin: 10%;
            .el-select{
                width: 90%;
            }
            .el-radio-group{
                // .el-radio-button{
                //     width: 25%;
                //     .el-radio-button__inner{
                //         width: 100%;
                //     }
                // }
                width: 100%;
            }
          }
        }
      }
      .button {
        width: 20%;
        float: right;
        margin: 5% 5% 0% 0%;
        bottom: 5%;
      }
    }
    .picture {
      background-color: wheat;
      width: 25%;
      height: 90%;
      float: left;
      margin: 2% 0% 0% 5%;
    }
  }
  .box_4 {
    font-size: 50px;
    height: 300px;
    background-color: #d4f4fc;
  }
}
</style>