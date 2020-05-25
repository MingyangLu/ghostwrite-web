<template>
  <div class="home">
    <div class="header">
      <div class="left">
        <div class="logo">Logo</div>
        <div class="yaxis"></div>
        <div class="brief">Only Experience<br>&certified writers</div>
      </div>
      <div class="right">
        <div class="telphone">+13128985323</div>
        <div class="telphone">+13596465641</div>
        <div class="live_chat">Live chat</div>
      </div>
    </div>
    <div class="navigator">
      <el-menu class="menu" mode="horizontal" text-color="#041f64" active-text-color="#0c7ef7">
        <el-menu-item index="1">OUR PROCESS</el-menu-item>
        <el-menu-item index="2">PRICES</el-menu-item>
        <el-menu-item index="3">DISCOUNT</el-menu-item>
        <el-menu-item index="4">ORDER NOW</el-menu-item>
        <el-menu-item index="5">ABOUT US</el-menu-item>
        <el-menu-item index="6">GUARANTEES</el-menu-item>
        <el-menu-item index="7">CONTACT US</el-menu-item>
      </el-menu>
      <div class="button">
        <el-button class="order_button" type="warning" round>Order now</el-button>
        <el-button class="login_button" round>Log In</el-button>
      </div>
      
    </div>
    <div class="index_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      userid: "zhangyao123",
      username: "zhangyao",
      password: "123456"
    };
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post("/main/index", {
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
}
</script>

<style lang='less' scoped>
.home{
  width: 100%;
  height: 2000px;
  .header{
    width: 100%;
    height: 6%;
    background-color: #c6edfc;
    font-size: 50px;
    .left{
      width: 30%;
      height: 100%;
      float: left;
      display: flex;
      .logo{
        width: 25%;
        height: 100%;
        margin: 4% 0% 0% 5%;
      }
      .yaxis{
        width: 0.5%;
        height: 60%;
        background-color: gray;
        margin: 4.5% 0% 0% 0%;
      }
      .brief{
        font-size: 2rem;
        margin: 3% 0% 0% 5%;
        color:#b6c3ce;
      }
    }
    .right{
      width: 40%;
      height: 100%;
      float: right;
      display: flex;
      .telphone{
        font-size: 1.8rem;
        margin: 5% 0% 0% 5%;
        color:#041f64;
      }
      .live_chat{
        font-size: 1.8rem;
        margin: 5% 0% 0% 10%;
        color:#1b92ee;
      }
    }
  }
  .navigator{
    width: 100%;
    height: 7%;
    background-color: white;
    font-size: 50px;
    .menu{
      width: 72%;
      height: 100%;
      float: left;
      margin: 0% 3% 0% 0%;
      .el-menu-item{
        margin: 2.5% 0% 0% 2%;
        font-size: 1.4rem;
        font-weight: 800;
      }
      
    }
    .button{
      width: 20%;
      height: 100%;
      margin: 2.3% 3% 0% 0%;
      float: right;
      .order_button{
        float: left;
        height: 30%;
        width: 45%;
      }
      .login_button{
        float: left;
        height: 30%;
        width: 45%;
        margin: 0% 0% 0% 10%;
      }
    }
    
  }
  .index_container{
    width: 100%;
    height: 80%;
  }
}

</style>