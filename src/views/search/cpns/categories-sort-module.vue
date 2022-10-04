<template>
  <section class="sort-module">
    <section class="item">
      <ul>
        <template v-for="(item,index) in categoriesData" :key="item.id">
          <li>
            <div>
              <img
                  :src=" item.pictureUrl "
                  alt="">
            </div>
            <div class="text">{{ item.title }}</div>
          </li>
        </template>
      </ul>
    </section>
  </section>
</template>

<script setup>
defineProps({
  categoriesData: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.sort-module {
  padding: 4px 8px;
  overflow-x: auto;
  margin: 4px 0;
  text-align: center;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 32px;
  }

  .item {
    ul {
      display: flex;

      li {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;

        div {
          margin-top: 6px;
        }

        .text {
          font-size: 12px;
          margin-top: 8px;
        }
      }
    }
  }

}
</style>