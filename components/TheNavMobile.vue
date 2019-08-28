<template>
  <nav class="px2 flex justify-center">
    <div>
      <button class="mt2 button">Menu</button>
      <svg
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
        />
      </svg>
    </div>
  </nav>
</template>

<style scoped>
.button {
  width: 50%;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding: 0.5rem;
  margin: 0;
  height: auto;
  border: none;
  vertical-align: middle;
  -webkit-appearance: none;
  color: var(--soft-black);
  background-color: transparent;
}
.button:hover {
  background-color: rgba(51, 34, 34, 0.4);
  color: var(--soft-white);
}

svg {
  display: inline;
  color: inherit;
  width: 8px;
}
</style>