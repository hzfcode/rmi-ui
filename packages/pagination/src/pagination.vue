<template>
  <div class="bs-pager-box" v-if="pageCount > 1">
    <bs-button @click="onChangePage('left')" type="gray" size="small"
      >Before</bs-button
    >
    <ul @click="onPagerClick" class="bs-pager">
      <li
        :class="{ active: currentPage === 1, disabled }"
        v-if="pageCount > 0"
        class="number"
      >
        1
      </li>
      <li
        class="more btn-quickprev"
        :class="[quickprevIconClass, { disabled }]"
        v-if="showPrevMore"
        @mouseenter="onMouseenter('left')"
        @mouseleave="quickprevIconClass = 'bs-icon-more'"
      ></li>
      <li
        v-for="pager in pagers"
        :key="pager"
        :class="{ active: currentPage === pager, disabled }"
        class="number"
      >
        {{ pager }}
      </li>
      <li
        class="more btn-quicknext"
        :class="[quicknextIconClass, { disabled }]"
        v-if="showNextMore"
        @mouseenter="onMouseenter('right')"
        @mouseleave="quicknextIconClass = 'bs-icon-more'"
      ></li>
      <li
        :class="{ active: currentPage === pageCount, disabled }"
        class="number"
        v-if="pageCount > 1"
      >
        {{ pageCount }}
      </li>
    </ul>
    <bs-button @click="onChangePage('right')" type="gray" size="small"
      >After</bs-button
    >
    <span class="bs-pagecount">Total&nbsp;{{ pageCount }}&nbsp;pages</span>
  </div>
</template>

<script type="text/babel">
import BsButton from "../../button/src/button.vue";
export default {
  name: "BsPagination",

  props: {
    currentPage: Number,

    pagerCount: {
      type: Number,
      default: 9
    },

    disabled: Boolean,

    total: Number,

    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      current: null,
      showPrevMore: false,
      showNextMore: false,
      quicknextIconClass: "bs-icon-more",
      quickprevIconClass: "bs-icon-more",
      // pageCount: 1
    };
  },
  components: {
    BsButton
  },
  watch: {
    currentPage: "setPrevNext"
  },

  methods: {
    // getPageCount() {
    //   this.pageCount = Math.ceil(this.total / this.pageSize);
    // },
    setPrevNext() {
      const pagerCount = this.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;

      const currentPage = Number(this.currentPage);
      const pageCount = Number(this.pageCount);

      let showPrevMore = false;
      let showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
          if (
            this.quickprevIconClass !== "bs-icon-d-arrow-left-blue" ||
            !this.showNextMore
          ) {
            this.quickprevIconClass = "bs-icon-more";
          }
        }

        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
          if (
            this.quicknextIconClass !== "bs-icon-d-arrow-right-blue" ||
            !this.showNextMore
          ) {
            this.quicknextIconClass = "bs-icon-more";
          }
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
    },
    onPagerClick(event) {
      const target = event.target;
      if (target.tagName === "UL" || this.disabled) {
        return;
      }

      let newPage = Number(event.target.textContent);
      const pageCount = this.pageCount;
      const currentPage = this.currentPage;
      const pagerCountOffset = this.pagerCount - 2;

      if (target.className.indexOf("more") !== -1) {
        if (target.className.indexOf("quickprev") !== -1) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.indexOf("quicknext") !== -1) {
          newPage = currentPage + pagerCountOffset;
        }
      }

      /* istanbul ignore if */
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }

        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }

      if (newPage !== currentPage) {
        this.$emit("change", newPage);
      }
    },
    onChangePage(direction) {
      const pageCount = this.pageCount;
      const currentPage = this.currentPage;
      let newPage = 1;
      if (direction === "left") {
        newPage = currentPage - 1;
      } else {
        newPage = currentPage + 1;
      }
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }

      if (newPage !== currentPage) {
        this.$emit("change", newPage);
      }
    },
    onMouseenter(direction) {
      if (this.disabled) return;
      if (direction === "left") {
        this.quickprevIconClass = "bs-icon-d-arrow-left-blue";
      } else {
        this.quicknextIconClass = "bs-icon-d-arrow-right-blue";
      }
    }
  },

  computed: {
    pagers() {
      const pagerCount = this.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;

      const currentPage = Number(this.currentPage);
      const pageCount = Number(this.pageCount);

      let showPrevMore = false;
      let showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }

        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }

      const array = [];

      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }

      return array;
    },
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    this.setPrevNext();
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>