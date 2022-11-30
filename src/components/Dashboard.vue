<template>
    <v-container fluid>
      <v-card
        height="200px"
        tile
        flat
        class="d-flex align-center justify-center"
        dark>
      </v-card>
      <v-card tile class="mx-16 mt-n10 card1" color="white">
        <v-row>
          <v-col cols="12" sm="8" class="pr-0">
            <v-card height="250px" tile flat color="#D3D3D3">
              <v-row>
                <v-col cols="12" sm="4" class="pl-8 pt-5">
                  <v-btn color="lightgray" dark small tile>
                    NEW
                  </v-btn>
                  <h6 class="white--text mt-8">MOUNTAIN BIKE</h6>
                  <h3 class="white--text mt-5">Trek Speed Concept</h3>
                  <v-btn
                    rounded
                    color="#4C9CDB"
                    dark
                    class="px-8 mt-8"
                  >
                    More Info
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-img
                    src="bike.png"
                    max-height="400"
                    max-width="400"
                    contain
                    class="mt-n6"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" class="pl-0">
            <v-card height="250px" tile flat color="#5A5A5A">
              <v-row>
                <v-col cols="12" sm="6" class="pl-8 pt-5">
                  <v-btn color="black" dark small tile>
                    new
                  </v-btn>
                  <h6 class="white--text mt-8">DISCOUNTS UP TO 50% OFF!</h6>
                  <h3 class="white--text mt-5">Sale Collection</h3>
                  <v-btn
                    rounded
                    color="#8375E7"
                    dark
                    class="px-8 mt-8">
                    More Info
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-img src="astronaut_boombox.png" class="logo_img"></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3" class="mt-n6 pr-0">
            <v-toolbar flat outlined>
              <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-divider vertical></v-divider>
              <v-btn icon class="ml-1">
                <v-icon color="#3853D8"> mdi-sync </v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n6 px-0">
            <v-toolbar flat outlined>
              <v-toolbar-title>
                SPORT BY: <span>Price $-$$</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-4">
                <v-icon color="black">mdi-menu-down</v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n6 px-0">
            <v-toolbar flat outlined class="">
              <v-toolbar-title>SHOW: <span>12</span></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-4">
                <v-icon color="black">mdi-menu-down</v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n6 pl-0">
            <v-toolbar flat outlined>
              <v-btn icon class="mr-1">
                <v-icon color="#3853D8">mdi-apps</v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
              <v-btn icon class="mx-1">
                <v-icon color="grey">mdi-format-list-bulleted</v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
            </v-toolbar>
          </v-col>
          <v-col cols="3" class="py-0 pr-0 mt-n3">
            <v-card flat outlined tile>
              <v-toolbar flat>
                <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                <strong>CATEGORIES</strong>
                <v-spacer></v-spacer>
                <v-icon color="grey" small>mdi-close</v-icon>
              </v-toolbar>
              <v-list dense class="mt-n5">
                <v-list-item v-for="category in categories" :key="category.title">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="category.title"
                      class="ml-8"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-subtitle
                      v-text="category.count"
                    ></v-list-item-subtitle>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card flat outlined tile>
              <v-toolbar flat>
                <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
                <strong>PRICE</strong>
                <v-spacer></v-spacer>
                <v-icon color="grey" small>mdi-close</v-icon>
              </v-toolbar>
              <v-toolbar flat>
                <v-text-field
                  placeholder="$50"
                  filled
                  rounded
                  dense
                  class="mx-2"
                ></v-text-field>
                <v-text-field
                  placeholder="$1900"
                  filled
                  rounded
                  dense
                  class="mx-2"
                ></v-text-field>
              </v-toolbar>
              <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
            </v-card>
            <v-card flat outlined tile>
              <v-toolbar flat>
                <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                <strong>BRAND</strong>
                <v-spacer></v-spacer>
                <v-icon color="grey" small>mdi-close</v-icon>
              </v-toolbar>
              <v-list dense class="mt-n5">
                <v-list-item v-for="brand in brands" :key="brand.title">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="brand.title"
                      class="ml-6"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-checkbox
                      color="primary"
                      v-model="brand.state"
                    ></v-checkbox>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card flat outlined>
              <v-toolbar flat>
                <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                <strong>SIZE</strong>
                <v-spacer></v-spacer>
                <v-icon color="grey" small>mdi-close</v-icon>
              </v-toolbar>
              <v-chip-group
                column
                multiple
                active-class="blue white--text"
                class="ml-2"
              >
                <v-chip
                  v-for="size in sizes"
                  :key="size"
                  :value="size"
                  class="size">
                  {{ size }}
                </v-chip>
              </v-chip-group>
            </v-card>
          </v-col>
          <v-col cols="9" class="mt-n3">
            <v-row>
              <v-col
                cols="12"
                sm="4"
                v-for="(product, i) in products"
                :key="i"
                :class="product.class"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card height="300" align="center" flat outlined tile>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="black" small dark>{{ product.discount }}</v-btn>
                    </v-card-actions>
                    <v-img
                      :src="product.public_id"
                      width="200"
                      height="200"
                      contain
                    ></v-img>
                    <v-card-text class="mt-n4">
                      <strong :class="hover ? 'red--text' : 'black--text'">{{
                        product.name
                      }}</strong>
                    </v-card-text>
                    <v-card-text class="mt-n6">
                      <strong :class="hover ? 'red--text' : 'black--text'">{{
                        product.price
                      }}</strong>
                    </v-card-text>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="
                          d-flex
                          transition-fast-in-fast-out
                          blue
                          v-card--reveal
                          display-3
                          white--text
                        "
                        style="height: 100%"
                      >
                        <v-btn rounded color="white" @click="addProductToCart(product)">
                          <v-icon>mdi-cart-outlined</v-icon>
                          Add to Cart
                        </v-btn>
                        <v-btn fab small color="white" class="ml-2">
                          <v-icon color="black">mdi-heart-outline</v-icon>
                        </v-btn>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n3 pr-0 pb-0">
            <v-toolbar flat outlined> </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
            <v-toolbar flat outlined>
              <v-btn icon class="mr-1">
                <v-icon color="grey">mdi-chevron-up</v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n3 px-0 pb-0">
            <v-toolbar flat outlined class="text-center">
              <v-pagination v-model="page" :length="4"></v-pagination>
            </v-toolbar>
          </v-col>
          <v-col cols="12" sm="3" class="mt-n3 pl-0 pb-0">
            <v-toolbar flat outlined>
              <v-btn icon class="mr-1">
                <v-icon color="grey">mdi-chevron-down</v-icon>
              </v-btn>
              <v-divider vertical></v-divider>
            </v-toolbar>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        color="#EFF0F2"
        height="250px"
        tile
        flat
        dark
        class="d-flex align-center justify-center mt-n10 card2"
      >
        <v-row>
          <v-col cols="12" sm="12">
            <h4 class="text-center black--text mt-10">
              SUBSCRIBE TO OUR NEWSLETTER
            </h4>
          </v-col>
          <v-col cols="12" sm="12">
            <h6 class="text-center grey--text">
            Enter your email below to keep up to date on the latest and greatest deals from Vue Vendor<br />
              Subscribers will receive periodic updates on sales and discounts, as well as coupons and loyalty rewards.
            </h6>
          </v-col>
          <v-col cols="12" sm="12">
            <v-card flat color="transparent" class="d-flex justify-center">
              <v-text-field
                placeholder="Enter Your Email"
                rounded
                class="shrink"
                background-color="grey"
                filled
                append-icon="mdi-email-outline"
                dense
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      page: 1,
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        }
      ],
      categories: [
        { title: "Lifestyle", count: "1" },
      ],
      brands: [
        { title: "Lifestyle", state: true }
      ],
      sizes: [
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13",
        "13.5"
      ]
    }),
    computed: {
        products() {
            return this.$store.getters.availableProducts
        }
    },
    methods: {
        addProductToCart (product) {
            this.$store.dispatch('addProductToCart', product)
        }
    },
    mounted () {
        this.$store.dispatch('fetchProducts')
    }
  };
  </script>
  
  <style>
  .container {
    padding: 0px !important;
  }
  .v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 10px !important;
    height: 40px !important;
    width: 40px !important;
    text-align: center;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
  }
  .card1 {
    z-index: 10;
  }
  .card2 {
    z-index: 1;
  }
  .logo_img {
    margin: 20px 0px;
    max-height: 180px;
    width: 180px;
    border-radius: 10px;
  }
  </style>