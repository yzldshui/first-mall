<template>
  <div>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-arrow-short" viewBox="0 0 25 32">
            <title>arrow-short</title>
            <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
        </symbol>
        <symbol id="icon-status-ok" viewBox="0 0 32 32">
          <title>status-ok</title>
          <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
          <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
        </symbol>
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
          <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
          <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
      </defs>
    </svg>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short" v-bind:class="{'sort-up':sortFlag}"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="openPriceFilter">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setCurrPrice('all')"> All</a></dd>
              <dd v-for="(price,index) in priceFilter" v-bind:key="price.startPrice" @click="setCurrPrice(index)">
                <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList" v-bind:key="item.productId">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/img/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 滚动加载 -->
              <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <img src="/static/loading/loading-spinning-bubbles.svg" v-show="loading">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overlayFlag" @click="closePriceFilter"></div>
    <modal v-bind:mdShow="mdShow" v-on:closeModal="closeModalWindow">
      <p slot="message">
        You have not login, please login first.
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" @click="closeModalWindow">Close</a> 
      </div>
    </modal>
    <modal v-bind:mdShow="mdShowCart" v-on:closeModal="closeModalWindow">
      <p slot="message">
        <svg class="icon icon-status-ok"><use xlink:href="#icon-status-ok"></use></svg>
        <span>Add Cart Success</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" @click="mdShowCart=false">Continue</a>
        <router-link to="/cart" class="btn btn--m">To Cart</router-link>
      </div>
    </modal>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "@/components/Header";
import NavFooter from "@/components/Footer";
import NavBread from "@/components/Bread";
import Modal from "@/components/Modal";
import axios from "axios";
export default {
  data() {
    return {
      goodsList: [],
      priceFilter: [
        {
          startPrice: "0.00",
          endPrice: "200.00"
        },
        {
          startPrice: "200.00",
          endPrice: "500.00"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "5000.00"
        }
      ],
      priceChecked: "all",
      filterBy: false,
      overlayFlag: false,
      sortFlag: true,
      page: 1,
      pageSize: 8,
      busy: true,
      loading: false,
      mdShow: false,
      mdShowCart: false
    };
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    Modal
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList(flag) {
      let startPrice = 0;
      let endPrice = 0;
      if (this.priceChecked != "all") {
        startPrice = this.priceFilter[this.priceChecked].startPrice;
        endPrice = this.priceFilter[this.priceChecked].endPrice;
      }
      let params = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        startPrice: startPrice,
        endPrice: endPrice
      };
      this.loading = true;
      axios
        .get("/goods", {
          params: params
        })
        .then(resp => {
          let res = resp.data;
          this.loading = false;
          console.log(`load goods success ${this.loading}`);
          if (res.status == "0") {
            if (flag) {
              this.goodsList = this.goodsList.concat(res.result.list);
              if (res.result.count < this.pageSize) {
                this.busy = true;
              } else {
                this.busy = false;
              }
            } else {
              this.goodsList = res.result.list;
              this.busy = false;
            }
          } else {
            this.goodsList = [];
          }
        });
    },
    openPriceFilter() {
      this.filterBy = true;
      this.overlayFlag = true;
    },
    closePriceFilter() {
      this.filterBy = false;
      this.overlayFlag = false;
    },
    setCurrPrice(index) {
      this.page = 1;
      this.priceChecked = index;
      this.closePriceFilter();
      this.getGoodsList();
    },
    sortGoods() {
      this.sortFlag = !this.sortFlag;
      this.page = 1;
      this.getGoodsList();
    },
    loadMore() {
      this.busy = true;
      console.log("load more page:" + (this.page + 1));

      setTimeout(() => {
        this.page++;
        this.getGoodsList(true);
      }, 500);
    },
    addCart(productId) {
      let params = {
        productId: productId
      };
      axios.post("/goods/addCart", { params: params }).then(resp => {
        let res = resp.data;
        if (res.status == "0") {
          console.log("add cart true");
          this.mdShowCart = true;
        } else {
          console.log("add cart fail");
          this.mdShow = true;
        }
      });
    },
    closeModalWindow() {
      console.log("close modal");
      this.mdShow = false;
      this.mdShowCart = false;
    }
  }
};
</script>

<style>
.sort-up {
  transform: rotate(180deg);
  transition: all 0.3s ease-out;
}
.btn--m:hover {
  background-color: rgb(255, 164, 164);
}
</style>
