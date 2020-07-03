<template>
  <div>
    <header
      class="spk-header"
      style="position: fixed;left: 0;top: 0;right: 0;z-index:8;"
    >
      <navigation>
        <template v-slot:left> </template>
        <template v-slot:center>
          <span>购物区</span>
        </template>
        <template v-slot:right> </template>
      </navigation>
    </header>
    <carousel-list
      style="padding-top:44px;"
      :carouselList="carouselList"
    ></carousel-list>
    <recommend :recommendList="recommendList"></recommend>
    <tabControl
      style="position:sticky;z-index:8;background-color:#ffffff;top:44px;"
      :title="tabControlTitle"
    ></tabControl>
    <plp :dataSource="plpDataSource"></plp>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
import navigation from "../Navigation/index.js"
import carouselList from './carouselList.vue';
import recommend from './recommend.vue';
import tabControl from '../TabControl/index.js';
import plp from './plp.vue';

export default {
  name: 'spk-home-component',
  components: {
    navigation,
    carouselList,
    recommend,
    tabControl,
    plp,
  },
  data () {
    return {
      carouselList: [],
      recommendList: [],
      fullscreen: true, // 全屏 loading flag
      tabControlTitle: ["流行", "新款", "精选"],
      plpDataSource: {
        "pop": { page: 0, list: [] },
        "news": { page: 0, list: [] },
        "sell": { page: 0, list: [] },
      }
    }
  },
  async mounted () {
    const loading = this.$loading({ fullscreen: true })
    const { data: { success, data: d } } = await this.$http(this.$mainApi, "/home/multidata")
    if (success === true) {
      loading.close()
      this.carouselList = d.banner.list
      this.recommendList = d.recommend.list
    }
    else {
      window.setTimeout(() => {
        loading.close()
        this.$warning("查询失败")
      }, 2000)
    }
  },
}
</script>

<style scoped lang="scss">
.spk-header {
  background-color: var(--color-theme);
  color: #ffffff;
}
</style>
