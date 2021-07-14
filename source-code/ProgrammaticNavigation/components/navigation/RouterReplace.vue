<template>
  <div class="r">
    <h2>RouterReplace</h2>
    <p>跟 router.push 很像，唯一的不同就是，他不會向 history 添加新紀錄</p>
    <p>而是和他的名字一樣 -> 替換掉當前的 history</p>
    <p>PS: 會當作他沒進過，剛剛的網頁</p>
    <p>還想不到要用在甚麼時候</p>
    <p>語法:</p>
    <p>this.$router.replace({ name: "routerreplace" });</p>
    <p>this.$router.replace(location, onComplete?, onAbort?)</p>
  </div>
</template>
